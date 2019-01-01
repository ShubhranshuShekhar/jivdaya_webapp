(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cruds-cruds-module"],{

/***/ "./src/app/shared/inmemory-db/users.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/users.ts ***!
  \*********************************************/
/*! exports provided: UserDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDB", function() { return UserDB; });
var UserDB = /** @class */ (function () {
    function UserDB() {
        this.users = [
            {
                '_id': '5a7b73f76bed15c94d1e46d4',
                'index': 0,
                'guid': 'c01da2d1-07f8-4acc-a1e3-72dda7310af8',
                'isActive': false,
                'balance': 2838.08,
                'age': 30,
                'name': 'Stefanie Marsh',
                'gender': 'female',
                'company': 'ACIUM',
                'email': 'stefaniemarsh@acium.com',
                'phone': '+1 (857) 535-2066',
                'address': '163 Poplar Avenue, Cliffside, Virginia, 4592',
                'bd': '2015-02-08T04:28:44 -06:00'
            },
            {
                '_id': '5a7b73f7f79f4250b96a355a',
                'index': 1,
                'guid': '3f04aa40-62da-466d-ac14-2b8a5da3d1ce',
                'isActive': true,
                'balance': 3043.81,
                'age': 39,
                'name': 'Elena Bennett',
                'gender': 'female',
                'company': 'FIBRODYNE',
                'email': 'elenabennett@fibrodyne.com',
                'phone': '+1 (994) 570-2070',
                'address': '526 Grace Court, Cherokee, Oregon, 7017',
                'bd': '2017-11-15T09:04:57 -06:00'
            },
            {
                '_id': '5a7b73f78b64a02a67204d6e',
                'index': 2,
                'guid': 'e7d9d61e-b657-4fcf-b069-2eb9bfdc44fa',
                'isActive': true,
                'balance': 1796.92,
                'age': 23,
                'name': 'Joni Cabrera',
                'gender': 'female',
                'company': 'POWERNET',
                'email': 'jonicabrera@powernet.com',
                'phone': '+1 (848) 410-2368',
                'address': '554 Barlow Drive, Alamo, Michigan, 3686',
                'bd': '2017-10-15T12:55:51 -06:00'
            },
            {
                '_id': '5a7b73f7572e59b231149b94',
                'index': 3,
                'guid': '47673d82-ab31-48a1-8a16-2c6701573c67',
                'isActive': false,
                'balance': 2850.27,
                'age': 37,
                'name': 'Gallagher Shaw',
                'gender': 'male',
                'company': 'ZILLAR',
                'email': 'gallaghershaw@zillar.com',
                'phone': '+1 (896) 422-3786',
                'address': '111 Argyle Road, Graball, Idaho, 7272',
                'bd': '2017-11-19T03:38:30 -06:00'
            },
            {
                '_id': '5a7b73f70f9d074552e13090',
                'index': 4,
                'guid': 'bc9c7cd3-04e0-4095-a933-af28efaf3b3e',
                'isActive': false,
                'balance': 3743.48,
                'age': 26,
                'name': 'Blanchard Knapp',
                'gender': 'male',
                'company': 'ACRODANCE',
                'email': 'blanchardknapp@acrodance.com',
                'phone': '+1 (867) 542-2772',
                'address': '707 Malta Street, Yukon, Wyoming, 6861',
                'bd': '2014-05-28T01:33:58 -06:00'
            },
            {
                '_id': '5a7b73f78988bd6e92650473',
                'index': 5,
                'guid': '08cb947c-e49c-4736-9687-0fca0992ec38',
                'isActive': false,
                'balance': 3453.79,
                'age': 34,
                'name': 'Parker Rivas',
                'gender': 'male',
                'company': 'SLAMBDA',
                'email': 'parkerrivas@slambda.com',
                'phone': '+1 (997) 413-2418',
                'address': '543 Roosevelt Place, Tibbie, Minnesota, 6944',
                'bd': '2015-01-05T09:55:23 -06:00'
            },
            {
                '_id': '5a7b73f72488770f90649570',
                'index': 6,
                'guid': '771c85d5-7762-4bae-96fd-09892a9c4374',
                'isActive': false,
                'balance': 3334.73,
                'age': 20,
                'name': 'Alexandria Forbes',
                'gender': 'female',
                'company': 'EQUITOX',
                'email': 'alexandriaforbes@equitox.com',
                'phone': '+1 (869) 521-2533',
                'address': '663 Minna Street, Omar, Alabama, 5265',
                'bd': '2017-03-09T05:48:57 -06:00'
            },
            {
                '_id': '5a7b73f7c576e368b321a705',
                'index': 7,
                'guid': '2455a7ef-a537-46e1-a210-75e5e2187460',
                'isActive': false,
                'balance': 3488.64,
                'age': 37,
                'name': 'Lessie Wise',
                'gender': 'female',
                'company': 'AFFLUEX',
                'email': 'lessiewise@affluex.com',
                'phone': '+1 (820) 404-2967',
                'address': '752 Woodhull Street, Utting, Oklahoma, 2739',
                'bd': '2014-10-21T03:09:34 -06:00'
            },
            {
                '_id': '5a7b73f705f8a9c6e35c8ca2',
                'index': 8,
                'guid': 'a90d65a8-681d-462f-bf08-eceeef366375',
                'isActive': true,
                'balance': 3786.67,
                'age': 36,
                'name': 'Carrie Gates',
                'gender': 'female',
                'company': 'VIRVA',
                'email': 'carriegates@virva.com',
                'phone': '+1 (845) 463-3986',
                'address': '561 Boulevard Court, Rote, Louisiana, 8458',
                'bd': '2017-03-30T02:06:23 -06:00'
            },
            {
                '_id': '5a7b73f7a3e2be2dbb7b093e',
                'index': 9,
                'guid': 'fb3d0f97-91ae-4336-b0b4-19f4a00fe567',
                'isActive': false,
                'balance': 3335.5,
                'age': 33,
                'name': 'Dalton Spears',
                'gender': 'male',
                'company': 'MIRACLIS',
                'email': 'daltonspears@miraclis.com',
                'phone': '+1 (919) 541-3528',
                'address': '167 Lester Court, Glasgow, Arkansas, 6311',
                'bd': '2017-04-01T01:41:12 -06:00'
            },
            {
                '_id': '5a7b73f716de69a9217c1273',
                'index': 10,
                'guid': '129a92fd-848f-48eb-98a1-aebf6e92b079',
                'isActive': false,
                'balance': 3811.15,
                'age': 30,
                'name': 'Delia Merrill',
                'gender': 'female',
                'company': 'COMTEST',
                'email': 'deliamerrill@comtest.com',
                'phone': '+1 (879) 401-2304',
                'address': '761 Polhemus Place, Kidder, Puerto Rico, 5901',
                'bd': '2014-08-29T08:42:59 -06:00'
            },
            {
                '_id': '5a7b73f7ed19007bed2d29fb',
                'index': 11,
                'guid': 'd799b69a-192d-4ee3-9a69-9e8e5afc45b0',
                'isActive': false,
                'balance': 3935.82,
                'age': 28,
                'name': 'Vance Aguilar',
                'gender': 'male',
                'company': 'CYCLONICA',
                'email': 'vanceaguilar@cyclonica.com',
                'phone': '+1 (972) 549-2681',
                'address': '653 Billings Place, Gardners, Connecticut, 7805',
                'bd': '2015-02-21T03:06:14 -06:00'
            },
            {
                '_id': '5a7b73f78d0dc0858a70c44a',
                'index': 12,
                'guid': '8cbb37bb-7644-4993-b48b-df3a69deb339',
                'isActive': true,
                'balance': 3868.95,
                'age': 28,
                'name': 'Adams Harper',
                'gender': 'male',
                'company': 'NORSUP',
                'email': 'adamsharper@norsup.com',
                'phone': '+1 (824) 494-3395',
                'address': '571 Turner Place, Norris, Mississippi, 3829',
                'bd': '2014-01-30T02:05:53 -06:00'
            },
            {
                '_id': '5a7b73f7e929494a8568a885',
                'index': 13,
                'guid': '22ec32d7-0ba9-4366-b6d8-ca16389a2cd9',
                'isActive': false,
                'balance': 3954.41,
                'age': 34,
                'name': 'Bass Sexton',
                'gender': 'male',
                'company': 'CIRCUM',
                'email': 'basssexton@circum.com',
                'phone': '+1 (930) 476-3634',
                'address': '563 Victor Road, Richmond, Kansas, 7742',
                'bd': '2014-05-04T10:16:32 -06:00'
            },
            {
                '_id': '5a7b73f767e97ce3136444fd',
                'index': 14,
                'guid': '031d282f-0be9-49e1-a211-9aa59d449d91',
                'isActive': false,
                'balance': 3287.33,
                'age': 24,
                'name': 'Howard Velez',
                'gender': 'male',
                'company': 'ECOSYS',
                'email': 'howardvelez@ecosys.com',
                'phone': '+1 (920) 556-2885',
                'address': '378 Grimes Road, Websterville, Marshall Islands, 3506',
                'bd': '2015-12-19T08:17:58 -06:00'
            },
            {
                '_id': '5a7b73f7fba076653cc18925',
                'index': 15,
                'guid': 'd76ab6d6-d1db-4286-8516-ce6c9db3972a',
                'isActive': false,
                'balance': 3279.98,
                'age': 21,
                'name': 'Lola Morton',
                'gender': 'female',
                'company': 'PROVIDCO',
                'email': 'lolamorton@providco.com',
                'phone': '+1 (963) 458-2788',
                'address': '991 Ashland Place, Richville, New York, 3529',
                'bd': '2016-11-29T07:58:24 -06:00'
            },
            {
                '_id': '5a7b73f7c6d408bc853be87c',
                'index': 16,
                'guid': '30c2d1c7-770b-4adb-b6df-cc205d748323',
                'isActive': false,
                'balance': 3955.55,
                'age': 37,
                'name': 'Bishop Rutledge',
                'gender': 'male',
                'company': 'DAYCORE',
                'email': 'bishoprutledge@daycore.com',
                'phone': '+1 (886) 539-3156',
                'address': '870 Vanderveer Place, Bridgetown, California, 7593',
                'bd': '2014-11-10T04:47:00 -06:00'
            },
            {
                '_id': '5a7b73f7abe6c78719d2f494',
                'index': 17,
                'guid': '2d8e77a1-4a88-4642-b6a8-693de296661c',
                'isActive': true,
                'balance': 1832.83,
                'age': 23,
                'name': 'Lea Reese',
                'gender': 'female',
                'company': 'GLUID',
                'email': 'leareese@gluid.com',
                'phone': '+1 (866) 413-2199',
                'address': '811 Dunne Place, Vowinckel, Rhode Island, 8646',
                'bd': '2014-03-16T04:30:06 -06:00'
            },
            {
                '_id': '5a7b73f72d64af126b8080be',
                'index': 18,
                'guid': 'e1e8ee63-6d08-48fc-a077-2265cee34f23',
                'isActive': true,
                'balance': 2419.18,
                'age': 23,
                'name': 'Knox Moses',
                'gender': 'male',
                'company': 'BRAINCLIP',
                'email': 'knoxmoses@brainclip.com',
                'phone': '+1 (982) 519-2486',
                'address': '917 Turnbull Avenue, Shasta, Virgin Islands, 7016',
                'bd': '2015-11-09T10:11:15 -06:00'
            },
            {
                '_id': '5a7b73f789b4e9086d34b255',
                'index': 19,
                'guid': '13552b7d-928c-4b92-a2ae-5ccbee807594',
                'isActive': false,
                'balance': 1220.91,
                'age': 22,
                'name': 'Marsha Jacobs',
                'gender': 'female',
                'company': 'COMSTAR',
                'email': 'marshajacobs@comstar.com',
                'phone': '+1 (858) 511-2546',
                'address': '580 Hampton Avenue, Ilchester, New Hampshire, 2191',
                'bd': '2016-02-11T01:34:23 -06:00'
            },
            {
                '_id': '5a7b73f737eea8e94089b7b4',
                'index': 20,
                'guid': 'cf577c87-b40c-4c09-9fac-d04c9a824b86',
                'isActive': false,
                'balance': 2446.07,
                'age': 25,
                'name': 'Bell Emerson',
                'gender': 'male',
                'company': 'MULTIFLEX',
                'email': 'bellemerson@multiflex.com',
                'phone': '+1 (806) 496-2473',
                'address': '238 Oxford Walk, Monument, New Mexico, 1345',
                'bd': '2016-10-07T01:07:21 -06:00'
            },
            {
                '_id': '5a7b73f76bc821dc6ee56ee2',
                'index': 21,
                'guid': 'b6c685c2-a497-4261-9217-622723d5235f',
                'isActive': false,
                'balance': 3694.63,
                'age': 33,
                'name': 'Cecelia Graham',
                'gender': 'female',
                'company': 'ZOXY',
                'email': 'ceceliagraham@zoxy.com',
                'phone': '+1 (933) 429-3129',
                'address': '954 Lawton Street, Terlingua, New Jersey, 6723',
                'bd': '2017-12-01T04:36:13 -06:00'
            },
            {
                '_id': '5a7b73f794c27c4048290cbf',
                'index': 22,
                'guid': '7e887403-8ff5-41b4-9902-bb63ff714fee',
                'isActive': true,
                'balance': 2804.02,
                'age': 29,
                'name': 'Anthony Pennington',
                'gender': 'male',
                'company': 'NAMEGEN',
                'email': 'anthonypennington@namegen.com',
                'phone': '+1 (860) 458-3988',
                'address': '287 Auburn Place, Gardiner, Northern Mariana Islands, 7131',
                'bd': '2018-02-04T11:06:51 -06:00'
            },
            {
                '_id': '5a7b73f720a5781f7d19597a',
                'index': 23,
                'guid': '9e108687-e1ca-4385-bdd5-62ab006f8aa3',
                'isActive': true,
                'balance': 1984.1,
                'age': 36,
                'name': 'Mayo Justice',
                'gender': 'male',
                'company': 'SLOFAST',
                'email': 'mayojustice@slofast.com',
                'phone': '+1 (854) 428-2270',
                'address': '648 Melba Court, Dodge, Pennsylvania, 7596',
                'bd': '2016-12-29T07:28:10 -06:00'
            },
            {
                '_id': '5a7b73f7f0a4c5e6c9807fb2',
                'index': 24,
                'guid': '93b0b383-dd69-4453-be26-f13ae361ce67',
                'isActive': true,
                'balance': 1845.13,
                'age': 22,
                'name': 'Vaughn Salazar',
                'gender': 'male',
                'company': 'ZAGGLE',
                'email': 'vaughnsalazar@zaggle.com',
                'phone': '+1 (986) 415-3294',
                'address': '382 Dewitt Avenue, Goodville, Palau, 711',
                'bd': '2014-10-31T12:32:59 -06:00'
            },
            {
                '_id': '5a7b73f7e6c45298c709371c',
                'index': 25,
                'guid': '5a059bbb-3f6d-47bc-ba2b-c13eeaaa93b4',
                'isActive': false,
                'balance': 3684.79,
                'age': 31,
                'name': 'Calhoun Bradshaw',
                'gender': 'male',
                'company': 'OVERPLEX',
                'email': 'calhounbradshaw@overplex.com',
                'phone': '+1 (964) 594-2363',
                'address': '527 Seton Place, Wedgewood, Wisconsin, 8306',
                'bd': '2016-05-27T10:46:17 -06:00'
            },
            {
                '_id': '5a7b73f79468759d25ecdcf4',
                'index': 26,
                'guid': '68d7f78e-5001-480b-a67d-72b370a5c2de',
                'isActive': false,
                'balance': 1831.14,
                'age': 29,
                'name': 'Dianne Bauer',
                'gender': 'female',
                'company': 'XUMONK',
                'email': 'diannebauer@xumonk.com',
                'phone': '+1 (866) 510-2479',
                'address': '540 Moffat Street, Emison, South Carolina, 7329',
                'bd': '2014-09-02T04:57:23 -06:00'
            },
            {
                '_id': '5a7b73f7346b1bbab11524fa',
                'index': 27,
                'guid': '0729eef8-36c5-4aa2-8e31-f5e2ca19b94b',
                'isActive': false,
                'balance': 1719.77,
                'age': 22,
                'name': 'Hebert Bryan',
                'gender': 'male',
                'company': 'COMTRAIL',
                'email': 'hebertbryan@comtrail.com',
                'phone': '+1 (838) 579-3709',
                'address': '669 Hausman Street, Gerber, Kentucky, 7779',
                'bd': '2017-11-29T12:22:59 -06:00'
            },
            {
                '_id': '5a7b73f75116874002de08de',
                'index': 28,
                'guid': '63014b40-3f1e-40ff-b2f7-f55ef6a5a599',
                'isActive': true,
                'balance': 1973.27,
                'age': 20,
                'name': 'Cash Bean',
                'gender': 'male',
                'company': 'SUPREMIA',
                'email': 'cashbean@supremia.com',
                'phone': '+1 (846) 551-2291',
                'address': '152 Garnet Street, Boling, Nevada, 4867',
                'bd': '2014-01-06T10:18:37 -06:00'
            },
            {
                '_id': '5a7b73f739be4dc1f743993c',
                'index': 29,
                'guid': 'ae498760-b43b-4c9c-8575-820f419984f6',
                'isActive': true,
                'balance': 2118.14,
                'age': 36,
                'name': 'Candy Hopper',
                'gender': 'female',
                'company': 'ACCUFARM',
                'email': 'candyhopper@accufarm.com',
                'phone': '+1 (841) 425-2442',
                'address': '695 Nassau Avenue, Nutrioso, Maryland, 2026',
                'bd': '2016-01-03T02:15:56 -06:00'
            },
            {
                '_id': '5a7b73f70b86f2969d762be2',
                'index': 30,
                'guid': 'f19cb86e-ab4f-4d07-833a-4adb8a19d0af',
                'isActive': false,
                'balance': 3794.89,
                'age': 37,
                'name': 'Fisher Powell',
                'gender': 'male',
                'company': 'ENOMEN',
                'email': 'fisherpowell@enomen.com',
                'phone': '+1 (876) 562-2932',
                'address': '616 Tapscott Avenue, Crucible, Nebraska, 4900',
                'bd': '2018-01-31T05:15:13 -06:00'
            },
            {
                '_id': '5a7b73f7394648a68c2a6ae3',
                'index': 31,
                'guid': 'a88e5389-0b07-4d19-ac6c-718ce9e0de55',
                'isActive': false,
                'balance': 3343.45,
                'age': 38,
                'name': 'Rosemary Sloan',
                'gender': 'female',
                'company': 'PHORMULA',
                'email': 'rosemarysloan@phormula.com',
                'phone': '+1 (924) 517-3289',
                'address': '687 Navy Walk, Edmund, Delaware, 1419',
                'bd': '2018-01-23T11:32:25 -06:00'
            },
            {
                '_id': '5a7b73f77ad97f4e1c2fa65a',
                'index': 32,
                'guid': 'fb915568-2875-49b3-96d7-6b54b2b186a1',
                'isActive': true,
                'balance': 2680.62,
                'age': 30,
                'name': 'Elba Glover',
                'gender': 'female',
                'company': 'APPLICA',
                'email': 'elbaglover@applica.com',
                'phone': '+1 (857) 495-3565',
                'address': '279 Bridgewater Street, Edneyville, Utah, 9246',
                'bd': '2015-10-03T12:24:56 -06:00'
            },
            {
                '_id': '5a7b73f72598106a97fbf7d5',
                'index': 33,
                'guid': 'fac3cd4b-2d42-4b4f-9d6f-0bac689bd47b',
                'isActive': false,
                'balance': 3286.46,
                'age': 37,
                'name': 'Mildred Short',
                'gender': 'female',
                'company': 'NIXELT',
                'email': 'mildredshort@nixelt.com',
                'phone': '+1 (980) 530-3588',
                'address': '434 Elm Place, Coloma, West Virginia, 1990',
                'bd': '2016-03-22T10:13:26 -06:00'
            },
            {
                '_id': '5a7b73f7b88290b05f53faa1',
                'index': 34,
                'guid': 'b1c6a3a3-00bd-4bc6-87df-69eecd909ab5',
                'isActive': false,
                'balance': 1484.16,
                'age': 24,
                'name': 'Karin Schultz',
                'gender': 'female',
                'company': 'PLASMOS',
                'email': 'karinschultz@plasmos.com',
                'phone': '+1 (904) 544-2796',
                'address': '380 Rockaway Avenue, Faxon, American Samoa, 5776',
                'bd': '2016-03-27T09:30:36 -06:00'
            },
            {
                '_id': '5a7b73f7d2f7429d0caec5fe',
                'index': 35,
                'guid': '62c961ac-49b1-4a69-b4bf-13a396ec4fd9',
                'isActive': false,
                'balance': 3450.17,
                'age': 23,
                'name': 'Addie Rose',
                'gender': 'female',
                'company': 'XYQAG',
                'email': 'addierose@xyqag.com',
                'phone': '+1 (838) 549-3147',
                'address': '999 Coleridge Street, Golconda, Vermont, 9575',
                'bd': '2016-10-01T06:50:42 -06:00'
            },
            {
                '_id': '5a7b73f78a4c54ff8334e053',
                'index': 36,
                'guid': '4f2f7ae5-0bd1-4665-b97f-c556e5162349',
                'isActive': false,
                'balance': 1797.89,
                'age': 23,
                'name': 'Janie Ellison',
                'gender': 'female',
                'company': 'SPLINX',
                'email': 'janieellison@splinx.com',
                'phone': '+1 (947) 460-2254',
                'address': '114 Landis Court, Genoa, Indiana, 5198',
                'bd': '2017-07-28T12:45:44 -06:00'
            },
            {
                '_id': '5a7b73f7c87f7e86fcb00055',
                'index': 37,
                'guid': 'b7236378-8129-44b5-bcc6-0369290ffad6',
                'isActive': false,
                'balance': 3776.51,
                'age': 38,
                'name': 'Elisabeth Campbell',
                'gender': 'female',
                'company': 'GOKO',
                'email': 'elisabethcampbell@goko.com',
                'phone': '+1 (849) 430-3377',
                'address': '832 Kermit Place, Lutsen, Georgia, 9145',
                'bd': '2015-04-26T06:40:08 -06:00'
            },
            {
                '_id': '5a7b73f712f9208f145fa6ea',
                'index': 38,
                'guid': '5c955e3a-5f3a-4ead-96ee-80a5de6dc479',
                'isActive': true,
                'balance': 3794.93,
                'age': 27,
                'name': 'Noble Holland',
                'gender': 'male',
                'company': 'NUTRALAB',
                'email': 'nobleholland@nutralab.com',
                'phone': '+1 (888) 573-3730',
                'address': '408 Roosevelt Court, Hiwasse, North Dakota, 281',
                'bd': '2014-03-25T12:24:34 -06:00'
            },
            {
                '_id': '5a7b73f7aa1f371de59df90b',
                'index': 39,
                'guid': '94698a81-61a6-4e23-a952-76a50fba71ef',
                'isActive': true,
                'balance': 2205.55,
                'age': 35,
                'name': 'Laverne Brock',
                'gender': 'female',
                'company': 'ICOLOGY',
                'email': 'lavernebrock@icology.com',
                'phone': '+1 (821) 600-3174',
                'address': '391 Conover Street, Cassel, Tennessee, 6566',
                'bd': '2016-01-27T09:40:41 -06:00'
            },
            {
                '_id': '5a7b73f7c45c697931199945',
                'index': 40,
                'guid': 'a05a215f-be1c-49d1-89ca-c821b118f923',
                'isActive': true,
                'balance': 2397.12,
                'age': 29,
                'name': 'Irene Frost',
                'gender': 'female',
                'company': 'RODEMCO',
                'email': 'irenefrost@rodemco.com',
                'phone': '+1 (918) 539-2612',
                'address': '401 Moore Place, Groton, Arizona, 3415',
                'bd': '2017-09-14T09:46:55 -06:00'
            },
            {
                '_id': '5a7b73f7ef55416e92ebc818',
                'index': 41,
                'guid': '1ae8ceac-e8d0-4417-9f6f-04cd4e4738ad',
                'isActive': false,
                'balance': 3335.51,
                'age': 35,
                'name': 'Beard Hendricks',
                'gender': 'male',
                'company': 'QUONK',
                'email': 'beardhendricks@quonk.com',
                'phone': '+1 (847) 521-3952',
                'address': '576 Bayard Street, Chloride, Federated States Of Micronesia, 8070',
                'bd': '2016-11-01T12:47:26 -06:00'
            },
            {
                '_id': '5a7b73f7cbeecfe6febd672d',
                'index': 42,
                'guid': 'afdf3298-77bd-46b3-ae8d-232f815c5f01',
                'isActive': false,
                'balance': 2205.01,
                'age': 37,
                'name': 'Nelson Shields',
                'gender': 'male',
                'company': 'ARTWORLDS',
                'email': 'nelsonshields@artworlds.com',
                'phone': '+1 (956) 534-3050',
                'address': '581 Maple Street, Needmore, Colorado, 2062',
                'bd': '2014-07-21T08:22:01 -06:00'
            },
            {
                '_id': '5a7b73f71803de25c5f754ad',
                'index': 43,
                'guid': '5b872cad-4388-496b-8ede-5f86990dec00',
                'isActive': true,
                'balance': 1001.05,
                'age': 21,
                'name': 'Luella Duffy',
                'gender': 'female',
                'company': 'KROG',
                'email': 'luelladuffy@krog.com',
                'phone': '+1 (973) 451-2222',
                'address': '349 Bryant Street, Tioga, South Dakota, 6493',
                'bd': '2016-04-27T02:46:46 -06:00'
            },
            {
                '_id': '5a7b73f77f2a05eacb331c74',
                'index': 44,
                'guid': '7d6b7650-10d7-435d-87ca-33a1fe12cd57',
                'isActive': false,
                'balance': 1926.79,
                'age': 27,
                'name': 'Rosa Guthrie',
                'gender': 'female',
                'company': 'COMTOURS',
                'email': 'rosaguthrie@comtours.com',
                'phone': '+1 (814) 528-2701',
                'address': '719 Kathleen Court, Morriston, Guam, 4011',
                'bd': '2015-07-02T08:22:18 -06:00'
            },
            {
                '_id': '5a7b73f7727afbb0fc15653b',
                'index': 45,
                'guid': 'ebbc985b-227e-4954-a8a6-588b2a2bff22',
                'isActive': false,
                'balance': 2464.9,
                'age': 29,
                'name': 'Dillard Carlson',
                'gender': 'male',
                'company': 'COMCUR',
                'email': 'dillardcarlson@comcur.com',
                'phone': '+1 (847) 469-3741',
                'address': '918 Oceanic Avenue, Cochranville, Missouri, 1018',
                'bd': '2016-06-11T11:31:54 -06:00'
            },
            {
                '_id': '5a7b73f71dd7612e967e01ae',
                'index': 46,
                'guid': '63a2ee7f-2141-4ec5-b1e2-fcdcd62f28ed',
                'isActive': false,
                'balance': 3917.74,
                'age': 25,
                'name': 'Faye Walls',
                'gender': 'female',
                'company': 'EMERGENT',
                'email': 'fayewalls@emergent.com',
                'phone': '+1 (964) 527-3791',
                'address': '947 Judge Street, Nescatunga, Maine, 4928',
                'bd': '2014-06-23T12:46:21 -06:00'
            },
            {
                '_id': '5a7b73f7b33c73c425db7ee0',
                'index': 47,
                'guid': '61d40a89-af0c-40ca-8970-c54978134e6b',
                'isActive': true,
                'balance': 2213.18,
                'age': 32,
                'name': 'Norma Hooper',
                'gender': 'female',
                'company': 'PARCOE',
                'email': 'normahooper@parcoe.com',
                'phone': '+1 (827) 503-2742',
                'address': '470 Fenimore Street, Hatteras, Texas, 1582',
                'bd': '2015-01-15T12:22:00 -06:00'
            },
            {
                '_id': '5a7b73f7c30aa4064670cf21',
                'index': 48,
                'guid': '969d77af-b251-4924-82cf-7c787752161d',
                'isActive': false,
                'balance': 3673.94,
                'age': 23,
                'name': 'Lee Wiggins',
                'gender': 'female',
                'company': 'NITRACYR',
                'email': 'leewiggins@nitracyr.com',
                'phone': '+1 (941) 478-3536',
                'address': '958 Flatbush Avenue, Clara, North Carolina, 970',
                'bd': '2018-01-09T11:09:34 -06:00'
            },
            {
                '_id': '5a7b73f7ecd5a4859f2d94dc',
                'index': 49,
                'guid': 'cdf9b8de-a309-4cb7-80bb-f1b830b8b640',
                'isActive': true,
                'balance': 2166.21,
                'age': 27,
                'name': 'Alvarez Lynch',
                'gender': 'male',
                'company': 'KIGGLE',
                'email': 'alvarezlynch@kiggle.com',
                'phone': '+1 (929) 528-3805',
                'address': '901 Stratford Road, Derwood, Iowa, 1402',
                'bd': '2015-01-08T04:28:57 -06:00'
            },
            {
                '_id': '5a7b73f7216c8cabc849eea7',
                'index': 50,
                'guid': 'c4175d6a-1560-468e-b682-701c1549b6b1',
                'isActive': false,
                'balance': 3479.39,
                'age': 39,
                'name': 'Oneal Rosario',
                'gender': 'male',
                'company': 'UBERLUX',
                'email': 'onealrosario@uberlux.com',
                'phone': '+1 (951) 572-3027',
                'address': '267 Rockaway Parkway, Chapin, Montana, 7813',
                'bd': '2014-02-10T05:08:13 -06:00'
            },
            {
                '_id': '5a7b73f78841719bf955b2d9',
                'index': 51,
                'guid': '966c9ce6-9151-47cb-8c71-98c4cd0d2f40',
                'isActive': false,
                'balance': 1625.49,
                'age': 36,
                'name': 'Olsen Stevens',
                'gender': 'male',
                'company': 'EMPIRICA',
                'email': 'olsenstevens@empirica.com',
                'phone': '+1 (871) 403-3377',
                'address': '704 Lamont Court, Saranap, Massachusetts, 3171',
                'bd': '2014-09-17T05:13:13 -06:00'
            },
            {
                '_id': '5a7b73f7b7b8e578dff0f85c',
                'index': 52,
                'guid': '8269a34f-3a02-47d6-bcb1-8f076bb478f0',
                'isActive': true,
                'balance': 1143.73,
                'age': 27,
                'name': 'Marian Henson',
                'gender': 'female',
                'company': 'ENDIPINE',
                'email': 'marianhenson@endipine.com',
                'phone': '+1 (995) 406-2592',
                'address': '803 Ellery Street, Boykin, Alaska, 8624',
                'bd': '2016-08-28T01:22:51 -06:00'
            },
            {
                '_id': '5a7b73f737459ec79c91ca75',
                'index': 53,
                'guid': 'badb9342-10fd-4520-ae66-c246e47add8f',
                'isActive': false,
                'balance': 1458.01,
                'age': 23,
                'name': 'Dudley Dickson',
                'gender': 'male',
                'company': 'POLARIA',
                'email': 'dudleydickson@polaria.com',
                'phone': '+1 (860) 428-3250',
                'address': '833 Revere Place, Rockbridge, Illinois, 4628',
                'bd': '2017-01-19T12:36:59 -06:00'
            },
            {
                '_id': '5a7b73f70ddc6fc11ebf043a',
                'index': 54,
                'guid': '52b1be89-8186-4685-81b7-203c17ed9f89',
                'isActive': true,
                'balance': 2815.76,
                'age': 25,
                'name': 'Earnestine Oneil',
                'gender': 'female',
                'company': 'CYTREK',
                'email': 'earnestineoneil@cytrek.com',
                'phone': '+1 (879) 541-3490',
                'address': '442 Emerald Street, Graniteville, Hawaii, 1302',
                'bd': '2017-07-07T10:34:33 -06:00'
            },
            {
                '_id': '5a7b73f78b816185ccd2b4b3',
                'index': 55,
                'guid': 'e66850ea-546b-4eb5-ae76-d66b0e727f44',
                'isActive': true,
                'balance': 3645.09,
                'age': 21,
                'name': 'Nicholson Mason',
                'gender': 'male',
                'company': 'TELEQUIET',
                'email': 'nicholsonmason@telequiet.com',
                'phone': '+1 (861) 528-3215',
                'address': '261 Aitken Place, Cecilia, Ohio, 1381',
                'bd': '2016-03-20T08:31:34 -06:00'
            },
            {
                '_id': '5a7b73f780f8bf8fbe24d75c',
                'index': 56,
                'guid': '40b999cd-00bf-46e0-9107-b44906d832e0',
                'isActive': false,
                'balance': 2477.66,
                'age': 36,
                'name': 'Linda Shaffer',
                'gender': 'female',
                'company': 'ZORK',
                'email': 'lindashaffer@zork.com',
                'phone': '+1 (828) 524-3011',
                'address': '350 Plymouth Street, Waterford, Washington, 6715',
                'bd': '2017-07-09T05:51:11 -06:00'
            },
            {
                '_id': '5a7b73f741e22fc19ffa6952',
                'index': 57,
                'guid': 'cc2ac19d-7d67-4f60-973a-369160a9c377',
                'isActive': false,
                'balance': 2651.39,
                'age': 20,
                'name': 'Montoya Riggs',
                'gender': 'male',
                'company': 'MARKETOID',
                'email': 'montoyariggs@marketoid.com',
                'phone': '+1 (809) 562-3786',
                'address': '633 Monitor Street, Chicopee, District Of Columbia, 550',
                'bd': '2016-02-05T12:36:05 -06:00'
            },
            {
                '_id': '5a7b73f7de56ead40c26e69a',
                'index': 58,
                'guid': '6e0b06b8-1199-498c-8002-41f4972aa2d2',
                'isActive': false,
                'balance': 3463.92,
                'age': 28,
                'name': 'Walker Duran',
                'gender': 'male',
                'company': 'GEOFORM',
                'email': 'walkerduran@geoform.com',
                'phone': '+1 (868) 502-2553',
                'address': '550 Kensington Walk, Wyano, Virginia, 7703',
                'bd': '2017-08-18T12:39:37 -06:00'
            },
            {
                '_id': '5a7b73f70a04fe142269ea8d',
                'index': 59,
                'guid': 'c6733cd5-1e73-4317-b4bc-1a9e597581a4',
                'isActive': true,
                'balance': 3846.35,
                'age': 26,
                'name': 'Suzanne House',
                'gender': 'female',
                'company': 'SYBIXTEX',
                'email': 'suzannehouse@sybixtex.com',
                'phone': '+1 (892) 533-2739',
                'address': '367 Harwood Place, Twilight, Oregon, 9799',
                'bd': '2016-11-26T11:57:18 -06:00'
            },
            {
                '_id': '5a7b73f7339943d94af3b39d',
                'index': 60,
                'guid': '4ff2c2aa-0573-4be1-a1c8-f684af8a5fbf',
                'isActive': false,
                'balance': 2717.94,
                'age': 26,
                'name': 'Lewis Oconnor',
                'gender': 'male',
                'company': 'EXOZENT',
                'email': 'lewisoconnor@exozent.com',
                'phone': '+1 (954) 582-2660',
                'address': '717 Sutter Avenue, Bartley, Michigan, 1142',
                'bd': '2017-08-21T08:25:00 -06:00'
            },
            {
                '_id': '5a7b73f7d8e266ad1bc5daa8',
                'index': 61,
                'guid': '94667aad-86fc-4a2c-94fb-11b572307c75',
                'isActive': false,
                'balance': 2725.58,
                'age': 39,
                'name': 'Shelley Bonner',
                'gender': 'female',
                'company': 'INDEXIA',
                'email': 'shelleybonner@indexia.com',
                'phone': '+1 (965) 490-3768',
                'address': '896 Clinton Avenue, Canoochee, Idaho, 1154',
                'bd': '2016-04-11T06:08:29 -06:00'
            },
            {
                '_id': '5a7b73f7e74a5af674e4cbdd',
                'index': 62,
                'guid': 'ec68c47e-7cbd-485e-8d54-fab1bb6ea008',
                'isActive': true,
                'balance': 1343.87,
                'age': 29,
                'name': 'Mccall Morales',
                'gender': 'male',
                'company': 'QUILITY',
                'email': 'mccallmorales@quility.com',
                'phone': '+1 (939) 455-2610',
                'address': '325 Crystal Street, Harleigh, Wyoming, 5658',
                'bd': '2014-11-20T07:30:04 -06:00'
            },
            {
                '_id': '5a7b73f7efb231e53a0c94cd',
                'index': 63,
                'guid': '6a8b3f55-406c-4ae8-be59-94a0f8fbd180',
                'isActive': false,
                'balance': 1092.69,
                'age': 37,
                'name': 'Vera Mcpherson',
                'gender': 'female',
                'company': 'CIPROMOX',
                'email': 'veramcpherson@cipromox.com',
                'phone': '+1 (890) 500-3729',
                'address': '771 Beard Street, Rivera, Minnesota, 4726',
                'bd': '2017-07-13T02:47:50 -06:00'
            },
            {
                '_id': '5a7b73f7e345c5dfc5d636e4',
                'index': 64,
                'guid': '46879caf-76e6-46e0-9b8b-bc17667a81ea',
                'isActive': true,
                'balance': 2077.12,
                'age': 36,
                'name': 'Gregory Roth',
                'gender': 'male',
                'company': 'EARWAX',
                'email': 'gregoryroth@earwax.com',
                'phone': '+1 (806) 595-2477',
                'address': '349 Dunham Place, Sardis, Alabama, 3320',
                'bd': '2017-11-08T02:26:23 -06:00'
            },
            {
                '_id': '5a7b73f77f5f9d730fab11e0',
                'index': 65,
                'guid': '9cfb8f58-7acf-4a39-bf2b-c90269c33db0',
                'isActive': true,
                'balance': 3503.58,
                'age': 31,
                'name': 'Russell Carver',
                'gender': 'male',
                'company': 'PREMIANT',
                'email': 'russellcarver@premiant.com',
                'phone': '+1 (849) 521-2335',
                'address': '851 Noble Street, Holcombe, Oklahoma, 311',
                'bd': '2016-07-10T10:08:35 -06:00'
            },
            {
                '_id': '5a7b73f7cab10f461153989c',
                'index': 66,
                'guid': '2562a818-4451-4193-94cd-650d131ff097',
                'isActive': false,
                'balance': 1652.9,
                'age': 21,
                'name': 'Darlene Hurley',
                'gender': 'female',
                'company': 'STELAECOR',
                'email': 'darlenehurley@stelaecor.com',
                'phone': '+1 (868) 492-2270',
                'address': '627 Wilson Street, Loveland, Louisiana, 765',
                'bd': '2017-05-20T12:39:31 -06:00'
            },
            {
                '_id': '5a7b73f7ecccc997e4160a59',
                'index': 67,
                'guid': '0050170f-0283-481d-9633-dc9d134be121',
                'isActive': true,
                'balance': 3692.88,
                'age': 21,
                'name': 'Lela Bailey',
                'gender': 'female',
                'company': 'AQUOAVO',
                'email': 'lelabailey@aquoavo.com',
                'phone': '+1 (917) 449-2329',
                'address': '121 Adams Street, Malo, Arkansas, 7435',
                'bd': '2016-11-06T04:55:46 -06:00'
            }
        ];
    }
    return UserDB;
}());



/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-333\">\n  <!-- <span fxFlex></span> -->\n  <button mat-raised-button class=\"mb-05\" color=\"primary\" (click)=\"openPopUp({}, true)\">Add Member</button>\n</div>\n<mat-card class=\"p-0\" [@animate]=\"{value:'*',params:{y:'50px',delay:'300ms'}}\">\n  <mat-card-content class=\"p-0\">\n    <ngx-datatable\n          class=\"material ml-0 mr-0\"\n          [rows]=\"items\"\n          [columnMode]=\"'flex'\"\n          [headerHeight]=\"50\"\n          [footerHeight]=\"50\"\n          [limit]=\"10\"\n          [rowHeight]=\"'auto'\">\n          <ngx-datatable-column name=\"Name\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{ row?.name }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Age\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{ row?.age }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Balance\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{ row?.balance | currency }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Company\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{ row?.company }}\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Status\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <mat-chip mat-sm-chip [color]=\"'primary'\" [selected]=\"row.isActive\">{{row.isActive ? 'active' : 'inactive'}}</mat-chip>\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Actions\" [flexGrow]=\"1\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              <button mat-icon-button mat-sm-button color=\"primary\" class=\"mr-1\" (click)=\"openPopUp(row)\"><mat-icon>edit</mat-icon></button>\n              <button mat-icon-button mat-sm-button color=\"warn\" (click)=\"deleteItem(row)\"><mat-icon>delete</mat-icon></button>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts ***!
  \************************************************************************/
/*! exports provided: CrudNgxTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudNgxTableComponent", function() { return CrudNgxTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-table-popup/ngx-table-popup.component */ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CrudNgxTableComponent = /** @class */ (function () {
    function CrudNgxTableComponent(dialog, snack, crudService, confirmService, loader) {
        this.dialog = dialog;
        this.snack = snack;
        this.crudService = crudService;
        this.confirmService = confirmService;
        this.loader = loader;
    }
    CrudNgxTableComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    CrudNgxTableComponent.prototype.ngOnDestroy = function () {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    };
    CrudNgxTableComponent.prototype.getItems = function () {
        var _this = this;
        this.getItemSub = this.crudService.getItems()
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    CrudNgxTableComponent.prototype.openPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var title = isNew ? 'Add new member' : 'Update member';
        var dialogRef = this.dialog.open(_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_5__["NgxTablePopupComponent"], {
            width: '720px',
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            if (!res) {
                // If user press cancel
                return;
            }
            _this.loader.open();
            if (isNew) {
                _this.crudService.addItem(res)
                    .subscribe(function (data) {
                    _this.items = data;
                    _this.loader.close();
                    _this.snack.open('Member Added!', 'OK', { duration: 4000 });
                });
            }
            else {
                _this.crudService.updateItem(data._id, res)
                    .subscribe(function (data) {
                    _this.items = data;
                    _this.loader.close();
                    _this.snack.open('Member Updated!', 'OK', { duration: 4000 });
                });
            }
        });
    };
    CrudNgxTableComponent.prototype.deleteItem = function (row) {
        var _this = this;
        this.confirmService.confirm({ message: "Delete " + row.name + "?" })
            .subscribe(function (res) {
            if (res) {
                _this.loader.open();
                _this.crudService.removeItem(row)
                    .subscribe(function (data) {
                    _this.items = data;
                    _this.loader.close();
                    _this.snack.open('Member deleted!', 'OK', { duration: 4000 });
                });
            }
        });
    };
    CrudNgxTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud-ngx-table',
            template: __webpack_require__(/*! ./crud-ngx-table.component.html */ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.html"),
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_6__["egretAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"],
            _shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_3__["AppConfirmService"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]])
    ], CrudNgxTableComponent);
    return CrudNgxTableComponent;
}());



