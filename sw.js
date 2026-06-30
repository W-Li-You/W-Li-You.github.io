/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/28/di-yi-pian-bo-ke/index.html","5b975acadbd0fd2bedd6877a38f20f95"],["/2021/12/05/zi-wo-zong-jie/index.html","b43428e876fc099b62b95e934cb41fb7"],["/2021/12/12/zi-wo-zong-jie-san/index.html","aff7236ba10c2afda2dffff4b213cf95"],["/2021/12/18/zi-wo-zong-jie-si/index.html","d8b181019ad1288de81c7be66aaf8d99"],["/2022/01/16/zi-wo-zong-jie-wu/index.html","38625cb339373ee8fd5575548ecce87b"],["/2022/01/23/han-jia-zong-jie/index.html","1823bfc03c38b17b922799c4ddd69dd8"],["/2022/02/13/han-jia-zong-jie-er/index.html","e029af4b54703c0986c48ca01120b158"],["/2022/02/20/han-jia-zong-jie-san/index.html","c456092ec1b390e2eea6c4e201a12035"],["/2022/02/26/mei-zhou-zong-jie/index.html","a33ce074125c49bcad3add0c887f8ac4"],["/2022/03/06/yin-le-wang-zhan-kao-he-zong-jie/index.html","f84adbd28e8a61d24e69e2bd087d0f03"],["/2022/03/13/yin-le-wang-zhan-kao-he-zong-jie-er/index.html","b3ece309eabfcf67af0058c64467c333"],["/2022/03/18/di-si-jie-duan-xue-xi-zong-jie/index.html","b27bc0741b5c12ac24c66dc7c8a5f836"],["/2022/03/26/springmvc/index.html","f4c87ab0fb520fec36a4f40789159164"],["/2022/04/02/guan-yu-suan-fa-xue-xi/index.html","0aa13b4540bbd725cba62d3cea46cc64"],["/2022/04/10/chu-shi-xiang-mu-zong-jie-yi/index.html","43a5bec39e27bfbf20ec2b72a8ecef63"],["/2022/04/17/xiang-mu-zong-jie-er/index.html","ae80ac3531c4d3b76bd6b3efb778f149"],["/2022/04/23/yin-le-xiang-mu-zong-jie-san/index.html","69368eabe6f7a032ab4383a10acd1e8c"],["/2022/04/30/guan-yu-xia-zai-yin-le-de-wen-ti/index.html","9f4a82c1999ab19c1115c70d30393afb"],["/2022/05/09/xiang-mu-kao-he-zong-jie/index.html","07d0769a65bc389782e3226c39987cc9"],["/2022/05/14/you-guan-springboot-de-xue-xi/index.html","6bf6702a286ac135b5ab0d872d47309b"],["/2022/06/11/guan-yu-ps-de-xue-xi/index.html","d86cad7b025e6599404ad4ac289ec727"],["/2022/06/18/guan-yu-redis-de-xue-xi/index.html","730d856f6fb60fb15a91a3c909625ec0"],["/2022/06/25/redis-chi-jiu-hua/index.html","7a33351719eb7623b1e6b0f64278ea3b"],["/2022/07/02/mybatis-plus-chang-yong-fang-fa/index.html","e4e199d2acf1e4908b1550aabb976b6e"],["/2022/07/23/chong-jian-er-cha-shu-suan-fa-ti/index.html","79ba47154695e557db30b29b49f38960"],["/2022/08/06/dui-cheng-de-er-cha-shu-suan-fa-ti/index.html","f03cb27b6d187aa86ac2bbc8e301d398"],["/2022/09/08/fen-zhi-fa-suan-fa/index.html","341fcec28dd57262cacf21bef8b90497"],["/2022/09/15/mysql-yin-qing/index.html","06c0e24f7d28b861e1767a1776e26ff0"],["/2022/09/15/string-stringbuilder-stringbuffer/index.html","43442b2eac6831df62080c8f65a4bbdf"],["/2022/10/13/arraylist/index.html","cfe931930b5d3146a3db1bd863542205"],["/2022/10/16/linklist/index.html","69a0668b692d8d5116652ab47f9bb2aa"],["/2022/10/18/vector/index.html","856cd48b56f17e74f4f3c711e3aad4b9"],["/2022/10/30/mysql-suo-yin/index.html","fedad86943b413fd57df55051e30750e"],["/2022/11/05/shang-cheng-xiang-mu-ke-fu-gong-neng/index.html","d508f3ad5d1dfa191c5270373745775d"],["/2022/11/12/shang-cheng-xiang-mu-miao-sha-gong-neng/index.html","1da1493eeed4fb03f5b9a373fe0bef77"],["/2022/11/20/pc-ji-cun-qi/index.html","86239b3b3956581c774524b176e6191e"],["/2022/11/27/ji-he-mian-shi-ti/index.html","344ad0b8868f594f1220615b710770ac"],["/2022/12/04/ben-zhou-xiao-jie/index.html","148b137083896d9ad2f26403e11423f1"],["/2022/12/11/quan-pai-lie-suan-fa/index.html","a96c0f1d6e01af67fd122192ee28f616"],["/2023/01/15/bei-bao-wen-ti/index.html","de966111aad31116e5b79c18bc123b58"],["/2023/02/05/easyexcel/index.html","7925c7577c6d2418793e9dd3d7ed1680"],["/2023/02/19/jvm-mian-shi-ti/index.html","96dd7a5be267b157dfc2d193593a7631"],["/2023/02/24/jvm-java-nei-cun-qu-yu-yu-nei-cun-yi-chu-yi-chang/index.html","46fa7db2a50d48e1a26ae0bcce826382"],["/2023/03/01/jvm-la-ji-shou-ji-qi-yu-nei-cun-fen-pei-ce-lue/index.html","49768ac0f1b59483ec8e30b4146de0fe"],["/2023/03/11/yang-hui-san-jiao/index.html","68e0f4e709410a78040b3bd6b84d43ab"],["/2023/03/19/he-wei-k/index.html","4be9869a578176a0ab98d5d8530babda"],["/2023/03/26/juc/index.html","40c561179b544c7f61943a36c0b97a6c"],["/2023/04/02/bing-fa-bing-fa-bian-cheng-de-tiao-zhan/index.html","6a63e2a69cd599f5b6e7549c3e082ec4"],["/2023/04/08/bing-fa-java-bing-fa-ji-zhi-de-di-ceng-shi-xian-yuan-li/index.html","a88a4ebb90d298efc0c421009656396f"],["/2023/04/20/mysql-gao-ji-yi/index.html","66a1b93962111d88be7a23c0855d0a6e"],["/2023/05/01/mysql-gao-ji-er/index.html","81265710ea15d5e9120e28148702dcb6"],["/2023/05/11/mysql-suo/index.html","2f4d3b815678306b67afb04faf0d3ad4"],["/2023/05/23/da-jia-jie-she-wen-ti-suan-fa/index.html","c857dcd01a88c9772c303aeb1f051f4d"],["/2023/05/23/mysql-ri-zhi/index.html","38955b3143482ef2992e24c1b231f0e7"],["/2023/06/11/tie-ba-guan-li-xi-tong/index.html","2519d01f457ced5431b5294a52d9a861"],["/2023/07/15/xml-jie-xi/index.html","0b25182f3e83aa342fb11e106cc34316"],["/2023/08/21/mvc-zu-jian/index.html","cd1f6d06c5f7e4be1f1e0309912b9fc1"],["/2023/09/13/jsp-nei-zhi-dui-xiang/index.html","248c37fd987845688ddf3a08bfc09d1e"],["/2023/10/10/dan-li-mo-shi/index.html","2c9ba95c3f78216b613d0f88e663296e"],["/2023/11/23/hua-dong-chuang-kou/index.html","892f81e1fe9064c772a0785665b9ea7f"],["/2023/12/21/xiao-hong-de-gou-zao-shu-zu/index.html","3ad60796e7ce393a3d85148542430e7e"],["/2024/01/13/niu-ke-div2/index.html","163e7345d56083f5e88727509a15dd63"],["/2024/02/10/kafka-jian-jie/index.html","93e387949bf0e36dd03c48bd1237c456"],["/2024/03/01/kafka-sheng-chan-zhe/index.html","1b2e706f72310d095d900952c96c9f2a"],["/2024/04/15/grove-high-output-management-1/index.html","c90d51b35ed5f504414bbf01708166b2"],["/2024/05/20/grove-high-output-management-2/index.html","e7c4a1cbea3d253956ba4acb8c390ed9"],["/2024/06/18/grove-high-output-management-3/index.html","2b3518d2f3ff4f883f46dfbec6f9f6f0"],["/2024/08/10/grove-high-output-management-4/index.html","8c71d307a83846141d4e7f5edeb8fc9b"],["/2024/09/10/redis-data-structures/index.html","1b620a5d92ac052362bfc9b961b6f854"],["/2024/10/12/grove-high-output-management-5/index.html","cd74318a11928a5bf3acc10bd64b92fd"],["/2024/11/18/thread-pool-guide/index.html","1523e95bff3ad887cc37a809afd58f5c"],["/2024/12/05/grove-high-output-management-6/index.html","7ee7a2132752fbc5237ce4ecae61013f"],["/2025/01/15/rocketmq-rebalance/index.html","232011bcce113a30b0804f39adfec853"],["/2025/02/20/alibaba-java-coding-guidelines-1/index.html","7654aab2062589869efb9d590c232f2e"],["/2025/03/18/alibaba-java-coding-guidelines-2/index.html","71bc72ed036a5c282a9f3fa8a2e2b561"],["/2025/04/10/alibaba-java-coding-guidelines-3/index.html","fa60023197b31eda616a55545c8ca933"],["/2025/05/08/java-spi/index.html","25beba93ca391f94eb402e03cfae350d"],["/2025/06/12/spring-bean-lifecycle/index.html","040fb53dd5db2483db3045116703f975"],["/2025/07/22/mysql-transaction-mvcc/index.html","1d3c05c1d6f94b6e477f61eccf0c7eac"],["/2025/08/20/elasticsearch-the-definitive-guide/index.html","9fe979c87ab57eef61e1ff09ea03404a"],["/2025/09/10/clean-code-notes/index.html","6a34535275d474b86fc83857427b5664"],["/2025/10/15/distributed-rate-limiting/index.html","6e4cd1a29529e31fd1b4ad43ac6b0c1e"],["/2025/11/20/redis-bigkey/index.html","8a695d4499f1250db85ebbe2d2842e07"],["/2025/12/10/rocketmq-internals/index.html","f3265664bb71e38a7ead21936a047beb"],["/2026/01/20/es-segment-commitpoint-translog/index.html","1a9e3b5e8d7ca29b15e5475d1bdc9f49"],["/2026/02/01/es-near-realtime-search-crud/index.html","b528068503f74d5198dc1d83697dae85"],["/2026/03/10/cache-consistency/index.html","39fd0527aaa197b9686aa8967567fae0"],["/404.html","01741b6165cb239d8bb5123abd3b95be"],["/about/index.html","d2ce8ba3d14e0133e55ad656de104659"],["/archives/2021/11/index.html","1a298c27095406c5c5b16d5b2c0258c5"],["/archives/2021/12/index.html","efc8478b0e72a9b26d9571689376c667"],["/archives/2021/index.html","fb2c7d49de2a7bfc6973e0d17f0fbdda"],["/archives/2022/01/index.html","8ed84952fc6e17876d75b6c38ecef6fe"],["/archives/2022/02/index.html","e856b1d0795ab4422ac646b75c627671"],["/archives/2022/03/index.html","153c2764c814020717112b9c30c8dac3"],["/archives/2022/04/index.html","bc8fe0b706687b1f44d26ea2f9fa6e46"],["/archives/2022/05/index.html","021e73537d4ce356bef1f8da3119a26f"],["/archives/2022/06/index.html","04e071054c180b32f87b5d6f039ca7bb"],["/archives/2022/07/index.html","d3faf6f4207205d3e645dbea4738fbe2"],["/archives/2022/08/index.html","fd138c237b1fa1bb41de5cb43b542f80"],["/archives/2022/09/index.html","8c8ebfda1da659d53388fc01dd25518e"],["/archives/2022/10/index.html","28e3654d7424f0fb0b893966c3eddaa8"],["/archives/2022/11/index.html","f52a6a469fa1d94778f21baa9b5f50a6"],["/archives/2022/12/index.html","4c1f475fcfdad262409ccd5f1d3167c9"],["/archives/2022/index.html","7905ae0a7181cebda2d39e2e820a1a28"],["/archives/2022/page/2/index.html","2f4708fcbe00a01d61d55d1b8e8ef515"],["/archives/2022/page/3/index.html","4fd9ca6abdb42529c99b92610dcf6b89"],["/archives/2022/page/4/index.html","04bc9bc640a55f803c389298268dc493"],["/archives/2023/01/index.html","906d9edbe7df4c4edecbfeda74150875"],["/archives/2023/02/index.html","865e7eb672dc363b66ef74b1dac7bdaf"],["/archives/2023/03/index.html","f4fc0d66644390f9a1cef5cb1e10cb64"],["/archives/2023/04/index.html","114b85b8513cd78bea26c871f17c6cb8"],["/archives/2023/05/index.html","360f042a114f83bd7fe850bad9de17b8"],["/archives/2023/06/index.html","33aaa0e4a7cddc3c59d8c255287314cf"],["/archives/2023/07/index.html","209086e693aee122b4a5b8f59fb4b1ef"],["/archives/2023/08/index.html","597bc417caeb283524c6137345d7e67f"],["/archives/2023/09/index.html","240a381608e9df13b0173315728bface"],["/archives/2023/10/index.html","ff57f593a717989e4f33cea62a405e7f"],["/archives/2023/11/index.html","51e8ef9d461f0de859292b21b7dca945"],["/archives/2023/12/index.html","618fbb8ab06811d199ec9fd5a173c600"],["/archives/2023/index.html","ba88bfc7e2faadca2e223f47ad5869c8"],["/archives/2023/page/2/index.html","dea949520bc1d9508d43e3b1728ce52d"],["/archives/2023/page/3/index.html","f44b0c98244e0d5a6335d85d8c74da9a"],["/archives/2024/01/index.html","cb0d19f9521fd2172801f21e774052e1"],["/archives/2024/02/index.html","079053afc4a6f06c36eb6ab864aa2750"],["/archives/2024/03/index.html","8fafb6e0384e7ca0f2d6f769f143777e"],["/archives/2024/04/index.html","0d4a013be43e629dce76bd54996762ec"],["/archives/2024/05/index.html","26421de34d9bf414bf22c485b4647758"],["/archives/2024/06/index.html","164dc76d7f3a8b0d87323c1821bb59ba"],["/archives/2024/08/index.html","39971c99587657f917d20d864ed5b68e"],["/archives/2024/09/index.html","d52d63e3849c6322992f849c7b74c54e"],["/archives/2024/10/index.html","bd31adf917b697d7f698e87f12738ad4"],["/archives/2024/11/index.html","428a5de6870c39375905d66b33efba88"],["/archives/2024/12/index.html","187d7299ff59bda94c017b9204b0bda3"],["/archives/2024/index.html","24b5fa5cf241154d3f9aa0f52ff26439"],["/archives/2024/page/2/index.html","412fd8214d90f9dd9dc3467b85541cca"],["/archives/2025/01/index.html","ee76f4326ede86834d1a01e12cb8a042"],["/archives/2025/02/index.html","7ebf1749f52c281992814b759589da61"],["/archives/2025/03/index.html","f058669ac3ab21eeb9daaa69cd2ec7fa"],["/archives/2025/04/index.html","be6a9004bbcd5b1538bec54fd014a764"],["/archives/2025/05/index.html","b8ae3201118f0d45521b0584b9ffd35c"],["/archives/2025/06/index.html","9759bbc4215c1c1e36faa37c12b08f5c"],["/archives/2025/07/index.html","0f44a27f3898ffc2c4f2b9e7448daaec"],["/archives/2025/08/index.html","9bc502fe0f4d95d35ac33fdb04198638"],["/archives/2025/09/index.html","158156732ee51739333ccc9f7278a1ea"],["/archives/2025/10/index.html","0bce1da927f058f7003a448672fa7ff8"],["/archives/2025/11/index.html","960c3c3d0567155c0188d1a3e064f990"],["/archives/2025/12/index.html","217dc19f73461b5142064d5a5628713d"],["/archives/2025/index.html","ba11f008da237220778922d6b71111ba"],["/archives/2025/page/2/index.html","ed3a196f5ef746b12be751190b45b177"],["/archives/2026/01/index.html","069e26f2b3a1054e472d0b9223ec0238"],["/archives/2026/02/index.html","23d8cc8d6f95691cf7aead6fa47d59cd"],["/archives/2026/03/index.html","4e0f914d14db7a36f06a88d49b54f18e"],["/archives/2026/index.html","6678ced541cdadd79072ba04a8ce7f80"],["/archives/index.html","6967f129ddb444c9ac3a60803bf27b29"],["/archives/page/2/index.html","f0465181672ad16841855389b54eec46"],["/archives/page/3/index.html","21f3e95059674d3c2bf12cbfb2248fb6"],["/archives/page/4/index.html","e794dcf5e14d98401971d5517a55b790"],["/archives/page/5/index.html","2ddfd0ba95742b239cc3bbe056eae78e"],["/archives/page/6/index.html","1308a646ba146544492062738af1fe9a"],["/archives/page/7/index.html","fb732108fe75ede073396e99c3821f1b"],["/archives/page/8/index.html","f82580e79e08370e3c9c8fcc23b340c7"],["/archives/page/9/index.html","38ca75c66583e069fb3dc98f5504e4f1"],["/bangumis/index.html","8d9d7c312c585a8b37aec3c885928876"],["/categories/Java/index.html","b71565c5af3855c93000d5597179faec"],["/categories/Java/page/2/index.html","4deb402132c0e4355657b29459f76a64"],["/categories/index.html","f8c171e17be356fad09350e3101a0c83"],["/categories/中间件/index.html","3f5df4e5d907078593e4fb0620cfae15"],["/categories/数据库/index.html","0ab28fd60b6be1008a00c526e98b1e78"],["/categories/数据库/page/2/index.html","fa92f1a2615fd18e93eb56c9aa583a6c"],["/categories/框架/index.html","5b0a559efe4f96a8d0fcfe233d393eaa"],["/categories/算法/index.html","d3e46cb34a9d18d0f6ff0c300b5a1c95"],["/categories/算法/page/2/index.html","0bb2e95eb29ae5496198fdf018ff0939"],["/categories/设计模式/index.html","9e380a81ed0dfdd3b5a0de1e58b0e68c"],["/categories/读书笔记/index.html","ebae9a8ce4e236ec87387dedfea54875"],["/categories/随笔/index.html","33494748c888b7ac720daee1de4e9a50"],["/categories/随笔/page/2/index.html","d1c9f342880d6ea8d0375519343a35b0"],["/categories/项目实战/index.html","cb077cd931af3f21da432992cd0d3d36"],["/css/animate.min.css","d6dfff213c31504dc0a27d36c8e320bd"],["/css/style.css","7f869ae09faa0ba0d78402a47efe659d"],["/friends/index.html","9025a48862bd1a710264ee3b22d21937"],["/gallery/index.html","0e0a750cd439a5e3264c37a2ba6f3df8"],["/index.html","96a22b7834e35fc4f45e0b20c76449ce"],["/js/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/aplayer/APlayer@1.10.1.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/app.js","430749653c32bccc3ee6be0ed63fe5e3"],["/js/bubble/bubble.js","214e57cd899c4ad2c209a965a98d019d"],["/js/bubble/homeBubble.js","20f82f4cb0781de9e6e2cf3051c2f6ca"],["/js/clipboard/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/js/cursor/clicklove.js","f15916ba0828fbd68e87adffa783adac"],["/js/cursor/explosion.min.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/cursor/fireworks.js","2267ff7a3ba36151dffbc19e18db410e"],["/js/cursor/text.js","ff367f12c2962a6422e2abf3702e3337"],["/js/danmu/barrager.css","47b1a2985eae9e1322c171aeb3c8494f"],["/js/danmu/close.png","ebfc1b81b7fa5174a869b454cd48c399"],["/js/danmu/jquery.barrager.js","b6c67565faa1f7ebb9abeaae7e65bccd"],["/js/falling/sakura.js","f2cca30c057b2a443b1eb0845d1f76d7"],["/js/falling/snow.js","7c1ab25a3202050755f65cd40406989c"],["/js/getPhotoOnline/index.js","04b848e26d024a091b514cea2856c71f"],["/js/getSiteOnline/index.js","163e32e000448081af8fcb490b6be161"],["/js/getTalkOnline/index.js","a4c928a6b0e94017cc2ae7f04d1cab32"],["/js/goTop.js","da983a5229208b67fa7b295eca5a7b0a"],["/js/issues/index.js","79c15270a5a85307253f1b1c64cfecff"],["/js/jquery3.5.1.js","556cc5605b9240604c835a60fe5a09da"],["/js/loaded/index.css","99e09056df023be6fac924ada2fcacb1"],["/js/local_search.js","d9bf37891e7582f265da6db142f7d2ca"],["/js/pjax@0.2.8/index.js","ad1dee9d30957f4663d553f3b2b8ef78"],["/js/prism/prism-coy.min.css","f8585b87a5de409454e0da3de2803b3a"],["/js/prism/prism-dark.min.css","0c0d287d69147c0b0bae67dd7d6ce7ce"],["/js/prism/prism-funky.min.css","54768bff1033c3f68fb8e5998931af42"],["/js/prism/prism-line-numbers.css","6ba4517e23676f37f6e3ba87acff99a1"],["/js/prism/prism-okaidia.min.css","8f13447e86a47622c128ecc3269a022b"],["/js/prism/prism-solarizedlight.min.css","55b3f0dda6411d27a5441232aad40650"],["/js/prism/prism-tomorrow.min.css","93bb1f846906ab54d3e4d1131e0887ff"],["/js/prism/prism-twilight.min.css","add877ba9e1e6b1535b48cc393871e87"],["/js/prism/prism.min.css","3d63b6da134643cdd75afe1ae8928ba5"],["/js/ribbon.min.js","f060183aa491a6d366ac812c9eeec40a"],["/js/shareJs/font.css","5b40f862a2477363a6fc724c04eccd12"],["/js/shareJs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/js/shareJs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/js/shareJs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/js/shareJs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/js/shareJs/share.min.css","6670e546119ec67f05644965b3dab9f9"],["/js/shareJs/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/js/swiper/swiper.animate1.0.3.min.js","33e2adfcbdae8e349c02fa608b6b70d7"],["/js/swiper/swiper.min.js","28efa41eaeb18cd38bb1aeca28480aee"],["/js/swiper/swiper@5.4.1.min.css","a3fdafc3378d7a5725895fc7d2a121b1"],["/js/swiper/vue-awesome-swiper.js","c9cedc7b036a780579fa9aad765c3066"],["/js/tocbot/tocbot.css","d8b01b0a99bda95ac8e79a4596e92234"],["/js/tocbot/tocbot.min.js","70632301be98673edc2288c0fddca102"],["/js/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/js/utils/index.js","ad6cfd989ecad5382fe8acfa589f3798"],["/js/valine/index.js","c5a9b141bed3aa3293bd59b7f5ecb01b"],["/js/vue-seamless-scroll/index.js","ecc11e4d375c33614b78286bffee14eb"],["/js/vue-typed-js/index.css","f67f5b050e1da585946e03aebd45d4a0"],["/js/vue-typed-js/index.js","79b3aadcb5c0b276bd7879e74d4643f6"],["/js/vue2.6.11.js","73767f1611b8baaf19d8eb6ca4db2d6f"],["/js/waline/waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/js/wrapImage.js","ed6baacc8335017271e651ffa0cc13b1"],["/medias/logo.png","578eb132d13a61a4b9d5a2037453fd5e"],["/page/2/index.html","980c25fc5fd7e28fa9d8a64b95762233"],["/page/3/index.html","c5c0ce9b4c991245f763227573b06873"],["/page/4/index.html","7ba741ed07cf53d8d22452e7c10a98fd"],["/page/5/index.html","0ecbb2ffdd2dd718f7634d60dbcbccb4"],["/page/6/index.html","5f0e7e7835e7392b1ae0c418459f0be3"],["/page/7/index.html","b7f988470e49fe6a8d8045acd2dd956f"],["/page/8/index.html","82e0cf9f12b762c0ce0d02f5236c14cc"],["/page/9/index.html","3873a6bc58d1bbd955435be54a7f7d68"],["/shuoshuo/index.html","5639b412a372f200c8f713fc92933c1d"],["/sw-register.js","cd62122faddcce5078905a068d0b230e"],["/tags/EasyExcel/index.html","f98b17d8ffe59c34b0ba73f960abbd19"],["/tags/Elasticsearch/index.html","bfae82689ba18109e77d3cf5fd11a801"],["/tags/JSP/index.html","9f1326adc42efe98fea1b3dec6585da8"],["/tags/JUC/index.html","6cf969553acd8d2598925ca487df5c82"],["/tags/JVM/index.html","183d7e4a01ceddf0974433aaa6c1b62a"],["/tags/Java/index.html","f0da045aaf1ed9b2c262c95deaced28c"],["/tags/JavaWeb/index.html","2c8de86f2815844fb48d2c604c3faaa5"],["/tags/Java基础/index.html","7d43860b0d5f835576253ef108f9a3d9"],["/tags/Kafka/index.html","48f99b422eb419751dc237be5a848b5a"],["/tags/MyBatis/index.html","bc912b73b323e2fc3f41a7a3891e3e3a"],["/tags/MySQL/index.html","5987e931238ee3a4d911a310af6b8ed6"],["/tags/ORM/index.html","cfa529131b832f7b20afd97d5fe93a1f"],["/tags/PS/index.html","e58a97052cd2fb4fea3128da96f285cc"],["/tags/Redis/index.html","68e0e819ad65e2753ca3f3d03b2777df"],["/tags/RocketMQ/index.html","c75a081092976d73bfc5bbfb51d466fd"],["/tags/Spring/index.html","e7538447f364bf09ebec0e3d36730913"],["/tags/SpringBoot/index.html","3821f5d029266d755ab8e0d64fefb4b3"],["/tags/XML/index.html","f3a42f6ea3b0686db4e86b6d5ca31416"],["/tags/index.html","8842802445959696f210e6d26c3a13f8"],["/tags/事务/index.html","698599b9e8172cc43c0ff37cd9eeba68"],["/tags/二叉树/index.html","69ebbf1d009b14f1e1b76e198f83bc29"],["/tags/分布式系统/index.html","2e21b2d9a801d861855615f273f007d1"],["/tags/分治法/index.html","b90394af2847fea3d796e31e179cc5c2"],["/tags/前缀和/index.html","e3eca706666a96c3f26d409762984c70"],["/tags/动态规划/index.html","4257ad94790c5ade2e7181d2442057b9"],["/tags/回溯法/index.html","9c2cbb0d4bc7ca2d88a5d672d13d9037"],["/tags/字符串/index.html","f90ea868417bf1679404ba9d6156bdc9"],["/tags/工具库/index.html","7a77a603a1faf973383c18934df2a429"],["/tags/并发/index.html","f947677f666994815a498463487075b6"],["/tags/成长记录/index.html","5b5ebf6817ea6001c9fe21922ea8f028"],["/tags/成长记录/page/2/index.html","a03711f6cfe5ef537003d0bb830286f5"],["/tags/框架/index.html","ab8d244ec2d5ca2cd4e239c61a371617"],["/tags/比赛补题/index.html","00d6964635b0433ae4ed3225f163fc01"],["/tags/消息队列/index.html","98af7c4c26f1490a1864ff431d3b8117"],["/tags/源码/index.html","6b1ca82290155133577f3afde98d9596"],["/tags/滑动窗口/index.html","0a5814d088a22604ce9d3747e1d923af"],["/tags/算法/index.html","80161e3ff0edb31e025f7823a1b43521"],["/tags/算法/page/2/index.html","52204a026158cc0e7dcfa305ae151b3b"],["/tags/管理/index.html","5578d420430e34e08cfe94e6aa96714b"],["/tags/线程池/index.html","03895a2b33a45c6504f5d355c6e0c859"],["/tags/缓存/index.html","e3d87d82cab523ee3755fea86f13ce58"],["/tags/规范/index.html","862cf64026593d86d2456d0f582f7dea"],["/tags/设计模式/index.html","ed0860b294800128a804e6224b07d3a2"],["/tags/读书笔记/index.html","1c59992235d40a2a7b39ba994913ff3a"],["/tags/问题排查/index.html","635acd9a159afce3c91bd9d0a3733ecc"],["/tags/限流/index.html","7ad1043b2c23fdf8292ae7e58443b11e"],["/tags/集合/index.html","4d8578a443663e00181fa69b0ab07681"],["/tags/面试/index.html","3de26c04702e49e2f29e348957171d4e"],["/tags/项目/index.html","36961e2d1d93eb637510bb28bcb5e80e"],["/tags/高并发/index.html","288c5f0690f69c44bc611867ea10facd"]];
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
