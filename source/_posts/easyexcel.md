---
title: EasyExcel
date: 2023-02-05 13:27:25
tags: 
- 假期学习
categories: 学习
---

​		前一段时间在写一个灌溉系统的项目，项目要求有数据导入导出，这一块正好分配给我去完成了，所以我上网学了一下EasyExcel的使用。

<!--More-->

[EasyExcel官方网站]: https://easyexcel.opensource.alibaba.com/

## pom导入：

```java
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>easyexcel</artifactId>
    <version>最新版本</version>
</dependency>
```

## 实体类：

@ColumnWidth：定义列宽

@ExcelProperty：value：用于匹配excel中的头，必须全匹配,如果有多行头，会匹配最后一行头

@ExcelIgnore：加了该注解的字段会被忽略

@DateTimeFormat：日期转换

@NumberFormat：数字转换

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@ColumnWidth(20)
public class Field {
    @ExcelProperty({"地块编号"})
    private String fieldId;
    @ExcelProperty({"冠层温度"})
    private BigDecimal canopyTemp;
    @ExcelProperty({"土壤含水量"})
    private BigDecimal soilMoisture;
    @ExcelProperty({"灌溉决策结果"})
    private Integer result;
    @ExcelProperty({"灌溉情况"})
    private String irrigationInfo;
    @ExcelProperty({"其他情况"})
    private String other;
}
```

## 导入：

#### 监听器：

如果想在抛出异常时跳过异常的地方继续读接下来的数据，可以查看官方文档，在监听器中配置一个异常的方法。因为我写的时候想的是导入数据错误的话让他导入失败，所以没有进行配置这一项。

```java
@Slf4j
public class ExcelDataListener implements ReadListener<Field> {
    /**
     * 每隔5条存储数据库，实际使用中可以100条，然后清理list ，方便内存回收
     */
    private static final int BATCH_COUNT = 100;
    /**
     * 缓存的数据
     */
    private List<Field> cachedDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
    /**
     * 假设这个是一个DAO，当然有业务逻辑这个也可以是一个service。当然如果不用存储这个对象没用。
     */
    private FieldService fieldService;

    public ExcelDataListener() {
        // 这里是demo，所以随便new一个。实际使用如果到了spring,请使用下面的有参构造函数
        fieldService = new FieldServiceImpl();
    }

    /**
     * 如果使用了spring,请使用这个构造方法。每次创建Listener的时候需要把spring管理的类传进来
     *
     */
    public ExcelDataListener(FieldService fieldService) {
        this.fieldService = fieldService;
    }

    /**
     * 这个每一条数据解析都会来调用
     *
     */
    @Override
    public void invoke(Field data, AnalysisContext context) {
        log.info("解析到一条数据:{}", JSON.toJSONString(data));
        cachedDataList.add(data);
        // 达到BATCH_COUNT了，需要去存储一次数据库，防止数据几万条数据在内存，容易OOM
        if (cachedDataList.size() >= BATCH_COUNT) {
            saveData();
            // 存储完成清理 list
            cachedDataList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
        }
    }

    /**
     * 所有数据解析完成了 都会来调用
     *
     */
    @Override
    public void doAfterAllAnalysed(AnalysisContext context) {
        // 这里也要保存数据，确保最后遗留的数据也存储到数据库
        saveData();
        log.info("所有数据解析完成！");
    }

    /**
     * 加上存储数据库
     */
    private void saveData() {
        log.info("{}条数据，开始存储数据库！", cachedDataList.size());
        fieldService.saveData(cachedDataList);
        log.info("存储数据库成功！");
    }
}
```

#### service：

importData：调用接口传入文件，然后调用这个方法。

saveData：监听器存数据库时调用的方法，可以自定义。

```java
@Override
public ReturnUtil<String> importData(MultipartFile file) {
    try {
        EasyExcel.read(file.getInputStream(), Field.class, new ExcelDataListener(this)).sheet().doRead();
    } catch (Exception e) {
        e.printStackTrace();
        return ReturnUtil.error("导入数据错误");
    }
    return ReturnUtil.success("导入数据完成");
}

@Override
@Transactional(rollbackFor = Exception.class)
public void saveData(List<Field> fieldList) {
    for (Field field : fieldList) {
        System.out.println(field);
    }
    fieldDao.insertMore(fieldList);
}
```

## 导出数据：

因为我是导出为一个文件，所以将官方文档中的导出数据和下载文件结合到了一起。

按下面那个代码导出的文件名为"田间实时数据.xlsx"，然后表格头是在实体类中定义的。

这里我用了重复多次写入，因为我看官方文档中写的不能一次写入太多数据，否则会出错，所以我用分页的操作进行了多次写入，防止写入时出错。

注意：在测试的时候不能用swagger测试，不然下载的文件名是乱码，要把后缀名修改后才能查看。建议用postman或者在网页上直接测试。

```java
@Override
public ReturnUtil<String> exportData(HttpServletResponse response) {
    response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    response.setCharacterEncoding("utf-8");
    try (ExcelWriter excelWriter = EasyExcel.write(response.getOutputStream(), Field.class).build()) {
        String fileName = URLEncoder.encode("田间实时数据", "UTF-8").replaceAll("\\+", "%20");
        response.setHeader("Content-disposition", "attachment;filename*=utf-8''" + fileName + ".xlsx");
        WriteSheet writeSheet = EasyExcel.writerSheet("田间实时数据").build();
        long total = fieldDao.selectCount(null);
        long num = total / 50;
        if (total % 50 != 0) {
            num++;
        }
        for (int i = 1; i <= num; i++) {
            IPage<Field> page = new Page<>(i, 50);
            // 分页去数据库查询数据 这里可以去数据库查询每一页的数据
            List<Field> data = fieldDao.selectPage(page, null).getRecords();
            excelWriter.write(data, writeSheet);
        }
        if(num==0){
            List<Field> data = new ArrayList<>();
            excelWriter.write(data,writeSheet);
        }
    } catch (IOException e) {
        log.error("导出数据错误");
        return ReturnUtil.error("导出数据错误");
    }
    return ReturnUtil.success("导出数据完成");
}
```