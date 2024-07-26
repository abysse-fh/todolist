const STATUS = ["TODO", "WIP", "TEST", "DONE"];

const TASKS = [
   {
     "id": "66a242ac66708bd14586f9b7",
     "status": "WIP",
     "title": "eiusmod dolor quis est",
     "description": "aute nulla minim aliqua ipsum est magna esse ullamco cillum non eiusmod adipisicing eu magna ipsum mollit et culpa anim",
     "tr": 30,
     "ti": 12,
     "users": [
       {
         "id": "66a242aced5d6497909c1d3a",
         "name": "Juliet Maxwell"
       },
       {
         "id": "66a242ac5953331486299ada",
         "name": "Morrison Morrow"
       },
       {
         "id": "66a242ac2cddb306217fd36d",
         "name": "Olsen Whitney"
       }
     ]
   },
   {
     "id": "66a242ac884e346c64d2efa3",
     "status": "TEST",
     "title": "mollit ea labore Lorem",
     "description": "nulla fugiat amet fugiat commodo minim enim proident velit ex ipsum aliquip nostrud do anim id Lorem veniam eiusmod dolore",
     "tr": 28,
     "ti": 28,
     "users": [
       {
         "id": "66a242ac0ff73eebb7b8d430",
         "name": "Schultz Harrison"
       },
       {
         "id": "66a242ac9cf457ef371deb37",
         "name": "Tamika Barker"
       },
       {
         "id": "66a242acea8b0711640a882d",
         "name": "Dillard Gallagher"
       }
     ]
   },
   {
     "id": "66a242ac1b7310b8c24cadb6",
     "status": "WIP",
     "title": "officia irure aliqua est",
     "description": "sint laboris do sit adipisicing labore excepteur aliqua enim et ut labore dolor et sint ex labore deserunt incididunt et",
     "tr": 11,
     "ti": 11,
     "users": [
       {
         "id": "66a242ac02eef5e0af5c6acf",
         "name": "Logan Hess"
       }
     ]
   },
   {
     "id": "66a242ac418adda785004d0c",
     "status": "TEST",
     "title": "quis sint ad in",
     "description": "mollit eu ut minim elit ex qui mollit aute deserunt ipsum dolore quis consequat aute aliqua amet laborum velit nisi",
     "tr": 27,
     "ti": 26,
     "users": [
       {
         "id": "66a242acf057d932b6636b75",
         "name": "Whitfield Lindsey"
       },
       {
         "id": "66a242acc99098ace94a803d",
         "name": "Lila Velazquez"
       },
       {
         "id": "66a242acb00c173faa52ef93",
         "name": "Edith Armstrong"
       }
     ]
   },
   {
     "id": "66a242ac97900d10b76503fd",
     "status": "TODO",
     "title": "aliqua id fugiat voluptate",
     "description": "elit Lorem nostrud esse occaecat proident ut aute incididunt pariatur pariatur cupidatat consectetur aliquip nostrud sint magna ex duis commodo",
     "tr": 16,
     "ti": 18,
     "users": [
       {
         "id": "66a242acfa91c1f02b30a573",
         "name": "Francisca Lott"
       },
       {
         "id": "66a242ac6bc67a9006acfb36",
         "name": "Hope Langley"
       },
       {
         "id": "66a242ac39cae49259f42550",
         "name": "Jeanne Glenn"
       }
     ]
   },
   {
     "id": "66a242ac9315ca7acba0221b",
     "status": "WIP",
     "title": "dolor sit consectetur culpa",
     "description": "duis eiusmod reprehenderit proident dolore ullamco aute est amet sint excepteur qui mollit dolor sunt ullamco amet laboris laborum sunt",
     "tr": 16,
     "ti": 26,
     "users": [
       {
         "id": "66a242ac5347d605a71dbb4d",
         "name": "York Bray"
       },
       {
         "id": "66a242acda697adee6953f7f",
         "name": "Kelsey Foster"
       }
     ]
   },
   {
     "id": "66a242ac34259f1938d56d2e",
     "status": "DONE",
     "title": "commodo cupidatat consectetur dolor",
     "description": "excepteur incididunt do eu ea aliquip elit excepteur duis culpa est pariatur ipsum eu excepteur consequat officia velit anim elit",
     "tr": 28,
     "ti": 28,
     "users": [
       {
         "id": "66a242ac24d9a0256d5efe2d",
         "name": "Dickson Pate"
       },
       {
         "id": "66a242ac00b177ec65de7618",
         "name": "Howell Henson"
       },
       {
         "id": "66a242ac24b2cf4ee88f73fa",
         "name": "Kidd Trevino"
       }
     ]
   },
   {
     "id": "66a242ac103a11a389aea7bd",
     "status": "TODO",
     "title": "incididunt mollit fugiat irure",
     "description": "reprehenderit nulla adipisicing ullamco Lorem ut ullamco adipisicing sint deserunt deserunt quis ea consectetur fugiat irure adipisicing reprehenderit aute laborum",
     "tr": 15,
     "ti": 14,
     "users": [
       {
         "id": "66a242ac94cee8c866ab2b78",
         "name": "Mccormick Pugh"
       }
     ]
   },
   {
     "id": "66a242acde3c4c442a56cbe0",
     "status": "TEST",
     "title": "eu enim velit sunt",
     "description": "adipisicing incididunt aliquip reprehenderit velit sit magna laboris occaecat aliquip incididunt fugiat mollit quis cupidatat cillum sunt culpa Lorem nulla",
     "tr": 21,
     "ti": 29,
     "users": [
       {
         "id": "66a242ac55336eddacf13182",
         "name": "Wendi Lamb"
       },
       {
         "id": "66a242acd3c5a78362785a55",
         "name": "Mattie Espinoza"
       },
       {
         "id": "66a242ac7cbe5045d39164dd",
         "name": "Oneil Benton"
       }
     ]
   },
   {
     "id": "66a242acb84f57f8593756f4",
     "status": "WIP",
     "title": "cupidatat culpa id cupidatat",
     "description": "ipsum reprehenderit culpa veniam mollit ut consequat deserunt cillum nulla est officia labore id aliqua minim in aliqua sunt id",
     "tr": 28,
     "ti": 16,
     "users": [
       {
         "id": "66a242acd816143e4784791d",
         "name": "Knowles Cross"
       }
     ]
   },
   {
     "id": "66a242acc0c5d80cb43f4e35",
     "status": "DONE",
     "title": "labore dolore non laboris",
     "description": "in excepteur commodo quis amet fugiat Lorem commodo nisi sunt qui laboris velit ex ullamco eiusmod aliquip amet eiusmod magna",
     "tr": 26,
     "ti": 24,
     "users": [
       {
         "id": "66a242acf41927ce7f73b7b1",
         "name": "Calderon Duncan"
       },
       {
         "id": "66a242ac2f896ee476845f8d",
         "name": "Hilda Kline"
       },
       {
         "id": "66a242aca1465d74f8fe4964",
         "name": "Esmeralda Arnold"
       }
     ]
   },
   {
     "id": "66a242ace2965cf0a25a8cfd",
     "status": "DONE",
     "title": "enim in ex adipisicing",
     "description": "culpa sit sint ipsum culpa et elit nisi dolore aliquip ex fugiat esse anim eu commodo mollit qui consequat ad",
     "tr": 18,
     "ti": 25,
     "users": [
       {
         "id": "66a242ac65be29540a89e311",
         "name": "Carroll Gross"
       }
     ]
   },
   {
     "id": "66a242ac44bd558531a9351c",
     "status": "DONE",
     "title": "commodo mollit eiusmod tempor",
     "description": "dolore pariatur deserunt non in exercitation laboris reprehenderit tempor minim veniam cupidatat incididunt do ea enim duis ut et velit",
     "tr": 24,
     "ti": 26,
     "users": [
       {
         "id": "66a242acb7c52fb3e32a9fc2",
         "name": "Steele Oneal"
       }
     ]
   },
   {
     "id": "66a242aca1ea1267f04531fa",
     "status": "WIP",
     "title": "sunt mollit commodo esse",
     "description": "non ex quis cupidatat consectetur eu ipsum sunt culpa magna sit ea qui proident amet velit dolor quis in magna",
     "tr": 26,
     "ti": 24,
     "users": [
       {
         "id": "66a242ac9d95c627313219fa",
         "name": "Klein Mcgowan"
       },
       {
         "id": "66a242acc974e804d33128ef",
         "name": "Kayla Mueller"
       },
       {
         "id": "66a242acfc98da47cb6d4aef",
         "name": "Diann Hart"
       }
     ]
   },
   {
     "id": "66a242ac525890ae4b0f0865",
     "status": "TEST",
     "title": "Lorem proident irure cillum",
     "description": "officia laboris adipisicing veniam nisi commodo duis commodo tempor amet sint consectetur eiusmod consequat eiusmod ut tempor officia consequat nostrud",
     "tr": 11,
     "ti": 20,
     "users": [
       {
         "id": "66a242ac9989cb26dd09f889",
         "name": "Ophelia Ruiz"
       },
       {
         "id": "66a242acc9caa88ff8608491",
         "name": "Bonnie Faulkner"
       },
       {
         "id": "66a242ac96673d335cc428bb",
         "name": "Collier Hicks"
       }
     ]
   },
   {
     "id": "66a242acbac57c5df7484aea",
     "status": "TEST",
     "title": "esse veniam do minim",
     "description": "Lorem cillum dolore consequat cupidatat minim occaecat non culpa occaecat eiusmod est labore Lorem et esse cillum veniam id ullamco",
     "tr": 11,
     "ti": 29,
     "users": [
       {
         "id": "66a242acf7c78b5bd601faf3",
         "name": "Chandler Patton"
       },
       {
         "id": "66a242acc75a9251cb1f91b8",
         "name": "Tonia Holland"
       }
     ]
   },
   {
     "id": "66a242acae6da5832b546269",
     "status": "WIP",
     "title": "ullamco dolor irure esse",
     "description": "adipisicing amet aute dolor irure amet elit sint consequat do sunt ipsum cupidatat nulla nostrud est tempor quis aliqua eu",
     "tr": 30,
     "ti": 27,
     "users": [
       {
         "id": "66a242ac47b383414647f38b",
         "name": "Tracie Harvey"
       },
       {
         "id": "66a242ac6d583f1f98199fb1",
         "name": "Cruz Wolf"
       },
       {
         "id": "66a242ac52239f69712ad560",
         "name": "Conrad Ayers"
       }
     ]
   },
   {
     "id": "66a242acc468528aaf4312ee",
     "status": "DONE",
     "title": "ad duis velit eu",
     "description": "aliquip ut reprehenderit consequat fugiat consectetur elit irure laborum sint labore adipisicing exercitation nulla laborum aute cillum reprehenderit qui eu",
     "tr": 29,
     "ti": 20,
     "users": [
       {
         "id": "66a242ac5ce670001cf0ed2c",
         "name": "Holder Weaver"
       },
       {
         "id": "66a242aca84c1bccb1782532",
         "name": "Lucinda Ochoa"
       },
       {
         "id": "66a242accb3e8c4326c92855",
         "name": "Mona Church"
       }
     ]
   },
   {
     "id": "66a242acccc3431278196753",
     "status": "DONE",
     "title": "aliqua magna est enim",
     "description": "magna veniam nisi consectetur minim proident nisi nostrud labore incididunt sunt minim quis exercitation nisi nisi sint est nostrud labore",
     "tr": 30,
     "ti": 26,
     "users": [
       {
         "id": "66a242ac2fb99caf786bb641",
         "name": "Nita Forbes"
       },
       {
         "id": "66a242ac11d1fef2da719b2a",
         "name": "Beverly Rojas"
       },
       {
         "id": "66a242acfd55fcc204092aad",
         "name": "Baldwin Fitzgerald"
       }
     ]
   },
   {
     "id": "66a242ac15542f07d88ba69c",
     "status": "DONE",
     "title": "qui consequat irure magna",
     "description": "esse in sunt deserunt esse id anim exercitation consectetur laborum nulla excepteur laboris amet pariatur occaecat ad ut fugiat ut",
     "tr": 12,
     "ti": 29,
     "users": [
       {
         "id": "66a242ac936c6df5b8fce328",
         "name": "Peck Macdonald"
       },
       {
         "id": "66a242acc027d98690842124",
         "name": "Ruthie Guzman"
       }
     ]
   },
   {
     "id": "66a242ac0dc7a564cabb64ea",
     "status": "DONE",
     "title": "excepteur esse ex id",
     "description": "duis commodo ut do ea amet qui consectetur nostrud sunt dolore consectetur mollit cupidatat magna laborum ipsum eiusmod anim aliqua",
     "tr": 16,
     "ti": 15,
     "users": [
       {
         "id": "66a242ac0abfc33db7ce617a",
         "name": "Quinn Graves"
       }
     ]
   },
   {
     "id": "66a242ac0cbf829168e0adba",
     "status": "DONE",
     "title": "laborum amet non duis",
     "description": "sint amet sunt exercitation deserunt in ad amet minim sunt adipisicing non do aliquip ad qui nostrud enim nulla do",
     "tr": 27,
     "ti": 30,
     "users": [
       {
         "id": "66a242acfeba840aa3139bed",
         "name": "Rosalyn Franks"
       },
       {
         "id": "66a242ac63e44e124b1c904c",
         "name": "Cardenas Melton"
       }
     ]
   },
   {
     "id": "66a242ac6a3c75a094719c44",
     "status": "WIP",
     "title": "in velit esse sint",
     "description": "consectetur voluptate veniam tempor laborum id culpa reprehenderit consectetur culpa cillum magna dolore esse deserunt officia commodo ullamco irure sit",
     "tr": 13,
     "ti": 13,
     "users": [
       {
         "id": "66a242ac8168beb821dd13af",
         "name": "Blevins Soto"
       },
       {
         "id": "66a242acce05fa5ac752dbb9",
         "name": "Goff Bush"
       },
       {
         "id": "66a242ac5d4fcbf886bc2d08",
         "name": "Orr Fernandez"
       }
     ]
   },
   {
     "id": "66a242acfc8b157a89c8c0b6",
     "status": "DONE",
     "title": "consequat mollit dolor duis",
     "description": "esse cillum duis commodo excepteur amet laborum id nostrud excepteur eiusmod id pariatur aliqua consequat incididunt et elit consequat in",
     "tr": 30,
     "ti": 25,
     "users": [
       {
         "id": "66a242ace6a752a4c5bbdbe8",
         "name": "Noel Love"
       },
       {
         "id": "66a242ac417450d9dfddb3ef",
         "name": "Morris Logan"
       }
     ]
   },
   {
     "id": "66a242acf36894c601d77734",
     "status": "TEST",
     "title": "ut ex Lorem quis",
     "description": "ea in aute cupidatat aliqua sunt aliquip deserunt ea labore adipisicing in et minim adipisicing eiusmod enim sint dolor labore",
     "tr": 15,
     "ti": 12,
     "users": [
       {
         "id": "66a242ac2a8ef4a16ba3a095",
         "name": "Deana Fuentes"
       },
       {
         "id": "66a242ac9cbaf9ac1742f792",
         "name": "Schroeder Greene"
       }
     ]
   },
   {
     "id": "66a242acba08e406fe66f11b",
     "status": "WIP",
     "title": "occaecat minim id minim",
     "description": "ut pariatur ipsum anim esse magna dolor mollit veniam sunt dolore do commodo dolor eiusmod id deserunt laboris non cillum",
     "tr": 23,
     "ti": 21,
     "users": [
       {
         "id": "66a242ac83f6a2182cee74ac",
         "name": "Bullock Horton"
       },
       {
         "id": "66a242ac7df119ab599279cb",
         "name": "Roth Salazar"
       }
     ]
   },
   {
     "id": "66a242ac04631311cc76aba7",
     "status": "WIP",
     "title": "nisi sunt officia elit",
     "description": "do officia ullamco eu cillum nisi est consectetur dolor quis proident fugiat in non laboris sint occaecat officia commodo elit",
     "tr": 21,
     "ti": 13,
     "users": [
       {
         "id": "66a242ac31852c6370c32750",
         "name": "Simmons Dejesus"
       }
     ]
   },
   {
     "id": "66a242ac9019a40ac82c719a",
     "status": "TEST",
     "title": "nisi incididunt dolor mollit",
     "description": "id adipisicing culpa ullamco velit commodo minim laborum ad cillum labore consequat esse voluptate sit duis nisi consectetur reprehenderit reprehenderit",
     "tr": 19,
     "ti": 15,
     "users": [
       {
         "id": "66a242acb38a836121fcba93",
         "name": "Mcgee Osborn"
       },
       {
         "id": "66a242ac630a0e9335a76a87",
         "name": "Candice Durham"
       },
       {
         "id": "66a242ac84a0a48f3b62d002",
         "name": "Maude Manning"
       }
     ]
   },
   {
     "id": "66a242ac1ef18205ee63d688",
     "status": "TEST",
     "title": "ex commodo duis laborum",
     "description": "magna aliquip magna excepteur cillum reprehenderit exercitation cillum consectetur sunt velit sunt adipisicing consequat veniam proident dolor do enim tempor",
     "tr": 12,
     "ti": 21,
     "users": [
       {
         "id": "66a242acc1bd2f3c81f4a5a3",
         "name": "Terrie Nieves"
       },
       {
         "id": "66a242acaab70ef461f6140b",
         "name": "Rosario Bonner"
       },
       {
         "id": "66a242acffe9968e8d23400a",
         "name": "Mendoza Oconnor"
       }
     ]
   },
   {
     "id": "66a242ac9921df3c7af33a6c",
     "status": "TEST",
     "title": "elit sit deserunt do",
     "description": "reprehenderit consequat tempor labore duis culpa laborum non aute id pariatur et ullamco velit nostrud est et elit eiusmod commodo",
     "tr": 25,
     "ti": 22,
     "users": [
       {
         "id": "66a242acc950280934d76acb",
         "name": "Harris Sargent"
       },
       {
         "id": "66a242ac51c3622ec81c3201",
         "name": "Mathis Dudley"
       },
       {
         "id": "66a242ac50a3a90f6e079772",
         "name": "Mills Reid"
       }
     ]
   },
   {
     "id": "66a242ac48da9e5b2d00346d",
     "status": "TODO",
     "title": "labore qui eiusmod duis",
     "description": "qui occaecat eu sunt labore qui ut quis consectetur Lorem quis deserunt magna reprehenderit laborum qui exercitation dolore mollit nulla",
     "tr": 29,
     "ti": 30,
     "users": [
       {
         "id": "66a242acb16a2ef81ad60d52",
         "name": "Frankie Robles"
       }
     ]
   },
   {
     "id": "66a242ac8139f4cea050d433",
     "status": "WIP",
     "title": "duis deserunt esse et",
     "description": "commodo est est incididunt quis deserunt enim voluptate enim mollit magna amet labore consequat enim quis aliquip ad irure ex",
     "tr": 23,
     "ti": 29,
     "users": [
       {
         "id": "66a242ac299fd32b79923d93",
         "name": "Wilder May"
       }
     ]
   },
   {
     "id": "66a242acf30d7c3579e57e50",
     "status": "TODO",
     "title": "duis amet voluptate duis",
     "description": "consequat eu nostrud in ad eu occaecat ad ex ex nulla amet velit mollit ut aliquip occaecat id amet ad",
     "tr": 26,
     "ti": 28,
     "users": [
       {
         "id": "66a242accb02a854415252f9",
         "name": "Long Myers"
       }
     ]
   },
   {
     "id": "66a242acf85318f3bcf2ebd6",
     "status": "DONE",
     "title": "elit sint deserunt aliqua",
     "description": "sunt culpa nulla ut ullamco quis consectetur quis ullamco aliqua sit proident esse duis sint irure amet sint ut et",
     "tr": 23,
     "ti": 12,
     "users": [
       {
         "id": "66a242ac15031d0712875836",
         "name": "Wheeler Alexander"
       }
     ]
   },
   {
     "id": "66a242acc4c0b5ca426737db",
     "status": "DONE",
     "title": "cillum culpa voluptate exercitation",
     "description": "dolor sunt ex quis exercitation labore dolore deserunt voluptate cupidatat nisi anim voluptate aliquip exercitation nostrud aute pariatur officia proident",
     "tr": 25,
     "ti": 21,
     "users": [
       {
         "id": "66a242ac2ed3db923b4584a0",
         "name": "Patton Valdez"
       },
       {
         "id": "66a242ac9aceca7c50b6e9c8",
         "name": "Marquita Boone"
       }
     ]
   },
   {
     "id": "66a242ac88837f0cdaa76f26",
     "status": "TODO",
     "title": "ea do labore reprehenderit",
     "description": "labore officia ipsum aute fugiat do nulla consequat minim reprehenderit laborum anim in nisi exercitation officia pariatur voluptate ad ad",
     "tr": 19,
     "ti": 22,
     "users": [
       {
         "id": "66a242acb04f5dee20ce9de7",
         "name": "Lindsey Miranda"
       }
     ]
   },
   {
     "id": "66a242ac88c16807c3145fba",
     "status": "TEST",
     "title": "velit qui exercitation consectetur",
     "description": "laboris Lorem aute eu sit irure esse labore reprehenderit ea anim minim proident eiusmod labore irure cillum elit labore non",
     "tr": 16,
     "ti": 23,
     "users": [
       {
         "id": "66a242ac3a3027c66d129cdf",
         "name": "Luann James"
       },
       {
         "id": "66a242ac800e071faba75c98",
         "name": "Latisha Jensen"
       },
       {
         "id": "66a242ac3ea60f196eb97cdc",
         "name": "Brenda Haynes"
       }
     ]
   },
   {
     "id": "66a242acc8802d3fcf645ce1",
     "status": "TODO",
     "title": "sint sit velit irure",
     "description": "culpa cillum duis aute in enim laboris irure voluptate quis Lorem nostrud dolore dolore aliquip exercitation nostrud fugiat est enim",
     "tr": 25,
     "ti": 16,
     "users": [
       {
         "id": "66a242acede4f64380e81187",
         "name": "Kathrine Pope"
       }
     ]
   },
   {
     "id": "66a242ac457c8fe06a5491e1",
     "status": "WIP",
     "title": "elit minim esse laborum",
     "description": "dolore aliquip id occaecat irure in sint Lorem Lorem aliqua amet nulla proident ut ullamco dolor velit anim veniam ex",
     "tr": 13,
     "ti": 17,
     "users": [
       {
         "id": "66a242ac8acbabe08860042d",
         "name": "Wagner Hansen"
       },
       {
         "id": "66a242acc424890be42862e2",
         "name": "Alexis Buckner"
       }
     ]
   },
   {
     "id": "66a242ac33c00b0dd49e9eee",
     "status": "TEST",
     "title": "nisi qui cupidatat labore",
     "description": "anim occaecat irure deserunt enim aliqua do dolore consequat deserunt est est esse veniam cupidatat ullamco id velit cillum cillum",
     "tr": 28,
     "ti": 22,
     "users": [
       {
         "id": "66a242ac158b4f59f657a0e9",
         "name": "Reva Green"
       },
       {
         "id": "66a242ac5f5f53732e2b1205",
         "name": "Rachelle Parrish"
       }
     ]
   },
   {
     "id": "66a242ac481865c7fe70759d",
     "status": "WIP",
     "title": "ullamco deserunt Lorem non",
     "description": "tempor et sunt cillum do ut ipsum deserunt excepteur anim reprehenderit cillum sint irure exercitation laboris quis sint sint amet",
     "tr": 30,
     "ti": 12,
     "users": [
       {
         "id": "66a242ace284fbb90aa6369f",
         "name": "Irwin Gould"
       },
       {
         "id": "66a242ac4e18b944ff46f16e",
         "name": "Patrice Kennedy"
       }
     ]
   },
   {
     "id": "66a242acbbc8c747f5c584fb",
     "status": "TEST",
     "title": "exercitation nisi veniam quis",
     "description": "consectetur ut cillum et ut eiusmod aliquip duis irure sunt esse officia amet in eiusmod sunt eu amet ea cupidatat",
     "tr": 17,
     "ti": 21,
     "users": [
       {
         "id": "66a242acd2de3353e657788c",
         "name": "Rose Bond"
       },
       {
         "id": "66a242ac230ae20dc2c182a2",
         "name": "Larson Phelps"
       },
       {
         "id": "66a242ac8996473099f27273",
         "name": "Rosalinda Lee"
       }
     ]
   },
   {
     "id": "66a242ac3d7bfd28b9498e63",
     "status": "WIP",
     "title": "laboris duis amet excepteur",
     "description": "nostrud adipisicing proident velit nisi proident eu velit dolore culpa enim laboris irure elit tempor consectetur laboris nulla ea dolore",
     "tr": 27,
     "ti": 22,
     "users": [
       {
         "id": "66a242acdd2106f9742152af",
         "name": "Maggie Allen"
       },
       {
         "id": "66a242ac81b771f6a9bd1cdf",
         "name": "Blanche Massey"
       }
     ]
   },
   {
     "id": "66a242ac0b7f50c587241809",
     "status": "WIP",
     "title": "cillum velit enim culpa",
     "description": "qui nostrud amet culpa ex consectetur eiusmod est adipisicing Lorem id voluptate exercitation velit eu elit esse proident pariatur non",
     "tr": 18,
     "ti": 23,
     "users": [
       {
         "id": "66a242acf3c457f30ca10ac2",
         "name": "Rena Erickson"
       },
       {
         "id": "66a242ac1af8026228a4d200",
         "name": "Ellison Bowers"
       }
     ]
   },
   {
     "id": "66a242acabe59656982b9b6f",
     "status": "TEST",
     "title": "elit qui enim amet",
     "description": "quis velit do aliqua id nulla dolor magna anim eu pariatur elit exercitation dolore pariatur aute dolore minim excepteur esse",
     "tr": 29,
     "ti": 25,
     "users": [
       {
         "id": "66a242acaaac91a8e7b7714b",
         "name": "Bertie Barton"
       },
       {
         "id": "66a242ac0ed37915da701c8a",
         "name": "Barr Maynard"
       }
     ]
   },
   {
     "id": "66a242acb3a95a7786db66a5",
     "status": "TODO",
     "title": "eu excepteur esse pariatur",
     "description": "consectetur laborum id commodo nulla et elit et reprehenderit nulla Lorem commodo incididunt officia anim anim ad aliquip irure fugiat",
     "tr": 19,
     "ti": 24,
     "users": [
       {
         "id": "66a242ac41bdf2240d1e8234",
         "name": "Sabrina Drake"
       }
     ]
   },
   {
     "id": "66a242acd19efb01e0090dbc",
     "status": "WIP",
     "title": "incididunt ea laboris amet",
     "description": "nisi anim anim ad esse et irure ipsum ipsum id in amet esse tempor sit anim sit labore eiusmod magna",
     "tr": 27,
     "ti": 16,
     "users": [
       {
         "id": "66a242acfb77ec99bc3c6ca9",
         "name": "Stone Mcdowell"
       },
       {
         "id": "66a242acfd05a3d8cb7e2134",
         "name": "Morgan Todd"
       }
     ]
   },
   {
     "id": "66a242ac55083204e196905d",
     "status": "TODO",
     "title": "sint dolor sint culpa",
     "description": "magna sit adipisicing aliqua dolor quis sunt velit esse nisi dolor sint quis nostrud velit sunt cillum labore eiusmod fugiat",
     "tr": 10,
     "ti": 18,
     "users": [
       {
         "id": "66a242acfa2d2e3db3102b60",
         "name": "Whitehead Chan"
       },
       {
         "id": "66a242acf1caac3fc5798af8",
         "name": "Clemons Tyler"
       }
     ]
   },
   {
     "id": "66a242ac4d38bda00bff486d",
     "status": "WIP",
     "title": "elit dolore non consectetur",
     "description": "pariatur nulla ea eu ad irure exercitation anim sint enim cupidatat sit et commodo laborum do aute incididunt aute irure",
     "tr": 27,
     "ti": 23,
     "users": [
       {
         "id": "66a242ac909ba603e0985abc",
         "name": "Rodriguez Solomon"
       },
       {
         "id": "66a242ac4c7fd7eca2e382c7",
         "name": "Hawkins Wong"
       },
       {
         "id": "66a242ac06ca575769e14a39",
         "name": "Vazquez Eaton"
       }
     ]
   },
   {
     "id": "66a242acb144fd29e0c232e9",
     "status": "TEST",
     "title": "proident ex aliqua irure",
     "description": "exercitation aliqua eu eiusmod cupidatat pariatur commodo voluptate non culpa fugiat laborum Lorem pariatur velit aute velit minim minim qui",
     "tr": 28,
     "ti": 20,
     "users": [
       {
         "id": "66a242ac4eb6bff413963156",
         "name": "Craft Chang"
       },
       {
         "id": "66a242ac72d5d7440887bfb9",
         "name": "Guzman Colon"
       }
     ]
   },
   {
     "id": "66a242ac3ce13d146bfd2621",
     "status": "WIP",
     "title": "nisi mollit laborum nisi",
     "description": "ad laborum enim aliquip amet mollit aliqua aliqua excepteur elit velit veniam eiusmod sit enim proident eu ut irure laborum",
     "tr": 14,
     "ti": 11,
     "users": [
       {
         "id": "66a242ac4b20161a657ab08e",
         "name": "Alyssa Ratliff"
       }
     ]
   },
   {
     "id": "66a242acf723d1462b599e7c",
     "status": "DONE",
     "title": "ipsum sint occaecat est",
     "description": "duis velit incididunt aliqua voluptate magna cillum do est velit proident occaecat adipisicing aute eu ad quis deserunt veniam ullamco",
     "tr": 23,
     "ti": 11,
     "users": [
       {
         "id": "66a242ac852d8ca2ca52cbab",
         "name": "Kirby Brock"
       }
     ]
   }
 ];

export { STATUS, TASKS };
