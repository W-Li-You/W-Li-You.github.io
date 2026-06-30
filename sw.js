/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","424cd28f74a4c4a805aa03759b728209"],["/2021/12/05/zi-wo-zong-jie/index.html","c6efd005cf5eb400cd80ceeb196f5c22"],["/2021/12/12/zi-wo-zong-jie-san/index.html","9be1007a1294d266ced67855f589bb7a"],["/2021/12/18/zi-wo-zong-jie-si/index.html","16fdfda44e541f8b8c68472746380456"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","54c60ae5b490cefdd1b4d26ca5701e2e"],["/2022/01/23/han-jia-zong-jie/index.html","122477bff4c22b15f21c23948754896a"],["/2022/02/13/han-jia-zong-jie-er/index.html","3ae70b2fb3cb8629be354cf23b70f237"],["/2022/02/20/han-jia-zong-jie-san/index.html","9804ee9b2be713f71f13b0f2c0113129"],["/2022/02/26/mei-zhou-zong-jie/index.html","ac98525493aa56b5276060b69c2c790d"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","149f9d41bf66f3505a817b9ef769d96d"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","4906e4174c548e2fcf715149e4b4fa7e"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","e6c7bd3a8cee557197adf74ab0f876ea"],["/2022/03/26/springmvc/index.html","692ceecf6566700ece18c328cf8868cc"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","8ca0d944ceac3fd184e60ad107f5cfe8"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","fdb99f070a6172db4eda64026e6f6f46"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","36787f3348fc722710d78303460d1056"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","921b2002c77c45d2d749f399c2cf6cd4"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","62a63312e957f870d61934addf9bc237"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","06174c2de2a16bd390f7c74431850c4c"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","8730b1b12c1cce9900abcf0a8e134e19"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","de16588ce2f24c76508140ce40997d13"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","88375dec64e8278e1381eeb6ae63f354"],["/2022/06/25/redis-chi-jiu-hua/index.html","bbeea24d1f6f9dee37cd3e3b013d547e"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","9731c6d69e59b67216bbb6c9da149eff"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","1096959c7db8b8c06930345b59cc228c"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","ec4618835046b615463d4aaac2a8f92d"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","28d391f39020ffffe294d83cefcb4a2e"],["/2022/09/15/mysql-yin-qing/index.html","0d93d09bd3f45792858a8f45fb013481"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","1d17e0f582816d03b8a459a29234c4bf"],["/2022/10/13/arraylist/index.html","02c1eaead7a852df9a1ac6861d0d09b0"],["/2022/10/16/linklist/index.html","70f80d06d6f1a01e1c7429e08964a29a"],["/2022/10/18/vector/index.html","642a35e2abc03f2e8e7f4a64e0c87a76"],["/2022/10/30/mysql-suo-yin/index.html","f303cbed736848f91ea58522e0546fc3"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","e975c292703da0d82893cabcb0e879f3"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","35271f38a80ab158530d5b9a464e5544"],["/2022/11/20/pc-ji-cun-qi/index.html","f1d02a3e5ecc3e7bfeb1e778a8ba4def"],["/2022/11/27/ji-he-mian-shi-ti/index.html","7d4e670b60ed1a6bf3c9aa4106cc8f03"],["/2022/12/04/ben-zhou-xiao-jie/index.html","a2ebd051497dcf821297b67ac4930e53"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","74e6601f40142fa99f6b876e917e5201"],["/2023/01/15/bei-bao-wen-ti/index.html","80f31f311e50a427563a890c39c6712d"],["/2023/02/05/easyexcel/index.html","48090744dd4fa15f71a5f980ce9cc0a4"],["/2023/02/19/jvm-mian-shi-ti/index.html","e5ea7664156fd36a632c74ff9a637054"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","eb0ef3034d5170ef2e16f737d0b72d50"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","732412b7dd8c558d3a895a1c27f1dfc6"],["/2023/03/11/yang-hui-san-jiao/index.html","3a063d5652c781a8a99503ec5eeaeed9"],["/2023/03/19/he-wei-k/index.html","fe86a922a37b31456949c1656bed6417"],["/2023/03/26/juc/index.html","cf89472a87024f481671c7444af9809f"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","78873264938a0c416b7ab21e5928b7d3"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","d57dfc3e27badcb11d94870db57d601f"],["/2023/04/20/mysql-gao-ji-yi/index.html","9152b8dbb19c5875d15654a7342b6e86"],["/2023/05/01/mysql-gao-ji-er/index.html","17c26e8abd9b941dd046c3ef83bb21cc"],["/2023/05/11/mysql-suo/index.html","7c400884eb5106d11ff3a519973445a0"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","44b7bfd8b0f6c3bbde1472ca6bedae37"],["/2023/05/23/mysql-ri-zhi/index.html","0718a0611fe70811ab115e359eae593a"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","b9cade792b8748e88bf636a412f9b127"],["/2023/07/15/xml-jie-xi/index.html","13d4bc62fc1ba6d450094ab0ad975532"],["/2023/08/21/mvc-zu-jian/index.html","108cba52024337e1ab110d1a7e9c297a"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","42ffa6a557daeba8bec19aad54741196"],["/2023/10/10/dan-li-mo-shi/index.html","a90c4027bc2e0cdfc05ffaa3a24981cd"],["/2023/11/23/hua-dong-chuang-kou/index.html","2eb95d94c6a49f0e1a6b48a881a83d50"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","5b7ea47dcc8322040322dbedbf684776"],["/2024/01/13/niu-ke-div2/index.html","5a877b07217bd084226bbd15437e1ecd"],["/2024/02/10/kafka-jian-jie/index.html","4ad97c67796084039c2fefbc5d2dbcab"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","57cec6e0d8bb988fbe3bdbda98bbd42c"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","8a9c152d1ba7a3c56f232d8f717d28f7"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","cd837fd16e5f4ecbe8f4a50112e766d5"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","4cde0e0342f50ab6a537dd0c5edb8bfd"],["/2025/07/15/rocketmq-rebalance/index.html","c29036beb092541787df59ae2242fe1f"],["/2025/08/20/elasticsearch-the-definitive-guide/index.html","f70e3a69033f903376607254898917c8"],["/2025/09/10/clean-code-notes/index.html","bc39dc1c28e450b5b648b5891dca6f4f"],["/2025/11/20/redis-bigkey/index.html","9cd166aca4ca9f85f58079757575b316"],["/2025/12/05/grove-high-output-management-1/index.html","2e229d70efcd911e7c2d8a6d80a91481"],["/2025/12/10/rocketmq-internals/index.html","2476035dccae9c11498c114f57f986a5"],["/2025/12/28/grove-high-output-management-2/index.html","22c800a8b56426c42e80dd62d628eb6e"],["/2026/01/20/es-segment-commitpoint-translog/index.html","1506fcedb2f6dbeddeae8990901b55e9"],["/2026/02/01/es-near-realtime-search-crud/index.html","a8919f6658d91bd3a6407ef26faa5809"],["/2026/03/08/grove-high-output-management-3/index.html","0918c096a783c6056d03fdac09374d31"],["/2026/04/10/grove-high-output-management-4/index.html","ba24a6bcb7a1d4707a0b0a2bf9e8880a"],["/2026/05/12/grove-high-output-management-5/index.html","66bd8f7b557e4f7de4f96c57099caa74"],["/2026/06/15/grove-high-output-management-6/index.html","ceea6da5bb8d2356391f351de6e27156"],["/404.html","dff3f549590e252e284ede6f4f620465"],["/about/index.html","a9df1bb6a8cf7ed4a394dab365063a34"],["/archives/2021/11/index.html","28d05583bbb96c16950aa4bb9a314501"],["/archives/2021/12/index.html","b7532d070c554ca6337cfed2260efe98"],["/archives/2021/index.html","65e002ef55909c10d037cdb0482b2866"],["/archives/2022/01/index.html","5f4805530336b656675b587b2c658c17"],["/archives/2022/02/index.html","c6cd3f9bea669e4fa369f1e29770bbe7"],["/archives/2022/03/index.html","5622aefc7a71f537460914bd8cc8961e"],["/archives/2022/04/index.html","05977427aefc7e3ccabe4e071945cb95"],["/archives/2022/05/index.html","7c84732802e5b1462e9979a726f8756c"],["/archives/2022/06/index.html","a82e29c3e7a251cc491a1c6f37e92860"],["/archives/2022/07/index.html","749594eb89d760fcf69854881c377714"],["/archives/2022/08/index.html","b4110489707177bf6966b9bacfcdd7c1"],["/archives/2022/09/index.html","2cec41472ff27650ef2da2eb5625c392"],["/archives/2022/10/index.html","d0e5276bc398805dce2f7d648add774f"],["/archives/2022/11/index.html","763f6c44945a8d45883179a883c0f0a0"],["/archives/2022/12/index.html","9b7116ba0e73f703776fadccd232c09e"],["/archives/2022/index.html","7ccd2491a6cf05a6c7764d92c097c616"],["/archives/2022/page/2/index.html","fe1f42f08e610cd56bff28d9dc8c4edf"],["/archives/2022/page/3/index.html","f4042c3d7d83125c2fc63996d276aab8"],["/archives/2022/page/4/index.html","db770bbf3b28fcd23dde6f504be9adb0"],["/archives/2023/01/index.html","57077a7ae4d07c17a28e39ea56057329"],["/archives/2023/02/index.html","17cd5de190174d5bdac3ee95d4df8915"],["/archives/2023/03/index.html","a62eed09743797b24cab17c43633b243"],["/archives/2023/04/index.html","4040e6a337a96e4f8fb2cb4f44e16189"],["/archives/2023/05/index.html","4ef5025f98e7f350d639b7ac617bdadb"],["/archives/2023/06/index.html","b05a28192ef8cf4a16866f9d72fd9fc3"],["/archives/2023/07/index.html","6c1993b6368ff6b5af4ea1f19728b701"],["/archives/2023/08/index.html","51637919831b899a81a3fe35368da12c"],["/archives/2023/09/index.html","03c8a18e77245bdebaefadb40bee3273"],["/archives/2023/10/index.html","4265788c7d06404aa5dba1b8de0c83b4"],["/archives/2023/11/index.html","f3a21de0193c428723aefe33ea162854"],["/archives/2023/12/index.html","46c6117d82e5b3a25736efe66aceaf2e"],["/archives/2023/index.html","c61f58a8555616b898ed5061fbd354ae"],["/archives/2023/page/2/index.html","b0e10c05f1bfa725fd9afb96d3964e9b"],["/archives/2023/page/3/index.html","be561fd7f8a40a693b641996c99136af"],["/archives/2024/01/index.html","31dc736fc1dadeb7d96ec8d514882be3"],["/archives/2024/02/index.html","b17ca91d747088fb8de948fcd644ab92"],["/archives/2024/03/index.html","4c27f4e241e6883f734ebebe1d12ef62"],["/archives/2024/index.html","2296c0f1fc2ed09cda2df16d1f87b5a3"],["/archives/2025/06/index.html","3c9d0fa6de698b735306f62c81383cc1"],["/archives/2025/07/index.html","cae78af3ef0127219a61197eb107ce09"],["/archives/2025/08/index.html","919f683b945f703c107d992463f2c81a"],["/archives/2025/09/index.html","47944582032af7f07c3985619f0c67a1"],["/archives/2025/11/index.html","7dbe16771e142b891ea4ff1ea2f316f2"],["/archives/2025/12/index.html","b59bc8c70e3794599c5123c10cfe9a0a"],["/archives/2025/index.html","9cbc6dc43f1f1d3516966da2f960c7ee"],["/archives/2026/01/index.html","af44380cae7406d17e634942e83733c7"],["/archives/2026/02/index.html","8d78d56c9107bc00558ddd21fd6e2b21"],["/archives/2026/03/index.html","297f786c52c526f2ebe02b9a92a01db8"],["/archives/2026/04/index.html","8ba403aa7b7d34a06088039b43c3db86"],["/archives/2026/05/index.html","b9cd5438e611011eda0f903f0b1a9822"],["/archives/2026/06/index.html","07411a542362ede2a4dbae2d86975d4e"],["/archives/2026/index.html","b22f4cadd526a7b080a671097fb1ab73"],["/archives/index.html","8bf47c9dde6a437d0a73836dda032504"],["/archives/page/2/index.html","d3f62b27fb87d1e4ebea135b947d3d7a"],["/archives/page/3/index.html","61c7d6b2b561c9c800a50a6d1c045ea0"],["/archives/page/4/index.html","a8fa6024298c5e2547a74df79a1388b7"],["/archives/page/5/index.html","a8ede2cb4c06b3d4622f4a5eca915d8f"],["/archives/page/6/index.html","ab9b46349b93448ac06a8c34f24925ff"],["/archives/page/7/index.html","a62525deca0d3683cc0120a2197060fb"],["/archives/page/8/index.html","d2d90ab579da5600124050683989fb5d"],["/bangumis/index.html","f15fda2eebfdc02d711bf14a2c097882"],["/categories/Java/index.html","16efc9fdf4cc4ff1bf2fda81e160bdbf"],["/categories/Java/page/2/index.html","870418d3df0387f4f9239a623e365c24"],["/categories/index.html","436173effa9fdcffc65a7f38793de3d7"],["/categories/中间件/index.html","7d971c8ee5076e30ba3444512e5e987e"],["/categories/数据库/index.html","7b2c6097620e9624c39b422a57910f7c"],["/categories/框架/index.html","b1a643356ff5d442dca453cdf72ce1b6"],["/categories/算法/index.html","acbda5040e0e3ab76b0b56121f959b2e"],["/categories/算法/page/2/index.html","2d63a54c31fa80f4545ab7715c74ea21"],["/categories/设计模式/index.html","e7f96674fbaf0a918f9495c7d891d422"],["/categories/读书笔记/index.html","36b0deb386516ee52b344107bcec2b78"],["/categories/随笔/index.html","605fdb0f3051ace30dbeb0e90ee9f718"],["/categories/随笔/page/2/index.html","ae53db11fae0dc4a4bba4b20cfe75eab"],["/categories/项目实战/index.html","74d894dcc31d437eb0ac027aad798d77"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","4739007929aa6dcda0e38d4a9bef6be6"],["/friends/index.html","5c37e75dd2bcda6c93498f1f016aaee1"],["/gallery/index.html","2c42eb61c73a04c49f4e03069b3d466b"],["/index.html","b6ec0dc72ac43c73d0966ebf1a32c6a0"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","bd6ca8c8550e582a8730989546f15e8b"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","79d730f1a49ca2a018121b30e121c7c1"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","b11cb93f926161ca604eae4e1cfcb6cb"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","82ca0a57ddba064cb9a4950422311cd9"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","c458b633040e9c4bbb7b42ee7ccf6e3c"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","d242514beeb87b34bc730de96e831545"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","198a8603f0d6b7758efcef64628b17af"],["/page/3/index.html","b5c662eb6952aca8e48fe5c71594192f"],["/page/4/index.html","c685c949ba359ab5891a4810638a9292"],["/page/5/index.html","1d232dd007a412c7aab7dc1744d20097"],["/page/6/index.html","7e3d3504dfbbe97456d7ecbe66844d35"],["/page/7/index.html","725432165aa9426d1b39761aca8ffcfe"],["/page/8/index.html","e3a9f4471f59f330aab3e6eddfcac962"],["/shuoshuo/index.html","21cfe7cafafec274cd1320fbec66df9f"],["/sw-register.js","ddc707dec9d046df6b4257d33a2b074c"],["/tags/EasyExcel/index.html","a2a7e03b764dc1afda8d7e58f44719f6"],["/tags/Elasticsearch/index.html","b5e36853bc0bcc788b1916dc5a97c148"],["/tags/JSP/index.html","64e0ea09619b8aa5d35e80f7b7944cb7"],["/tags/JUC/index.html","67d1b1568f78bf21a73be7232a7ce3cb"],["/tags/JVM/index.html","c7e7896dcfdf39248b40f3c6a6543434"],["/tags/Java/index.html","12609deb499c7b097528bcc08a7a775a"],["/tags/JavaWeb/index.html","11bc13fb70b5b449915f913139bb28af"],["/tags/Java基础/index.html","71781cb4c49d2b9c61a44273e1b1c925"],["/tags/Kafka/index.html","313d1d8dd959e07c6e4fe31380128148"],["/tags/MyBatis/index.html","f21b271a4929116288c7aeeb77e51d10"],["/tags/MySQL/index.html","4435ee0415902d72cf9d1b63ec0db119"],["/tags/ORM/index.html","878dc20dc59a58a1ed0306faf4c04a14"],["/tags/PS/index.html","664f5fe054b2e2ee4dedc1dd41c11444"],["/tags/Redis/index.html","b0d3bd96264a6e76251c2a5db35eb104"],["/tags/RocketMQ/index.html","b712583b6064840690bd9deaacbe7c86"],["/tags/Spring/index.html","883d732d65e9ba98539d4a7b63af4ee9"],["/tags/SpringBoot/index.html","0aef85fcca515213769e4cee610809b6"],["/tags/XML/index.html","7b5bf2f650c5f2d0f999a5bc5d5ba4d8"],["/tags/index.html","6b535c2f421a3546f5385b6e79b2ee37"],["/tags/二叉树/index.html","b4989080a56a06acfebcf4d1e5c8b696"],["/tags/分布式系统/index.html","423e5cb59719b401cc4a350f7aae491a"],["/tags/分治法/index.html","a76a7bdde2282c671aff072058d9f994"],["/tags/前缀和/index.html","95b4212fe586482fa775b3ac0ad53572"],["/tags/动态规划/index.html","99f7f058a197d36af5e7fdc97bcb39bd"],["/tags/回溯法/index.html","e2f1d3625ede4de4ee5d18b82f759372"],["/tags/字符串/index.html","0b09bd3c03102fb0ca6a529893aa2389"],["/tags/工具库/index.html","ea238234590127db3bb0c8c2f24fc0b7"],["/tags/并发/index.html","c5ea40acc2d9b55f3a64aa448df7fc48"],["/tags/成长记录/index.html","8e36da96343a85c432253b62245cc9aa"],["/tags/成长记录/page/2/index.html","b4947b756e29131647cfc4cc86383282"],["/tags/框架/index.html","6ee75328eb771f115b8d583fe6b39c67"],["/tags/比赛补题/index.html","0c5b6525dd20af2bfda430b351db740e"],["/tags/消息队列/index.html","93df0c8690fcbaaecc2cd177b728e273"],["/tags/源码/index.html","c8fdc786021f15cbea8db304d5bf0149"],["/tags/滑动窗口/index.html","b91a4b2416525588c0627371e1107aaf"],["/tags/算法/index.html","ee50b5f2e584a77a1a09bb9b23854fa0"],["/tags/算法/page/2/index.html","179ac3d2157df65e88dc1857b583194d"],["/tags/管理/index.html","eb4f958b9372d9fee560d4d278d56bb2"],["/tags/规范/index.html","a617c01619b23e6bad4b899dd6b3c94b"],["/tags/设计模式/index.html","984e842f507199de092d40329378aac8"],["/tags/读书笔记/index.html","c5c040d610e1042e756c69823d029094"],["/tags/问题排查/index.html","1af082d30f9adf326c4942ee3753741d"],["/tags/集合/index.html","c9620008b894d149990244ef7287b3cc"],["/tags/面试/index.html","26d5d7861bdf75a544578f0963d20ab6"],["/tags/项目/index.html","e2565381ba2a1fafc51d85b40002a63c"],["/tags/高并发/index.html","73b37a24bc7f13149b8bf3ccc457f974"]];
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