/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>{{data.title}}</h1>\n  <form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\n  <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\">\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        name=\"username\"\n        [formControl]=\"itemForm.controls['name']\"\n        placeholder=\"Name\">\n      </mat-form-field>\n    </div>\n\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        type=\"number\"\n        name=\"age\"\n        [formControl]=\"itemForm.controls['age']\"\n        placeholder=\"Age\">\n      </mat-form-field>\n    </div>\n\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        type=\"email\"\n        name=\"email\"\n        [formControl]=\"itemForm.controls['email']\"\n        placeholder=\"Email\">\n      </mat-form-field>\n    </div>\n\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        name=\"company\"\n        [formControl]=\"itemForm.controls['company']\"\n        placeholder=\"Company\">\n      </mat-form-field>\n    </div>\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        name=\"phone\"\n        [formControl]=\"itemForm.controls['phone']\"\n        placeholder=\"Phone\">\n      </mat-form-field>\n    </div>\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        name=\"address\"\n        [formControl]=\"itemForm.controls['address']\"\n        placeholder=\"address\">\n      </mat-form-field>\n    </div>\n    <div fxFlex=\"50\"  class=\"pr-1\">\n      <mat-form-field class=\"full-width\">\n        <input\n        matInput\n        name=\"balance\"\n        [formControl]=\"itemForm.controls['balance']\"\n        placeholder=\"Balance\">\n      </mat-form-field>\n    </div>\n    <div fxFlex=\"50\"  class=\"pt-1 pr-1\">\n      <mat-slide-toggle [formControl]=\"itemForm.controls['isActive']\">Active Customer</mat-slide-toggle>\n    </div>\n\n\n\n    <div fxFlex=\"100\" class=\"mt-1\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"itemForm.invalid\">Save</button>\n      <span fxFlex></span>\n      <button mat-button color=\"warn\" type=\"button\" (click)=\"dialogRef.close(false)\">Cancel</button>\n    </div>\n  </div>\n  </form>"

