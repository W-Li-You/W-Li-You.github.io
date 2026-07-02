/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","06efff40630f69a9b688bbfc486cdc71"],["/2021/12/05/zi-wo-zong-jie/index.html","f1d103a7266ab258ace926226c7f4469"],["/2021/12/12/zi-wo-zong-jie-san/index.html","6b2a11275f5bd0f3113e791c2de2877d"],["/2021/12/18/zi-wo-zong-jie-si/index.html","3e3d565e09c624c7d52706f25af1d605"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","e72651a5e41cd7520d139fb8f70296bb"],["/2022/01/23/han-jia-zong-jie/index.html","ef0c71cd5b217637052a33101300e15c"],["/2022/02/13/han-jia-zong-jie-er/index.html","d13d69a83167be0b29de694ebdfcfd68"],["/2022/02/20/han-jia-zong-jie-san/index.html","a410a01e36208ed7b41c11d0f6c972de"],["/2022/02/26/mei-zhou-zong-jie/index.html","090013401d8f8a1201c1544ef4bb6b76"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","8d25894a27bd6ad77b2fb5834a2008f6"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","fed16c08f7016fa7cc8661e59628d8e9"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","b388c7d57b5fec21f71180a1a40da914"],["/2022/03/26/springmvc/index.html","7d4cf914581136e017ec8043b7f8d199"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","2c6de033928f5f0f693e20d62d626fb3"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","426bfe14df40f36576319325a5b6d00a"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","102f86b46314d3748bf3018c015045d6"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","e3e756bed63fe97839c502cbcdec8de1"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","d4d12051b8d85191c7e4c226ebd06566"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","422da4ecd047d39c828a414886c5bedb"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","0bfcab6d98074656ca38d6e46a85ac75"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","d562469ede45a58eca92cd83ddb53f93"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","d021d2f08f1f3eb8cf7c4cbbed2051f6"],["/2022/06/25/redis-chi-jiu-hua/index.html","ee78743ad4c8295460d2b483c8252a09"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","8ac47385c383d5304b76bf98dee93dcc"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","62b93abb4c7d190dc2c29201b788c79d"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","3034ab6d080507b6923205dc0ad3ad54"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","d247c0e494d12e4bce2851c3bb6de077"],["/2022/09/15/mysql-yin-qing/index.html","2070f80a70c2b56750b715be621bc73f"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","a4b9f68943a3448210269b75765f0b0f"],["/2022/10/13/arraylist/index.html","1cdc3e83d39092c03d25e15ed13a61ca"],["/2022/10/16/linklist/index.html","3a49c634157cf415c0ac4ce2d735a3d8"],["/2022/10/18/vector/index.html","84daa4408f067cd2ec1d06fc73cd5b29"],["/2022/10/30/mysql-suo-yin/index.html","8324c3317644f9a6ddda7e3d95772b8f"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","96ca11b52f41bb37f779e6903c8ad955"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","dc2f2a6a4153d20438aa55fd90049f8c"],["/2022/11/20/pc-ji-cun-qi/index.html","902f46b5ea767744cf77b945fcf3e66e"],["/2022/11/27/ji-he-mian-shi-ti/index.html","9318b0feba359bb8e35e08a6f7c8c122"],["/2022/12/04/ben-zhou-xiao-jie/index.html","8aa6c24f10f27aeeeeedc1171fecc10d"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","cba4d7b46588661fadc19354af5fa938"],["/2023/01/15/bei-bao-wen-ti/index.html","8c794106a932b5368dce5638398dae65"],["/2023/02/05/easyexcel/index.html","1e5c80ab75936f9dd062bc3871a574ed"],["/2023/02/19/jvm-mian-shi-ti/index.html","c49c025aca808cc57effa839c1a2beb4"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","750267934c787705d4b7d96d0e84798c"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","6566e746664e7d7fea9eaf9ab679cbdf"],["/2023/03/11/yang-hui-san-jiao/index.html","614e873bb544d2cb4adc96b23e8f030d"],["/2023/03/19/he-wei-k/index.html","436d8abbdd034b2010667fd500b6a84f"],["/2023/03/26/juc/index.html","236c00908e1850ef606ba02f1d9532b0"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","675957a1538148d21c82af4fa8d84a7e"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","d508a6e0f2d5f0e886264afc1aceb2c9"],["/2023/04/20/mysql-gao-ji-yi/index.html","c19d0f9599aeb56d06a8f17d512ca06e"],["/2023/05/01/mysql-gao-ji-er/index.html","32b3d8475e6d0df0d3d990f26adb2997"],["/2023/05/11/mysql-suo/index.html","ba8c8304a76761029e8501fba4a785ac"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","4a9f2fa773d7dfca01887e97ccc775a5"],["/2023/05/23/mysql-ri-zhi/index.html","a074f9d21d39e7331ab4cc24460c9d3d"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","b85b8e5adb69ebd5dc49d7ead12c9bf8"],["/2023/07/15/xml-jie-xi/index.html","4d6cca37e4e988439b2c307f1d5a6117"],["/2023/08/21/mvc-zu-jian/index.html","489c34433dcfa66e40fb561d325f5ad1"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","4e902a501ebe2b2cadc8cbaca35e3a27"],["/2023/10/10/dan-li-mo-shi/index.html","b4055476d044f64532a817fde7c3f83c"],["/2023/11/23/hua-dong-chuang-kou/index.html","6ffa703ace711a12f51fc095f3602dcb"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","74203372c0b982d57a3d9739ba95fa0d"],["/2024/01/13/niu-ke-div2/index.html","9b75f369486d42d49eeb35abc7d0fbf9"],["/2024/02/10/kafka-jian-jie/index.html","34daabc4fddea28d70bd47b7624b45e9"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","abb83aedfae1cf73b56e4fb1e02a794b"],["/2025/06/08/alibaba-java-coding-guidelines-1/index.html","096bba85d3e13a105b074a5ed88589ab"],["/2025/06/18/alibaba-java-coding-guidelines-2/index.html","450588f97b9da10bac8ee8f91f59f80b"],["/2025/06/28/alibaba-java-coding-guidelines-3/index.html","5339e06eea0de9e5e492722f56a3b340"],["/2025/07/20/clean-code-notes/index.html","4373ffb1c9058fad65d5de9df81702ca"],["/2025/08/15/elasticsearch-the-definitive-guide/index.html","48d5f2326c3b5d29eb2b83d3ae38fe72"],["/2025/09/05/rocketmq-rebalance/index.html","688e99fd51d655fa056c3e40a0f4f583"],["/2025/10/20/redis-bigkey/index.html","417e29bc1e7a46d36bf9a98a8bc715d9"],["/2025/11/15/online-oom-jprofiler/index.html","edcf4884b53877c2fac9c028bf556793"],["/2025/12/05/grove-high-output-management-1/index.html","a1967461c71521242d63341091f68e79"],["/2025/12/20/huawei-management-strategy/index.html","600a64b5456a4c25245186d7f88084f9"],["/2026/01/05/grove-high-output-management-2/index.html","64ae449a33a51531b9935364d77c9e1b"],["/2026/01/15/rocketmq-internals/index.html","0cb767a5619b5b2b4a97c35ac67cb411"],["/2026/01/25/huawei-management-cadre/index.html","30a3c54b9190dd9bb563620e12be037d"],["/2026/02/08/grove-high-output-management-3/index.html","bdb3ff89ef523f05a99d4802ebb0df97"],["/2026/02/16/es-segment-commitpoint-translog/index.html","15b52d083cb003d005f23dbeffefddec"],["/2026/02/25/huawei-performance-incentive/index.html","3b7dcb33010fbc5f1e8601461291aba0"],["/2026/03/05/es-near-realtime-search-crud/index.html","e562e0bf5eacdf333c477a47a74017f4"],["/2026/03/12/grove-high-output-management-4/index.html","de57008fea8e755571cad4dad05fc081"],["/2026/03/25/comprehensive-budget-management/index.html","d84fd75177f40e9651eff708d69f4ef0"],["/2026/04/15/grove-high-output-management-5/index.html","5d20848ab7928f6e429d4a30c76d4411"],["/2026/04/28/ipd-integrated-product-development/index.html","9527c67cc9e282194378b161190017d2"],["/2026/05/05/grove-high-output-management-6/index.html","103c38248ba0f33ddc8d4435f420e2a2"],["/2026/06/08/es-pit-point-in-time/index.html","959c5c9c70003e44559bba5e2d79b0ed"],["/2026/06/22/es-relevance-scoring/index.html","d596864801bd0ec058fc6c6366788682"],["/404.html","31f6d1ec22782ae0a88b20e03617cfef"],["/about/index.html","268b1a04b032b5aa72e3f6cb8ff66ab8"],["/archives/2021/11/index.html","f665cf5cf2ee670d7c2c47d7213f38b3"],["/archives/2021/12/index.html","2f697e5a0f817f91aa7307f9850b4e8e"],["/archives/2021/index.html","4eaae642ab17e3529b4fab2204a10491"],["/archives/2022/01/index.html","ac5ebec18a3159168ae1f4c93bfef284"],["/archives/2022/02/index.html","ae2f48c05e2c41b6409a0a13df62957f"],["/archives/2022/03/index.html","ad55f4dbaac54af9f8c2b015a623c856"],["/archives/2022/04/index.html","6c7324c76a7a0ab2a4be39b9354a8634"],["/archives/2022/05/index.html","2cdc7b8bf35cd6b335f0ab3ad1302334"],["/archives/2022/06/index.html","d78b86d622909cf870ec2d3be9988049"],["/archives/2022/07/index.html","f8950eace0121c568e4b65d9a3a6ce56"],["/archives/2022/08/index.html","2b73b4d31b63fd8d55dc1b34bbf20298"],["/archives/2022/09/index.html","30efef3d092e80a48de285c97663805c"],["/archives/2022/10/index.html","89f9638996fc89e312c1dacf43fac5a7"],["/archives/2022/11/index.html","f353dfff11ecf3c4f73f4af0c8cbd5fe"],["/archives/2022/12/index.html","aa6fbcb8d1415bfc76b72250494e5c17"],["/archives/2022/index.html","3111f06c255efbea9b30e777add6e1de"],["/archives/2022/page/2/index.html","cee983cacb1f0d3095c2d5d6b6963a83"],["/archives/2022/page/3/index.html","14ca24cebad2d0a79fb5360d4be51971"],["/archives/2022/page/4/index.html","da18852d92c29c7824d4b46319d3ac28"],["/archives/2023/01/index.html","42937807e83904a7fd152e44b5c16c9f"],["/archives/2023/02/index.html","ba864fb6140454ba311aacab470f586f"],["/archives/2023/03/index.html","3cb46f74e882959d123590c8c02e86e9"],["/archives/2023/04/index.html","c54fa26d55372689987e34f3e5bec069"],["/archives/2023/05/index.html","3644a33fe86e1d13ef5146e22f86ce81"],["/archives/2023/06/index.html","458132c6caa35495b1324d032807d474"],["/archives/2023/07/index.html","34c86ef13ad73bb80ff42e9a37665b5b"],["/archives/2023/08/index.html","f87501968ea25b28d813bf82553938db"],["/archives/2023/09/index.html","1892961a6fc4bfcd1af73454f0355c8e"],["/archives/2023/10/index.html","61a987eafae22eb1fa70ba33b2b12420"],["/archives/2023/11/index.html","354fbd398295fb9d68dc7e2948ccb05d"],["/archives/2023/12/index.html","b5bb2a8e10a2d13bb1ab82aff22216f6"],["/archives/2023/index.html","ef00d2890a4dfb3c4192f64667f1b665"],["/archives/2023/page/2/index.html","590060fc2245f0a0df93a26288dff8a0"],["/archives/2023/page/3/index.html","38ca32bcd4c9fbfee8a433834cd6f962"],["/archives/2024/01/index.html","012f346d124c47408c770f5af2264caa"],["/archives/2024/02/index.html","c73d419e327c999da04ed342efcd3d39"],["/archives/2024/03/index.html","93f5d81b65c2af7a1af5a4d3f3aeed37"],["/archives/2024/index.html","96b0bf99ac78bcb310ca98450076241f"],["/archives/2025/06/index.html","4182503bde53180c16815413e15f333c"],["/archives/2025/07/index.html","b633088a65bf42fb224e156bcb9a5607"],["/archives/2025/08/index.html","9a26155d9d5f0362ff9db819d12599b5"],["/archives/2025/09/index.html","82af0d9449ff2893310dd7131623fb69"],["/archives/2025/10/index.html","f1202fce72be68354fd1c966b786f0d7"],["/archives/2025/11/index.html","d27a4ecbff06cf8d292ebd87651ba87e"],["/archives/2025/12/index.html","be78539e4b622ae1707a299215f4c928"],["/archives/2025/index.html","4b3e68e2a014084bc28b49b9fb59c0d0"],["/archives/2026/01/index.html","62cc5e3392e3de72fb2ab1e66a3bf680"],["/archives/2026/02/index.html","940f487fbe2d2b55899352cc44293361"],["/archives/2026/03/index.html","8ad58bcdc8c4edb7b8a8ceeccf9a9e47"],["/archives/2026/04/index.html","b53b0f01e867e5c3b402e30f3c0dbc66"],["/archives/2026/05/index.html","91467107857bf3d61e6dc9358f682159"],["/archives/2026/06/index.html","3a965188f9cff22aa2c71359bc662908"],["/archives/2026/index.html","35fecbb00b0409b3ce0e133734e84929"],["/archives/2026/page/2/index.html","4f8a9e5351e0327614ad84fac01fffd9"],["/archives/index.html","f34d469950f8fe37f7a87e80e9c96ca6"],["/archives/page/2/index.html","1302e2eeae81eecbe71deab02b035951"],["/archives/page/3/index.html","6d12bef1dd0f703758b036434708cfc6"],["/archives/page/4/index.html","330e5bddd7e176797c16e853232a2fe7"],["/archives/page/5/index.html","9d63ed6b2d65dfc454706327678e0475"],["/archives/page/6/index.html","01fae765171c697f97c28df1d32fc90e"],["/archives/page/7/index.html","9f8e661e8da358a165dcd421768d477c"],["/archives/page/8/index.html","dbdfe7125f1d2b29224ea2cb4f99d816"],["/archives/page/9/index.html","45a6ddf2c141b57023845b715306c917"],["/bangumis/index.html","a351910fec277b8f52acdc4cf32187ee"],["/categories/Java/index.html","28032ea84968e0737d60d69a6f6e2c0a"],["/categories/Java/page/2/index.html","be343d514e2701eb26c7bbb07a5935bb"],["/categories/index.html","b6a4626e1434970b6938007f1eb32c1c"],["/categories/中间件/index.html","ed549e7c03ef23c710986d1483037ede"],["/categories/数据库/index.html","70504c48ba085cf3f2ec677f2a644218"],["/categories/框架/index.html","9933d2b06a3747730c2aa126016bd99b"],["/categories/算法/index.html","0fac67fb434d205ef2fc3136ab4c37df"],["/categories/算法/page/2/index.html","4770e52327f0e42db6ea98d0775b2174"],["/categories/管理/index.html","8555c2eb1f761ed4fa4fe28c656baefa"],["/categories/设计模式/index.html","bdbe59ed12385de14a6d75554bb56863"],["/categories/读书笔记/index.html","f015866e96e052368cdd89004f06ab35"],["/categories/问题排查/index.html","0e25926f56ee4640e5183d7d0cc671a1"],["/categories/随笔/index.html","d9dd9a856bdc296e273774713169fd46"],["/categories/随笔/page/2/index.html","03ed1a7ca0e336714eb2d13b9e0b0e8f"],["/categories/项目实战/index.html","9f853f6482eaf354b8d1b430f635023f"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","b19c9fbf78cec3fe1ce3011027cce948"],["/gallery/index.html","494c70b252676a972d3c27f35de6f616"],["/index.html","ca2fdcbb77a395f1cf8f3bdb15264859"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","e0bebb71d416779f61497b1c05fb2e16"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","d9b75c17a895c1616cf99c5797737798"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","cf48c7ea29bc6adfde8e41132da838c3"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","7b99fc03fa2283b498c95bf26630099c"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","c63083a85fd546b785a0e0ea3aab9fb8"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","22bf8d8918f38b203a7ab19c07044702"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","b1825563264644c7de0e032609fed248"],["/page/3/index.html","d725627820a87d7132f5495b198e41d8"],["/page/4/index.html","5a9b7df1c4edf20303554026ae32722a"],["/page/5/index.html","74c199bb95f5593df3fcd1591f7bc20d"],["/page/6/index.html","a5e09e0992faa0fa3f71219c20f9abb2"],["/page/7/index.html","d4eb3a1c8a5e75f538ed0ac500608222"],["/page/8/index.html","ec769a1fecdeb3501712cfca707f407b"],["/page/9/index.html","7f4fde706a876cd380937abb62b698ca"],["/shuoshuo/index.html","e9d4baac86c205eb5c6f8e2be9d2063c"],["/sw-register.js","e91ebaa8307a33d00d79be299dd50efd"],["/tags/EasyExcel/index.html","6caca930d6993e310782e053f1830b4f"],["/tags/Elasticsearch/index.html","21588642a719ad86f4f466cb9792bd4a"],["/tags/IPD/index.html","aeb5212438f383e12e329f22e438c664"],["/tags/JSP/index.html","4f62f002008fdd9084afbd4834f1f295"],["/tags/JUC/index.html","fe0f8fbb648be8933eae592957c8bb0a"],["/tags/JVM/index.html","1f8a86630912af3a53978f59817a703d"],["/tags/Java/index.html","d99696181a618fdae61d8af0d47885b8"],["/tags/JavaWeb/index.html","284c306f3c1299ad9db87c8c109a0812"],["/tags/Java基础/index.html","a8604f20dd4c253b167a72cfaa0d01b6"],["/tags/Kafka/index.html","ff7e7c8c39e8043a2816f5bdfe5201ef"],["/tags/MyBatis/index.html","465e695e4dc3b6f6c93289ed242e51fd"],["/tags/MySQL/index.html","7f5c8af6fa78ec77839d638b56e98b4c"],["/tags/ORM/index.html","26512c1999aa2a8c9debd049653d5148"],["/tags/PS/index.html","8b9b887b6eca7f5ee1e458556b948803"],["/tags/Redis/index.html","b7b08040e225cad07f03d0b3ddb42385"],["/tags/RocketMQ/index.html","2971853beef49dff867cf06aa3b0fe78"],["/tags/Spring/index.html","f60f9baa6e46505e710e3400dcf55c8b"],["/tags/SpringBoot/index.html","895fc8193c55da84abffccf92e95cbbd"],["/tags/XML/index.html","f50b667f1c6b247734d5f5e459d60ccd"],["/tags/index.html","02c097be43c0210d28d12f02cb53b045"],["/tags/二叉树/index.html","2c19476214bcdad4590f6ce9ffc4064c"],["/tags/产品研发/index.html","ecd76d88f8a414accbc9a5522c90aef6"],["/tags/人才管理/index.html","ae7aa067c7dc50a161f7f802c877d4ba"],["/tags/分布式系统/index.html","c9bff7833a2c3cd59112657a7823a974"],["/tags/分治法/index.html","5bbc2d37c0cf11f98dcea2227b151589"],["/tags/前缀和/index.html","567e72d0280002681986ba88b53f85bd"],["/tags/动态规划/index.html","7eae2841e64ab71f16a662f75f9039d0"],["/tags/华为/index.html","7746a038f1f598f3a6c412a745d3c2da"],["/tags/回溯法/index.html","db45eab2beb27a3d53423aaa3f22aba2"],["/tags/字符串/index.html","3a8a072b59bd4645f2fd147803938b9b"],["/tags/工具库/index.html","43fe75c416b9f53368943d74d32d3812"],["/tags/并发/index.html","057c5e8dd9f43b3d46da9ee85e208005"],["/tags/性能优化/index.html","b705a5c3a9c7c49fed32a610c70f06af"],["/tags/成长记录/index.html","143fcdaf0397fbfb64b477167f39566a"],["/tags/成长记录/page/2/index.html","71b337afb20d69812378c71de08b7030"],["/tags/战略/index.html","6bb551503b9734959b30998bf501b3ca"],["/tags/搜索引擎/index.html","832a111588dcc7594607a332aca33936"],["/tags/框架/index.html","8026a466a75c93fc9072d52ae126812b"],["/tags/比赛补题/index.html","d3f53881475b3846fc97df2c910b4bae"],["/tags/消息队列/index.html","2852bde64c43ce7c622463482ee7b054"],["/tags/源码/index.html","082fb0733a83741ef0cefc8d94694db2"],["/tags/滑动窗口/index.html","440846315a9266579c3f8fe4baabfc0e"],["/tags/算法/index.html","abb60025c0a235e81fd7213f9670b482"],["/tags/算法/page/2/index.html","2f7d45d4e522d52f73d5d1102c16867f"],["/tags/管理/index.html","13bc1ba3f10f6eb1c9ab8dcefbfe8944"],["/tags/管理/page/2/index.html","181743f22bf51badcde60858b9a6a0e9"],["/tags/绩效管理/index.html","e6a848ee304697f0477a2237373f219b"],["/tags/规范/index.html","bf06db031db27d65b584de2c0abf340f"],["/tags/设计模式/index.html","5f5874892e58298705c3720e29bb0c54"],["/tags/读书笔记/index.html","dfd5541af5544d4f5f56d24536255741"],["/tags/财经/index.html","cbb4444fcac0d85d3b4b868f66cfbc93"],["/tags/软件工程/index.html","836d0547dd6c53667cea098a35de44df"],["/tags/问题排查/index.html","810f90bb7347ca10cff06b90ee0eba73"],["/tags/集合/index.html","7a2931873aab2423f5741988c5564286"],["/tags/面试/index.html","a65982bdc3e7cdfb0c6225201ffafd28"],["/tags/项目/index.html","0f8d91d774ad01dbe20b968d42ede1ed"],["/tags/预算管理/index.html","b058ea08460509e0630d124a66609f5c"],["/tags/高并发/index.html","61c5c4bcae47b31adf51540a8f4cff01"]];
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
