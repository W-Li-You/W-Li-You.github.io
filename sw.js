/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","34b9bcd939294e27d5ba17b423bb9fcd"],["/2021/12/05/zi-wo-zong-jie/index.html","e4f6feb88b312af212889d702f500649"],["/2021/12/12/zi-wo-zong-jie-san/index.html","493b458f896f55c64c26db50b9e19a43"],["/2021/12/18/zi-wo-zong-jie-si/index.html","ab77864567dab2617311c4ebbf955482"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","4cad53b9fa2ce194095668de168a9d2a"],["/2022/01/23/han-jia-zong-jie/index.html","9813bf4d38da1fc277fc8f72274aab9a"],["/2022/02/13/han-jia-zong-jie-er/index.html","047923e476606c933d1c33fc2170c8d4"],["/2022/02/20/han-jia-zong-jie-san/index.html","624a14c0f2ecb3046e0f644be8203039"],["/2022/02/26/mei-zhou-zong-jie/index.html","6c6df20b32646e612a0fedb608313dc5"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","0d7bfdc3451dc17c0ca8dc0b6eb101cf"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","70d33814cbe29d8990c81a39768fd842"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","efb4a2b2f50d28b5197bb4538e7e597e"],["/2022/03/26/springmvc/index.html","983929497b69c26a460d77a057a4a496"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","e6e38dbadb3e4c7c65a381eb7a6fcbc7"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","40c7d1806a251a0707e0636e8701caa8"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","1cd17b6df53e2d37d6adae5d4d5d89d4"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","5f964da2c1527175c8b2f99ea373a925"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","fcd45f3e1aebf0bb51fc06809ecc9378"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","b55ad8fd0f6f44e1de28c41d2f8dae7e"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","b72ed6fe1ce6f0ca600e365e768b4e59"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","b9a64cf60fa56b465e71a79ee0102c76"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","c52a16a3204b700fe5f7f70809a3a8a3"],["/2022/06/25/redis-chi-jiu-hua/index.html","4ebeae1b0ef618e627ab44c8809eb40b"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","518fa9c51b3a62e818209dd843794f05"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","793a6af0c57f328115516d8c11e69348"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","1f4484d376423d8baa01f4338be1728d"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","e0c07721391fbce52539c3266b0980b1"],["/2022/09/15/mysql-yin-qing/index.html","e3fe4be3d4716878fd8f6bf5dbe53ca3"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","eb7dac0df3d96162bfba294e23e74639"],["/2022/10/13/arraylist/index.html","9a7b06de5003a266cbf2b6836f13e10e"],["/2022/10/16/linklist/index.html","b21535e042fe0e28a87a91c80d0c75cf"],["/2022/10/18/vector/index.html","2a667c397857cc6b3b65b03338141a1b"],["/2022/10/30/mysql-suo-yin/index.html","2b5902ff2222e5e2deea7c81de9cd57c"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","426425ffa1f19b0454ee246e7b0fbb86"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","3bea9451ee6c38eea081bdd3c769852e"],["/2022/11/20/pc-ji-cun-qi/index.html","4987c31592032ac46eb08c2ef3168d32"],["/2022/11/27/ji-he-mian-shi-ti/index.html","c6183668b8b9d6e2a5ad26a87cb6eee0"],["/2022/12/04/ben-zhou-xiao-jie/index.html","0cc90c3e906e82f451c6e15319d5a91b"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","bc635d57a2fc97c3087151035edfbbb8"],["/2023/01/15/bei-bao-wen-ti/index.html","3bcbebc0c092b2d305a2cbf88e14be34"],["/2023/02/05/easyexcel/index.html","e1442696f5989bfaade69f9e55648444"],["/2023/02/19/jvm-mian-shi-ti/index.html","141c830d18e853e0cfa797eaea06cc51"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","da01f7c8f9082380e42da27481c3796d"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","c6215d706ac1c1ff96d91b30550b4b4e"],["/2023/03/11/yang-hui-san-jiao/index.html","2b129a9ea39d203b54687a3fc5fa8ad9"],["/2023/03/19/he-wei-k/index.html","aae8fe1a9c178f952103f55b4227b72d"],["/2023/03/26/juc/index.html","e1c781bd4108b2f06d8713329bca0a8c"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","d23571182341f4f5ddd8af1c3bb8bbe5"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","ac8e37bf6f43cfddf82b1d3a92154a16"],["/2023/04/20/mysql-gao-ji-yi/index.html","69f3128ec18ac783b53658eb3225a983"],["/2023/05/01/mysql-gao-ji-er/index.html","97a670e05a2af3a014cdbd7ce0631a85"],["/2023/05/11/mysql-suo/index.html","87191f8785b9926455784834e5eace21"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","8a77c61f5a8dae44c5dd3f0e5db10db3"],["/2023/05/23/mysql-ri-zhi/index.html","27fc2fecf734a44f54d93087232111f9"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","8ca2d2b9f4d3bb4833d974a4c70b2730"],["/2023/07/15/xml-jie-xi/index.html","8286e263dfb774db0c37902731e7abae"],["/2023/08/21/mvc-zu-jian/index.html","d88fb6b18d9cac1bc000f1e343ab222c"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","d5d8f38cc2808c728a30de8f82734f8f"],["/2023/10/10/dan-li-mo-shi/index.html","1e6456f3086a2385f910eb2283ee0dde"],["/2023/11/23/hua-dong-chuang-kou/index.html","dc3ce4a675404a4b96d27a2ddf9ff643"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","35e37c12f8fcd3b9efda8782ef71e617"],["/2024/01/13/niu-ke-div2/index.html","5fc3a5acae11376ea557edd983bb6982"],["/2024/02/10/kafka-jian-jie/index.html","b46f66af1d37ec4cd873ad2c818afa64"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","363aa0e28a79391db84915a59a091640"],["/2025/08/20/elasticsearch-the-definitive-guide/index.html","2c77465a56c691529437bcaa286d2134"],["/2025/09/10/clean-code-notes/index.html","b383ce93b2560229c965d92916dd0081"],["/2025/11/20/redis-bigkey/index.html","c610fb60e9732539e9fdf8f49017ce67"],["/2025/12/10/rocketmq-internals/index.html","f30413f2ff2310a6852d66c84cffcac8"],["/2026/01/20/es-segment-commitpoint-translog/index.html","29b22a0348db8555ed6d7ae12fcc191d"],["/2026/02/01/es-near-realtime-search-crud/index.html","f1bfa61d226f402e00956e277b31412d"],["/404.html","9c61ebe653718798127e29bce4ee3d68"],["/about/index.html","02971e9a7d9e9fad489df1097c34173e"],["/archives/2021/11/index.html","af58bae7d4f89d7ed525b26040350875"],["/archives/2021/12/index.html","85c4bef9ee51e7e80e13816563437adf"],["/archives/2021/index.html","44ae657bae09630920513670d640132a"],["/archives/2022/01/index.html","d848ad6b4d9525e3e8eb71a59c0c2719"],["/archives/2022/02/index.html","cad9ba735363263dd385d15be2b0e822"],["/archives/2022/03/index.html","9a6afdc432f380009f9c259d731e69eb"],["/archives/2022/04/index.html","387dc67798e35402d7b59b69408b0fb8"],["/archives/2022/05/index.html","b58a4f273a89e1d5efcb96650cf39641"],["/archives/2022/06/index.html","7458873ecbcc27391f36bbf15a6acfcc"],["/archives/2022/07/index.html","457993a1833a2855b57deda98332bf97"],["/archives/2022/08/index.html","cd805a1c32fc3f9a4941bc4cbe6fc0c1"],["/archives/2022/09/index.html","a4a858b4d0d23185f953ebb68a984a9f"],["/archives/2022/10/index.html","c50f8e25dd960fd23333e4264c9f98fa"],["/archives/2022/11/index.html","66b3b83b2a3d2bf8fe5275845b4f14e1"],["/archives/2022/12/index.html","f945d9d6bd49b63853ceabaa345e2776"],["/archives/2022/index.html","56d56fe6322331e89541200117ae7097"],["/archives/2022/page/2/index.html","ce83628eef8b4cfa94e7ec04219ae4ca"],["/archives/2022/page/3/index.html","5324d6342e6fa6a9932cce59323924d7"],["/archives/2022/page/4/index.html","bbded01791eaf9d550ba2cad3cbec649"],["/archives/2023/01/index.html","1dfca088bc40066088caa65fdab898f5"],["/archives/2023/02/index.html","3d054115d59a3913b4beadc55d2b7cb3"],["/archives/2023/03/index.html","e1e7c711b4747f2f31a39ba379b796c7"],["/archives/2023/04/index.html","92ed0753562fba53abdc41fe4b2a0623"],["/archives/2023/05/index.html","94019c606102bc8d372bd47d297a7214"],["/archives/2023/06/index.html","a663ec222a7205b7fc9490267ef15ff5"],["/archives/2023/07/index.html","05ca3c4fb2fcde0c5899f53d3715b725"],["/archives/2023/08/index.html","0240dba1d1080bb8aac43be227b92642"],["/archives/2023/09/index.html","944d51f43370cdfa943955d088a9a980"],["/archives/2023/10/index.html","d02cfac884702eb54b65dfd8c828b434"],["/archives/2023/11/index.html","3f01271ec20745b8d6574c26b9911af1"],["/archives/2023/12/index.html","a93d51137247874315352b86aa4c8236"],["/archives/2023/index.html","ac872f9edb4b84ac1d31bd4367d6e9d1"],["/archives/2023/page/2/index.html","be376ea3c04aadd5b7f6527a414f2858"],["/archives/2023/page/3/index.html","8bb9d40f2e22ceddc6353d02f22bb8c7"],["/archives/2024/01/index.html","a1421fec12e3de4e216d30199fa96db3"],["/archives/2024/02/index.html","5da9449a0cdc203ff356353f6afbdb86"],["/archives/2024/03/index.html","cc7e03b06b6321ed78a88788ea87a628"],["/archives/2024/index.html","d426bfa5a41fcd83cab303d389e6678b"],["/archives/2025/08/index.html","e7742865a29555028061cc49f6a7d2ca"],["/archives/2025/09/index.html","9f9f512e31d6236bd787cdb9ed8f65ff"],["/archives/2025/11/index.html","a252bf41dded1c48525138934a517d1f"],["/archives/2025/12/index.html","c923f044f3d90fa46e05a5874869475f"],["/archives/2025/index.html","0edb6532c51206914503c6e99caa790f"],["/archives/2026/01/index.html","c906cf774008cf5b2fd171f7af9235bf"],["/archives/2026/02/index.html","529d330b9e5075eabb4cb37003f3bf8e"],["/archives/2026/index.html","fb0ae06d7c893c566c51912a30a69b4c"],["/archives/index.html","1ef41d3b2ebd39e104c94c161c195e3e"],["/archives/page/2/index.html","fdf92fa9826bfb571172c864545a6ad6"],["/archives/page/3/index.html","1de1408226d2055e683e9b6bf3aae979"],["/archives/page/4/index.html","d6767a10a70ab463e652fac166eca87d"],["/archives/page/5/index.html","8fbd1765af52500dd36aa35f7cd43723"],["/archives/page/6/index.html","21f1ea8f27472745ae5ec5fe82bcc70e"],["/archives/page/7/index.html","f5a70d9d0714a7d39cc77cace6d91057"],["/bangumis/index.html","06b9f4592dad12baf5d7d07a6466fef8"],["/categories/Java/index.html","6e8ef6808f97d664dfeda929b94690ad"],["/categories/Java/page/2/index.html","fe8d113b3499e05b864e3dffb2da12b0"],["/categories/index.html","79e1d5687aa3c3293fcbb2d643894a33"],["/categories/中间件/index.html","197337e4ed8a9499abea905ed3d4e5c8"],["/categories/数据库/index.html","4145532e0a4c216e43816fe5f5aba2b1"],["/categories/框架/index.html","c91a7fa7bb77f7d2ab3bb083aae9fabd"],["/categories/算法/index.html","48444b6e80be1fc1a5a8e8294f9a2971"],["/categories/算法/page/2/index.html","6048547dde67f33ad95909ff890bd271"],["/categories/设计模式/index.html","7d2d8c34fb7610914a0f40f39e3eba60"],["/categories/读书笔记/index.html","7e1a38d76cf160c68c39ad7282ad4c6b"],["/categories/随笔/index.html","c45d24a6a33dd48800159c73db43155a"],["/categories/随笔/page/2/index.html","a487b5030509a92b58de4b96067f6578"],["/categories/项目实战/index.html","ff0f7f30b660e70b3c0965566ab12e44"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","2bbc39b6299e3650727d76f717beb41f"],["/friends/index.html","dc507206eedc35db2bc98f5f446911b7"],["/gallery/index.html","7747e1a07e7a60b0ac28101543a1c2d6"],["/index.html","43c20552d7d2f44d0b170e0ff5be9049"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","57446112fc1467633b4d7b70c95e6383"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","b3060d14ae8ce1e82b7d6fa3ff2c428f"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","bb57d184713ced6923dbed14ede4e83f"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","3d915f173f6250a691fb9b54f2ab3f79"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","5b5b914c5eb3eecfabf27c1fe92f6e55"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","46872f2d9fb2c4210d6fff4c79641861"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","100a7f16a6dfcf0f2cea392c11d29820"],["/page/3/index.html","bb8bc37929ec36105595a1ae28c712b0"],["/page/4/index.html","31e70a49d57ecd5d044e08108594bd53"],["/page/5/index.html","f83cfce8d046d77761bb072dcb9c1c06"],["/page/6/index.html","6cc9142d960fbe040c57f10c83fa5d06"],["/page/7/index.html","344563554b01b59756b45818319c21fe"],["/shuoshuo/index.html","c11718228ac193e8f40df9bd435404d5"],["/sw-register.js","7d04da41ffcb70a61b99c7630b29f91a"],["/tags/EasyExcel/index.html","6ece19bf752c468ce255302f276a4cf4"],["/tags/Elasticsearch/index.html","be347ab40ace7f274aab7a07b4da56a9"],["/tags/JSP/index.html","a6f37fa4374e8509d0dbf14aa0d62828"],["/tags/JUC/index.html","aabd047d4135dacd504650a30fdd3fc3"],["/tags/JVM/index.html","3566bf283973869e0ddc3173bef55f5b"],["/tags/Java/index.html","8a36a5a9530c8329d218eb5ca7d93839"],["/tags/JavaWeb/index.html","9a850f0bab2d1fe4c2da064e5e0c3e49"],["/tags/Java基础/index.html","d998dd6ae34491473c0cecaf5b266d46"],["/tags/Kafka/index.html","5bc9831db31e12a2e6bfd044a4a6f525"],["/tags/MyBatis/index.html","289e5813b0fb4ef054130d9b0714f7cc"],["/tags/MySQL/index.html","2d2a6dd1d8840077d101e25441cdc0c7"],["/tags/ORM/index.html","d8a5433cd506df98f8a810400c59e3fd"],["/tags/PS/index.html","0ffb1d641959050e74aeb8d73e03a0c7"],["/tags/Redis/index.html","4072e59c89476c04cbccf015173f1540"],["/tags/RocketMQ/index.html","6f24cd252eb4c7db8a4b062e651a34bd"],["/tags/Spring/index.html","a94e30ee6066aea14c873d0bb91342dd"],["/tags/SpringBoot/index.html","dd82182bd2671911bc4e2cac3acaef5c"],["/tags/XML/index.html","de14254b5dfd4666f5b5c5d4d617546e"],["/tags/index.html","5e6c5de7f1d8c1fc2839d4b70137dd14"],["/tags/二叉树/index.html","4ac32dc9c8a831c1826f2f1084f7d845"],["/tags/分布式系统/index.html","8b4f676c5ed4498c3791bc12b29fcf13"],["/tags/分治法/index.html","7c04700e01a03998782be924d60373eb"],["/tags/前缀和/index.html","e5677bc44e67c61fea87146b726e2073"],["/tags/动态规划/index.html","7ee83de1b3bd468d5d29888fa34f0dfb"],["/tags/回溯法/index.html","13682613bfc90203896a30ca103c03b1"],["/tags/字符串/index.html","61e5004fe2a16003e89b7b12dbc82918"],["/tags/工具库/index.html","01c7da3e481ad541a43c422c98dbd0e2"],["/tags/并发/index.html","7da10e758feeeb32fcb4f3be12c84308"],["/tags/成长记录/index.html","6f6bc76cc62bbb30509e67367af32eaf"],["/tags/成长记录/page/2/index.html","a008fee706ba4076c48ffbcc44f083ed"],["/tags/框架/index.html","e530fd809bc13672a30812554dedfb8e"],["/tags/比赛补题/index.html","777c0414bc0ef98c55177e69c46dff2c"],["/tags/消息队列/index.html","3cc9729e057095efb3dec3d8f4c67b4e"],["/tags/源码/index.html","514a15df68c90cad2218ad8206776df7"],["/tags/滑动窗口/index.html","0b0cb28cb706046a5fbd008353c642d4"],["/tags/算法/index.html","7facf53e434c9c7e84162bb61aac5f38"],["/tags/算法/page/2/index.html","6d0d634196221bb47e8ba4d49a07f305"],["/tags/设计模式/index.html","8227473229cd9f0105fa225343be452b"],["/tags/读书笔记/index.html","5a2209e6e48198cc1224452dbaad8060"],["/tags/问题排查/index.html","b3cefc22f4ddec9abe1e5a0fa73fc228"],["/tags/集合/index.html","25e889d669afae4d5df00c7a93366fbc"],["/tags/面试/index.html","3f50843a1097bedc5bd5b1c4bbf9d215"],["/tags/项目/index.html","4b89666c3c1b57466df77b994e91af11"],["/tags/高并发/index.html","220fa7248eb7b1c0bbfcc50514098536"]];
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
