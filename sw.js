/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","62c1e0049a9a1aa1d1eb87f2a5b7eec2"],["/2021/12/05/zi-wo-zong-jie/index.html","04c195ab385a88199975a8d655c191e3"],["/2021/12/12/zi-wo-zong-jie-san/index.html","7a3a77faa2ea0d2182be4bfd73fcc00f"],["/2021/12/18/zi-wo-zong-jie-si/index.html","973c5f542366c960c87bf4fde1b0f61d"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","ef37e2fe1085dadfd3276a46c1955239"],["/2022/01/23/han-jia-zong-jie/index.html","399e32b90c9f8d09a017cc7352d22d3e"],["/2022/02/13/han-jia-zong-jie-er/index.html","96cb21abc134e9969005a34ffff0d64e"],["/2022/02/20/han-jia-zong-jie-san/index.html","7e5123d82903ca444c9b5f69edc0e85e"],["/2022/02/26/mei-zhou-zong-jie/index.html","3351f5b328bc7b1e6252f08ca0dc32d4"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","e6c6260300453297d3834c4dc2aeb0bb"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","4d5f20b7fda536e07a5cf2bc4aeaba2a"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","d9f90617d50db61706ced5e759c545b9"],["/2022/03/26/springmvc/index.html","0e2da76149d05e3c1da6725ba2584929"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","b38995b68986d6395473b2a61d3ba9a9"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","956a5ba46257e928893048778550ba24"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","649f082f3ebac1e5058246851e5e77ed"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","3b497a71409cf880e68a3a6831db5beb"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","6d5f9c9773c568e88dd748216c241e37"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","39375b088378ae2ff20d6ea4b1a3db0c"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","7617a1eb8349d79c39af86fbd75f4bb8"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","02a96d2dd5467ffc56c65790f7e75132"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","75edb43152ad5ae16b525ec98a569054"],["/2022/06/25/redis-chi-jiu-hua/index.html","454e96fa339181e763a0fe796bb0b8bb"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","e20de029cbf64c35026361ee6488886c"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","bfd36af24ef38ff933c293aae34e29ed"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","5fa1138b87b5d4dd3eef61f84b9b0d97"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","1aa42378ccf1839a6d2db4c27762e7d0"],["/2022/09/15/mysql-yin-qing/index.html","6f41594d7844ba6d404b622258d56b53"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","2a2c9a8a3890f556f4bc3a40880485de"],["/2022/10/13/arraylist/index.html","c98fcaa53e2730c49c20e9b763689bb6"],["/2022/10/16/linklist/index.html","bc610374b8e75d9ee57b578d23db9a29"],["/2022/10/18/vector/index.html","8b30400f0dd2751968f5e3c2bb81154a"],["/2022/10/30/mysql-suo-yin/index.html","805ac6a53f9741a3288db9ecd81820fa"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","6644fc893cd27970cf7781c87c855c7f"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","d485dee3e1ae8f3c0b617d0859a7076b"],["/2022/11/20/pc-ji-cun-qi/index.html","05d1a5dfa95013a864f7d8f9b6662f3b"],["/2022/11/27/ji-he-mian-shi-ti/index.html","1a67cea4199aaa03e6444da8e69798a4"],["/2022/12/04/ben-zhou-xiao-jie/index.html","5379ef542a95a18c3d66b95f2e06c9d1"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","37e926a24900569f9f65ac19f0840d08"],["/2023/01/15/bei-bao-wen-ti/index.html","bbb21409f991a31fe99a0e3382126b54"],["/2023/02/05/easyexcel/index.html","4679ab207655f4f8df7f815b936bd026"],["/2023/02/19/jvm-mian-shi-ti/index.html","a7c8784cdae9aff2300a4ace83829b83"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","5639b6ac4674235a7d5b3d20cddb0508"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","e1289872877c1f816d0489bac2c1b356"],["/2023/03/11/yang-hui-san-jiao/index.html","3be27b15eb71027788751e194ca64edb"],["/2023/03/19/he-wei-k/index.html","52d7e707d50d5b277e2b624cf40bdc82"],["/2023/03/26/juc/index.html","51fd3156e4e5ee7abf2ac92a7dfeda1a"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","92911ee7c7f9b256d761b6e8fe7dd06a"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","9be6d3450e6086ca9c04b01841029d95"],["/2023/04/20/mysql-gao-ji-yi/index.html","547778d47c7cae8b3fc373c0b490cdd5"],["/2023/05/01/mysql-gao-ji-er/index.html","5f2e75795992e51dbd190299ebfdb637"],["/2023/05/11/mysql-suo/index.html","3adedccac548df2602b5ebd238e1214b"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","a97c97c73fd29c742cbf432a0bd8bf9c"],["/2023/05/23/mysql-ri-zhi/index.html","6621a1a98a89c7280ff68040f8d833c2"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","8318ae7716bd9eb0b6af161740c42dc8"],["/2023/07/15/xml-jie-xi/index.html","4b93c0d47f019f5a3c718faec4e27ea8"],["/2023/08/21/mvc-zu-jian/index.html","81812bf6d7cb8e58ea465440c3b3a374"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","fcd6892114b0be8a1674f5ebb91ccd4d"],["/2023/10/10/dan-li-mo-shi/index.html","3943e18e140c95ce5c784ed630f21b94"],["/2023/11/23/hua-dong-chuang-kou/index.html","9e2ed7bf90dc83a9d5ae854b8bf679c2"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","f746188e8a00b30d1b805265416a4717"],["/2024/01/13/niu-ke-div2/index.html","69b943c0ba4ea7b41ab56a3ce248186c"],["/2024/02/10/kafka-jian-jie/index.html","4bb12b53ddf0d8f13860a31ba4194841"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","5d1fac1bc2dca1bfd1565bcdfb9dfec4"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","0cc4cedb21357f2dac97a7270d8511e9"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","582321a6a368e72d1597b47047b6873c"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","85c2e1dc74086b9cc8405ea5cdea9d80"],["/2025/07/20/clean-code-notes/index.html","e2262cd96752ea6b59c8c9fda8cb0eaa"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","a943432e7629e6b3cbe47e6dd1df20eb"],["/2025/09/05/rocketmq-rebalance/index.html","7e8451b842c567f0a89f90c669270de7"],["/2025/10/20/redis-bigkey/index.html","3e552a9c349f9013ece20bda20da0341"],["/2025/11/15/online-oom-jprofiler/index.html","882ff56d28cc4b41790c53b9c42cf8cf"],["/2025/12/05/grove-high-output-management-1/index.html","243230b1bc94cfa781d92668f109adf7"],["/2025/12/20/huawei-management-strategy/index.html","e1b4d93888cf17b13b7df579e8d23916"],["/2026/01/05/grove-high-output-management-2/index.html","7ecbab543fbafd2e7b525bfb3da57578"],["/2026/01/15/rocketmq-internals/index.html","fb466ea9105ee109b6a4c10cb629c47f"],["/2026/01/25/huawei-management-cadre/index.html","22585e7d5141f119f810b6a0cdc75a5e"],["/2026/02/08/grove-high-output-management-3/index.html","53b3b7fa0bfa8ee4aea82b1fb49a0784"],["/2026/02/16/es-segment-commitpoint-translog/index.html","2a559dfc2f32d09f539ffacd6c89fbda"],["/2026/02/25/huawei-performance-incentive/index.html","c4cb60d862edde1893809ef5e0c1e85b"],["/2026/03/05/es-near-realtime-search-crud/index.html","a8ff3b37bdccdb3bc6f244641a5e842f"],["/2026/03/12/grove-high-output-management-4/index.html","9403aca467265b335ba1ea5589ae21cd"],["/2026/03/25/comprehensive-budget-management/index.html","361552d930020f204e7a81ee71a57d85"],["/2026/04/15/grove-high-output-management-5/index.html","293b6be5e2ca3abd0dbc9219d02c9bcb"],["/2026/04/28/ipd-integrated-product-development/index.html","4cdd0dde13c14ff1f6f2ab6b0e24fa73"],["/2026/05/05/grove-high-output-management-6/index.html","efe478e99ba59d386eb02c541fa359b1"],["/2026/06/08/es-pit-point-in-time/index.html","0183e6b0d1afe9399e4159b99bcd84e0"],["/2026/06/22/es-relevance-scoring/index.html","3237508180a9a90f9c93c91c210596d5"],["/404.html","bc5224e47bbe8a81208477a50539b4f8"],["/about/index.html","6109944ed7b97937ccdfc0c35ed67343"],["/archives/2021/11/index.html","aaaf5b12acf2dba6bea3a954b1afae16"],["/archives/2021/12/index.html","b934b2207d98b5ab130d00bfca7df72b"],["/archives/2021/index.html","749fbfba8d54cd3628c498332d9d0a99"],["/archives/2022/01/index.html","a996f837e773d1ef7dbf987f26c325b2"],["/archives/2022/02/index.html","6cb753b644247e5a44be875ee6f94bfc"],["/archives/2022/03/index.html","faa879fc2593bb91f5e22a316848c8bb"],["/archives/2022/04/index.html","2acf20ed2decf4e0e700254454f40a4f"],["/archives/2022/05/index.html","61a8ec846f117d1bacae3fab41df2edc"],["/archives/2022/06/index.html","bdf8544abb6251f1e47dced4cb4099e7"],["/archives/2022/07/index.html","58eaf223cb43ff383caba74fa9c04feb"],["/archives/2022/08/index.html","d9e679c62631e53ad229fbd26ab12753"],["/archives/2022/09/index.html","be49a5e9aa75e9d70c1c50ada53e401f"],["/archives/2022/10/index.html","bcb595e4a46294bf31814460df469381"],["/archives/2022/11/index.html","5b9cf9224bce73ec54634bdd96aa12ee"],["/archives/2022/12/index.html","73b9b4a7781c676897635dab05b9c7f5"],["/archives/2022/index.html","f72c7f972147cee403e2ea3acce270cf"],["/archives/2022/page/2/index.html","9e831f27ab8121f34a4f7095fc595f36"],["/archives/2022/page/3/index.html","6b4369040e66a65d71f209140f70a8ab"],["/archives/2022/page/4/index.html","c6f51ed39535dbe236779afc4be9f0b6"],["/archives/2023/01/index.html","3b05e16b9eb68cc26824740afa90e962"],["/archives/2023/02/index.html","209459a491866542ceb6b14a5c417c98"],["/archives/2023/03/index.html","583f5059e9497bf7e85252b7682eeb48"],["/archives/2023/04/index.html","f7f37fdab8ca1b5f34e3e4ae9b2f138a"],["/archives/2023/05/index.html","4d52ce7f4c2286507f2da0b133703c1f"],["/archives/2023/06/index.html","c10566fb5a9a8a0376095c31f9490c67"],["/archives/2023/07/index.html","f514221b2f40728dab33b582fac7a034"],["/archives/2023/08/index.html","fd7d4ea669e40e0fdec02dafb42894f0"],["/archives/2023/09/index.html","043461fd7b45fb35c85fe0bc523b8253"],["/archives/2023/10/index.html","ce01490253ea52e7c4a83786f7c6c807"],["/archives/2023/11/index.html","6fed47da740ed060c47a7fbfa3df869c"],["/archives/2023/12/index.html","0265950a02462e686a78e74ddd01a644"],["/archives/2023/index.html","7152018e95dd51436eb6e915dcb16360"],["/archives/2023/page/2/index.html","157746a870c0b9bb302d06033a95b8c5"],["/archives/2023/page/3/index.html","7a16386652e7025f138a57f585e583c5"],["/archives/2024/01/index.html","1d5389e1c643d6a92365f2120e3f754e"],["/archives/2024/02/index.html","7f8a1fe9264db5d00ea686bc067dc44c"],["/archives/2024/03/index.html","90233d906a2f4cbce727ac665d5381c7"],["/archives/2024/index.html","f9747962dcc66e971b6ff925eb266a16"],["/archives/2025/06/index.html","684e9cda4cb9e0c4a10f6f5d00e31d4f"],["/archives/2025/07/index.html","d1b81618b9489a8563c37043d0b11644"],["/archives/2025/08/index.html","bb1a1c3de4cb55a43fdc1823dd3dbb4a"],["/archives/2025/09/index.html","e8f6594d1fba907089571b52289ef546"],["/archives/2025/10/index.html","c48f8d06d2f8a582a72a2cd95b00a849"],["/archives/2025/11/index.html","f5d3d4b0f735c7137e2cea94747154b6"],["/archives/2025/12/index.html","96750146a3de144571a2e174546003cd"],["/archives/2025/index.html","af8b5b80cca931221df41cb18edd0ba0"],["/archives/2026/01/index.html","6784b5f608755ff0028d7daf94b3fa47"],["/archives/2026/02/index.html","5e25d6ddfd4ab94bd310c7a3e2bda1b5"],["/archives/2026/03/index.html","cbdccd3a928ae928e821e24ba73c738c"],["/archives/2026/04/index.html","88f9def3c4e437df477f288fa38d6a60"],["/archives/2026/05/index.html","f7ce41b89bddd7a8f7b7bd2f090e6ac0"],["/archives/2026/06/index.html","46d521dae78b11deaa3e0eb3222c1f38"],["/archives/2026/index.html","77715619cb4a4f5e979968ed4e2e3d8d"],["/archives/2026/page/2/index.html","2f2abbedb7aae2957f59e5b041221200"],["/archives/index.html","74e170e5c382d4711ddba86bec629e16"],["/archives/page/2/index.html","cd2c63e6413e4d7400fcb54b9951de65"],["/archives/page/3/index.html","0b1e06310db2c33d96dc19ee7a5386e3"],["/archives/page/4/index.html","9e02070321189d557f39d9a2922a6ccc"],["/archives/page/5/index.html","29057e1195705f14b17fab3c1f3d7eac"],["/archives/page/6/index.html","d98f89148b9e85c85e2e40f8748ad29d"],["/archives/page/7/index.html","01b080b9686b5a2c4d3aac76ad6b24ad"],["/archives/page/8/index.html","593425c0782f9fdfc78f6eb4545de5e1"],["/archives/page/9/index.html","7227b111ef8d7d429d9c7ec2a486ed5e"],["/bangumis/index.html","95acf2bafa155435d28a25d9f9b601cd"],["/categories/Java/index.html","44c9a1dd13d8c7fe41cb847aa8dae565"],["/categories/Java/page/2/index.html","120e1bfd50def5f206148c4bbc126d17"],["/categories/index.html","c10bb559484d4f1c377045c523b993ea"],["/categories/中间件/index.html","d5938f549c720e863c756a6c47ad34c1"],["/categories/数据库/index.html","edc7bf88ec7da69c572c25dd6ff55050"],["/categories/框架/index.html","d1fafb94eb3086f7bace09ef7b66fb29"],["/categories/算法/index.html","e2be00b4fa24dd60eb77f21345dfecad"],["/categories/算法/page/2/index.html","919e3fadae8545da7948f16aa2a83040"],["/categories/管理/index.html","b7c0c87d9a9054f05361c355d58df6d4"],["/categories/设计模式/index.html","181c25d14b7b6b0db7b8e1b0d15c52dd"],["/categories/读书笔记/index.html","660f5e2d544930506c9cc9602c631f28"],["/categories/问题排查/index.html","1df62ea41b982899ef8e4e9dd1aab6c7"],["/categories/随笔/index.html","b38dc84f8f8bd4d994959fb288993420"],["/categories/随笔/page/2/index.html","0400790a019497129ef1b106940315ae"],["/categories/项目实战/index.html","bf5e46bb5dfbb9108ca61d37810f3b90"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","5b681e4b2064838c740a1f1ab745553e"],["/gallery/index.html","2be8dcf006065353bfdd4c7161610e33"],["/index.html","418a4320463c2045781fc08ab2925880"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","92f704734762f935d2d2f9cc1209a96d"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","c5333ba1719a8a39640d1b87e8feae35"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","3303c97cb174292db4bd5ba66a7fcb05"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","8e8277bac14c853928ac1475c5b674da"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","6078c3b4d10794156b6d6884f5c64cc1"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","612faa306c30748d7034eb1a2e75e55b"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","557a1119462aced0b962043432c82911"],["/page/3/index.html","67dde56a392cf0434f2bc12cfe1ff5e3"],["/page/4/index.html","ffa033f80b8c77f689505bacb0efd0a0"],["/page/5/index.html","e5e3678b383b535587fc87fd2ee4b46d"],["/page/6/index.html","33fb6641271cd98b08e90a554c91fc07"],["/page/7/index.html","c8b36be042566f9a96db6b2b9beaf1fe"],["/page/8/index.html","71b3609987d08633dfa8760f09b2daae"],["/page/9/index.html","431b91e236e709f0c1531f335dc7c5ef"],["/shuoshuo/index.html","49d20a853439f88f13403ec1e79da928"],["/sw-register.js","f09fcd9bcd19aa7223fe2e38335f362c"],["/tags/EasyExcel/index.html","73b2ebc1b06dc51a040ccc6324ee66c4"],["/tags/Elasticsearch/index.html","e314aaf9ff012e9b669727547ee71cc1"],["/tags/IPD/index.html","1ecca04a39b4f01fa7106d2e38f746c5"],["/tags/JSP/index.html","887afa9dd68ea2dd8b44a9ea15e1910b"],["/tags/JUC/index.html","6d396b86eaff5a44e81f4b7d032b34cf"],["/tags/JVM/index.html","c0b59ec158d11f65fcee16130a6cf8ef"],["/tags/Java/index.html","d189ee62e49d49ecb6b645f7b4ac8a4a"],["/tags/JavaWeb/index.html","717ad3704a9f1cd9664044bb38414c54"],["/tags/Java基础/index.html","c6e89e6bd50dc7e6ce50fb65b7823030"],["/tags/Kafka/index.html","f3d2d4d225b3e3360fb9d86f904b078a"],["/tags/MyBatis/index.html","5c9b2c8dc663455d23f35d3a897572f0"],["/tags/MySQL/index.html","adf434d9034b815b9ef0019ceef14837"],["/tags/ORM/index.html","5b21269e223fecee10e61abb66cdf609"],["/tags/PS/index.html","dac13649c182d3a6358fb21e8cea7714"],["/tags/Redis/index.html","331ab63c18e0a6231bc2f5f25be17fb2"],["/tags/RocketMQ/index.html","8001ec63619575e6b6d8878451009655"],["/tags/Spring/index.html","a101c58a3220525ba0b90e444d577cbb"],["/tags/SpringBoot/index.html","c07f25358249251ae171b649ac695dfd"],["/tags/XML/index.html","9bfe5a3df177990827b7a8731d992792"],["/tags/index.html","b1d779cf989ce6ab2708577df50b7347"],["/tags/二叉树/index.html","a4416709a7c77e66caf4b8e9e81b55d7"],["/tags/产品研发/index.html","cb7326e1ad777f11f5293a7c88e1841b"],["/tags/人才管理/index.html","1bc3435768bfeb7e47ba08a7505b6205"],["/tags/分布式系统/index.html","446a64c35b138e21ac1f3962a454f8f7"],["/tags/分治法/index.html","adc74ed364af0ceee4785f1e6f9f4430"],["/tags/前缀和/index.html","3e5142697e919a8de955117722034d43"],["/tags/动态规划/index.html","d3c9751291a274fc21233ac005c990fc"],["/tags/华为/index.html","6305f3f8292ae2447aa7d7359b5f9216"],["/tags/回溯法/index.html","52913e2a20acfe7b29f61b28baff30cc"],["/tags/字符串/index.html","ae6c57770c35fde2665946bdb263eb52"],["/tags/工具库/index.html","9795cd06f403c8b7a37f77168197d9c9"],["/tags/并发/index.html","42edd64f4bd3c913259c148734b4d465"],["/tags/性能优化/index.html","d2942fbb6007afe0e0b1bfaa0ac5dd22"],["/tags/成长记录/index.html","3bd842e79edc240904eeee63157067c4"],["/tags/成长记录/page/2/index.html","cb354340d17a8ff64754e065db8a52c1"],["/tags/战略/index.html","69764f8c1fc79644f6071ef05e541010"],["/tags/搜索引擎/index.html","3356ca9bab019a4ea66caeb2dedfef96"],["/tags/框架/index.html","fd5532b4209ea34b5ab1388085c2a392"],["/tags/比赛补题/index.html","98e584dcb447bb965ee2a33f812793f2"],["/tags/消息队列/index.html","b82e990494c61aaa6dd6deaf20b2c10d"],["/tags/源码/index.html","131bb08aa396fc5322e25edfa7e12818"],["/tags/滑动窗口/index.html","b532eb4f4de1e888cb37200b6e34476b"],["/tags/算法/index.html","1af59f93b1950b20f8f375a9536ecfe3"],["/tags/算法/page/2/index.html","f243464eb639b26492d8c7434a936de5"],["/tags/管理/index.html","76d822dfef04544b07966458a47d4489"],["/tags/管理/page/2/index.html","52e46f9bdd383b8e3513869d55435865"],["/tags/绩效管理/index.html","f929a823efcd737819c0b6a1dae894d2"],["/tags/规范/index.html","e75651aa3208fc2ddbb79ba844770bd2"],["/tags/设计模式/index.html","5b44254a8da007d0e722535e08d8800b"],["/tags/读书笔记/index.html","0eb402d735907e4d07a237e70be67f37"],["/tags/财经/index.html","59a901009f123e8964a32b703ae79c87"],["/tags/软件工程/index.html","ada640914e73b53c4422edc8ec46e3f7"],["/tags/问题排查/index.html","8548cb74650459cc48650425ba87fea6"],["/tags/集合/index.html","78e985f76ca88af1ff5977d1e62a15d1"],["/tags/面试/index.html","e49a8078bb85af7be799a5ddb03f7cc6"],["/tags/项目/index.html","d73f587814dd79d3e7f35427981c0ae2"],["/tags/预算管理/index.html","7353b3339fbc372315d0d3615824a84b"],["/tags/高并发/index.html","c4ff8cd5bd3b7edf2e166b858a78d494"]];
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