/***/ }),

/***/ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NgxTablePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTablePopupComponent", function() { return NgxTablePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NgxTablePopupComponent = /** @class */ (function () {
    function NgxTablePopupComponent(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
    }
    NgxTablePopupComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data.payload);
    };
    NgxTablePopupComponent.prototype.buildItemForm = function (item) {
        this.itemForm = this.fb.group({
            name: [item.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: [item.age || ''],
            email: [item.email || ''],
            company: [item.company || ''],
            phone: [item.phone || ''],
            address: [item.address || ''],
            balance: [item.balance || ''],
            isActive: [item.isActive || false]
        });
    };
    NgxTablePopupComponent.prototype.submit = function () {
        this.dialogRef.close(this.itemForm.value);
    };
    NgxTablePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngx-table-popup',
            template: __webpack_require__(/*! ./ngx-table-popup.component.html */ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NgxTablePopupComponent);
    return NgxTablePopupComponent;
}());



/***/ }),

/***/ "./src/app/views/cruds/crud.service.ts":
/*!*********************************************!*\
  !*** ./src/app/views/cruds/crud.service.ts ***!
  \*********************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_inmemory_db_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/inmemory-db/users */ "./src/app/shared/inmemory-db/users.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
        var userDB = new _shared_inmemory_db_users__WEBPACK_IMPORTED_MODULE_2__["UserDB"]();
        this.items = userDB.users;
    }
    //******* Implement your APIs ********
    CrudService.prototype.getItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.items.slice());
    };
    CrudService.prototype.addItem = function (item) {
        item._id = Math.round(Math.random() * 10000000000).toString();
        this.items.unshift(item);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.items.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    CrudService.prototype.updateItem = function (id, item) {
        this.items = this.items.map(function (i) {
            if (i._id === id) {
                return Object.assign({}, i, item);
            }
            return i;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.items.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    CrudService.prototype.removeItem = function (row) {
        var i = this.items.indexOf(row);
        this.items.splice(i, 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.items.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
    };
    CrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/views/cruds/cruds.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/cruds/cruds.module.ts ***!
  \*********************************************/
/*! exports provided: CrudsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudsModule", function() { return CrudsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-ngx-table/crud-ngx-table.component */ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts");
/* harmony import */ var _cruds_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cruds.routing */ "./src/app/views/cruds/cruds.routing.ts");
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crud.service */ "./src/app/views/cruds/crud.service.ts");
/* harmony import */ var _crud_ngx_table_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crud-ngx-table/ngx-table-popup/ngx-table-popup.component */ "./src/app/views/cruds/crud-ngx-table/ngx-table-popup/ngx-table-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CrudsModule = /** @class */ (function () {
    function CrudsModule() {
    }
    CrudsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_cruds_routing__WEBPACK_IMPORTED_MODULE_9__["CrudsRoutes"])
            ],
            declarations: [_crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_8__["CrudNgxTableComponent"], _crud_ngx_table_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_11__["NgxTablePopupComponent"]],
            providers: [_crud_service__WEBPACK_IMPORTED_MODULE_10__["CrudService"]],
            entryComponents: [_crud_ngx_table_ngx_table_popup_ngx_table_popup_component__WEBPACK_IMPORTED_MODULE_11__["NgxTablePopupComponent"]]
        })
    ], CrudsModule);
    return CrudsModule;
}());



/***/ }),

/***/ "./src/app/views/cruds/cruds.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/views/cruds/cruds.routing.ts ***!
  \**********************************************/
/*! exports provided: CrudsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudsRoutes", function() { return CrudsRoutes; });
/* harmony import */ var _crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-ngx-table/crud-ngx-table.component */ "./src/app/views/cruds/crud-ngx-table/crud-ngx-table.component.ts");

var CrudsRoutes = [
    {
        path: 'ngx-table',
        component: _crud_ngx_table_crud_ngx_table_component__WEBPACK_IMPORTED_MODULE_0__["CrudNgxTableComponent"],
        data: { title: 'NgX Table', breadcrumb: 'NgX Table' }
    }
];


/***/ })

}]);
//# sourceMappingURL=views-cruds-cruds-module.js.map