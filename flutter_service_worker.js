'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "de5475ab85beafbf8069217c9d6574b5",
"index.html": "bb3d2445478ad4e4e16f6d35e5838828",
"/": "bb3d2445478ad4e4e16f6d35e5838828",
"main.dart.js": "d3bf7aeaeb4d5f396fb501d58ed403d3",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"README.md": "3f3ba100a1a6b4e9cc721ff1fd61435d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d691de5c0268d2305f7018a5ecd48d01",
".git/config": "a9c9244973443d6847735b8b7137fed0",
".git/objects/61/41f4dbfdd43a9888977f23489003bc44511103": "c0073812626743b9e692267dfd6ee948",
".git/objects/61/d40ff24aece5eec7137d10ea64f3853fd39b50": "69242360414d9ae74c48b3e2334ec80c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/d4aa4d2a52726f0178597ce542bb4698a72176": "07f5cd027deb670ca9edeca9c215f6a6",
".git/objects/95/860ba1c59257ac2c56efadb5c94d6033b67380": "bd7834c2000aa015ca4e53813b7536a7",
".git/objects/95/5695d8354dcb40ea84f2779f0f9500010d3475": "9d3b514b9fd4e0d763abc823c503455f",
".git/objects/92/a20f95c073047eab248de416c9a57fdbb6f51e": "4f9515944dc8e578d495e470d45b973e",
".git/objects/92/09cee6a907b210d5df88f7e41b2cb6b2fcafa9": "2a6e4ad3aa2fa05bd67466177a7ffccd",
".git/objects/0c/4be92e40127cabd46d1c6a3709a26c8b2d47e4": "bf95b1492df71478a41b248f54bad3c0",
".git/objects/66/b11682cab37b4a7f824bcec7801e4aa50eeace": "488b2cbb7b525e40bbca008c777a62cd",
".git/objects/50/e93f7c914e1a88bb68a09204fcac9ce4af09b6": "ec09ba0ab7962fedd47d41193a0acbe3",
".git/objects/68/eef10b276b5430b7a583bbb44643c6185b5d89": "d237632cdf52a45c67abd6c558c5dfd0",
".git/objects/68/2631ff7e706a73a5f942e6ff1eebaf0e65b360": "f492d3d12704efcc96567eb924494b3f",
".git/objects/68/7b9bbbb886e06872f3fb2b7b2962c7210500d6": "1d88112bb224e31fc9e1de7cb8519773",
".git/objects/57/1b47baa9b46efcbae2b5c124f80d251932d5bd": "89377839c91167325e0aba5d4571e69a",
".git/objects/3b/9651862f9a82d6991443380e64995d5074a7b8": "43ae118b935c29f9d2bd9755d3e9c86e",
".git/objects/6f/0bb02d69413f5978925f16cd84f39ab08aa69b": "7e47b64cc7b8f2947a8886e1ae80bc8c",
".git/objects/9e/9edbd841176322b7e6892503bbe5817c12f8a0": "29356a5b5dd0e2c04353ecd9d503187f",
".git/objects/9e/a798f57c3c23b1cdb4452f4c37b31438ad0e56": "8add45f60931d807215f532de775cabd",
".git/objects/04/b12ee159697d2cd90d95876981b9b6417e8d70": "76aa07ed3ea94fe95cc62920671703aa",
".git/objects/6a/4bafd6bf4303935a490442ed167fd71afc9a71": "b190e82673594109824466b2b73c48f7",
".git/objects/35/41b633e680bb5fefcb8049f517f32a76c9265e": "b5bf7a635f2f11c5bc8ceed0dd6f783d",
".git/objects/3c/cab76a6f09d6971e78c67ce45738ef56fcd976": "18352f81dea72bc9e92b65724baab594",
".git/objects/51/59e7ab28607a352befd7963f42ca74c427af75": "3814665124875057045c626f8290100e",
".git/objects/67/119ba6c2eb598d086ef541096cce2acfc50646": "6f4d9ebb5d36d3fda93173c69b06e945",
".git/objects/0b/c6c49a50dfe19b3f8e064222dfc0b176429819": "fe558d648f3d74e46ebfb51f4c174c6b",
".git/objects/0b/7de0dd1b6b22228cc670b3e8c14991db68729f": "e5e3c4a9eddd6c36f04b72154a256a2a",
".git/objects/0e/907c61ec653441e9be7963560a846110610842": "4fc3b202768bde0cc180f0824429328c",
".git/objects/34/7378b211841c1489ca7636b92577a7b846e257": "b29eeff1191e68419cf76074a9666e2c",
".git/objects/5a/aed7355f6931ca9489c0d5747ab0b7cd0fd2f7": "0b244fd7f1e69a80bbf494f0332d3fcf",
".git/objects/5f/fa0e99cd8c440a4d87f4a6a26070e910610ddf": "46193ec78b7c7c447a66413774850bba",
".git/objects/5f/2bd5e368a99bff92a546d34dfeb3fd2287611c": "f95306a49d1023ba59f5a5e26446b046",
".git/objects/33/0b0365121ebca6cdc5fb2112a785bf1a9249fe": "b90a12fcdf1509e3b6aacde69ff0427c",
".git/objects/b5/910c495c5a44795c18a905a3daaa56670bbf2a": "23a9639ef8e00db2f0c63adaa887df96",
".git/objects/b5/e47e7ddea034b794c0898ea7ddef61981092bb": "d982bfce59a07f7993db72f59754987c",
".git/objects/b5/55ede1c60b504fbfde39f3be48a8a8fce71845": "fc09cac03c407466a557ded6e6ad5937",
".git/objects/b2/737d19cf8abad2c625f686c4cbb8a1ee2ee922": "0df783bef6e217cb8fc77576c9673dec",
".git/objects/b2/7dd546bf4bbe3fa61f02201a88a8cb66edc714": "bd06ac42eff02d0a6884878f822977f6",
".git/objects/b2/924a7f6848866ac8ff50b7f80839bbb3efa36b": "0bf53acd683b184689adf311c96fcdff",
".git/objects/d9/bac0abb1dce3be2248f91811a6a6204dae3682": "1b14f0ff2c8fb55663be9f34941b6a0a",
".git/objects/ac/64be4c4ddd937727359d2a35ef6caee81427fe": "03ff1b12ba5a6b6b4d54f5833b866bff",
".git/objects/d7/130469c7920a2295a0579edc0f8399a2ba882f": "6f0eb587d156ef789edea7f782f50729",
".git/objects/df/1e29b7e3ee7177c66ff0899dce834d72b72d8c": "788169d5f81e056b6e47e53deea2f6b0",
".git/objects/da/6c14b303596b2fc06ad23b8ce1ac72ab127f24": "2a84168d11d168ec0b4b6406dc2f541a",
".git/objects/d6/9b82da2038eae98b80f72e8f985b788791f274": "d4f93c07af0c9a276c69365cf7ecffed",
".git/objects/d6/e1fb2bdc67ff31d4b4b476010d090f86d37e69": "4ae11bd5865b67cb6f5fe80ade35b61f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0671a365936c18e6fe276cf20a5ae399f57c5b": "20f8c8b4518354488c0e339d973dbfc9",
".git/objects/ab/1a55740234a09bd9a55e5c574b8889d634b3cc": "cad623b374fb10109de392752dd4076a",
".git/objects/ab/a5d0e16ebc0b6e6c7752fd1d5d966d833921b2": "9582ee4a0779ca5385bb058f3463f5f4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/8656a6326c6887303fe99c324a962adfc1e283": "2c9b563ef3970cdda1fb2d6960c5fbd7",
".git/objects/f3/5eea0569157aad894ef9bf8bf2f02da702ed1d": "0489c1f2218214268f49cab59f334bd1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/d1978ae2a8fa93e84c3bf9fa8dcecfe07a2df3": "1c7a2f0dd9ad63974b0d77c2edc2d506",
".git/objects/c9/8c057667ee12afbee594530d7063ae99f1e7d7": "5bb99fe611450aab304bbb5453397ffd",
".git/objects/c9/37bee4194d928e16f542e8e46954f8b134c001": "1c549a89e206f3014db338e75d33a4d6",
".git/objects/fd/ce626debd6f5d402c625ea5a9b1bc2133ff06e": "8da41f265c7c559d035ac2fe7e492f3e",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/e3/f864743e7e37d1657e68ad5e63f14e0ab1c557": "0c98a82908d9ce852cd56d8a90a638bd",
".git/objects/cf/1589da88fb982c5a221a1361c8d44a8974d419": "d7f76e5a7056ab439eb81bb9b4689943",
".git/objects/cf/6d92a9068bd95c4c7fca84f05b99ba3ded693f": "e1f1c83b64f7446862a25b2d8ab761ac",
".git/objects/e4/916a879665cd02f2ece63b0ecf01b47af4a168": "96685eb8279e4ff0ad0cab7c4c35508f",
".git/objects/e4/ac4f120c28d7b3ea952afbe6a5147609a683b8": "5fcb6e3be4a77fb1734b3ffc7625f2ce",
".git/objects/e4/dcff279b8d5b1bdef6bc97cc5e05d119f622f1": "8f6469a990b07fa7be8f8336fda9a232",
".git/objects/fe/76c9a09bdf8c93336a2ad896e04b8797f9c826": "2ac19d3fee8d61f9dab68df2126376af",
".git/objects/fb/76eec2af50aa4ef4359e6bc5f18aad7617280a": "70839ee5e81e6ee973ea6eab55f5451f",
".git/objects/fb/a3ff13cba6f0e01ee3fef1fd8210322b6425fe": "a7c11403b4c5e44e6c615f981068bec0",
".git/objects/c6/9d924805c0125b1da08ebe22719f264e8cb9bf": "3b8c7209a6bfdb8eafbe030340939e6d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/e6863cb53ce974724588ceedc9b2c15f9db9ce": "54705cc1bc9069e7547415d792ef9546",
".git/objects/27/f6de4b8f4089db9680c0aeb87fb1b075be3d0f": "d0674dac26b957944a1788f774f5cc08",
".git/objects/4b/74b1b90aae7f130e3f00cccd2e9c62c35f8b6f": "85c1ed78ae0b9b8d71861b8c3f15ab10",
".git/objects/4b/1b784497f2870db445c144680981b9cd89b5b9": "7f182d586143f40beb1cf7b522465071",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/b540e112b01ace8e36f8518a12bb4f4537632d": "80f5fa7c4849091908cdf6bbc3d9f2b3",
".git/objects/7d/90e43f009526b17bc093b57fc0906a59f03db8": "01ad249e25958d4260046ec9ee757479",
".git/objects/29/727030043784e416d7615943ff9a40bb70dd39": "df51b99ea40fbbf3d15da9294f66b7a8",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/902f3a204d1975a0facf495f311f3ac77bb41f": "0a4079aa7841bbab482edc1d4fc9e953",
".git/objects/45/56674613cbdeb83a1590f0670f2cc6e742185f": "4870c3c1944480dff52287f33dabd6ac",
".git/objects/1f/b3e5c1dd476780328e6d06b9eabee18a5a81d2": "62febb4bf01861d15eb2fd49969df772",
".git/objects/74/ea9fe55e74b1585e3435e4c34002f4434fa89b": "49c950ee6c5d27ad46e6dcd551561245",
".git/objects/1a/9afdc8ca8147105531ea5b48692c7fde61d69d": "9f3e292425987f2c11d1368c0690d62e",
".git/objects/17/6c78e7c1450975424fcaf5276b96c17fe649b6": "df4e7eee448a9801f8b90c39f1ddcf48",
".git/objects/7b/4a7d1df640abccbb68aa46de5d0ff90922d5b4": "cef2677ade845b9b6e96548fdc9c0a60",
".git/objects/8f/317f69d22abba08ab4147166d9fa9154ed50de": "482db665ee6f05f99b5aff729642347f",
".git/objects/8a/8d1d75bd8ff2566d12deac7111d11982f11b3a": "f8a9c56029d30c40c24c3b3e5ab4d2e7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/5871ce639b0154615037d61115e717af287c76": "f7ddfb9370ea58253a8d32f9d42f7b2a",
".git/objects/7e/fbbe49178f29a32a034479eef034df95a6c9d9": "2f4b4a72a2e12065edd9c94e922f9517",
".git/objects/19/7384e50c870638b025ade784531e5e77ec4efb": "1dc8f61c721eba79d0e0939ea8ea60cb",
".git/objects/4c/077afaddbd7170a28c99a799650e86ecdd7958": "a9800088924617dc97d62956d6cd5af6",
".git/objects/26/09ffb44b82a30479555bc3ea6e18f88d3ffa6c": "01239f4c2c7ff2d84e054507d7e54a2a",
".git/objects/26/f44bf3b518c87b99ab2463dc86583cb1a3b264": "9c196f5fc030fbc71448a79653d16c4a",
".git/objects/4d/56219efa3a0843136683c063d991ac7e47dc51": "05b6e4eb374c2807c27ce476b976d430",
".git/objects/75/4a736e12a37c93f0464eaf1a4ae1a75a5be6cf": "f42b139052a381d5adafe2c6e06337c0",
".git/objects/75/04a598ef05ef6088d07cf87a043cb5b7e6b159": "40505734e8a91e9f5bbb3a21eacd6b18",
".git/objects/86/61746204e9f89572f8b1807012cc4d4ddbb8b1": "2e19f7e94d23e7b7ecf43ac27faa58c8",
".git/objects/72/533c128872df1e9871fc5f723838a60fb6a9d9": "79474963c2d1ac1a640e5478ce03999e",
".git/objects/44/505492e4bf8d815912a7bebe80ffa65132bc0f": "b227f0e1238fa75787d39dcd14c01972",
".git/objects/2f/33844df6ae11070ba3d7597b896449bb952570": "9496ed9d0df302d5c0fb5f2f4c04b034",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/396f004ecb503ad91c58f49ad02518c13cb61d": "a422b1fff8bd3e8aeb918ee5c0368b36",
".git/objects/9f/64c4133fe81f800b22e2cc60a0d383b039cae9": "cc6a1759c93c61391c6d826dcb0567d9",
".git/objects/9f/2d7dcd8f1ff323fa475b2f65ea6b36aa7f8291": "44b38ee91772965fe2463742f2ef230b",
".git/objects/07/2e1bf4275720273fbb5d2b7cd7c3d09b3e6e7d": "e4ab36d5345cd46d2215c98630de5873",
".git/objects/6e/2dc46ea3a3630af9211afba41310bc90dab177": "a4b15544ea23c206e58c644c66023c1a",
".git/objects/36/382482de2d13468e0029235a0779b99046d339": "a3652f364314ba6d06af9b484291d09a",
".git/objects/65/c234cdf87721acfd0b61a2504483112efd2f8e": "35fe33dd9bc3978fee4c5c6babb6a419",
".git/objects/62/b9bf0b0c4de5203250e9a6c818aa7f252777cb": "8cef14fbcc6b4c175be25c3f928390a7",
".git/objects/96/4832a70cdada4a7e4dbed4fabbdb9de77b8903": "d0c9e0d390beba1144a74622e42141b3",
".git/objects/98/4f128d88dda992c2886402a52b33be22acf83c": "e61609b41b7b8f9d0b8258775da61005",
".git/objects/5e/fd011f1c390bf08bc938d6aa1161ef560e13bb": "da8f083372eb37725c207dd992971119",
".git/objects/5e/f9f2e813f86bc5e5357748b9f4d88d8d2b2b6e": "5f3674ba5bd5b9b25c9bc8b91aa5f510",
".git/objects/08/e734c405b7fb56187276e6fb5d18b937dceea0": "7005201743fc1dd57716363b1941b7f4",
".git/objects/6d/f49e5a863e6e65558b18f1b8ff772694a61499": "fd55743199f2b200927ecd1734684ce5",
".git/objects/6d/5ed3cc2d2b4ded65e783f58a2eda6a97e8d7ef": "dcf3153356dfc683cccfbd100767196a",
".git/objects/6d/6a0f5d5988220ec985f92125bda9a03d6adf47": "38777c0e42bb28276c4369a206381913",
".git/objects/06/8d048d60c00b30bc33b1a61eab595f297bd453": "17953f9e9c98313d923d42edfc06b863",
".git/objects/6c/daa92e8bb02faa92fcea3d1141755b5974931c": "37530a832a8b9f8a2f2afcf6f75193a7",
".git/objects/39/6946d2c86da7147bc3d85b520025ffaa8ea27e": "92d40e3c572fd2780ee7f73c83f2ed36",
".git/objects/39/e0e00598faa2f28731fdda3356ba08947bf027": "e756cd674aa2f9dc155209d9a7ebd892",
".git/objects/52/35a27c2ffb04b04853ba6177c8a02baceb7569": "1bc36531433f0a4e783aeea50df55ca4",
".git/objects/52/491e0a7c1cf53f8813781e2bbca29492055e4c": "3d7ef6086dbecbc436c374cdab46d7c1",
".git/objects/0f/8122a67c4ae0caf799169cd42c6161460480ff": "a5a2190b6b6fe2cfe05e1549a46aadb6",
".git/objects/0a/61f9ae0e0dc5821542af022a84f83f0d96d333": "c09ad577fb40303c9141dac108c77e4e",
".git/objects/0a/aa999ed1948080444cd6f98991fdf1418c4db6": "f2b700292f6aab3cc76ccf11ed8a64db",
".git/objects/64/27ee8a91c2d625544a9f286ba29faed20967cf": "e936bcb5d20e9f3b2068205dd983a36e",
".git/objects/64/b38ff8dc18d1019652ced7c59269c8839503e0": "0522b342f0fbaa97e7c25f0799beb6cd",
".git/objects/ba/5ba7584b39996c8b8d896cca64c3aa5b8ad00b": "17debdf661b36a0be1d70abcae16b387",
".git/objects/d5/9615ed5b9a5a1509e67eb6831e4030d6988aaf": "933b2da5914820df440e4f8ebb8ff866",
".git/objects/d2/e62a271a099337491735222cda5d14142f29b8": "0a8d8775bb5dd689ac5947cf8b5c4d60",
".git/objects/d2/e43c8e1996a2ba421d1e3e30e9b544a8317731": "f59ad4e9f0075e243bcbbd8f33412aba",
".git/objects/aa/8d2ee0790c0d5915f9d8ab9d42066bb8e38400": "a297f6cc127b54c35257022c20a9ed06",
".git/objects/aa/03fe2debc863c062ce4068575aa1ca749bbf78": "f80c5ac8e21c0e1adb16ac34e95d8389",
".git/objects/af/38f6f838eec484347bc740b5fda5913c350765": "43db37deb0b7f401058b67469147dd1f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e514e1946ce8287d4b46b5b0c7555313082aac": "5c427648cf8e41e2fd6598ec539b3d25",
".git/objects/db/14529c9248012802f3b6ec9f99c5dd41d51170": "8285001f12ffea7699cc6227c73091dc",
".git/objects/a8/0155e069c0bcaf0f5c76495b0f838356b7dc6b": "a6972b05d09686ceb973ba1c4b268b9c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c469f6e1070c028507f4e998a2e4b05d762620": "4ffae5e207ffb0fe5a0813b0dcc0a615",
".git/objects/b9/294a1a28fed6fdae8f3aaa14923b2fd2348794": "d941ce9ec1d47f48cece3ff8914dec39",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/f74c8abf7f45de94c5b2a0db8e27f3a8af0df8": "1f8a87065a7c6f320a0bd569c90731f8",
".git/objects/ea/50102e5af7b2fb47fb63c04163e6cd93587459": "dcf2040e6ec28d60bc4e47bc19170e61",
".git/objects/e1/9beea98abc027e100e20f02e5703b7f84caebf": "4503115f1489650e00c1b27834fc13af",
".git/objects/e1/d20d533f907ca1c2aa0d97e87835daf3c2b7a0": "8cdbb433ccfdf4a230776c0fca58ef29",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/59419a84c2274b17e7f67ced248f0128a78f60": "c37f459c106534fc5f4134c9c59a12e7",
".git/objects/e6/ec8093f9ae5d8ef1beb4d5882f3b7010f3df4a": "0cd666b28290460938d9631f9be13789",
".git/objects/f0/c8c5b4dff7357fa5d9f1b21fc59d6b15df2333": "0cd2e8184e3571ba717b49cd120f3a70",
".git/objects/f0/443d404da787212967d25c18b989004f4bb982": "c7d32a248af3db0fd268a0f36c8d7a1c",
".git/objects/f0/eedbf46294dcb929689f12aa8488f814e24597": "ebb66deb61699dea2a7ed732e305f74b",
".git/objects/e8/a6a69067c69da1859698ce96c21d8060d8d26a": "7b9afacbc40a7ba7776fd718b9ea5198",
".git/objects/fa/4d2b952567bc662ba783725b97da8f7471a6fb": "bb99b27c34a3bbbd583128b4847530de",
".git/objects/ff/7a38917c61575c105b283e942539dd62614ebe": "fea333603f220891bd9eac9442a2252e",
".git/objects/c5/08c0a4290163c9c719ab2b92336a19c58070c3": "6d78c3f276f660c85a73f13c1af201d8",
".git/objects/c5/090b18dc9a34b7e979445992ba6b829a96f07f": "dabea2fd3cdcfc938def30ff2569f9d6",
".git/objects/c2/73690b2e5f2848c361cdbc4f76c5c16339ece5": "3ecb6a935dfb3e9736f21c8681234a15",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/2421c28a2b5b89ca46d0ffe3ef98210b652f33": "16cf5860892de7f74ddda60558e613c8",
".git/objects/f1/02ee95e80cf7c6f03c99af2120ad22983c433b": "14e3e79c6cd1429e7763af4190d85e98",
".git/objects/e7/f4e8a9f668ed4bf8601f54dff2be0e7ea93fe4": "e3f068499715eeaf30afc4be33dc5386",
".git/objects/cb/6c929ea538bcbd73086cc40d2ea0827ce1a649": "9731c1b5cae2c0c20ff034172c9f7356",
".git/objects/f8/7597fd8b1daca8555d8e3417c92d6b9061d1f8": "4edc5204e9b5b662a1bf9af75005b58e",
".git/objects/f8/98eda2e6c8f737a7ac650c3236409c51292628": "7c18f4bbe9fafac790a3c34ae097a712",
".git/objects/ce/b55d9fce6d1436fad4514d2da244785ea08ebf": "e6c424a48065da9622053c330f252551",
".git/objects/46/522b8606b35a2a2559348f57be3ca2909db50a": "1ef16820a1102437b7d0b0438ab2e9d4",
".git/objects/46/a45c4f1b4d20701a63d136e4f9cfe50b476832": "850d9e808b6dd16e2d7f2a7d7f645165",
".git/objects/2c/2a357152cc503ec3720dcf718f6d44ed49b0fc": "9a0a8402fe65471d325f05caa4e8be2f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/71ef956db98448199cff74243ba728eb2313c5": "22bb76cc1f11f9cd80f66664bf106581",
".git/objects/77/3fe3b6cba6784ba52116929f1aadba7f965229": "786bb60c6ae255667158cd2a4438d90d",
".git/objects/77/89784c2e4dfc9741138b5b515bcec25e090918": "ce1e8eec054e35c0751227cc6a06fef0",
".git/objects/70/f9fbdc8cafcc44e72105abc4a0822ab692f7a1": "cfbebeb44e5f1bc60a30e91b0a93fc4e",
".git/objects/1e/94a5ad2329c233ee736f069d89e6aa71bac9e4": "de6b96fe94531f14105e48dd8bfa6bcc",
".git/objects/24/4534e3971364876c85d4f660a7ff0fb4e73d1e": "57f5edf07ce9b9afaa9c6c7e998882c4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/9ca4e224fc36b614a66e52bd58a03d999132cb": "503ca913d9ffc517c69dde4cfe3ebbd0",
".git/objects/24/f36bce5ed7d3f6863bd990472f78b611ab8737": "272b3b3c02c7ac1faaab9b7a380fa92b",
".git/objects/15/615ca0ac2592510c10615ec4efe43e9db5df41": "86ef31f1b3611cb1087a48426337e84b",
".git/objects/1d/6ea4e50587b4c870a7205c42e16d759a919c03": "b7056379c30f243e01b95d8eb03d1471",
".git/objects/71/e555418a515c3deb846215eb7cd561618b7d4d": "d871b301f02fa5bfd8ba72bf8ee38a6d",
".git/objects/76/6c68d4298f903beaa2403c65b894821a6b53d4": "297f43404bb7c2c02a61615c8fc69a89",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/6087f9adf70601c75f1207a5bf9053de686b66": "af0bcc17de74dd556254b347c63e3879",
".git/objects/49/0896fb2ceb868e14340e72622962642cf3f1e0": "6378b39bb3ab01f8a2b12a5b55e94c5a",
".git/objects/40/ff893474904444eabaad76e15530f6851b8a2b": "03ba21ef3e1d327b25d6041f3ee11880",
".git/objects/2e/70c99659857c371d4add5be1e69ea53a50ccdb": "ccb71a9e9be12fc1c3e6b9ff7ca7efff",
".git/objects/2e/208ed2db877ccdacc4b1954a3e8564290c24c8": "cf37e9a45e0bc6369ae22aaf75f6a7fb",
".git/objects/2b/3f0199064fea6a5df50cdabf6af675ede6ea02": "e8bacdda4d038cfbdec976e34ca45689",
".git/objects/2b/893aff2161bc89affbfd8126eb42c0ba80a6d8": "e6c8995e8d055b3e154e1754969a5cb6",
".git/objects/78/d9a8d707f58a61d26ff386f1a2f7b3163d7606": "6868ce0f3e9230fe8468ebd0f6bb95be",
".git/objects/78/fb6094a5ee0e09076fa3f135e41f1d8a82da3b": "929d2bd3b331f70029776ddc5e59a705",
".git/objects/8b/81f08a9c8aaa456e2f14d79a33da4bbb961107": "762f2c8be29d68747359ca7017ffb774",
".git/objects/8b/47efe464a1d78eb22d61ee1d9f9ad362be6dcf": "d1c8744bde69bb346b75a37656d2eb15",
".git/objects/7f/b20881245dee05a6c03608c9ebc5fc61d954c6": "693baeacd326dee1159985c12927295d",
".git/objects/7a/0884b37275f0b1cc3c5cf5b67e5f5a78159ad1": "166e38316cf93fe2973a8e4d8432cc9e",
".git/objects/14/1cc8d08632dcbdd72dcbd68adbbbb9237dd049": "d694a6b819ce8cc7a55487434f29bb39",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/fork-settings": "0985c6ecc03341157516a26182da962f",
".git/logs/HEAD": "349b44459453dfbf30d72856265e3813",
".git/logs/refs/heads/main": "ca2667f087baabd5f709cc66bfac7b6b",
".git/logs/refs/remotes/origin/main": "cb81fa7e903cac12bf485a08a817f5a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "eab989042ddef2e297bf8eb656529b55",
".git/refs/remotes/origin/main": "eab989042ddef2e297bf8eb656529b55",
".git/index": "a8d0c83aa210567108f36fdb8caae187",
".git/COMMIT_EDITMSG": "4584e2c1d6ff41a89293d46585c28583",
".git/FETCH_HEAD": "d14c7ebc591a80b91f9d7213e049feab",
"assets/AssetManifest.json": "2fe40741516362c6202e2c236c8af890",
"assets/NOTICES": "470bdbd00898c26f885c2a8dd51fe9a1",
"assets/FontManifest.json": "3869441294fb6c6f4af280ff566ccef2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/bruno/assets/images/icon_share_zone_disable.png": "2c5952d22b107c50f1e420e80c1cf549",
"assets/packages/bruno/assets/images/icon_arrow_up_selected.png": "05663a9913ee909e37f400eb84e9bab7",
"assets/packages/bruno/assets/images/icon_appraise_bad_selected.gif": "4872c821ba3b572004f941219656f927",
"assets/packages/bruno/assets/images/icon_more.png": "4e2d9f1ebe88bee022f89482ca4a0d34",
"assets/packages/bruno/assets/images/multi_select_btn_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/images/multi_select_btn_grey.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/images/icon_star_size_selected.png": "d4391b3510c4d8f9e1331f8bb982367c",
"assets/packages/bruno/assets/images/icon_share_weChat.png": "c754f1d3aa4c27818c8f6ca80ad18254",
"assets/packages/bruno/assets/images/icon_share_wechat_disable.png": "05a5edf43878dfc59c925e540227321c",
"assets/packages/bruno/assets/images/icon_share_weibo.png": "1a03f06dc4e5b70ea2ba14dae7150f79",
"assets/packages/bruno/assets/images/network_error.png": "96007c35f702143d5e7341b510bd7a79",
"assets/packages/bruno/assets/images/icon_selection_reset.png": "03360fcb7ff02141fd2ca2f0092bf7a7",
"assets/packages/bruno/assets/images/icon_appraise_not_good_selected.gif": "d48c1ea3c907c5a4a46f2b484c1f3ae8",
"assets/packages/bruno/assets/images/img_step_title.png": "7baf56af65f5089205c05d9ef64ffe64",
"assets/packages/bruno/assets/images/icon_qrcode_failed.png": "d6e0bcb4ea8bb988a6fbd6554969a637",
"assets/packages/bruno/assets/images/icon_call_disable.png": "6fccb80d93cd9736558244e561dc3e09",
"assets/packages/bruno/assets/images/icon_refresh.png": "42d6492e745925d98af3b8ad42aac964",
"assets/packages/bruno/assets/images/icon_appraise_bad_unselected.png": "dc92c8bac4b471958ebd31b4e6665bb9",
"assets/packages/bruno/assets/images/img_unselected.png": "c34a63171059ea804d827dde75aad5fd",
"assets/packages/bruno/assets/images/icon_arrow_down_selected.png": "e7689a2bd3cecd5b8a8014251207427c",
"assets/packages/bruno/assets/images/icon_appraise_good_default.png": "0ba6515b918a139ddb87abd51490479e",
"assets/packages/bruno/assets/images/icon_share_save_image_disable.png": "8c3aedfd91f07816a75826036f6c0fa5",
"assets/packages/bruno/assets/images/icon_custom_share.png": "cf4fae2c0040e5b52b3732258480abb0",
"assets/packages/bruno/assets/images/two_line_bubble.png": "6a50dd5e33f3e3083d752f1138a03ae2",
"assets/packages/bruno/assets/images/icon_share_message_disable.png": "15a552749a4e5f7472e5686c6844f535",
"assets/packages/bruno/assets/images/icon_share_shareLink.png": "cf509f991da85af1159683d038d516e6",
"assets/packages/bruno/assets/images/empty_state.png": "6e96121087d0308ede162b11d26d0f82",
"assets/packages/bruno/assets/images/icon_multi_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/images/icon_arrow_down_unselected.png": "4ae009dcb0a9f37162cec27f804e5e90",
"assets/packages/bruno/assets/images/refresh_arrow_up.png": "06f0e8007d46db4355a186834352bc4d",
"assets/packages/bruno/assets/images/icon_im_blue.png": "fb2c916280bb0e2948129a279c8e9624",
"assets/packages/bruno/assets/images/icon_call.png": "0f8ec4efe41b0c61920869e87934cf21",
"assets/packages/bruno/assets/images/icon_share_moments.png": "2c6ca38609aa5748a5b450ca7a215577",
"assets/packages/bruno/assets/images/icon_star_size.png": "d27325d6cbfd2efa79a248d530fc6f26",
"assets/packages/bruno/assets/images/icon_share_browser_disable.png": "49ea2adab5e8c9ff6ad2f3bb7f0dd389",
"assets/packages/bruno/assets/images/icon_appraise_surprise_selected.gif": "dc449f267bceeb855eb55b288a3639b1",
"assets/packages/bruno/assets/images/icon_appraise_ok_unselected.png": "fc6373e1af9bf8ffb3c4b8c3400e48ad",
"assets/packages/bruno/assets/images/select_checked_status.png": "7b8079e5fa987209967ece5907ea4b25",
"assets/packages/bruno/assets/images/icon_share_qq.png": "0350a2534f77b75b98f9c15e3159c3ad",
"assets/packages/bruno/assets/images/img_network.png": "d167c2173c796824a9504dcea0cfeda6",
"assets/packages/bruno/assets/images/icon_appraise_good_selected.gif": "d9ab487859bfb6a19a2427b82bf1a263",
"assets/packages/bruno/assets/images/icon_share_zone.png": "19599a32fa9101c73048cee724265a69",
"assets/packages/bruno/assets/images/icon_appraise_surprise_unselected.png": "10c0f57c8f1a2046205e4a248d842f3a",
"assets/packages/bruno/assets/images/icon_im.png": "557b28ee7422dc8873227200b8301ca9",
"assets/packages/bruno/assets/images/icon_qrcode_bg.png": "58532720f3445299f09ff70a6917a0cc",
"assets/packages/bruno/assets/images/icon_share_copy.png": "95840c782c0f9269a5b8729e1fa8153f",
"assets/packages/bruno/assets/images/icon_refresh_white.png": "30b15e71573234d94e74fce849c24bb3",
"assets/packages/bruno/assets/images/icon_bottom_picker_right_top_bg.png": "7c53021ff2f4cea0088a5c2cb1dc2e42",
"assets/packages/bruno/assets/images/refresh_arrow_down.png": "fbba93502902aa07f6ef0b390ce4645d",
"assets/packages/bruno/assets/images/icon_appraise_not_good_unselected.png": "053bd691d3d446b072ef3dc1e1c54216",
"assets/packages/bruno/assets/images/icon_appraise_good_unselected.png": "c85ef408d0e975a3d75c691f3b0dbb77",
"assets/packages/bruno/assets/images/icon_share_save_image.png": "95ddc85d949f0ec24cb47a6887ed03f2",
"assets/packages/bruno/assets/images/icon_guanbi.png": "47d96168715e105ccc9375dd3563c7b9",
"assets/packages/bruno/assets/images/img_bg_blur.png": "af00b199cb0f5ffef5534b6e0820bf1a",
"assets/packages/bruno/assets/images/icon_unselect.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/images/icon_share_moments_disable.png": "bdc02036f8ce03714468c70d49c83a2a",
"assets/packages/bruno/assets/images/icon_share_qq_disable.png": "8011a5fc6c34dfe555b5eb455d9fe4d6",
"assets/packages/bruno/assets/images/icon_share_shareLink_disable.png": "9cf769fd5f0cd8ef64b57d3d247e7511",
"assets/packages/bruno/assets/images/icon_share_message.png": "85f79bd5b5f2a5f5b4ac07f90bd8a1a7",
"assets/packages/bruno/assets/images/icon_appraise_surprise_default.png": "edb11f9f5ef607affc1d09c99eeff40e",
"assets/packages/bruno/assets/images/icon_share_copy_disable.png": "8b9408488dfe702510bfe31ec3d72303",
"assets/packages/bruno/assets/images/icon_appraise_bad_default.png": "5f225ab0e6aa5f4ddc6219fe62bba83f",
"assets/packages/bruno/assets/images/icon_share_browser.png": "5eff40cd995513e061aafdcef44fcfa9",
"assets/packages/bruno/assets/images/icon_share_weibo_disable.png": "b4e67d4a69c659b86cdea91f3641783d",
"assets/packages/bruno/assets/images/no_data.png": "5eef0afb51422462a78e8dac231e492a",
"assets/packages/bruno/assets/images/icon_appraise_ok_selected.gif": "f360d504d464729850fd6daafa8ca224",
"assets/packages/bruno/assets/images/icon_appraise_not_good_default.png": "928cee02f4b974ecded8221eda0b00aa",
"assets/packages/bruno/assets/images/img_bg_card.png": "a34f70556b8e474c60e114ee1f410507",
"assets/packages/bruno/assets/images/icon_single_selected.png": "d9253d80f5544991198cfa0238b9519d",
"assets/packages/bruno/assets/images/icon_appraise_ok_default.png": "f73afb9b00646474d42706ca84ac121d",
"assets/packages/bruno/assets/images/img_selecetd_default.png": "8af280beb2675b865cf355617f2226fb",
"assets/packages/bruno/assets/json/china.json": "981508d9619356a8deca0aa642792c51",
"assets/packages/bruno/assets/icons/icon_success.png": "7e7172f1424ca06fa49265bca9c191b2",
"assets/packages/bruno/assets/icons/ic_delete_white.png": "6eab4791d9fa0c2728010017a68512c6",
"assets/packages/bruno/assets/icons/icon_remove_form_item.png": "9a88462a461975d461bb197af5a6ecd3",
"assets/packages/bruno/assets/icons/icon_notice_warning.png": "2fe3ddae808c90596d04a578a48c4011",
"assets/packages/bruno/assets/icons/icon_down_arrow.png": "2c15b9ff209677b7c53529976c942768",
"assets/packages/bruno/assets/icons/icon_step_5.png": "8a8e83032bf482ba223871ddf2630e83",
"assets/packages/bruno/assets/icons/icon_close.png": "762942ed622fe635bb59466b11e4561b",
"assets/packages/bruno/assets/icons/icon_notice_arrow_red.png": "137d23f3e3da680d036a59af62c79ab3",
"assets/packages/bruno/assets/icons/icon_result_error.png": "81f26e7d7490a9c6ea5d3e42e1eb4047",
"assets/packages/bruno/assets/icons/icon_star.png": "e1e54bf4c8d9056b3ee517141031ad31",
"assets/packages/bruno/assets/icons/icon_step_4.png": "8fadaffee25637ddbe8b70062bc650e4",
"assets/packages/bruno/assets/icons/icon_vr.png": "94c803a5c76c8256ef67e41cb7e9ceb5",
"assets/packages/bruno/assets/icons/radio/single_selected.png": "d9253d80f5544991198cfa0238b9519d",
"assets/packages/bruno/assets/icons/radio/disable_unselected.png": "5f196cbb452b315b25613063da054fbb",
"assets/packages/bruno/assets/icons/radio/disable_single_selected.png": "3aa5d5b7b39dc807a9a1d8b8f9acf3d5",
"assets/packages/bruno/assets/icons/radio/disable_multi_selected.png": "174498c62562e984225f7bf861680acd",
"assets/packages/bruno/assets/icons/radio/unselected.png": "0aa3617b3ef4fd6ab38b469c1063f944",
"assets/packages/bruno/assets/icons/radio/multiple_selected.png": "597877df09f2c0de126f303dfe266bfd",
"assets/packages/bruno/assets/icons/icon_question.png": "9fd6f5871e8cc9f40894c361624deb40",
"assets/packages/bruno/assets/icons/icon_popup_close.png": "df80090a6d5835e479fee3b3b38778e9",
"assets/packages/bruno/assets/icons/icon_step_3.png": "7c5ea8faa747e4ee9b8998b28965711d",
"assets/packages/bruno/assets/icons/icon_selection_reset.png": "03360fcb7ff02141fd2ca2f0092bf7a7",
"assets/packages/bruno/assets/icons/icon_right_top_pointer.png": "708848d9a623023b92924c8f3d47d18e",
"assets/packages/bruno/assets/icons/icon_calendar_next_month.png": "b9c84144c187081ece2f336c526b009b",
"assets/packages/bruno/assets/icons/icon_step_2.png": "a3f473ee8f55c3e392294f44246ebec1",
"assets/packages/bruno/assets/icons/icon_trash.png": "db5c83b8bbe9ab076ee933d04b388334",
"assets/packages/bruno/assets/icons/icon_operation_line_left.png": "0ccda5dc91a237ef2d16504bb0569164",
"assets/packages/bruno/assets/icons/icon_notice_close_red.png": "e7b7deafe27c9eac751077f4bd86ec02",
"assets/packages/bruno/assets/icons/icon_triangle_up.png": "d4e3cd2db15e82e38c4e54da72247e49",
"assets/packages/bruno/assets/icons/icon_notice_close_green.png": "a27ab4db280eef98da5d199bde69aaf3",
"assets/packages/bruno/assets/icons/icon_notice_arrow_green.png": "3d956dce88dc751d75e2244196c89056",
"assets/packages/bruno/assets/icons/icon_bottom_btn.png": "702c79f6d0ca30a4990098bf3dc47538",
"assets/packages/bruno/assets/icons/grey_place_holder.png": "3ba32cbe47304f47ccc6b4aae9b757d5",
"assets/packages/bruno/assets/icons/icon_back_black.png": "cca96aa19663a5b81287305b221d717d",
"assets/packages/bruno/assets/icons/icon_add_form_item.png": "c213aec673e820a28db9356cfbdfabc9",
"assets/packages/bruno/assets/icons/icon_notice_succeed.png": "a46a9cda13903c86e156699c77779dd9",
"assets/packages/bruno/assets/icons/icon_minus_disable.png": "4cd4a2b9845f39958eb0c38fd1c224ef",
"assets/packages/bruno/assets/icons/icon_notice_arrow_orange.png": "8fd4c45816256c6b2e379d017dece60a",
"assets/packages/bruno/assets/icons/icon_calendar_pre_month.png": "2717508568bee63c78ea0c264e64cdba",
"assets/packages/bruno/assets/icons/icon_notice.png": "c586ee43118838efedfa3248a50a09b0",
"assets/packages/bruno/assets/icons/icon_step_doing.png": "052416a16da085ed675d56fe04f3ad3d",
"assets/packages/bruno/assets/icons/icon_audioplayer_play.png": "30e5d166c3c20d81219f68a84b30c798",
"assets/packages/bruno/assets/icons/icon_alter.png": "7e7172f1424ca06fa49265bca9c191b2",
"assets/packages/bruno/assets/icons/icon_notice_close_blue.png": "c3ab1f9255f0fb302ca4918c0c64ab2a",
"assets/packages/bruno/assets/icons/icon_notice_fail.png": "c08cf38e0d6e093ca038de14d3b315fe",
"assets/packages/bruno/assets/icons/icon_pait_info_question.png": "c64b57553cae77b1152db3af431f1314",
"assets/packages/bruno/assets/icons/icon_require_red.png": "6c4a317ffbb7a17b69b3b226125e45e9",
"assets/packages/bruno/assets/icons/img_avatar_new.png": "0ffd52e7313c6dff8e3c89103b5858d0",
"assets/packages/bruno/assets/icons/normol_border.png": "085a0baefd58ffae2df2fd7ac910c64f",
"assets/packages/bruno/assets/icons/icon_add_disable.png": "027458e6fea11520a721a91bdb298884",
"assets/packages/bruno/assets/icons/ic_quotation_mark.png": "914d9400917d6228cfb69f138d1408cb",
"assets/packages/bruno/assets/icons/icon_unselected_triangle.png": "bd80c3d1eee62cbcf6dbdbc78492a8ad",
"assets/packages/bruno/assets/icons/ic_search.png": "73c7edd0a5b03093c160444cccf88542",
"assets/packages/bruno/assets/icons/icon_right_arrow.png": "87c35e448cf021b149a63f8e372f129c",
"assets/packages/bruno/assets/icons/icon_notice_close_orange.png": "375d658030ca161fcbd584a835cfb2db",
"assets/packages/bruno/assets/icons/icon_audioplayer_pause.png": "b90ac71697048651faa68a80a1b4153b",
"assets/packages/bruno/assets/icons/icon_warning.png": "c2234221b2383fd79589fc092b6ca01a",
"assets/packages/bruno/assets/icons/icon_operation_line_right.png": "3e6a6b76d9add9a7fe74b47fbcdd5ed5",
"assets/packages/bruno/assets/icons/icon_alert.png": "b862b889851253cff6fb8232bb005a6c",
"assets/packages/bruno/assets/icons/icon_result_success.png": "f4ee826d90a9b7a70d171a056f830ab8",
"assets/packages/bruno/assets/icons/icon_step_completed.png": "070166a539a87d7435bf5e41a5736a95",
"assets/packages/bruno/assets/icons/icon_notice_running.png": "0e220fad891161234dfa731d1baffc93",
"assets/packages/bruno/assets/icons/icon_notice_arrow_blue.png": "3665442af614981c25f03fa866e0bea6",
"assets/packages/bruno/assets/icons/icon_star_select.png": "9e81914b1d3165b0c2035da112e50191",
"assets/packages/bruno/assets/icons/icon_back_white.png": "c9e16d8495466af8cab275700e7dc663",
"assets/packages/bruno/assets/icons/icon_up_arrow.png": "759e41c12aee3ac9dba6f152b9b542ca",
"assets/packages/bruno/assets/icons/icon_add_enable.png": "7c54dd9ae8bd4ad34fdbe9ec9676a607",
"assets/packages/bruno/assets/icons/icon_star_unselect.png": "1eb3492bf235dd2e59872b749baf083d",
"assets/packages/bruno/assets/icons/icon_minus_enable.png": "80ead638d7a2ad2252debf08f26b0831",
"assets/packages/bruno/assets/icons/icon_selcted_triangle.png": "d4e3cd2db15e82e38c4e54da72247e49",
"assets/packages/bruno/assets/icons/icon_house_grey.png": "b5ca805d528b9fd83346d06b3bfcc915",
"assets/packages/bruno/assets/icons/icon_delete.png": "677eebfbf89ccd7895363bd88d90b9ea",
"assets/packages/bruno/assets/icons/ic_delete_grey.png": "ab70d1844f58c85c5dda3c0af9e5f163",
"assets/packages/bruno/assets/icons/icon_star_half.png": "db4a2f866101a2854c4d33dfdecc6128",
"assets/packages/bruno/assets/icons/icon_triangle_down.png": "bd80c3d1eee62cbcf6dbdbc78492a8ad",
"assets/packages/bruno/assets/fonts/Bebas-Regular.ttf": "6f6f82d9243d8111301f39648fb1d62b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/icon.png": "daa999ca07485a7fc47d9369fa1d97da",
"assets/assets/images/steak.jpeg": "6b634c53550922eaa497e12964e129ad",
"assets/assets/images/oneCompany.png": "3cf428ee819569d5cfff184734f841e8",
"assets/assets/images/background.png": "6af1aff835e3eead3f520e29ead7bf3d",
"assets/assets/images/food.png": "e98e8aab7865fdd04866404b09a931a0",
"assets/assets/images/one.png": "22e624f60e68e3427a6719405af5b3e9",
"assets/assets/test.json": "c7122afcc58e497e0d5162852d4d3356",
"assets/assets/home_top_cat.json": "d42c3c4fffd7188fac845a2747ddfc6e",
"assets/assets/selection.json": "ed612fd3b6e469ad97ae758e353a79b7",
"assets/assets/multi_list_filter.json": "2da3bea36e99480308b18f1648e860a5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
