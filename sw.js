/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","65546fc06e4def328670fec61b12b5ea"],["/2021/12/05/zi-wo-zong-jie/index.html","01c7436d99811234c0ee4b8617a69d66"],["/2021/12/12/zi-wo-zong-jie-san/index.html","0198dd043d25d03b62791e5a90a163d8"],["/2021/12/18/zi-wo-zong-jie-si/index.html","fa655ded1c01fb76761911c694b3fb7b"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","8def925327b5b2dcd9017b9d50f09f0d"],["/2022/01/23/han-jia-zong-jie/index.html","2ee44e29c816248b23e243e6d4665622"],["/2022/02/13/han-jia-zong-jie-er/index.html","a866e81fa5537900cfdf59257130af86"],["/2022/02/20/han-jia-zong-jie-san/index.html","3fe3608f505b090099c71942c375edf0"],["/2022/02/26/mei-zhou-zong-jie/index.html","338b48b37c73d80acba8b74b41bbd7ff"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","f1978cb2361a8c77871cc05dc75d36be"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","f8f97a5034e8af72a6f8ecf4ac125117"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","7133c304dd41d325cb7149eeb57f3e0e"],["/2022/03/26/springmvc/index.html","4fcd7248a76246f09e8845d2c18bdd2c"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","aa9b86b27b00da0e3ef5cbf0b8743f58"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","f47474a67c713467f481b9de84297773"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","8944af1008244a841e5c58ccdecd50ac"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","cc86ea12ae424889ea10d12ce51b95ad"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","244bd7ce0313b0893f70ba7c51d637b6"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","bb2688e1114d92a3efd600ecd1c49380"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","1563c412c75b28c835479a197f515fe1"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","1d4568d6bb0f7b0b0883fa0744112b67"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","5a6eb7b9584a644bd9be5cc0c6d663b8"],["/2022/06/25/redis-chi-jiu-hua/index.html","fd3d189f81a09003c2bf27f1c727f296"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","dd08550cb86467db52762727bf045da6"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","56ba9634e18a4083faea50070237dba0"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","57fc6bc0eca8168ef3e143f5af3208c8"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","665be675d09b352e7770cb64f177ebba"],["/2022/09/15/mysql-yin-qing/index.html","9ef43721570641250196df869561c8b6"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","47b4bc8f930b67e1b63bf7573cd26e2a"],["/2022/10/13/arraylist/index.html","b101ae3fe1f67231492d85c8717345b8"],["/2022/10/16/linklist/index.html","f2c2d74539d8ee87b399b5db6311e851"],["/2022/10/18/vector/index.html","e4f079986b73ac4117180c9b949fa3c2"],["/2022/10/30/mysql-suo-yin/index.html","84f1151577ef1318c0fc1feea7ff24a4"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","8be511ae0dd0dd27f7d0d3df3ccf4ec5"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","1a71d5efd701939a70b77d215cff704f"],["/2022/11/20/pc-ji-cun-qi/index.html","8d156f8af0bc73a7f3ec7a80f9201ae9"],["/2022/11/27/ji-he-mian-shi-ti/index.html","a382cdded17f5acc5075bafd2c706a8b"],["/2022/12/04/ben-zhou-xiao-jie/index.html","0f7320ff8ece06739c1d4116c8d74080"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","d92da57d65e9a614937db2e97ddff129"],["/2023/01/15/bei-bao-wen-ti/index.html","427dc113b6eaa04525ac6c84c855051a"],["/2023/02/05/easyexcel/index.html","07e8143cb6663183bb5ba666888888d5"],["/2023/02/19/jvm-mian-shi-ti/index.html","ba4c6bb8157aa0936f4d3b88b1218f9a"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","b7ac7103c2c6cd33d409849a2222573b"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","3cd73d35274d1f61ea2de93a7fbb106c"],["/2023/03/11/yang-hui-san-jiao/index.html","caa0fb9da12f0864318f66ace9cb1e37"],["/2023/03/19/he-wei-k/index.html","79b0958116193bdc4bb52458be2c0d0b"],["/2023/03/26/juc/index.html","58038f21d225e04a89b466c030d3f494"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","68d23bb3a7e447cfffe39b87741aa8bb"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","5c5fab6e6d4166dac07b519f4073c96a"],["/2023/04/20/mysql-gao-ji-yi/index.html","d380dfe672abec24d7bfe8141f137ea6"],["/2023/05/01/mysql-gao-ji-er/index.html","89b4f85b9c8987391765a43c5efc936a"],["/2023/05/11/mysql-suo/index.html","3bf1c6dba6ded6b799591694f5cf7c74"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","76264190c26dac4ef4b9f92b7fba6986"],["/2023/05/23/mysql-ri-zhi/index.html","31b4607eaf4a5a9f8d95aa0f88e04b13"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","36dabf51c4885b8707cf7c665b625217"],["/2023/07/15/xml-jie-xi/index.html","33f866dcb7b36f2ed7102974be6350b1"],["/2023/08/21/mvc-zu-jian/index.html","573f1190d405505681ff012427e73669"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","818beddeecd4224436bdb5cee99969ac"],["/2023/10/10/dan-li-mo-shi/index.html","0f58bb9c5a696c92e331ad843ab6d2bc"],["/2023/11/23/hua-dong-chuang-kou/index.html","a6af55801dfaaa985cad31e6f850e8fc"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","1a03224803b1873a1df53ef3c20a7bc6"],["/2024/01/13/niu-ke-div2/index.html","e165a1bc1359418779c4afe5a920836a"],["/2024/02/10/kafka-jian-jie/index.html","4b8d73c261ce7bcf8f4e00ec44e0cd95"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","4c29d949bcb8241059dfdc122c433a19"],["/2025/08/20/elasticsearch-the-definitive-guide/index.html","ba85795646242ce49e02b799fb6ab56a"],["/2025/09/10/clean-code-notes/index.html","a783c19c19713ed3ad89ad0ae65257ad"],["/2025/11/20/redis-bigkey/index.html","4fe490a68c598f11a55aaacbe42c53a7"],["/2025/12/10/rocketmq-internals/index.html","b8f21b3171fd1eb69b37945896e177df"],["/2026/01/20/es-segment-commitpoint-translog/index.html","982f7ab8f356fc2c5b2abb8f8e7293f9"],["/2026/02/01/es-near-realtime-search-crud/index.html","ebd2fc4a4c52559528bddf505dab20aa"],["/404.html","40960f9c4bdf9ca9efe09ec003814fe5"],["/about/index.html","c3c7c437bc358c3cc8190e0d502b957f"],["/archives/2021/11/index.html","bfdbabf0db048721c542319d6db6554b"],["/archives/2021/12/index.html","f6e6b92392d9da885e462de102bfb66d"],["/archives/2021/index.html","7c50ad8a56a5feb2658deeecadde599b"],["/archives/2022/01/index.html","f357fff0c87285b029c964b42aa8a162"],["/archives/2022/02/index.html","b3e706044f590a29890c39617de5c81f"],["/archives/2022/03/index.html","5d005e0cf08424575d96f758bb8bf0dd"],["/archives/2022/04/index.html","45f2681e26fcb3b7acd05236e8721b51"],["/archives/2022/05/index.html","780f9f2589df755e1fadb863f0d32775"],["/archives/2022/06/index.html","0651658752d598bc15eae93866bcad0e"],["/archives/2022/07/index.html","47ccfa127198cad5dc5379b4f5446572"],["/archives/2022/08/index.html","56061cf1a56aab558ff0e98c8396a8cf"],["/archives/2022/09/index.html","a15a4026f82acec9a29b3b20799ac581"],["/archives/2022/10/index.html","39a92ea1335efc41857c2455e51cc775"],["/archives/2022/11/index.html","865ea793bb686cea735158cdb6712523"],["/archives/2022/12/index.html","c4027e61f088255387587823e5f32fee"],["/archives/2022/index.html","835a3b4ab257db5d3c5c5239cd15ae9e"],["/archives/2022/page/2/index.html","f094d587daaf25f7b34b582a164e47d8"],["/archives/2022/page/3/index.html","d7dca81eef5746c2ced09634de0408f0"],["/archives/2022/page/4/index.html","37af54acbf6dd7cfb758b9a7b8c58016"],["/archives/2023/01/index.html","96b0a090d9f8d6af8c725031bee3c85d"],["/archives/2023/02/index.html","0e614b1a5fe2fdb8aea55bcedac1714d"],["/archives/2023/03/index.html","574ca2258dc7c057aea49ce830fa12d9"],["/archives/2023/04/index.html","c15528e134a7766a6d5496a4d467f65a"],["/archives/2023/05/index.html","3fe197d6f59fdad9fa2c21b699171ac9"],["/archives/2023/06/index.html","305a4fcbf223e9de7f313b27a8102ceb"],["/archives/2023/07/index.html","24a1773d39a070c87222e11cc415c1d6"],["/archives/2023/08/index.html","0072b5748236afbbe20399b782e7b51d"],["/archives/2023/09/index.html","418e741916060a681ec94fabe960bf18"],["/archives/2023/10/index.html","2e26d737092d50b3a30f14aeb822b818"],["/archives/2023/11/index.html","3131325c9763fccbb43ea156187e8e3e"],["/archives/2023/12/index.html","cfa8bdbacd953a7996254e09f3e87253"],["/archives/2023/index.html","24d5e08d69e4ae0ba383e6f95ed62ed6"],["/archives/2023/page/2/index.html","f95a08e605b15f55a95e8d8986b5a81d"],["/archives/2023/page/3/index.html","abdde951689124c9028f5839a8248dbc"],["/archives/2024/01/index.html","0a2247d68a5a6a90a5eab8df80097e58"],["/archives/2024/02/index.html","f9ba21e4abd2e53d0b3785aa41c77445"],["/archives/2024/03/index.html","7a308b3b32316189bea89a188777055b"],["/archives/2024/index.html","9823516f14f5e98bfe54268c07e8187b"],["/archives/2025/08/index.html","2d9396dc4f2660e172b944227e952b8a"],["/archives/2025/09/index.html","82608565c9c81ad90dd343a44f60001e"],["/archives/2025/11/index.html","8e45133fdfc2aa24fb59afe241cb99d5"],["/archives/2025/12/index.html","97785d20df24abfe9be0362fa57e4f5e"],["/archives/2025/index.html","d67a3c49a938a9df81459574bc7a83eb"],["/archives/2026/01/index.html","19a07b8bcd8810a71d4e13296d5b266f"],["/archives/2026/02/index.html","d0a9ace146e8661d9271b37bc3d467f5"],["/archives/2026/index.html","823f456190bb7e424cc56cb34ae172ee"],["/archives/index.html","05d1e4451a698a2bdc57da3e597600dd"],["/archives/page/2/index.html","d34d84f7c36df711b98ace36c9fbd1c2"],["/archives/page/3/index.html","2131f446c453e9112fde91b07fa3510d"],["/archives/page/4/index.html","89f0e748d73f480ebcf65987bb954785"],["/archives/page/5/index.html","50e3789d1f2c0c06d710a5b2f19756d1"],["/archives/page/6/index.html","489a12c94e4c015cbe67519fdf25929e"],["/archives/page/7/index.html","7d81c2796a684509be8828017a41e97d"],["/bangumis/index.html","530748ffcd21a95b8ca0be416dc82590"],["/categories/Java/index.html","031e64c16df1b3b5851493b2c26d1d67"],["/categories/Java/page/2/index.html","384001ab880db48e64bfa0ff45e675c6"],["/categories/index.html","55295cdbdb5f31cfcdd6fa8b9aa3d42c"],["/categories/中间件/index.html","c3f86b78acdaac063924abc0afe66ad2"],["/categories/数据库/index.html","9cffb62e314dab9d6e0813611c87f5c7"],["/categories/框架/index.html","b4e0bcc1773ad858046bd353d981e1b1"],["/categories/算法/index.html","801d8475c99c6ecce702a1eb161fcc53"],["/categories/算法/page/2/index.html","221e1bb058161217e3484ba6cf054f02"],["/categories/设计模式/index.html","f8b56db99006b0962a8e95c418094c37"],["/categories/读书笔记/index.html","822a3ef1776eec7cc7528174566ae416"],["/categories/随笔/index.html","f3b1e744e6c5f0b10f635b0ba493f6b9"],["/categories/随笔/page/2/index.html","58e812a89c217a72d80f3312506ebe4e"],["/categories/项目实战/index.html","9e8556f31bb4c1ee59579775822e3115"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","2bbc39b6299e3650727d76f717beb41f"],["/friends/index.html","a5ebb57a63b7bdb55ba28dcbc1391173"],["/gallery/index.html","6fa29660ff06ed2ebc894fdc3ec3ad5e"],["/index.html","388e25e20703d05a2e61598f34e1e556"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","57446112fc1467633b4d7b70c95e6383"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","b3060d14ae8ce1e82b7d6fa3ff2c428f"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","bb57d184713ced6923dbed14ede4e83f"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","3d915f173f6250a691fb9b54f2ab3f79"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","5b5b914c5eb3eecfabf27c1fe92f6e55"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","46872f2d9fb2c4210d6fff4c79641861"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","78665aab1c71d62f56a2d979faaaf481"],["/page/3/index.html","5da37fd6e6db1710cbd72a3de9daa801"],["/page/4/index.html","5986cde7bf7612d719a3738ee88f6b45"],["/page/5/index.html","325c5111be1050636848a0c1a8600cd4"],["/page/6/index.html","ec1669881e2368505c88be93c9f95311"],["/page/7/index.html","3cec2e3bde95467d14f8e283d8215a37"],["/shuoshuo/index.html","c55a459c1a20e03d2a50a36854cfe4ba"],["/sw-register.js","b2adc76fd0c0099c6d7ccf34715cbedf"],["/tags/EasyExcel/index.html","69946b34b3ce48cb058ef69393e3de6e"],["/tags/Elasticsearch/index.html","8bf9119df85a1422a12534919b536003"],["/tags/JSP/index.html","5aefa6f75ef446d3bd86203cf7808e10"],["/tags/JUC/index.html","f1fd5676dc10afa50f9f721e0482ff08"],["/tags/JVM/index.html","a65898d5f7be8d03bd27f2cb7dea3197"],["/tags/Java/index.html","0380c4f2ddd3bf871d3a953f23dadc63"],["/tags/JavaWeb/index.html","f1003a529b3cf637e4885829ec3afa62"],["/tags/Java基础/index.html","224ee339224f22da757207600c1eaaef"],["/tags/Kafka/index.html","55b868a52fa7f43acf3fdfcaa3b1f802"],["/tags/MyBatis/index.html","bc278a341e060860bbd1c97e4b22de23"],["/tags/MySQL/index.html","3edb5cdd8441fd7f894e18277b647bee"],["/tags/ORM/index.html","1146dae8219fc684ee1575d3195b3e86"],["/tags/PS/index.html","44bb365a4fa85a8c8b8536818a5d28b4"],["/tags/Redis/index.html","ac5264da5ebb7147a94393fd964868c8"],["/tags/RocketMQ/index.html","1b72f826c781b1f3fe6febca91a13522"],["/tags/Spring/index.html","05bae87dddac856e4e3e420466518710"],["/tags/SpringBoot/index.html","d5d0852df0077c12a6a282fe8d0b7c9a"],["/tags/XML/index.html","55ee3ee9d4c110fa32a15ba4088d3a48"],["/tags/index.html","ca6f386cd773bc451d04bd77f15ebbba"],["/tags/二叉树/index.html","492c6d486e6b65b5f8e0cc86d2947e26"],["/tags/分布式系统/index.html","c620f864b9588290a0f2e76acce5b4c6"],["/tags/分治法/index.html","2346acec726fd713cac178d15d6d480b"],["/tags/前缀和/index.html","63c261bba5e823e704a32492ec4de82f"],["/tags/动态规划/index.html","bcdebc7abaa23a49963ffc0f044c3b8d"],["/tags/回溯法/index.html","c61bf97f0122d2f7de57446cb8b7061c"],["/tags/字符串/index.html","e302dff6f881b7b1a12431e0965a6359"],["/tags/工具库/index.html","3e1d12fe917faaf7196c83613cc210ca"],["/tags/并发/index.html","f9ab2c948d9dce2b0377304edfe0a8b0"],["/tags/成长记录/index.html","9f60b23cc8db304f8be03a61a21b4f46"],["/tags/成长记录/page/2/index.html","16602b27cdcf4098f268dba62989326b"],["/tags/框架/index.html","c401a86dcee179a3a922f6a7b174245a"],["/tags/比赛补题/index.html","ae310f328a2f09514d8a790490e0fc6b"],["/tags/消息队列/index.html","51fc4256a60a9951aef6ea70a41a3cef"],["/tags/源码/index.html","d505b6db8587a3b5d5fc6865d8ffa239"],["/tags/滑动窗口/index.html","c54968a992034961a0ecd06a7e748bd1"],["/tags/算法/index.html","91b975769625ffb31d137848b7611d39"],["/tags/算法/page/2/index.html","174fbf9ae68e7aef28cd04516d902e85"],["/tags/设计模式/index.html","a467f73d6e84ddc9c9c7823127798e3a"],["/tags/读书笔记/index.html","e748960c12cf70e9dac9df0252b76577"],["/tags/问题排查/index.html","ad4b538b58510f6fcaebdeed0fcbbda7"],["/tags/集合/index.html","a02011e038392e85ed37bb91ea023a1f"],["/tags/面试/index.html","704851190996be5fdf8bf5e9ea26b225"],["/tags/项目/index.html","91cbe75bd9beb5648fa777baf95b0568"],["/tags/高并发/index.html","55717f0376678114c96b12b88cadb8d3"]];
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
