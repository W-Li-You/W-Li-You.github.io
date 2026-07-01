/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","fd9d50dc69923782f207e57e850e78b8"],["/2021/12/05/zi-wo-zong-jie/index.html","19eb6f961e01ea107ffd1f26ca8f5a11"],["/2021/12/12/zi-wo-zong-jie-san/index.html","5aa158778007d5ff3aed59b42e77d8b2"],["/2021/12/18/zi-wo-zong-jie-si/index.html","c49acc26d60d470d988d2faf34c69df5"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","912146fdd015c8cdc2554144e570acb4"],["/2022/01/23/han-jia-zong-jie/index.html","bc8dcebcfb7218d6f23fe2fbcbfa0291"],["/2022/02/13/han-jia-zong-jie-er/index.html","12e01cf18e0450fe909453f9cadad07f"],["/2022/02/20/han-jia-zong-jie-san/index.html","bfb6de07c9652b2027d101801b7ca165"],["/2022/02/26/mei-zhou-zong-jie/index.html","38e6420853711edd80ac39bf77e069b5"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","5f6a773272984808b0ad7f7f345a8844"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","5880bd981dc559221a2d7d79f22c7ea9"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","92625f4f288c030ddbbdf30eedcbb54d"],["/2022/03/26/springmvc/index.html","139cb2ef3949c2988fca102ae06fe091"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","204bba0f4b84e1b7471fa849527e48ab"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","eb240c2a2f011f0f0f80c618d5d69670"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","ff14680b8d3bd6fcee5ca4caf81c120c"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","8734057b9315e1eb3fb1554d7874bf01"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","b4a3b1fd53b199bd641fa62b71bfa600"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","e9402acfa9346b4e5929cf547d164134"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","3a614e1b99a4ef26427e29ce88cca3b8"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","3a1ec2697ad1e61d7dcc96d9d172e892"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","fe98f04437e78855b67df92911bfc8ff"],["/2022/06/25/redis-chi-jiu-hua/index.html","ffdb82297aa3176f2fb5277f5f1e18cd"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","79e1f55fe471147e7e1949d325e08631"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","8326806ed7b9db8cff63cd787df802a6"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","9ef0e961863b550bba812bda8102809a"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","806e4d20523e98c046ab04a91adfff20"],["/2022/09/15/mysql-yin-qing/index.html","7f536b77d8ea8f5244eaf691cc5a4eec"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","0d3ecad9089f22a4d4f7f0e40b73da11"],["/2022/10/13/arraylist/index.html","174381455d3106acd5fceab22af92bec"],["/2022/10/16/linklist/index.html","d21f87f1939c88e5b24b07c0e1657059"],["/2022/10/18/vector/index.html","58fcf804c19aceffc53d975fcb7a3ef6"],["/2022/10/30/mysql-suo-yin/index.html","52ea6f8e6978a46adf1a4a150dc81b0a"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","6b45082fc5689fb71a2305da23c00b3d"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","4b50dfeeae8cfa6ca1d71377194380d3"],["/2022/11/20/pc-ji-cun-qi/index.html","5c3a03c5cff6f89d1d991677703d840d"],["/2022/11/27/ji-he-mian-shi-ti/index.html","85b92b4d81c15a5a62a8a3d160699aae"],["/2022/12/04/ben-zhou-xiao-jie/index.html","cac448f56f8af3ccffa4c3a8e64e5464"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","6415eb37b77f6915406e2f0445cc6b37"],["/2023/01/15/bei-bao-wen-ti/index.html","477aa8d47579e36939ef3a55a1cc657e"],["/2023/02/05/easyexcel/index.html","4a68885ea8350695ffb23b44ff30b70d"],["/2023/02/19/jvm-mian-shi-ti/index.html","52a6c441188ab3fab472d34870baf480"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","33755eac75a5663af535aa17a9c2d97a"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","204c11a98dae7c01d690f10c43c95318"],["/2023/03/11/yang-hui-san-jiao/index.html","4a8201e4b0afba0b12e1f262bfc7ce08"],["/2023/03/19/he-wei-k/index.html","ececc24be637189499ba271a4e61a2be"],["/2023/03/26/juc/index.html","29d907873df9d275c29609a1a9108e4a"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","1721712bd98723f6ec89dbd4bb3ad298"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","c5cd34b031e2a5c38f3034d880f643eb"],["/2023/04/20/mysql-gao-ji-yi/index.html","06f76a1a543613e431db696d723f8499"],["/2023/05/01/mysql-gao-ji-er/index.html","51fd374cb4efda7928414310d44ffef6"],["/2023/05/11/mysql-suo/index.html","2ec5a985124cf283213fe36c8099bc1d"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","9104e5c7d08b7623f46775e3488b8d6b"],["/2023/05/23/mysql-ri-zhi/index.html","c4541c702cc182684c78ffadbf9aea00"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","cf4a22eebd046d82454e884bf4a2bde1"],["/2023/07/15/xml-jie-xi/index.html","46b4f99f585d4033540f8ad74ea8f2f3"],["/2023/08/21/mvc-zu-jian/index.html","ea7cc0096d2f69c59754dee0a46edf2f"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","77b23122e00e6d1a1220400cb2f47f01"],["/2023/10/10/dan-li-mo-shi/index.html","1ded02284447834b0ae7e77b832b5ed3"],["/2023/11/23/hua-dong-chuang-kou/index.html","969a39cab724ff44b4a657a65772d1fe"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","5964ce9fc3c02d38aa892789658a6cd4"],["/2024/01/13/niu-ke-div2/index.html","4735e69829c74a1cc8a78f855a2d6a7f"],["/2024/02/10/kafka-jian-jie/index.html","cdeb602642568c9295c28f7875086c8d"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","56ff552332bd308bdbe9dace9f4b19a9"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","44c20cb93e4b8670b2cb25afbc69824f"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","802fe5069b9100853aced931c13d79e6"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","a2d2136187424d5583e5638bb3ffa996"],["/2025/07/20/clean-code-notes/index.html","cab64ba73489d14a20d096bd969e369d"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","f80a8c88670658a466eebfe6822e73da"],["/2025/09/05/rocketmq-rebalance/index.html","e5479bbf4d27a3f3fd62e38b4fa5fe17"],["/2025/10/20/redis-bigkey/index.html","2257bf6b7245fb702cac58714b35fad1"],["/2025/11/15/online-oom-jprofiler/index.html","11ac7eebf3770daa12e6e7dbffb8d7aa"],["/2025/12/05/grove-high-output-management-1/index.html","7bcbb1a59ac4b21f4cad14b2b734833f"],["/2025/12/20/huawei-management-strategy/index.html","dd7634015aaa17742288873767c12d9d"],["/2026/01/05/grove-high-output-management-2/index.html","12f5e9865e019e81b3ba54874f7ffa35"],["/2026/01/15/rocketmq-internals/index.html","b85c9e36ef57739b31ae128035297e0f"],["/2026/01/25/huawei-management-cadre/index.html","8b565cb4874b4e0b0fd4fc06434e9d6b"],["/2026/02/08/grove-high-output-management-3/index.html","80c36b262ec0968d13cebb02210808ba"],["/2026/02/16/es-segment-commitpoint-translog/index.html","6e029a0697198d26e6550e7e9075f4fb"],["/2026/02/25/huawei-performance-incentive/index.html","ee6974c719a8cebfe7e6cf5691d739c0"],["/2026/03/05/es-near-realtime-search-crud/index.html","2ff80e6f459e0a06b1f3612f281b983a"],["/2026/03/12/grove-high-output-management-4/index.html","ad528dae4729efe6e6fd25b3d1e20ae1"],["/2026/03/25/comprehensive-budget-management/index.html","106fb458edb73e9b1f49f70a801caf9d"],["/2026/04/15/grove-high-output-management-5/index.html","d24e90f4c3df71790efddfed52535e66"],["/2026/04/28/ipd-integrated-product-development/index.html","72ced4dbea71330572e58ecddf25f436"],["/2026/05/05/grove-high-output-management-6/index.html","ce6313fa8f2d13035009c740c92c69f3"],["/2026/06/08/es-pit-point-in-time/index.html","9310c3bfbc5e0ff719052c162bc11893"],["/2026/06/22/es-relevance-scoring/index.html","597cf9f61278de2bf65552ad9fc9f954"],["/404.html","bfc64a2664bc1072d3aad643f7abe199"],["/about/index.html","f6ff3ef2654954da1a2ac2999443410d"],["/archives/2021/11/index.html","7b73a734163ca96a3c23269cf04cfcf0"],["/archives/2021/12/index.html","46400d41e43d26c73fbc1e2235eaa24c"],["/archives/2021/index.html","07459d1498d3d2acb5406fed5e06cf56"],["/archives/2022/01/index.html","67a4a129141c6b9377b31fac8592f2ac"],["/archives/2022/02/index.html","195090281ff0e8404c55b8ade44a129c"],["/archives/2022/03/index.html","fa0e1e4a9f2a66aca867e65fa5ace0b3"],["/archives/2022/04/index.html","940e7b8bfb6815069649b714e617e039"],["/archives/2022/05/index.html","d8204a5e297a2a2ffc655510ac26ebf4"],["/archives/2022/06/index.html","6c2ea7e3aab19e97312f56e78deb2f28"],["/archives/2022/07/index.html","ea61f723b1262adf03fefae4270e131d"],["/archives/2022/08/index.html","94ea1bae7845335fce9f371e02448f72"],["/archives/2022/09/index.html","62d8b03910d4807945db7b9e357568c2"],["/archives/2022/10/index.html","67eb50a632e4c2367dada2ee83fa3ef7"],["/archives/2022/11/index.html","6cf597492d073ae9eddea5a9cd7e427e"],["/archives/2022/12/index.html","7c10b9c2e919a510d0352f8e951ff7d5"],["/archives/2022/index.html","e45f68b281c7bd696c51f927922e3015"],["/archives/2022/page/2/index.html","87de4b6bc9adeb711f4d47f5f2f5c200"],["/archives/2022/page/3/index.html","7b12ece8dfdae8053541d98a9c74cb47"],["/archives/2022/page/4/index.html","7526a2c47b35f8df0924ccd51ff53cf1"],["/archives/2023/01/index.html","8576ff597791e143ea2c09ad7a84b6e0"],["/archives/2023/02/index.html","a33fc492f0c56693fdc3be802f3a30bd"],["/archives/2023/03/index.html","7d8fd2f24a75dba7ba14b39ef21e679e"],["/archives/2023/04/index.html","b579ce3534fcbc38d5d3a84ebf0afec5"],["/archives/2023/05/index.html","e8fbaccff51b481488779926a8510a0f"],["/archives/2023/06/index.html","ecad0ae846fa9012fa76820b001a3847"],["/archives/2023/07/index.html","716ae4068b4daf781b7dbb0e3b9d351c"],["/archives/2023/08/index.html","95ce52eed6b1e0143f5227c04a132b0c"],["/archives/2023/09/index.html","d61f88c76b8ceabdfa8470a599eecaf1"],["/archives/2023/10/index.html","3dccb9ff669dd1bd7d2b1ee56e833c65"],["/archives/2023/11/index.html","028051300b7c5976f5e4b451c1fe7eed"],["/archives/2023/12/index.html","b9c2547dce1ca490e6ac076741583f3b"],["/archives/2023/index.html","dac01026051ef3651b3fe8ea87619b88"],["/archives/2023/page/2/index.html","4c1428289425aa8cf9df44202c6950a1"],["/archives/2023/page/3/index.html","81dd7c3a0d8db089a5e1200bd750108c"],["/archives/2024/01/index.html","4e99e814d780737776468fdd14ae6324"],["/archives/2024/02/index.html","ffa552867c8b53579f34e07f1b3720f9"],["/archives/2024/03/index.html","57678807a525a58fdd5c9ab40d3acf2b"],["/archives/2024/index.html","27cfbb0d79e3b8daa5c99006066b609a"],["/archives/2025/06/index.html","fb987698ed5a6e1e22a4ca57bb240b04"],["/archives/2025/07/index.html","dd2a61e56f003dc3e911e5210fdd2cd7"],["/archives/2025/08/index.html","41d7de024538c461cd58d60f1cc240c1"],["/archives/2025/09/index.html","e0273c9cd6429f962941082043310937"],["/archives/2025/10/index.html","71aa3fc1d463bef320eeb4c41946cc32"],["/archives/2025/11/index.html","dec93ae70c1ca48a4b34fca8e5421d0b"],["/archives/2025/12/index.html","06e5e2057870ceb8954428e19e90cc2c"],["/archives/2025/index.html","fe989797af96c64b4194b670b54c343d"],["/archives/2026/01/index.html","b7a45b21070430476b36e30725a3a1ac"],["/archives/2026/02/index.html","2478675b22e5862b90728522a9bdd9bf"],["/archives/2026/03/index.html","c082a9cf0be1ad4d396fedde4cbc0238"],["/archives/2026/04/index.html","6a4cdd9b4fe5f4fa63196ae5283f1c65"],["/archives/2026/05/index.html","ad8a3549a70380b190b615b020aab655"],["/archives/2026/06/index.html","13af062488f42d0cc5f99f79ab0de403"],["/archives/2026/index.html","6a8ad595a30e37ecdcbf76a3bbae6651"],["/archives/2026/page/2/index.html","98c029aa05ab5c77f261870f76ecf8a9"],["/archives/index.html","41bcc964f12a5a4d650146d01e5eb81c"],["/archives/page/2/index.html","0033f190f356294646752c577e9ec20a"],["/archives/page/3/index.html","5f4077037f0f908502654eb16bbcc684"],["/archives/page/4/index.html","151811006952cc27eb1acd1247502f13"],["/archives/page/5/index.html","b6adbbae311c53b92fa609fbd9862292"],["/archives/page/6/index.html","e48c30a83afb00d160e9bad9436a7f1e"],["/archives/page/7/index.html","94b258e5003aa0a2578e2acaaccc244e"],["/archives/page/8/index.html","288ce24633f43e6b725c4a4dfb420234"],["/archives/page/9/index.html","b5d2ad9a419d49c8add9595719f1b753"],["/bangumis/index.html","d8fd520f514d4abe2cde68c7460f569a"],["/categories/Java/index.html","764e6ec88a642c75d7f4be8631323ed7"],["/categories/Java/page/2/index.html","d6edfa32f3c1377857db3f2f07319240"],["/categories/index.html","8d81e97b4c15758c197fdf19bbd7bdf5"],["/categories/中间件/index.html","c6aac45432245199dc7642ee33737b74"],["/categories/数据库/index.html","0b0f2b38f7ff4c08d5c1c7088ed7c665"],["/categories/框架/index.html","82e5b104053ca5df0b17cdd2463502c7"],["/categories/算法/index.html","d1d994d637698e72fdf2b122edb86da2"],["/categories/算法/page/2/index.html","08a77883adb53855a9b14ed32f6296ab"],["/categories/管理/index.html","71ea1d0b7697ede65db7fb8c8db501e8"],["/categories/设计模式/index.html","521393d0f4f0cf5ddd956c64f4308127"],["/categories/读书笔记/index.html","c4dec5f2ac0178f91ad3cf099a9d7859"],["/categories/问题排查/index.html","b38886cd8d9bee6bc6a6a0718d693bbe"],["/categories/随笔/index.html","f4035a2e5917ff54833c482f604cde80"],["/categories/随笔/page/2/index.html","946f50b82277dce757b430dfe7120320"],["/categories/项目实战/index.html","7f7e058dfe5f31df54d4780a1a4a2a5a"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","9e27a527b5508edf43bf1cc986db3d7f"],["/friends/index.html","44a9c71491d38197892c07cf690e6bbd"],["/gallery/index.html","052f98b71c7ce9b0094e1d106fc9ecf4"],["/index.html","1454390aaa89bbfc9a06e485e7a20fc0"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","dda1c77142b4ff89cabc3330f1ef8f81"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","fc33b8a75019c33eec889efeb44c97da"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","c4adb69dd24a4f6d3cb11b1d35af5205"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","02284505550de7c1b3f1f7076be08e79"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","6323a65e67217ac77de00ddc808181d3"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","6e255268ea9ec1d995f7b0d75ccc86fb"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","3fa01a9d0c8bb4d3e3ad2780ad385b25"],["/page/3/index.html","eb389ae16b474113a9ce9ebc7ab6013a"],["/page/4/index.html","d54db0ec59d8306d0f2e3085f0438b7b"],["/page/5/index.html","1d32c44273f0b653bb2180fbdb43825a"],["/page/6/index.html","d20ac9581588c4bb77a4b14985f55812"],["/page/7/index.html","ff13cd0b2ede10b92f4312831103fcbe"],["/page/8/index.html","231f9acbb53f178b4e8f4586ef77ce0f"],["/page/9/index.html","99b15baac971b7b8e03a13a2f8bbb100"],["/shuoshuo/index.html","6e132a0f5be54e4cc8add358ee113242"],["/sw-register.js","3095f75c43f1cf7dac6618557cdec168"],["/tags/EasyExcel/index.html","bb6ef3f7ce26b23f4df3155cfed81a3c"],["/tags/Elasticsearch/index.html","35bd90e91e50429c19ba335ae7e81e69"],["/tags/IPD/index.html","a1b279f1d931c7bb393c51cf9cc3f6c0"],["/tags/JSP/index.html","112bfa35e5398ce290351aad4afee262"],["/tags/JUC/index.html","11c094e763f53a37f8407899badc7ba7"],["/tags/JVM/index.html","d1baecfaebb93cb41bd8ee40f266e741"],["/tags/Java/index.html","0bbbcdce3777fd903471d6fc2afed5e2"],["/tags/JavaWeb/index.html","1dbe9bbf6b3b03c6c50c2799f67e04ed"],["/tags/Java基础/index.html","cd5d9f6f431be640e4cd8a4cb9117bb2"],["/tags/Kafka/index.html","af4619d685c05bade252c8314a05ccf1"],["/tags/MyBatis/index.html","ae8162c975927861da1376c091b80161"],["/tags/MySQL/index.html","e1a25eaaf5ca9d33b9399010db0d4585"],["/tags/ORM/index.html","122e4d980a6efb0ee22f2c1ca09b84bb"],["/tags/PS/index.html","328577ad6aaca78a4eb8cf52b1290a18"],["/tags/Redis/index.html","c71ac790e049564dfa36d4899e22f94a"],["/tags/RocketMQ/index.html","684f41a59c44d3a2db5646a452f185c0"],["/tags/Spring/index.html","11b5fef7308a7a3a5cf26477d58fe4d8"],["/tags/SpringBoot/index.html","5f16a4fe731c3943ae781188b5f12d14"],["/tags/XML/index.html","8be4ddef3802d389485b2eeb0f0e43e1"],["/tags/index.html","7b8df119bd381d15655905928fade852"],["/tags/二叉树/index.html","bc55ba35399cbb8ae13f8a5f04082bc7"],["/tags/产品研发/index.html","7ea251e130dbaa4cb0ca70e03a945158"],["/tags/人才管理/index.html","d3bca6a64596b23fc20773b7770997db"],["/tags/分布式系统/index.html","809daa490619e523acdbc80964003f5f"],["/tags/分治法/index.html","c25d786341f504b0af4e37b23f150a35"],["/tags/前缀和/index.html","919f8a458972f6843aaa881c9c8be190"],["/tags/动态规划/index.html","0cd70da8933fcc003c07a1bcf99cc880"],["/tags/华为/index.html","8d41a30b317423b89f9c4fa43f894b0f"],["/tags/回溯法/index.html","e2f569d9dbac5b3459b1a3a5ecaedbb1"],["/tags/字符串/index.html","00fd2b30911f766c62d3103948453eca"],["/tags/工具库/index.html","ce6ea63b0878dea9af94c6be05053dde"],["/tags/并发/index.html","305c7dc11b6614b6e4e2dc7b260fb1db"],["/tags/性能优化/index.html","919e10922a8f4dbcde022702135688e4"],["/tags/成长记录/index.html","7d17db9ed4c2502a85e0194a244fad03"],["/tags/成长记录/page/2/index.html","66d96d9021949dab4e46551b1923b86d"],["/tags/战略/index.html","c7643fa2cec4bef20d5a670d943dbdf6"],["/tags/搜索引擎/index.html","14eef34f11978eff55f7d4de3868dbf7"],["/tags/框架/index.html","02a714cc126206e3e962aa87a56206df"],["/tags/比赛补题/index.html","916b24294a784b4594a15ad7f1047cd2"],["/tags/消息队列/index.html","4a4fa6e8d26ce7ab8f0e84966709c561"],["/tags/源码/index.html","a3ec0126e8a65f80b586b801a7bc2460"],["/tags/滑动窗口/index.html","62f02003d8d2ad39eba392f3d08c24ad"],["/tags/算法/index.html","54658405d8561adc71b3434d69260156"],["/tags/算法/page/2/index.html","170a97bda41435115388661de3d7529a"],["/tags/管理/index.html","e5dcadc9aa3a38fc4a1aaad8e44c8f16"],["/tags/管理/page/2/index.html","cccfb1c664e50d866d50bd2658cc355e"],["/tags/绩效管理/index.html","5a99050c5d3c38af1de1375c03ba3c4a"],["/tags/规范/index.html","36331f1dc7a57efde4b888a7b72adad5"],["/tags/设计模式/index.html","f1fa72b340a4b2a5cbeb095fffa3d7b4"],["/tags/读书笔记/index.html","e2dec76b93e02d564cd91ecdccdebb84"],["/tags/财经/index.html","ce51f21a8baf5bdd669977b39d9ff9c8"],["/tags/软件工程/index.html","55eff807a93a483acda7974000a80108"],["/tags/问题排查/index.html","aa581afbfab6cbe21b1c334cf05b4b95"],["/tags/集合/index.html","0d3a3af644a426f3e2f66a8bd6617aef"],["/tags/面试/index.html","9d95eb871cc91c6db08fc975f694bdb5"],["/tags/项目/index.html","a4d09f3b8c9b6dc235c4e9d2c2a56ea3"],["/tags/预算管理/index.html","951ab60b1c71addf52eac24c9becb462"],["/tags/高并发/index.html","4f115f03a89af30f225247d857115236"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
