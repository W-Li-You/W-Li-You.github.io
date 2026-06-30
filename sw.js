/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","34f71f736c0188ae353088f298c56fa9"],["/2021/12/05/zi-wo-zong-jie/index.html","83ea89b9b4aee5a8a79e9602c8baa8dd"],["/2021/12/12/zi-wo-zong-jie-san/index.html","465a66e436e017848942c8215ddf2c5a"],["/2021/12/18/zi-wo-zong-jie-si/index.html","7f03c56de112fa888c71041f19b49d2d"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","51a199c90756f093cdfda936b2dc7203"],["/2022/01/23/han-jia-zong-jie/index.html","e706a7590bed44e78b80f600407fca62"],["/2022/02/13/han-jia-zong-jie-er/index.html","3ecc0d1806e2cc83bc38de2d51eb6412"],["/2022/02/20/han-jia-zong-jie-san/index.html","d760bc9a38841b710749b063c88006c8"],["/2022/02/26/mei-zhou-zong-jie/index.html","52a84bdefd7e3a44a5198f94c89b1837"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","af3dbb1ae162a83e2f54fe9688d0c513"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","607f740f48ac4068fa779f68ca443a00"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","cd4122dfda51acf997d7054c2248d41a"],["/2022/03/26/springmvc/index.html","083179b1adbd413c2a4a5054752e1764"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","7c11c0387a1ce8c6dbefaf1358349f31"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","d3a5a966585c71febbd351ca08b27e6f"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","c054cc8b049b436bf811a951dfc30e37"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","d2db22c615fdb7a6dd68d783d1178089"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","9aebb401492a535a92a078fdba5b5953"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","cef78703b68203007cfe15f4587c48fd"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","40fab06e6eb8a491e794b2e98116a7f4"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","3dbd0edd46f7932c1cf5abbb56114037"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","e41c1a64a62daee14cb032a5ed37d644"],["/2022/06/25/redis-chi-jiu-hua/index.html","61ef43746ff9a2fc3b2d42645614c952"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","9cf39892e9bd662beec66ba30d3bfd28"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","3827514885fb71e4092d3737dd114164"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","7741d91aa7ed38f8ab8e7745d81f8f12"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","46b06095bbf66438e2110d3189a3cd1b"],["/2022/09/15/mysql-yin-qing/index.html","398092abbb031dc38ebb35480fc4fbf7"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","f82fd93e0689e08a46d880c9054db4b8"],["/2022/10/13/arraylist/index.html","9090f2f8f455f4e69a8938890ca44bf7"],["/2022/10/16/linklist/index.html","712d8916ced0a0c405c88ca77cb6f3e6"],["/2022/10/18/vector/index.html","cbb7cc48adcd9807c7550b07e61ff6d7"],["/2022/10/30/mysql-suo-yin/index.html","946b32ed13d0a6d72f796d7834682eda"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","b983f0195b55590060710e5bd1b5b7b8"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","7e8271166ab77ab25fe1ffff6336bca3"],["/2022/11/20/pc-ji-cun-qi/index.html","6c88d715d20beaeb4e5146806ed0c333"],["/2022/11/27/ji-he-mian-shi-ti/index.html","95af21ec679e04a0948776c9ec53878e"],["/2022/12/04/ben-zhou-xiao-jie/index.html","dbcbcf4921bf525f959aea31a394ace5"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","44c1f7caa2500c1e9c2947904f918f41"],["/2023/01/15/bei-bao-wen-ti/index.html","984a9501d6a041859d1171fd75ec1777"],["/2023/02/05/easyexcel/index.html","a82fbb395812b26c699c0928bae31704"],["/2023/02/19/jvm-mian-shi-ti/index.html","cba40d461a589c9318909a7ef8fef572"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","3c7f610934a9e816c0acae15a0c188d1"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","19026d24dd4004ea5260d35bf8367d6d"],["/2023/03/11/yang-hui-san-jiao/index.html","f1c97086a9eb1c77757bc496632cd032"],["/2023/03/19/he-wei-k/index.html","3605b45a2161825499461eb2495ff1ef"],["/2023/03/26/juc/index.html","8b7cb8112cd2559be11e90da3b33ab0f"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","fa91ba408883d1e06773427a44f3d7b7"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","3b8a4755ab684121bbb82276e58160b7"],["/2023/04/20/mysql-gao-ji-yi/index.html","bdc292fef565dcf6f1922d4459575689"],["/2023/05/01/mysql-gao-ji-er/index.html","a9192932e4212c6ee05639dae92cb607"],["/2023/05/11/mysql-suo/index.html","1889190ca1aad2feffe0431e487c4e1a"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","a0c43dda5d2bc0733222dc00f66dfbdd"],["/2023/05/23/mysql-ri-zhi/index.html","7f81d98c9f284b3c5ee5c052a12c40aa"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","92fd9871aa59bece85185bb8efb24608"],["/2023/07/15/xml-jie-xi/index.html","ac4d1d66ec6c5863b8e914d4d07db3f6"],["/2023/08/21/mvc-zu-jian/index.html","69cbd8832200983e37cf4038d5274557"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","cc865c96279c0d952be6b1d42eece791"],["/2023/10/10/dan-li-mo-shi/index.html","25a8ca49764a171f41cf07e879edefec"],["/2023/11/23/hua-dong-chuang-kou/index.html","a0ae7c3f289c447f0c31056b3ea32915"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","6053bb30a88eaccc048552907706acdf"],["/2024/01/13/niu-ke-div2/index.html","9121525e60ad616724a38e9c9034abe5"],["/2024/02/10/kafka-jian-jie/index.html","5596e8aac65be6503927472e9de8f8b7"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","23747e2ef15e5cb1ea12b81c6bfc7331"],["/2024/04/15/grove-high-output-management-1/index.html","754116b69a05546f9c38a97ed50f45e1"],["/2024/05/20/grove-high-output-management-2/index.html","57d689fbb641b8fb3a9ad7dc57ba5297"],["/2024/06/18/grove-high-output-management-3/index.html","51539c103277b3406dccc22e98045360"],["/2024/08/10/grove-high-output-management-4/index.html","5c95d5dfa304a7ab9e6fdc19c5cb60fd"],["/2024/09/10/redis-data-structures/index.html","fa56f5a89973b2cef9dd3b6efdecf683"],["/2024/10/12/grove-high-output-management-5/index.html","1905778eb5ab2b34f1e1f5ed463ccfda"],["/2024/11/18/thread-pool-guide/index.html","15839052f81a9695e5df27b2ae7f3bd3"],["/2024/12/05/grove-high-output-management-6/index.html","703d3e4e92c9b232731c4c46540c5e6b"],["/2025/01/15/rocketmq-rebalance/index.html","ff32b19f3f3d2ce2ee8ffdbadb51b4ef"],["/2025/02/20/alibaba-java-coding-guidelines-1/index.html","eebc082a91031f20789893259fa9631d"],["/2025/03/18/alibaba-java-coding-guidelines-2/index.html","759ba4f160d65a1055540484f854763b"],["/2025/04/10/alibaba-java-coding-guidelines-3/index.html","b6f2f4a515d19965b149397e6162b5d2"],["/2025/05/08/java-spi/index.html","a121fcbb069a49e32266ef42302bce7d"],["/2025/06/12/spring-bean-lifecycle/index.html","7251e3c32f1b292f9b55dd2fda14f2e5"],["/2025/07/22/mysql-transaction-mvcc/index.html","75f60750fa7e100ba332694ebde75bca"],["/2025/08/20/elasticsearch-the-definitive-guide/index.html","bc9a9825d15960ff7b890d916384683f"],["/2025/09/10/clean-code-notes/index.html","420fd8c0894bc21f010fb03349b346a7"],["/2025/10/15/distributed-rate-limiting/index.html","ea33bd1ff94dae17e2f98b763aec0fbe"],["/2025/11/20/redis-bigkey/index.html","01cf468cfa1d428c9873b2e8ccf23fc8"],["/2025/12/10/rocketmq-internals/index.html","404a63e905b38283dd01852d4ca8d13f"],["/2026/01/20/es-segment-commitpoint-translog/index.html","af529f86b2343b070de9a0e19722ba50"],["/2026/02/01/es-near-realtime-search-crud/index.html","6749187111ff5934fcc4f86566ae6124"],["/2026/03/10/cache-consistency/index.html","c9075c59bf3a90e4f8da663e6210fbb7"],["/404.html","3c1f0cbbb50a1c168464448f6f519da3"],["/about/index.html","157a23d1242ca7a1fc022083b831cfd3"],["/archives/2021/11/index.html","66fe738e6fe40ff1464901674c560745"],["/archives/2021/12/index.html","5960bfd4b1a52461831146e5f40ffa40"],["/archives/2021/index.html","637abe1ba9fd0e47053a50ec63a74ea9"],["/archives/2022/01/index.html","6c66baf73e11db74cee6801d42593c8c"],["/archives/2022/02/index.html","cd29fef073ce1f8781c813b85a834e3d"],["/archives/2022/03/index.html","dbc00112650b9b11bdfff65382e28dbe"],["/archives/2022/04/index.html","298bd9b58ae12dde33d708dcac3e013d"],["/archives/2022/05/index.html","8c1536f4160eb2d1ce5f758c54177c9f"],["/archives/2022/06/index.html","d5f60a5c74672ad0301a5d0e53eaa4da"],["/archives/2022/07/index.html","80979bf8bfa66c17708f244468c6e49e"],["/archives/2022/08/index.html","b75502e9b1531198786abf58220ba83f"],["/archives/2022/09/index.html","e5bc8908b647f01dd8a7a94c8b55b420"],["/archives/2022/10/index.html","30050adc4be525adc11742d6bae51e04"],["/archives/2022/11/index.html","0e7a2115f7f3da091fd67bb17a9c52da"],["/archives/2022/12/index.html","40f7b942e659b5a587197d54c3a182fc"],["/archives/2022/index.html","0bd7e8e0777ff8a75a30cdf37e855922"],["/archives/2022/page/2/index.html","66e4378d5c4308a66493d5f664724271"],["/archives/2022/page/3/index.html","a268330197e464fda7958e93ed6e5df4"],["/archives/2022/page/4/index.html","c6fbe775f1e21bcdef490ac73da30a8b"],["/archives/2023/01/index.html","5a9e7ba020b15e0784adbd49777526c8"],["/archives/2023/02/index.html","8ff2f1e005e6bdcac29e3f3ec33171de"],["/archives/2023/03/index.html","7bfcaeb883b0444dd02df38d942d5dbc"],["/archives/2023/04/index.html","35bdc06f50dee96f9507ad96a1f043c8"],["/archives/2023/05/index.html","b85669b7bf4f8e08103d1f39dc4d9e40"],["/archives/2023/06/index.html","352ff36256a84c68c7869cb456f55619"],["/archives/2023/07/index.html","6099681847a2aee78fde036e8ef1fa7b"],["/archives/2023/08/index.html","337ad4001f9ca4c0cca0e84a56c25ed0"],["/archives/2023/09/index.html","f9980b5954ca4f6a9355ae2de7c5c3f0"],["/archives/2023/10/index.html","c87009cf1bdaed08ae6edda68364efd7"],["/archives/2023/11/index.html","3d3abae2840f0df6c6bb68212d95c084"],["/archives/2023/12/index.html","017e9555cc947b09766379cd93f5e629"],["/archives/2023/index.html","d233d0c29b7598f46bb84513e5a6131e"],["/archives/2023/page/2/index.html","ec6b3cffb0089d8c66237a1007bd2183"],["/archives/2023/page/3/index.html","b58ba00d0d5ab3fbd574891847815a62"],["/archives/2024/01/index.html","53563f56f415712c3a610d32832b362f"],["/archives/2024/02/index.html","4be83666f930636ddea41f9f76970135"],["/archives/2024/03/index.html","ce71743baad41a4c2568c876c8e2dd2f"],["/archives/2024/04/index.html","4860c4f2aae42e6d652cbd5a17e3e5fa"],["/archives/2024/05/index.html","ba9c84febc6c0c0ddae9cccb7ee4a482"],["/archives/2024/06/index.html","7accbaa18211e7a9f8c0579e476b8960"],["/archives/2024/08/index.html","2e9f67e6b68339618ae3e64b155f62b5"],["/archives/2024/09/index.html","12ed481cc2d9c0414851ff0680db444b"],["/archives/2024/10/index.html","9958136bfed8ea20789e7904a9c68e21"],["/archives/2024/11/index.html","e6113d721b21b68396ee9132f97fa2c8"],["/archives/2024/12/index.html","6fef924860d05981550769254b3eaeb3"],["/archives/2024/index.html","1088f2315ac3dfc33c390882eb995cac"],["/archives/2024/page/2/index.html","92074d0fed5e53e50df94a1e1043c403"],["/archives/2025/01/index.html","51d0115d4db518eff6a25210108b002b"],["/archives/2025/02/index.html","2c6b158632f24d6d19739e15fd8bf382"],["/archives/2025/03/index.html","1f00cd322012a0c017556e4b3fc639c3"],["/archives/2025/04/index.html","7e757f290eb7a0a3ad98cdedc8a2305e"],["/archives/2025/05/index.html","b7d648e4ed2013e59ab43136b73000ad"],["/archives/2025/06/index.html","8275af4f7cc1f0c337cd7e4be0d9e526"],["/archives/2025/07/index.html","2b4a91c5510708005e6f2283a7ffa68c"],["/archives/2025/08/index.html","d3ca2e8c43651350508b800b3f262d6b"],["/archives/2025/09/index.html","0af6aaf4d6229e74d951e0a7a1667718"],["/archives/2025/10/index.html","3571a28a222336f2ce976b4118ee4985"],["/archives/2025/11/index.html","9909c87c806a47a33eb51bf592489a29"],["/archives/2025/12/index.html","69ab0a3b19b55a521cba45ead7a207ea"],["/archives/2025/index.html","f1ba26109444c8aee8a36a93d4f3106a"],["/archives/2025/page/2/index.html","833f21bccc4fe909cbd0ca0badf67959"],["/archives/2026/01/index.html","41ad7b5db68cc5da2ad25cbdf113da53"],["/archives/2026/02/index.html","d3a66a93c7ae6b3db4f73d681704332a"],["/archives/2026/03/index.html","0915158c70ca4ccadb864a25d77560fe"],["/archives/2026/index.html","d8bc56d1a9bb579e364da6e50df1b63b"],["/archives/index.html","0abfdeaacfd6ac1c143be7f9261f5be4"],["/archives/page/2/index.html","3f9c93bc3944568d350572af4315ff6b"],["/archives/page/3/index.html","489cb1d4530e33583bcdd5581789a406"],["/archives/page/4/index.html","98c306e1c0ee7bad5a951a7d8e561b4d"],["/archives/page/5/index.html","6c95440d9316b9e43617a8130a83b929"],["/archives/page/6/index.html","a3a0afeeba2fb7b841c7e9fa191803b3"],["/archives/page/7/index.html","24227b00b32197806f8d5b6574d62fcd"],["/archives/page/8/index.html","66e032f544a0b63aed12f7d6371726f6"],["/archives/page/9/index.html","2ce3a95833d42cc593569c15af0c1626"],["/bangumis/index.html","11e9cffed0ce38223d61bff0786e8cba"],["/categories/Java/index.html","c89689762155e6d6dd295e71f14ba320"],["/categories/Java/page/2/index.html","f34166c55f118a167bf558094c51db91"],["/categories/index.html","10fef2356ccb3ac3678588b198914907"],["/categories/中间件/index.html","a165707d295bd1ee5002109eba8c3b94"],["/categories/数据库/index.html","22f4f0f662c417eabf62059bd1394c17"],["/categories/数据库/page/2/index.html","57b6d73de6578fcfb952436d1e7c4a61"],["/categories/框架/index.html","799f60aac3c186d9e0e13283e5851ffd"],["/categories/算法/index.html","feadfb5476a9efd69ebde063a4a840b3"],["/categories/算法/page/2/index.html","15d45123843b6d09764020aae2d6d415"],["/categories/设计模式/index.html","76f85c0108b5b90dc42ecee5954a1895"],["/categories/读书笔记/index.html","cb98a4bbde0258064ecfe621e15c4056"],["/categories/随笔/index.html","f3ef61b05dcae4225b0cf18329b96864"],["/categories/随笔/page/2/index.html","b75660d419375323a14c8eb0d3f1f8ca"],["/categories/项目实战/index.html","2ae619ada97355304cf07db62e33f66f"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","7f869ae09faa0ba0d78402a47efe659d"],["/friends/index.html","03b3ac11a88ff8a6e2a1c67807da768c"],["/gallery/index.html","7e2385bb0c079e072faec4b9842c0e28"],["/index.html","c9cd13a69edcc5c683af12a2c71912ec"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","47b1a2985eae9e1322c171aeb3c8494f"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","99e09056df023be6fac924ada2fcacb1"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","6ba4517e23676f37f6e3ba87acff99a1"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","5b40f862a2477363a6fc724c04eccd12"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","d8b01b0a99bda95ac8e79a4596e92234"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","f67f5b050e1da585946e03aebd45d4a0"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","f29a76737118463005e29ad438f0fef7"],["/page/3/index.html","026f9bd369c2f989dab544336e7927df"],["/page/4/index.html","163e50498e75fd5440fc36b9713589b3"],["/page/5/index.html","232df314884a15e6ff56d6b85c22be1b"],["/page/6/index.html","67608f41fa7b4f5c53b1675c9dc2dfe6"],["/page/7/index.html","7a0a7b5fef1996f0dd8cefb09fd5f9ae"],["/page/8/index.html","e2a57d50213f41cd648a4b7d45d9b920"],["/page/9/index.html","c82e4a56da84e8b241a96e0e606ec482"],["/shuoshuo/index.html","b931fc23e467c023bfa5838ab9b5730c"],["/sw-register.js","19a36c8c9fa99268190ffa311a2ea91f"],["/tags/EasyExcel/index.html","d44c899c5f87ea2f8b3004c09f9573e5"],["/tags/Elasticsearch/index.html","7f68e4c1d9f262ef59a818fe7d9afddc"],["/tags/JSP/index.html","a5a7bd77c76a23f0511eba9801047d27"],["/tags/JUC/index.html","87352b42b604a74bdd1778c66fae694a"],["/tags/JVM/index.html","c10c997e34aea4bb4b9f1eca6d51f70d"],["/tags/Java/index.html","7b2c27d150bd274f8f73415036455df6"],["/tags/JavaWeb/index.html","307df024b0df53f860126551a4136873"],["/tags/Java基础/index.html","f228c88319cab59eef93576b9faf0a29"],["/tags/Kafka/index.html","d44ff32a13694aa567fb64e28f9428d0"],["/tags/MyBatis/index.html","91806ee02399cfc2e2be3710f81a41e2"],["/tags/MySQL/index.html","c643122134e951497e0f9920e7e57570"],["/tags/ORM/index.html","5450a7b2c5326eb670ae45e6d88f2bec"],["/tags/PS/index.html","236f2559624e6dcc9699cba4ad058bf3"],["/tags/Redis/index.html","aff2e2d09fc7ffd511c8bc7dec02dc17"],["/tags/RocketMQ/index.html","75cc7a16f33e3af6ebff0d8c92794999"],["/tags/Spring/index.html","d1172d18fd609c270420e80d3386133b"],["/tags/SpringBoot/index.html","cbe828cf6e32eaf90c31933611b8bba0"],["/tags/XML/index.html","d77b2e7ecd5647ba3d9fc0e9456ad7f1"],["/tags/index.html","804884e3182252bf9320b2447736e0f1"],["/tags/事务/index.html","7ac430b36a9e999dec06d1a27dcdc9ac"],["/tags/二叉树/index.html","0395f34e85886f2834445aeea3e49382"],["/tags/分布式系统/index.html","95dc34127353055a53a0764e3523e4b3"],["/tags/分治法/index.html","b216effb06ee4f299ed7331c88be7e3d"],["/tags/前缀和/index.html","a0415eb6516addc0c13fa666884c0414"],["/tags/动态规划/index.html","69fc26ce1fc573a08c2167ae38da6741"],["/tags/回溯法/index.html","3bad7fe1dc5087e98fcf3723ce30b57c"],["/tags/字符串/index.html","8c0579784379c8e196934ff393ed6148"],["/tags/工具库/index.html","14cacdd16987ebe0703da9d742c0d78d"],["/tags/并发/index.html","bdbd609f9ceac8afcba47c79d77d07bb"],["/tags/成长记录/index.html","b501800f70ff5fd24cfd0b0a91cdd86a"],["/tags/成长记录/page/2/index.html","a124763e6fa34ff366b4b6003f7aa516"],["/tags/框架/index.html","fcb54b267de4671dcc19288b21b32843"],["/tags/比赛补题/index.html","a84258b7d3618c9055a75a4566ce99a0"],["/tags/消息队列/index.html","1bd4df2cec4a70e07b77bff1edde6b20"],["/tags/源码/index.html","8f855e4e7cc71169d12a047ac4dea5af"],["/tags/滑动窗口/index.html","0fdcfe10ead727afbd6846b60bcd174a"],["/tags/算法/index.html","044e3c371b6d2e663ffd3bf50f79cb8c"],["/tags/算法/page/2/index.html","d2989755436273443150daf5ed7626d3"],["/tags/管理/index.html","61246b596e202a8d687d7a626a80d1b9"],["/tags/线程池/index.html","db951bfbeafaebf8e95be77929f562c2"],["/tags/缓存/index.html","ca0937e3969a9705c1edc58d5c73399e"],["/tags/规范/index.html","f0fd0d23bad08faaad7ff5d6068d54b7"],["/tags/设计模式/index.html","1ea1f4ad6417286e6139cfb1d942ec1e"],["/tags/读书笔记/index.html","e7420c1e293b45e3e5182d52e00690bb"],["/tags/问题排查/index.html","b75ca3b3b96fcf7f397cc0da2665840d"],["/tags/限流/index.html","4795f02bc8f83ab58c4dba6b279d5403"],["/tags/集合/index.html","cefadcaef5a72066d459389b9c2fad21"],["/tags/面试/index.html","4ce312b665c8f510ac89d8d223c0037f"],["/tags/项目/index.html","ef5c7ddd15780f88c73e4146a10dafb4"],["/tags/高并发/index.html","29a99ad0d00f4ebf155e71088ce993ff"]];
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
