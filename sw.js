/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","48d9749bcc54dae761458336a1f91d5f"],["/2021/12/05/zi-wo-zong-jie/index.html","b9e8ab9ebe0f58006b96a673ca934b12"],["/2021/12/12/zi-wo-zong-jie-san/index.html","4d7b7678ef1765f561c981f55ff6f057"],["/2021/12/18/zi-wo-zong-jie-si/index.html","2ae5861f6046a203f28711f5b041e894"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","cda284e3c1fafa6dee676552012f7f3e"],["/2022/01/23/han-jia-zong-jie/index.html","a2d3d3aa1cc96992476eb0912545ccd8"],["/2022/02/13/han-jia-zong-jie-er/index.html","0f4e19068cc01ea252a45ea07a9ef32b"],["/2022/02/20/han-jia-zong-jie-san/index.html","5f7b9cda41347649e76b2c139d779797"],["/2022/02/26/mei-zhou-zong-jie/index.html","11cffe80446de22f75476e492a836bac"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","0472e611f25cbe08fe078a59993a9b3a"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","71ca09a8cea8bf03556135de0f3932a6"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","a36212df14df0c105da941a6dd2f46c1"],["/2022/03/26/springmvc/index.html","efce74923daed72f156ffcea3ea5f08d"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","45115c1e022f8987acfbb22808e3c34c"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","7a78bad2802e33451d747dc75155ae75"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","70e4fd87e3f1186a0d718f2be0b3a66f"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","d2e5ada7484ac08767bb2d30ebf5e386"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","c4e487de05a06472998ceb63b3e56dd0"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","5e3e2f1e33792ea8c1dada7909436a00"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","ccb6d075e10db00b6f7c018d3c9f7e54"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","f4dcbbb69ac1bfd5519f272d657475d1"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","68706e1ad9180a8e2f81644657e60600"],["/2022/06/25/redis-chi-jiu-hua/index.html","c9f69a68e8367e138aaa140fd52106ad"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","c6280009c322297e125cb16d02adf074"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","c51f45797fb18d0d139fd2498f30b731"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","407b62af9e51644f1acd8fe76976e6b3"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","244dc6da62d3262d1be3ad5d41f99f6e"],["/2022/09/15/mysql-yin-qing/index.html","c1bb41167510f61540b9cdd3503ff0d9"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","2d69affc2add18ad1a8d44cf345f5e45"],["/2022/10/13/arraylist/index.html","f1f54e60dfc4eef80c59724aae261348"],["/2022/10/16/linklist/index.html","bdbbd9e83550c7fbbc64026013090777"],["/2022/10/18/vector/index.html","555a4784e58765f6e71f01633e02780e"],["/2022/10/30/mysql-suo-yin/index.html","3d3df21e920175d0c1728e69e818e44a"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","7f223fb1c96cea2d89802ef48bf0d7ec"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","6e49da45619343d905061622c1225971"],["/2022/11/20/pc-ji-cun-qi/index.html","ad6a8011ce8c3f2b7809ca7e3b05fdf5"],["/2022/11/27/ji-he-mian-shi-ti/index.html","acfedd49e843a53b76cf8c3cff0dfb90"],["/2022/12/04/ben-zhou-xiao-jie/index.html","755b9c02a30328f724fc2cec92c6da41"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","8a2162e37bfc1857849d4517658f83ae"],["/2023/01/15/bei-bao-wen-ti/index.html","736133d102582cc13749d21c3e1006f1"],["/2023/02/05/easyexcel/index.html","32658f886c04f0cdd75d57a78d681ae0"],["/2023/02/19/jvm-mian-shi-ti/index.html","1559e8387accafde6ab0f94e256a386f"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","7b382d5138841a48556db716a08b16ce"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","8b75bb1cb131792ff20dcc1c947c8eb1"],["/2023/03/11/yang-hui-san-jiao/index.html","b46795c2b557938def7abeaaade25a35"],["/2023/03/19/he-wei-k/index.html","f16009b8dadcd00d6c2be5f9ea1f8989"],["/2023/03/26/juc/index.html","d8b0a80764e8fceba4fe2ae0b7c6ffe9"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","11ca63e5bd62156c27803e2fd26197c4"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","567971428060e52465528f6a347e464b"],["/2023/04/20/mysql-gao-ji-yi/index.html","d33f94d696e176b7e6a56ab9ee7c0c40"],["/2023/05/01/mysql-gao-ji-er/index.html","4b409e71db55bedafa3c874f1706b7ef"],["/2023/05/11/mysql-suo/index.html","f31c5c604e0975d820349bdec823c42a"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","b09cc336ec895303edd70e3bbf7eb0c8"],["/2023/05/23/mysql-ri-zhi/index.html","dcf85509e63fc684b1f56a051a8eae7e"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","1289998034d6f16b39bdf79459d7f266"],["/2023/07/15/xml-jie-xi/index.html","a4405fc855a37ac09b0db35eb0b2ef56"],["/2023/08/21/mvc-zu-jian/index.html","04687c8d559372b0c23694952d92ff34"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","41d627f3333a45a4bb3f7eff3bc0b7a5"],["/2023/10/10/dan-li-mo-shi/index.html","3db6de34233cd3df02ca9540a8dc2aa6"],["/2023/11/23/hua-dong-chuang-kou/index.html","c70ef8e1ea13444e604db240454a76bb"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","0031dc1b14a0bb382fa7dbea15db0051"],["/2024/01/13/niu-ke-div2/index.html","40da3c50dccf827d50590ddbdb112416"],["/2024/02/10/kafka-jian-jie/index.html","c2f31b79867dd36ed8c2b6cd57dec625"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","9551317bec099605fde20696a6e44cce"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","a67beeac157c7f92435dcb9e67a09e52"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","89f3d6f0b0bb36bedd16217f4c9064fd"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","399b9916d45ee88c48acabd3e5fafe17"],["/2025/07/20/clean-code-notes/index.html","df7475323ffd72416ff53c573b1516e5"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","050c558f574fa822df4d6560e69d8391"],["/2025/09/05/rocketmq-rebalance/index.html","f57f19d1a2793374d27cac31f4d2729f"],["/2025/10/20/redis-bigkey/index.html","362389c225ce6da48d9593c8f643a0aa"],["/2025/11/15/online-oom-jprofiler/index.html","80202684311ffafa6ed9e23140a2c4ca"],["/2025/12/05/grove-high-output-management-1/index.html","a1c1d48e0710db68e2a3f62283b30194"],["/2025/12/20/huawei-management-strategy/index.html","54ee28d4e10423b044ad6449741ef721"],["/2026/01/05/grove-high-output-management-2/index.html","8bde74441db54f7e240a9ce7f4a72c11"],["/2026/01/15/rocketmq-internals/index.html","47d17e58d62538e823323d17d45869bb"],["/2026/01/25/huawei-management-cadre/index.html","265bf0622eca90af8403bc6e25716c69"],["/2026/02/08/grove-high-output-management-3/index.html","52100343acb809a42c783faa24545cb4"],["/2026/02/16/es-segment-commitpoint-translog/index.html","62c5dc6e6efdce0ced3250e1fe2984c9"],["/2026/02/25/huawei-performance-incentive/index.html","11d429ea9b1605f48dd14a53f2dad23a"],["/2026/03/05/es-near-realtime-search-crud/index.html","05ad03db6962dc819a09731b781fb6d2"],["/2026/03/12/grove-high-output-management-4/index.html","27f5580fcb2f64cfc90e380ec513f199"],["/2026/03/25/comprehensive-budget-management/index.html","a3c67ca885eff8c9dffc524e38d28e2b"],["/2026/04/15/grove-high-output-management-5/index.html","e471ce4d1379733a6bea705cbdb35977"],["/2026/04/28/ipd-integrated-product-development/index.html","17b8d096a7ec1132a0ec8aba7497a3e3"],["/2026/05/05/grove-high-output-management-6/index.html","00c17639fa35c8ade1ad960c4d5991e2"],["/2026/06/08/es-pit-point-in-time/index.html","ae357af06b32343ac6283f75aa1ec8da"],["/2026/06/22/es-relevance-scoring/index.html","9e253694a14388161fa0029d61d9e0c1"],["/404.html","9ac743ecc466d8eb9916ff15f11bf2fb"],["/about/index.html","5331ea6ef4fee210d088846e11191191"],["/archives/2021/11/index.html","8211e4b58388c7889991ef1701ec425d"],["/archives/2021/12/index.html","f6c6bda2f2c77badfdb91094d71f3876"],["/archives/2021/index.html","f281d4128f3f47b6ea8cff13b54dd2e5"],["/archives/2022/01/index.html","7805a6249bd629224ad76aeb7996ac86"],["/archives/2022/02/index.html","b95ed0bf3a16f7e158367b7b06ffb0b9"],["/archives/2022/03/index.html","af75a79138a98c5a7a99f4b7b20ac47b"],["/archives/2022/04/index.html","a22f664df0ccc9497e7e87f0591e9a40"],["/archives/2022/05/index.html","1b6e851beeae4c68a7552f44505bcc36"],["/archives/2022/06/index.html","71240d69b4a7b34fb312545ee18d7766"],["/archives/2022/07/index.html","502e7c1619f2bdd0779a09395ddb8959"],["/archives/2022/08/index.html","c1079de63a74122fda7c97b49adc4e96"],["/archives/2022/09/index.html","f3de5375af13c6f561c7039ebffbcf5e"],["/archives/2022/10/index.html","53bb531f7aa2142926fa175042e04bd5"],["/archives/2022/11/index.html","856601c307692290e3d0dc5e3289977b"],["/archives/2022/12/index.html","5f52ddd3c170d99d7b519da540d95022"],["/archives/2022/index.html","a93519c1bf4a50134e4fe11c4f5ad3d3"],["/archives/2022/page/2/index.html","62c77754e41ff7ad661ae5326ed4e3e8"],["/archives/2022/page/3/index.html","5d3394a54bb4b0dbd6aeffab71e878e7"],["/archives/2022/page/4/index.html","25e9a821fceec4aad42b6c0f21280057"],["/archives/2023/01/index.html","2f06922ba11ea3f9a67a687b1280b1b7"],["/archives/2023/02/index.html","65b6cdc5557eae4781922e4fb909af96"],["/archives/2023/03/index.html","aee59fc6ef09b38209c3213c43a708bf"],["/archives/2023/04/index.html","8fcc89bef319a4c9f31f8beaccc568ad"],["/archives/2023/05/index.html","298d4637fcaddd34226999077e5c3fda"],["/archives/2023/06/index.html","8955e61cdd34079457264f906249296f"],["/archives/2023/07/index.html","3640fe2b13d24ba82884c9e75f3b4652"],["/archives/2023/08/index.html","1d896c04a3dc0d0f21101accc2aca428"],["/archives/2023/09/index.html","4ce49f3e3d2a0c544faa8fc55cb947ef"],["/archives/2023/10/index.html","d91b2d9429f776a9f495a03bf0eea3f2"],["/archives/2023/11/index.html","936ff5ef7faa23fb7e65332e5453241d"],["/archives/2023/12/index.html","3324409bb5c4d1f4a7153fee0cce59ed"],["/archives/2023/index.html","8e8a5b84186b0e8816505a1206b2e59b"],["/archives/2023/page/2/index.html","2a14fbc261cd94d56442fdc415b29c94"],["/archives/2023/page/3/index.html","07e50fc60b7f15b0a4fda529050c3d0a"],["/archives/2024/01/index.html","8cb6e1d38b1bdcc66defa9ff06d4763d"],["/archives/2024/02/index.html","e54a0956b2e7dd0aa62778a5c439eb90"],["/archives/2024/03/index.html","2358351e5ee3bb7e2e5302c859851244"],["/archives/2024/index.html","7eadd8f070d9bec4dbe9adee7c45983c"],["/archives/2025/06/index.html","f84677bc89d3ec8009ca5a1feed3c8a5"],["/archives/2025/07/index.html","8d867995d8aac8ef15d08a47582b0f4f"],["/archives/2025/08/index.html","b66f7d64ceee47d235b69a993d4f62d6"],["/archives/2025/09/index.html","defb7b304c7e29463fc76dd42b756dcd"],["/archives/2025/10/index.html","936e97375c20c5f03c3afbd08f3a108e"],["/archives/2025/11/index.html","429a97b2a97eab754eadd1a718a7907c"],["/archives/2025/12/index.html","069b99a0c23dae7050ec0540ac6cd386"],["/archives/2025/index.html","c438a89484554a4e756488070c03a4ed"],["/archives/2026/01/index.html","1ba9e78f5bd0ae579bc5292fe59744b0"],["/archives/2026/02/index.html","75809dd572fd9b5b87786fe63425e21d"],["/archives/2026/03/index.html","a25425a14cde23f85a4e9537cef91ebf"],["/archives/2026/04/index.html","c13eaa6d3d169ee25a3676b31cd666d7"],["/archives/2026/05/index.html","42563b9207acaff563b4ff02774e4e5d"],["/archives/2026/06/index.html","929e134c1432bff0ade7958420303c0d"],["/archives/2026/index.html","6d1765183f970d376fef33cdc654139c"],["/archives/2026/page/2/index.html","c250477f657982467fdd51a0d9b73eeb"],["/archives/index.html","7b79a7d584e9ea1eed109d8c98bee6a9"],["/archives/page/2/index.html","38204666167e038329a1a6401ff65ca3"],["/archives/page/3/index.html","f9743f7d1d29233a6db0359ba548b31b"],["/archives/page/4/index.html","cf5080d9e17646e4be5064e3b285ffbf"],["/archives/page/5/index.html","69a8e6d4ed548f26ae21c147c2f6ddaf"],["/archives/page/6/index.html","c9713db6fcb5489696007645015e0a7d"],["/archives/page/7/index.html","c9c00311c0fc48ccc5659eb9b6cbb20b"],["/archives/page/8/index.html","297a3581ef7bdccf268725e99d54a993"],["/archives/page/9/index.html","ed4da2283e8262df1b8ee5d6b31f6010"],["/bangumis/index.html","e3d7f469b2f8ada3d30d9750d8c93fe0"],["/categories/Java/index.html","8a638d0044f278b7364babf7a306409a"],["/categories/Java/page/2/index.html","a85026744cacf4df3bb0d46a47bad9f9"],["/categories/index.html","11be8bb4c7e8fb5120615372c5a550d6"],["/categories/中间件/index.html","fccef564ea2de1040448a9fefa9d7f24"],["/categories/数据库/index.html","0d83112800c45cad7c7bb905fec281a2"],["/categories/框架/index.html","2340ab27f3ff61c806cd078b0e212575"],["/categories/算法/index.html","6e66d17e1b86415d883c36f8e188fe03"],["/categories/算法/page/2/index.html","11198dc95fb6fee482400ad1b23b2740"],["/categories/管理/index.html","0569cff89a81aeb6b82d12ca17a69552"],["/categories/设计模式/index.html","2b8dfcf53fb74ab4e2ca608a17f0fb7a"],["/categories/读书笔记/index.html","f0bda347bcf35a71f1aa1de8edaccda6"],["/categories/问题排查/index.html","4cb3e005a513693faad3b7e215a9be51"],["/categories/随笔/index.html","bf37d436885b0efbdd436f7b3d0244ad"],["/categories/随笔/page/2/index.html","a89a2db9c22c75c6906f140524379cc6"],["/categories/项目实战/index.html","2dad432acdf2fef82095094c29a47395"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","063170221339ff5df657376170317dc6"],["/friends/index.html","bff87a454ec888ef625b5cd15a72f620"],["/gallery/index.html","0e314d177a7911e195a276853d1f5872"],["/index.html","d62087a45ad05d0bd56e178da024e7e2"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","97b12d2e1c46326d2da7ae89f696cfad"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","f646e3625ca5b61bf27ce45d91f500ad"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","427b371a02f2b539bd2a8d22cd67e550"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","fe6f2a61e44598fb12064b77d46567bc"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","4d8021fdc11e1fb5414f39a2846572e5"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","13c76ec3236b1f89347580c9d0e41196"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","c4680f32fa3ebf36d2ce93d6e367cf0c"],["/page/3/index.html","e122b8da463f9a580bb1ba91b140d2be"],["/page/4/index.html","1aae35d06932648ba5978f4f0ec6dedc"],["/page/5/index.html","f2dc02a3b46f5103fc35ef3d9bd82ac2"],["/page/6/index.html","be60ce98979fd1d53987c70974aadf29"],["/page/7/index.html","99f447b34fc3ba1d69e0f1373a9845ac"],["/page/8/index.html","d8b5a290873306a48b6f4a6a5470a0f8"],["/page/9/index.html","0ccdeaedb221d03f62cd4ec963b09226"],["/shuoshuo/index.html","72424ea80d7f402ed2bff69c1c1de2dc"],["/sw-register.js","a35110c253a168271372b7e8f0009e15"],["/tags/EasyExcel/index.html","1a5ed283793f6e1400247d5d612770ee"],["/tags/Elasticsearch/index.html","7b3e6ab254ea2a7bd2f9e976cea79499"],["/tags/IPD/index.html","49c79a4c00cb5dd18b6ab461156f1ecb"],["/tags/JSP/index.html","e84264277a33210606924319378a0885"],["/tags/JUC/index.html","ecac2b89757f929a473a06829a8df1a8"],["/tags/JVM/index.html","cd977e3e0e91da8eb18bd47f7aa261b1"],["/tags/Java/index.html","276c94c62bb4d1646b07ac8559087002"],["/tags/JavaWeb/index.html","4c5c0c7ceedc136e986fc40a003ccc56"],["/tags/Java基础/index.html","d82e320e37674457209346fa525988f2"],["/tags/Kafka/index.html","4c3062e6ba5c5b1fa6d0744ded136e7d"],["/tags/MyBatis/index.html","d42d9bb0f4c41f61de649461ca65a034"],["/tags/MySQL/index.html","0660f344fae9bdb94eee09066553133d"],["/tags/ORM/index.html","6df697d1b4885c6442f486100d38433b"],["/tags/PS/index.html","aeb63dd6f5b8fd5f66c3e1583ff467f8"],["/tags/Redis/index.html","2b1e6b492e4f1caeead33152861b0e0e"],["/tags/RocketMQ/index.html","ece12b7f646b63d37e504db205f12b83"],["/tags/Spring/index.html","3f58d91f9ee46119a171c01c41ddce04"],["/tags/SpringBoot/index.html","e418b17edc974effc750c40642f09683"],["/tags/XML/index.html","458171ccbce845422f3d66cbec8786c0"],["/tags/index.html","2b6c8cba888eb50c258001da95aa0bc0"],["/tags/二叉树/index.html","e410ea7b4a0f85114e102dea04f13b78"],["/tags/产品研发/index.html","5a5096c36703f36bbb5cd9e770b51677"],["/tags/人才管理/index.html","35f34f5343dcd21221afdf855dab9202"],["/tags/分布式系统/index.html","a6819f6f776adcac0752761e6e568dee"],["/tags/分治法/index.html","3ac25884db720910648a9ff3415eaeb2"],["/tags/前缀和/index.html","8d527ca07af522e4078f912d91d79621"],["/tags/动态规划/index.html","cf1aac9c7baf960b65a93b6a39db2ef4"],["/tags/华为/index.html","f6c35aad8fbb3edcb5aa0061815ef32c"],["/tags/回溯法/index.html","101a5c926dcad0adb34ce2a02a9e66b2"],["/tags/字符串/index.html","0011bb3ba4ca1860d6f2ae4f57ac6bfd"],["/tags/工具库/index.html","786fce336d9f11afb9066ec4dd8bce2c"],["/tags/并发/index.html","a8fa95bbde5b2cbeaf3e379bc2fbf7fb"],["/tags/性能优化/index.html","7ca15bf2bc61dc07044488b8b38b3546"],["/tags/成长记录/index.html","56e7428fa4e16747cd5eafc875d07b4c"],["/tags/成长记录/page/2/index.html","8f7ebc7275d22527eae6e1e9033c18ab"],["/tags/战略/index.html","357d97e78ab3fbbb964f8b8c324172f5"],["/tags/搜索引擎/index.html","39f11e19e91f8d07c83171b2789d32dc"],["/tags/框架/index.html","392a3e58e8aaa7c50c63e4246b0a0e5c"],["/tags/比赛补题/index.html","bf6a32f63bc79d40516b6b2f242b719f"],["/tags/消息队列/index.html","dc3488c54c334b15331a1cc5df1a8881"],["/tags/源码/index.html","ac351145daf8a5f6349a7d9e823d7f3d"],["/tags/滑动窗口/index.html","8cdf929dc659d36c701ac5f52d21e9fb"],["/tags/算法/index.html","2f85059f2bd75acfa96e61ac936cd305"],["/tags/算法/page/2/index.html","f979dfe5156d8647c282169f088336df"],["/tags/管理/index.html","e21c19539942195a36d19e99d11aa181"],["/tags/管理/page/2/index.html","4cab2c61ecd8bd7c228dba0845d6da42"],["/tags/绩效管理/index.html","1a37124e51805e87be8611faca7810f4"],["/tags/规范/index.html","0cc48a303fcc14c5f543fef7f2f01dd8"],["/tags/设计模式/index.html","17271c10331c64664525b566165f43dc"],["/tags/读书笔记/index.html","16a678dc9a7c634e064e43526aa1f392"],["/tags/财经/index.html","4c3e46d883ff9e86673c4469cf94de4a"],["/tags/软件工程/index.html","8e64227c55d4ba60bc3d765260ab8daf"],["/tags/问题排查/index.html","233895d4743a317624fe66e052c105ba"],["/tags/集合/index.html","ed8f9c1bc3670ea35ad6a1fbb6ab3d5d"],["/tags/面试/index.html","6749325eef51d8a71a07ae4b989431e5"],["/tags/项目/index.html","1074936c903b13332daa0e68074587a5"],["/tags/预算管理/index.html","1ff32f27b7980a6c2d2dba8b0db905dc"],["/tags/高并发/index.html","cf1c7f84420b81f214c97c6d533944e1"]];
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
