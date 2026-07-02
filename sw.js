/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","cebc869638b95539fd1547702d4c64a9"],["/2021/12/05/zi-wo-zong-jie/index.html","776aded8c84a5c971836d6af75d8fb78"],["/2021/12/12/zi-wo-zong-jie-san/index.html","da02967820ebf1a9822f3687429f43ba"],["/2021/12/18/zi-wo-zong-jie-si/index.html","0fe9c8e0e4c15863b905f68ac6b418d1"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","d54ec593f8e8fc610a491cb24b17c83b"],["/2022/01/23/han-jia-zong-jie/index.html","9f43b263a9e62f25d4b070efa1ff97d0"],["/2022/02/13/han-jia-zong-jie-er/index.html","41e6c291a1079157b9ecb7c9ece00cfc"],["/2022/02/20/han-jia-zong-jie-san/index.html","11bc5fd1b381f25e6f6bb1289cec6e8e"],["/2022/02/26/mei-zhou-zong-jie/index.html","c771c33095f7b6613a7740786c91a10c"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","e8baf969beb116e58607bd9573eee6e8"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","2a0662bc1ec63e3e4c8baa42125652ee"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","adfc15e8a6780345b7f340e514df6ea0"],["/2022/03/26/springmvc/index.html","ee7a2224424f0938998d4d1de9c3ed0c"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","534b981065c9847447fdee60fe8c92f3"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","f0a8296b410ef2744f1a4d761f8f0a5e"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","a2334f8c1df133fe83bf28caace59b8a"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","d34dbe2aba4921ab5b7721346af9e16b"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","662fb097747b141203ce82f3e0275598"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","03ebd2db0605a43e21f64a86ffe59882"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","bc0f6f7a221d045b6fa27fff8ad72af6"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","1d5e994f107f02e40ea47e200b432fa0"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","2ae64fd54b6ef9e3dcee131668c84a37"],["/2022/06/25/redis-chi-jiu-hua/index.html","7ebce180d4a665893c30b2dba832718a"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","d4fa967fabf2b422532b133103031ed0"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","94a79ae42549c2cf33adab175b7e0c7c"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","2b34e8c4e018f8f492967cea3f7c44be"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","3cbb255a13bb1184ed929d9d8a978fab"],["/2022/09/15/mysql-yin-qing/index.html","9bf74c4a5258932fff35b623f7f59c6c"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","23093902661e6a419e81121e573f6958"],["/2022/10/13/arraylist/index.html","2c3eea23a8b1b5ed5f85c5b02474347c"],["/2022/10/16/linklist/index.html","6494e57daedbc4e3b20c5ad73748827c"],["/2022/10/18/vector/index.html","5b1df013f092633984ae084d8da87e40"],["/2022/10/30/mysql-suo-yin/index.html","0da499454fa56c8f7d05a5567f4e446d"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","c3bed56ec025d2767423fbc04272843a"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","3de625fb9d4ee1b4fd11e5faa02f42a2"],["/2022/11/20/pc-ji-cun-qi/index.html","f3a5947da9c20cb5c11028f442ac9699"],["/2022/11/27/ji-he-mian-shi-ti/index.html","4ae0e23044d84b40d437e54aa037297e"],["/2022/12/04/ben-zhou-xiao-jie/index.html","a9cddb456230add306c7165460b36979"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","a78fe5afe6cdc3640e14a3e18ddba4ec"],["/2023/01/15/bei-bao-wen-ti/index.html","e7e3e1fc24f0e45a2e90c781488a0ef2"],["/2023/02/05/easyexcel/index.html","bde762a1a85724745f05762aba519cd2"],["/2023/02/19/jvm-mian-shi-ti/index.html","8ef9f73fab82fc1da1c23a95db8fc8c2"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","e9421d7954b985798cafae57b16bf592"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","48535c3dad82224b397e02dc279762f0"],["/2023/03/11/yang-hui-san-jiao/index.html","1f351566205f32a8b2682c5515ab756a"],["/2023/03/19/he-wei-k/index.html","081d90c00f5d04abc996d51e8f77cb67"],["/2023/03/26/juc/index.html","7211bd07016b2852989f57ae48d8c131"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","2cf3edf25569b253b7db11cdbd38b004"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","b23e5a2f57483748cf11b85973781918"],["/2023/04/20/mysql-gao-ji-yi/index.html","d1311e6bf974c9ea16ef5a8b046ba1df"],["/2023/05/01/mysql-gao-ji-er/index.html","f4de5f022bfa94f7880506b50d841e82"],["/2023/05/11/mysql-suo/index.html","8f7e7f15f52cb232c9138eb6beeac513"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","362695b09efbb5fa49deda0b8124e480"],["/2023/05/23/mysql-ri-zhi/index.html","1007c575f2063879efdd476e7e01e24f"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","587430ae3ba026b8856ecd26bac3415a"],["/2023/07/15/xml-jie-xi/index.html","1246c82b0c32b62edbe4ba8e7bb51779"],["/2023/08/21/mvc-zu-jian/index.html","4352ca61daebe50a503ce44a687e9c98"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","aa877e7abb11b0961064a5b75f401dd0"],["/2023/10/10/dan-li-mo-shi/index.html","c7ce1345e6e9e2a738cdd14e551fe13a"],["/2023/11/23/hua-dong-chuang-kou/index.html","dc2fc8712766194830daf702df22c676"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","9d04c622b2b212201d9ef909194fc8bf"],["/2024/01/13/niu-ke-div2/index.html","def4e9141adbb5d278579ff933f0853d"],["/2024/02/10/kafka-jian-jie/index.html","9f4acd360d94950febf53ad81def8b97"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","ffe9671026ba03dbd3978162dbb63c58"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","7fb93868deb121dfb1ccacd7b22ddcb7"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","21ae0e528819d4364c1235ed51001a4c"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","c669df6f41bff1661c5078c0226d2560"],["/2025/07/20/clean-code-notes/index.html","b88506b9a41a4c41379670bbad3a409f"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","c5f6f6d5fe94d1ef1fb09697576fa9ba"],["/2025/09/05/rocketmq-rebalance/index.html","b7307554d9f796d5c821fd73f9a633af"],["/2025/10/20/redis-bigkey/index.html","9f031ebf50a92d153634478186dac139"],["/2025/11/15/online-oom-jprofiler/index.html","d499d90603beb3cadde02512bb7e28d7"],["/2025/12/05/grove-high-output-management-1/index.html","cb72967dfe5b9fd9e3e37e804777f643"],["/2025/12/20/huawei-management-strategy/index.html","3ee19c4b8b16f33cc2f9a7136d248573"],["/2026/01/05/grove-high-output-management-2/index.html","f2d7840499f96a87a58728b427020189"],["/2026/01/15/rocketmq-internals/index.html","762f854edaab5284cb09a40618dba74e"],["/2026/01/25/huawei-management-cadre/index.html","30767b446aac73083cc2c01982699452"],["/2026/02/08/grove-high-output-management-3/index.html","785a2cb73a3747c062a2dca5da9a8bda"],["/2026/02/16/es-segment-commitpoint-translog/index.html","93e5402a82ef0757cd1be4bb344c2f51"],["/2026/02/25/huawei-performance-incentive/index.html","4859910366a2b4172e99c11adbc3f8ab"],["/2026/03/05/es-near-realtime-search-crud/index.html","2d420aeb385b3a846fd0b420a22fef0b"],["/2026/03/12/grove-high-output-management-4/index.html","2861cf0dc2fd3b2068e0c3ceb3c080c1"],["/2026/03/25/comprehensive-budget-management/index.html","3eb6fc8189aa1045ebd530a5f2f4d0c1"],["/2026/04/15/grove-high-output-management-5/index.html","cf3d57f5aed21f1ebf43120f975c40f8"],["/2026/04/28/ipd-integrated-product-development/index.html","eb06dc5c314b152c9be08d7b23222db2"],["/2026/05/05/grove-high-output-management-6/index.html","1ca74cde52387fefb654cde085d22b13"],["/2026/06/08/es-pit-point-in-time/index.html","d9641ffbf43e84114a4cf9241c18ba16"],["/2026/06/22/es-relevance-scoring/index.html","91d764edc44a36188ce76726a0f65445"],["/404.html","33d93c1ef23ee379b4eca3f9cdef4ec3"],["/about/index.html","2a7ded68c3ce7aa208fa747440d4d7cd"],["/archives/2021/11/index.html","64f145eb561cf5fab9e57a1fc262e068"],["/archives/2021/12/index.html","08243e314ae2482e4d0e15dccb0d8398"],["/archives/2021/index.html","d04d2009386d2d8a609478f377c5b8aa"],["/archives/2022/01/index.html","45f97358b25a506d8a7eb6386c28f734"],["/archives/2022/02/index.html","50974078179f83c14663042afdd2a12c"],["/archives/2022/03/index.html","2daaa589455be328a1e6e76b24cd36cb"],["/archives/2022/04/index.html","bc2dc5b7d4acc2534d349386bf9df5de"],["/archives/2022/05/index.html","183ef0944b645bcb07cdfa752337b0d6"],["/archives/2022/06/index.html","ed40911c30ae3ebbe143293c44570421"],["/archives/2022/07/index.html","8bb0e2a4ffa2244343500c3f3c1f0739"],["/archives/2022/08/index.html","7028df90d295004cd1d045843252664f"],["/archives/2022/09/index.html","12d2b8f48a3fcc9bc08be5cd3a7eb85e"],["/archives/2022/10/index.html","2d935ea59751fd3f6eba2e1ae1487b89"],["/archives/2022/11/index.html","5a9806247b9f670187dbe47bc871c034"],["/archives/2022/12/index.html","da9cedc17dcc8f6163932f4604a7a4fe"],["/archives/2022/index.html","51cd4e3bdd34c834a53e2a216483c212"],["/archives/2022/page/2/index.html","68f6f228441fcba9bf0891df680af92c"],["/archives/2022/page/3/index.html","aeed230fd39f5f56e0515433f735d3fe"],["/archives/2022/page/4/index.html","a886ad9234c3389b18916c05ccb75647"],["/archives/2023/01/index.html","2b9769a898e41a295b098160c283cf14"],["/archives/2023/02/index.html","7dd1223422e68e3c84f198944b767aa7"],["/archives/2023/03/index.html","6eba80b465b6e4a46da8c65aa1270d14"],["/archives/2023/04/index.html","7301712776ff283031195046f17c15e0"],["/archives/2023/05/index.html","a7b61b8a970bc0117e1179ccb3f87d9b"],["/archives/2023/06/index.html","eef90495a1cdc4ce35dd4d6b2f45d119"],["/archives/2023/07/index.html","2f7e694c39c5a5265f9584c746c4c2b5"],["/archives/2023/08/index.html","7c78a08babe7495720d6c18db48f2dbb"],["/archives/2023/09/index.html","3c7ad98280605d7f67afa8191220367c"],["/archives/2023/10/index.html","2e7058a50f7bae0ba8e1af265c8bbe85"],["/archives/2023/11/index.html","dac01deb3ae505db7d277ed0fde11831"],["/archives/2023/12/index.html","17ade16222a5828be5e8fbceeb0b7d53"],["/archives/2023/index.html","42031027966c57ad1f28316bb36346a2"],["/archives/2023/page/2/index.html","95ef019916eba26385c0e2f468abebfb"],["/archives/2023/page/3/index.html","7089bfcbf3cc6c5a6b1db2c60213564b"],["/archives/2024/01/index.html","f397782ee4e5fa25d11d20540293a7e9"],["/archives/2024/02/index.html","fddf8c8117f866744aea9bc28c42c454"],["/archives/2024/03/index.html","8f67feb32c70e0ab10008c0da52dc8b7"],["/archives/2024/index.html","751f2063072dcf38a35e355ed93208b1"],["/archives/2025/06/index.html","b6191d1aeaf5a72e4e23bc01124419e2"],["/archives/2025/07/index.html","5bfa7e28bc8b2cb18294d4b950fb5ed5"],["/archives/2025/08/index.html","d0bdf7eb4abd74c31013a5495a06baad"],["/archives/2025/09/index.html","4afe05c7a815214af035427142210ca0"],["/archives/2025/10/index.html","4bebbb8f9c41787e5a6e9e832eea989f"],["/archives/2025/11/index.html","c33bc7bbaf9c1f84921c85742dc2ee54"],["/archives/2025/12/index.html","c3e7625cab3565c7278ea67753a3a934"],["/archives/2025/index.html","2156843d045d7baf0ebd039d358bbff4"],["/archives/2026/01/index.html","e2ada1b699d54d249e1c3ba3968cd48b"],["/archives/2026/02/index.html","488463ae6f5d2be6bbe9d96e0f66d3c1"],["/archives/2026/03/index.html","3f89a9288e1fec128954a9267474d104"],["/archives/2026/04/index.html","e8f4a382dc81fa40221b04b4c2f9d774"],["/archives/2026/05/index.html","94a7a8a875164fcc41e209f2fde1e4ba"],["/archives/2026/06/index.html","954e71c6744c32a039d685577fea582b"],["/archives/2026/index.html","9bd2b1c871f1b9af6e58d0b894ade166"],["/archives/2026/page/2/index.html","ce8e667d9fc54389e5bb750c01739308"],["/archives/index.html","ccfec89cbf735f5a27a9e54c4c5fedca"],["/archives/page/2/index.html","22fa8b50618c01f72c6e426cd617216c"],["/archives/page/3/index.html","4eb334c43eb53d0254fa5b8a4eb5a05a"],["/archives/page/4/index.html","d60120fda298eedc0d359c64decdee36"],["/archives/page/5/index.html","a4c538b1104710beb49da2e7f43b372d"],["/archives/page/6/index.html","eb7bcbef46792bbd9ffbc9d03317dcee"],["/archives/page/7/index.html","98279ad9ba54bb479911b35444e61dc9"],["/archives/page/8/index.html","6b1728a340f2cc68977bfc5b318be528"],["/archives/page/9/index.html","f62f26bd64bff2a4bc2a5b63a40c61ab"],["/bangumis/index.html","2ea2ab29ce914a4fd8c6f92b5d6a2e14"],["/categories/Java/index.html","561ddee0700668ad3f5de61946a58311"],["/categories/Java/page/2/index.html","66d6a57ca5e1011c0e07e20f31b724dc"],["/categories/index.html","16aa99290f5ce12706dd6c6b50cc9acc"],["/categories/中间件/index.html","97725633ddd10653d25e35e0b0cc5214"],["/categories/数据库/index.html","76499245dc03ffc2bf5693fac6352201"],["/categories/框架/index.html","dac3a54da36db8c881c99c04ad151ab5"],["/categories/算法/index.html","53c137adc57727e38120a7d73473c0a5"],["/categories/算法/page/2/index.html","a67beb9e30c75946e4b9d22d80e30ad2"],["/categories/管理/index.html","eca9ebbc4ae3343b704a7c58b16c6cfe"],["/categories/设计模式/index.html","2ac38fd82c27ada60f1e3b8a407553ac"],["/categories/读书笔记/index.html","568feb1e66b9040439717889b3690782"],["/categories/问题排查/index.html","92d478f6d64480d30ab5f2191160fdfa"],["/categories/随笔/index.html","1a5af9d6f2320820cfbb0b13a8ecf5d6"],["/categories/随笔/page/2/index.html","67b34b369c292b74a11ea80a7c12f869"],["/categories/项目实战/index.html","b82a19050b8c14558916b9ac8fed962e"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","ed9d29869a8a1155d12ba5893591e823"],["/gallery/index.html","2af21268deefa92932bff183a49bf0bd"],["/index.html","449c8709b1ffefcfce3e06ad10013bc4"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","e0bebb71d416779f61497b1c05fb2e16"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","d9b75c17a895c1616cf99c5797737798"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","cf48c7ea29bc6adfde8e41132da838c3"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","7b99fc03fa2283b498c95bf26630099c"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","c63083a85fd546b785a0e0ea3aab9fb8"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","22bf8d8918f38b203a7ab19c07044702"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","a68399d807375cd834800fe9bf3a1a71"],["/page/3/index.html","f43e1937f4d904500de5b8eb1fc14776"],["/page/4/index.html","6f8c639078ba2260e2313cb12074f2bb"],["/page/5/index.html","b6b7bf6d2198fdd204c36c461902bcb9"],["/page/6/index.html","2c5ff228a73792a3059de15f3b93aa21"],["/page/7/index.html","55b015518df9e4c04ed13e840ee4c436"],["/page/8/index.html","5fa5126ce01051550fcc9f5e7e912d83"],["/page/9/index.html","56f60fc23163e6b5685b70b5b9867748"],["/shuoshuo/index.html","a1060b739aa5a59722ac2d2228a368a2"],["/sw-register.js","3064201c2b0a7fc85c02f35e426313e7"],["/tags/EasyExcel/index.html","2544598b1d2047f270478ad5eb9e625a"],["/tags/Elasticsearch/index.html","7e5c4329340b66c7366e73e5ca22e980"],["/tags/IPD/index.html","e445e2dccfb8e538e5103aa85d754e58"],["/tags/JSP/index.html","cb9d6a72c47a8b78e8d0c40ba02bfbb6"],["/tags/JUC/index.html","357b59a3d4f0a1c9d17586f9a5040b9a"],["/tags/JVM/index.html","4d0bc77d7bbac111c9c587df3427c9dd"],["/tags/Java/index.html","cb6229d1e698413d08f35ffbaae8e118"],["/tags/JavaWeb/index.html","848329a8693a6c4ba2939872fbd46d64"],["/tags/Java基础/index.html","e58ab0ac811bb4d62052833d6216fe2a"],["/tags/Kafka/index.html","05ddb4bc4fe618a9ce1f56ab2849f52a"],["/tags/MyBatis/index.html","9e54759c0d5f0def6b09768aea25cd9c"],["/tags/MySQL/index.html","539c4aa382253d675cfe53d654e15efa"],["/tags/ORM/index.html","0545fe0c6b91daff7fed9b2696f41da3"],["/tags/PS/index.html","677f0fa0a977c542c7ca464e40a18657"],["/tags/Redis/index.html","cb8a780b279c5e0f07751c4b7036bfc0"],["/tags/RocketMQ/index.html","26b79faec13961b807dbf8af3f6f47bd"],["/tags/Spring/index.html","a84c120c90753a7227cf05ef8ad739d1"],["/tags/SpringBoot/index.html","7a754fbdc20ccbfdd3356adf34729765"],["/tags/XML/index.html","77f239d65cfe53b947745518cd1545c8"],["/tags/index.html","2f1ab075b168f02304ce81e206ee5b50"],["/tags/二叉树/index.html","faa5de60adf897d241bf55921af261e4"],["/tags/产品研发/index.html","40d400685a094cc3bc45153c0e3e3be5"],["/tags/人才管理/index.html","aec8469a136f0cee784dc7b33c1d094a"],["/tags/分布式系统/index.html","6faf0403b3ea743f05042c33a28c84d3"],["/tags/分治法/index.html","098fa5c7340b0b34ab0bd551d86e5dcb"],["/tags/前缀和/index.html","8d247e1bfb80c6f054ed759565c816ed"],["/tags/动态规划/index.html","cc8be60a63e13f7bf75656376018828a"],["/tags/华为/index.html","0e712a615d48c343d22ef9e7c13d1201"],["/tags/回溯法/index.html","56278653adfe7be54f55eae0bb7a1efc"],["/tags/字符串/index.html","6b089cbf03af745ab263d7c3fc6dca4f"],["/tags/工具库/index.html","a66ebb64b71caa978e62f52a49a3be80"],["/tags/并发/index.html","61dc52183d5ed99c3d1af232fc77d7cc"],["/tags/性能优化/index.html","a65a6019be31ed73237154aeb14854d9"],["/tags/成长记录/index.html","96de9b1515f84a41fa9ae02b0721fe65"],["/tags/成长记录/page/2/index.html","d21da65ba8d9e2a243eafa23c7f746fa"],["/tags/战略/index.html","d9c925e7931cb5d15225079c8cd793e6"],["/tags/搜索引擎/index.html","75a7894b17c83e8267ffd8b4033bdea2"],["/tags/框架/index.html","e6f8a8c824373517de2eeff4bb6bc15f"],["/tags/比赛补题/index.html","f4e2773484f4e6ac1cc3788e51ef51a5"],["/tags/消息队列/index.html","332046decd3a30dc9d33e3e59df09704"],["/tags/源码/index.html","68666aea4e2c9b00151af52a9ae56fc9"],["/tags/滑动窗口/index.html","36cc6873dab099845031483f43dd542d"],["/tags/算法/index.html","84583e3098e9586e59c7b81583b4be2c"],["/tags/算法/page/2/index.html","920077b9003343fefb8cc1d8d9488f4e"],["/tags/管理/index.html","b8f81f5e096730ae0543f751a1fd8a08"],["/tags/管理/page/2/index.html","a11bf0ef5c27dbe7e5577e3399a168a8"],["/tags/绩效管理/index.html","5b5d0e007503251eb74849526e42e1f5"],["/tags/规范/index.html","d64f3ae3440cf5d2e940cffbcdbb1cf4"],["/tags/设计模式/index.html","9d3fe3ed614ead3de3b4f3d0ec1f1d81"],["/tags/读书笔记/index.html","53c7fcd254c493925f49c7192b4ac715"],["/tags/财经/index.html","15036ccb8965fd7f59fc98a7cf36d4da"],["/tags/软件工程/index.html","08ab8644268960ea29a279924f7f473d"],["/tags/问题排查/index.html","62c19aa7f4b6dd4f3641ffc6bb2f2717"],["/tags/集合/index.html","ee768b53c90f9fd234d0dda76d7219b8"],["/tags/面试/index.html","f23e2e37ef900265c44af5c930a04a18"],["/tags/项目/index.html","d5ccd9631dadd9b4f48ab0d30d545072"],["/tags/预算管理/index.html","cf4f33ab798dafb688307c2517ae1233"],["/tags/高并发/index.html","f9d9b6fd6a493e0277b0a8e79d8f21dd"]];
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
