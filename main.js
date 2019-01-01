(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/app-calendar/app-calendar.module": [
		"./src/app/views/app-calendar/app-calendar.module.ts",
		"common",
		"views-app-calendar-app-calendar-module"
	],
	"./views/app-chats/app-chats.module": [
		"./src/app/views/app-chats/app-chats.module.ts",
		"views-app-chats-app-chats-module"
	],
	"./views/app-dialogs/app-dialogs.module": [
		"./src/app/views/app-dialogs/app-dialogs.module.ts",
		"views-app-dialogs-app-dialogs-module"
	],
	"./views/app-inbox/app-inbox.module": [
		"./src/app/views/app-inbox/app-inbox.module.ts",
		"views-app-inbox-app-inbox-module~views-forms-forms-module",
		"common",
		"views-app-inbox-app-inbox-module"
	],
	"./views/app-tour/app-tour.module": [
		"./src/app/views/app-tour/app-tour.module.ts",
		"views-app-tour-app-tour-module"
	],
	"./views/charts/charts.module": [
		"./src/app/views/charts/charts.module.ts",
		"views-charts-charts-module~views-dashboard-dashboard-module~views-others-others-module~views-profile~2658a0a7",
		"common",
		"views-charts-charts-module"
	],
	"./views/cruds/cruds.module": [
		"./src/app/views/cruds/cruds.module.ts",
		"views-cruds-cruds-module"
	],
	"./views/dashboard/dashboard.module": [
		"./src/app/views/dashboard/dashboard.module.ts",
		"views-charts-charts-module~views-dashboard-dashboard-module~views-others-others-module~views-profile~2658a0a7",
		"common",
		"views-dashboard-dashboard-module"
	],
	"./views/dragndrop/dragndrop.module": [
		"./src/app/views/dragndrop/dragndrop.module.ts",
		"views-dragndrop-dragndrop-module"
	],
	"./views/forms/forms.module": [
		"./src/app/views/forms/forms.module.ts",
		"views-forms-forms-module~views-others-others-module~views-profile-profile-module",
		"views-app-inbox-app-inbox-module~views-forms-forms-module",
		"views-forms-forms-module~views-sessions-sessions-module",
		"common",
		"views-forms-forms-module"
	],
	"./views/map/map.module": [
		"./src/app/views/map/map.module.ts",
		"common",
		"views-map-map-module"
	],
	"./views/mat-icons/mat-icons.module": [
		"./src/app/views/mat-icons/mat-icons.module.ts",
		"views-mat-icons-mat-icons-module"
	],
	"./views/material/app-material.module": [
		"./src/app/views/material/app-material.module.ts",
		"views-material-app-material-module"
	],
	"./views/others/others.module": [
		"./src/app/views/others/others.module.ts",
		"views-charts-charts-module~views-dashboard-dashboard-module~views-others-others-module~views-profile~2658a0a7",
		"views-forms-forms-module~views-others-others-module~views-profile-profile-module",
		"common",
		"views-others-others-module"
	],
	"./views/profile/profile.module": [
		"./src/app/views/profile/profile.module.ts",
		"views-charts-charts-module~views-dashboard-dashboard-module~views-others-others-module~views-profile~2658a0a7",
		"views-forms-forms-module~views-others-others-module~views-profile-profile-module",
		"common",
		"views-profile-profile-module"
	],
	"./views/sessions/sessions.module": [
		"./src/app/views/sessions/sessions.module.ts",
		"views-forms-forms-module~views-sessions-sessions-module",
		"common",
		"views-sessions-sessions-module"
	],
	"./views/shop/shop.module": [
		"./src/app/views/shop/shop.module.ts",
		"views-shop-shop-module"
	],
	"./views/tables/tables.module": [
		"./src/app/views/tables/tables.module.ts",
		"views-tables-tables-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/route-parts.service */ "./src/app/shared/services/route-parts.service.ts");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(title, router, activeRoute, routePartsService, themeService, renderer) {
        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.themeService = themeService;
        this.renderer = renderer;
        this.appTitle = 'Aurum';
        this.pageTitle = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.changePageTitle();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.themeService.applyMatTheme(this.renderer);
    };
    AppComponent.prototype.changePageTitle = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (routeChange) {
            var routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            if (!routeParts.length)
                return _this.title.setTitle(_this.appTitle);
            // Extract title from parts;
            _this.pageTitle = routeParts
                .reverse()
                .map(function (part) { return part.title; })
                .reduce(function (partA, partI) { return partA + " > " + partI; });
            _this.pageTitle += " | " + _this.appTitle;
            _this.title.setTitle(_this.pageTitle);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"],
            _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _aurum_services_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aurum/services/exam.service */ "./src/app/aurum/services/exam.service.ts");
/* harmony import */ var _shared_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/firebaseauth.service */ "./src/app/shared/services/firebaseauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/inmemory-db/inmemory-db.service */ "./src/app/shared/inmemory-db/inmemory-db.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _aurum_aurum_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./aurum/aurum.module */ "./src/app/aurum/aurum.module.ts");
/* harmony import */ var _jivdaya_jivdaya_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./jivdaya/jivdaya.module */ "./src/app/jivdaya/jivdaya.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// my modules


// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](httpClient);
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"],
                // my modules
                _aurum_aurum_module__WEBPACK_IMPORTED_MODULE_23__["AurumModule"],
                _jivdaya_jivdaya_module__WEBPACK_IMPORTED_MODULE_24__["JivdayaModule"],
                // FirebaseauthService,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                    }
                }),
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_9__["InMemoryDataService"], { passThruUnknownUrl: true }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_11__["rootRouterConfig"], { useHash: false })
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            providers: [
                _shared_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseauthService"],
                _aurum_services_exam_service__WEBPACK_IMPORTED_MODULE_0__["ExamService"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestore"],
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material__WEBPACK_IMPORTED_MODULE_6__["GestureConfig"] },
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _aurum_edit_result_edit_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aurum/edit-result/edit-result.component */ "./src/app/aurum/edit-result/edit-result.component.ts");
/* harmony import */ var _aurum_display_result_display_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aurum/display-result/display-result.component */ "./src/app/aurum/display-result/display-result.component.ts");
/* harmony import */ var _aurum_evaluate_test_evaluate_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aurum/evaluate-test/evaluate-test.component */ "./src/app/aurum/evaluate-test/evaluate-test.component.ts");
/* harmony import */ var _aurum_create_exam_create_exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aurum/create-exam/create-exam.component */ "./src/app/aurum/create-exam/create-exam.component.ts");
/* harmony import */ var _aurum_display_exam_display_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aurum/display-exam/display-exam.component */ "./src/app/aurum/display-exam/display-exam.component.ts");
/* harmony import */ var _aurum_notice_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aurum/notice/notice.component */ "./src/app/aurum/notice/notice.component.ts");
/* harmony import */ var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout/admin-layout.component */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth/auth.guard */ "./src/app/shared/services/auth/auth.guard.ts");
/* harmony import */ var _aurum_create_notice_create_notice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aurum/create-notice/create-notice.component */ "./src/app/aurum/create-notice/create-notice.component.ts");
/* harmony import */ var _aurum_certificate_certificate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aurum/certificate/certificate.component */ "./src/app/aurum/certificate/certificate.component.ts");
/* harmony import */ var _aurum_print_certificate_print_certificate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aurum/print-certificate/print-certificate.component */ "./src/app/aurum/print-certificate/print-certificate.component.ts");
/* harmony import */ var _aurum_news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aurum/news/news.component */ "./src/app/aurum/news/news.component.ts");
/* harmony import */ var _aurum_upload_news_upload_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aurum/upload-news/upload-news.component */ "./src/app/aurum/upload-news/upload-news.component.ts");
/* harmony import */ var _jivdaya_add_volunteer_add_volunteer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jivdaya/add-volunteer/add-volunteer.component */ "./src/app/jivdaya/add-volunteer/add-volunteer.component.ts");
/* harmony import */ var _jivdaya_edit_volunteer_edit_volunteer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jivdaya/edit-volunteer/edit-volunteer.component */ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.ts");
/* harmony import */ var _jivdaya_view_volunteer_view_volunteer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./jivdaya/view-volunteer/view-volunteer.component */ "./src/app/jivdaya/view-volunteer/view-volunteer.component.ts");

















var rootRouterConfig = [
    {
        path: '',
        // redirectTo: 'home',
        redirectTo: 'view_volunteer',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: 'view_volunteer',
        // loadChildren: './views/home/home.module#HomeModule',
        data: { title: 'This is my title' }
    },
    {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
        children: [
            {
                path: 'sessions',
                loadChildren: './views/sessions/sessions.module#SessionsModule',
                data: { title: 'User' }
            }
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
        canActivate: [_shared_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: 'add_volunteer',
                component: _jivdaya_add_volunteer_add_volunteer_component__WEBPACK_IMPORTED_MODULE_14__["AddVolunteerComponent"],
                data: { title: 'Add Volunteer', breadcrumb: 'Add Volunteer' }
            },
            {
                path: 'edit_volunteer',
                component: _jivdaya_edit_volunteer_edit_volunteer_component__WEBPACK_IMPORTED_MODULE_15__["EditVolunteerComponent"],
                data: { title: 'Edit Volunteer', breadcrumb: 'Edit Volunteer' }
            },
            {
                path: 'view_volunteer',
                component: _jivdaya_view_volunteer_view_volunteer_component__WEBPACK_IMPORTED_MODULE_16__["ViewVolunteerComponent"],
                data: { title: 'View Volunteer', breadcrumb: 'View Volunteer' }
            },
            {
                path: 'notice',
                // loadChildren: './aurum/notice/notic',
                component: _aurum_notice_notice_component__WEBPACK_IMPORTED_MODULE_5__["NoticeComponent"],
                data: { title: 'Notice', breadcrumb: 'NOTICE' }
            },
            {
                path: 'create_notice',
                // loadChildren: './aurum/notice/notic',
                component: _aurum_create_notice_create_notice_component__WEBPACK_IMPORTED_MODULE_9__["CreateNoticeComponent"],
                data: { title: 'Create Notice', breadcrumb: 'CREATE NOTICE' }
            },
            {
                path: 'exam',
                // loadChildren: './aurum/notice/notic',
                component: _aurum_display_exam_display_exam_component__WEBPACK_IMPORTED_MODULE_4__["DisplayExamComponent"],
                data: { title: 'Exams', breadcrumb: 'Exams' }
            },
            {
                path: 'create_exam',
                // loadChildren: './aurum/notice/notic',
                component: _aurum_create_exam_create_exam_component__WEBPACK_IMPORTED_MODULE_3__["CreateExamComponent"],
                data: { title: 'Create Exam', breadcrumb: 'Create Exam' }
            },
            {
                path: 'evaluate_test',
                // loadChildren: './aurum/notice/notic',
                component: _aurum_evaluate_test_evaluate_test_component__WEBPACK_IMPORTED_MODULE_2__["EvaluateTestComponent"],
                data: { title: 'Evaluate Test', breadcrumb: 'Evaluate Test' }
            },
            {
                path: 'display_result',
                // loadChildren: './aurum/notice/notic',
                component: _aurum_display_result_display_result_component__WEBPACK_IMPORTED_MODULE_1__["DisplayResultComponent"],
                data: { title: 'Result', breadcrumb: 'Result' }
            },
            {
                path: 'edit_result',
                component: _aurum_edit_result_edit_result_component__WEBPACK_IMPORTED_MODULE_0__["EditResultComponent"],
                data: { title: 'Edit Result', breadcrumb: 'Edit Result' }
            },
            // --- upload news  -----
            {
                path: 'news',
                component: _aurum_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
                data: { title: 'News', breadcrum: 'News' }
            },
            {
                path: 'upload_news',
                component: _aurum_upload_news_upload_news_component__WEBPACK_IMPORTED_MODULE_13__["UploadNewsComponent"],
                data: { title: 'Publish News', breadcrum: 'Publish News' }
            },
            // --- transfer certificate -----
            {
                path: 'transfer_certificate',
                component: _aurum_certificate_certificate_component__WEBPACK_IMPORTED_MODULE_10__["CertificateComponent"],
                data: { title: 'Transfer Certificate', breadcrumb: 'Transfer Certificate' }
            },
            {
                path: 'print_certificate',
                component: _aurum_print_certificate_print_certificate_component__WEBPACK_IMPORTED_MODULE_11__["PrintCertificateComponent"],
                data: { title: 'Print Certificate', breadcrumb: 'Print Certificate' }
            },
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
                data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
            },
            {
                path: 'material',
                loadChildren: './views/material/app-material.module#AppMaterialModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'dialogs',
                loadChildren: './views/app-dialogs/app-dialogs.module#AppDialogsModule',
                data: { title: 'Dialogs', breadcrumb: 'DIALOGS' }
            },
            {
                path: 'profile',
                loadChildren: './views/profile/profile.module#ProfileModule',
                data: { title: 'Profile', breadcrumb: 'PROFILE' }
            },
            {
                path: 'others',
                loadChildren: './views/others/others.module#OthersModule',
                data: { title: 'Others', breadcrumb: 'OTHERS' }
            },
            {
                path: 'tables',
                loadChildren: './views/tables/tables.module#TablesModule',
                data: { title: 'Tables', breadcrumb: 'TABLES' }
            },
            {
                path: 'tour',
                loadChildren: './views/app-tour/app-tour.module#AppTourModule',
                data: { title: 'Tour', breadcrumb: 'TOUR' }
            },
            {
                path: 'forms',
                loadChildren: './views/forms/forms.module#AppFormsModule',
                data: { title: 'Forms', breadcrumb: 'FORMS' }
            },
            {
                path: 'charts',
                loadChildren: './views/charts/charts.module#AppChartsModule',
                data: { title: 'Charts', breadcrumb: 'CHARTS' }
            },
            {
                path: 'map',
                loadChildren: './views/map/map.module#AppMapModule',
                data: { title: 'Map', breadcrumb: 'MAP' }
            },
            {
                path: 'dragndrop',
                loadChildren: './views/dragndrop/dragndrop.module#DragndropModule',
                data: { title: 'Drag and Drop', breadcrumb: 'DND' }
            },
            {
                path: 'inbox',
                loadChildren: './views/app-inbox/app-inbox.module#AppInboxModule',
                data: { title: 'Inbox', breadcrumb: 'INBOX' }
            },
            {
                path: 'calendar',
                loadChildren: './views/app-calendar/app-calendar.module#AppCalendarModule',
                data: { title: 'Calendar', breadcrumb: 'CALENDAR' }
            },
            {
                path: 'chat',
                loadChildren: './views/app-chats/app-chats.module#AppChatsModule',
                data: { title: 'Chat', breadcrumb: 'CHAT' }
            },
            {
                path: 'cruds',
                loadChildren: './views/cruds/cruds.module#CrudsModule',
                data: { title: 'CRUDs', breadcrumb: 'CRUDs' }
            },
            {
                path: 'shop',
                loadChildren: './views/shop/shop.module#ShopModule',
                data: { title: 'Shop', breadcrumb: 'SHOP' }
            },
            {
                path: 'icons',
                loadChildren: './views/mat-icons/mat-icons.module#MatIconsModule',
                data: { title: 'Icons', breadcrumb: 'MATICONS' }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];


/***/ }),

/***/ "./src/app/aurum/attendance/create-attendance/create-attendance.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/aurum/attendance/create-attendance/create-attendance.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-attendance works!\n</p>\n"

/***/ }),

/***/ "./src/app/aurum/attendance/create-attendance/create-attendance.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/aurum/attendance/create-attendance/create-attendance.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/attendance/create-attendance/create-attendance.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/aurum/attendance/create-attendance/create-attendance.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttendanceComponent", function() { return CreateAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateAttendanceComponent = /** @class */ (function () {
    function CreateAttendanceComponent() {
    }
    CreateAttendanceComponent.prototype.ngOnInit = function () {
    };
    CreateAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-attendance',
            template: __webpack_require__(/*! ./create-attendance.component.html */ "./src/app/aurum/attendance/create-attendance/create-attendance.component.html"),
            styles: [__webpack_require__(/*! ./create-attendance.component.scss */ "./src/app/aurum/attendance/create-attendance/create-attendance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateAttendanceComponent);
    return CreateAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/aurum/aurum.component.html":
/*!********************************************!*\
  !*** ./src/app/aurum/aurum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aurum works!\n</p>\n"

/***/ }),

/***/ "./src/app/aurum/aurum.component.scss":
/*!********************************************!*\
  !*** ./src/app/aurum/aurum.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/aurum.component.ts":
/*!******************************************!*\
  !*** ./src/app/aurum/aurum.component.ts ***!
  \******************************************/
/*! exports provided: AurumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AurumComponent", function() { return AurumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/theme.service */ "./src/app/shared/services/theme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AurumComponent = /** @class */ (function () {
    function AurumComponent(themeService, renderer) {
        this.themeService = themeService;
        this.renderer = renderer;
    }
    AurumComponent.prototype.ngAfterViewInit = function () {
        this.themeService.applyMatTheme(this.renderer);
    };
    AurumComponent.prototype.ngOnInit = function () {
    };
    AurumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aurum',
            template: __webpack_require__(/*! ./aurum.component.html */ "./src/app/aurum/aurum.component.html"),
            styles: [__webpack_require__(/*! ./aurum.component.scss */ "./src/app/aurum/aurum.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], AurumComponent);
    return AurumComponent;
}());



/***/ }),

/***/ "./src/app/aurum/aurum.module.ts":
/*!***************************************!*\
  !*** ./src/app/aurum/aurum.module.ts ***!
  \***************************************/
/*! exports provided: AurumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AurumModule", function() { return AurumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/aurum/notice/notice.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _create_notice_create_notice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-notice/create-notice.component */ "./src/app/aurum/create-notice/create-notice.component.ts");
/* harmony import */ var _display_exam_display_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-exam/display-exam.component */ "./src/app/aurum/display-exam/display-exam.component.ts");
/* harmony import */ var _aurum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aurum.component */ "./src/app/aurum/aurum.component.ts");
/* harmony import */ var _create_exam_create_exam_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-exam/create-exam.component */ "./src/app/aurum/create-exam/create-exam.component.ts");
/* harmony import */ var _evaluate_test_evaluate_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./evaluate-test/evaluate-test.component */ "./src/app/aurum/evaluate-test/evaluate-test.component.ts");
/* harmony import */ var _display_result_display_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./display-result/display-result.component */ "./src/app/aurum/display-result/display-result.component.ts");
/* harmony import */ var _edit_result_edit_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-result/edit-result.component */ "./src/app/aurum/edit-result/edit-result.component.ts");
/* harmony import */ var _attendance_create_attendance_create_attendance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./attendance/create-attendance/create-attendance.component */ "./src/app/aurum/attendance/create-attendance/create-attendance.component.ts");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./certificate/certificate.component */ "./src/app/aurum/certificate/certificate.component.ts");
/* harmony import */ var _print_certificate_print_certificate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./print-certificate/print-certificate.component */ "./src/app/aurum/print-certificate/print-certificate.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./news/news.component */ "./src/app/aurum/news/news.component.ts");
/* harmony import */ var _upload_news_upload_news_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upload-news/upload-news.component */ "./src/app/aurum/upload-news/upload-news.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AurumModule = /** @class */ (function () {
    function AurumModule() {
    }
    AurumModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ],
            declarations: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_2__["NoticeComponent"], _create_notice_create_notice_component__WEBPACK_IMPORTED_MODULE_7__["CreateNoticeComponent"], _display_exam_display_exam_component__WEBPACK_IMPORTED_MODULE_8__["DisplayExamComponent"], _aurum_component__WEBPACK_IMPORTED_MODULE_9__["AurumComponent"], _create_exam_create_exam_component__WEBPACK_IMPORTED_MODULE_10__["CreateExamComponent"], _evaluate_test_evaluate_test_component__WEBPACK_IMPORTED_MODULE_11__["EvaluateTestComponent"], _display_result_display_result_component__WEBPACK_IMPORTED_MODULE_12__["DisplayResultComponent"], _edit_result_edit_result_component__WEBPACK_IMPORTED_MODULE_13__["EditResultComponent"], _attendance_create_attendance_create_attendance_component__WEBPACK_IMPORTED_MODULE_14__["CreateAttendanceComponent"], _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_15__["CertificateComponent"], _print_certificate_print_certificate_component__WEBPACK_IMPORTED_MODULE_16__["PrintCertificateComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"], _upload_news_upload_news_component__WEBPACK_IMPORTED_MODULE_18__["UploadNewsComponent"]],
            bootstrap: [_aurum_component__WEBPACK_IMPORTED_MODULE_9__["AurumComponent"]]
        })
    ], AurumModule);
    return AurumModule;
}());



/***/ }),

/***/ "./src/app/aurum/certificate/certificate.component.html":
/*!**************************************************************!*\
  !*** ./src/app/aurum/certificate/certificate.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"margin-333\" style=\"width: 100%\">\n  <input \n  matInput \n  placeholder=\"Type to search for student\" \n  value=\"\"\n  (keyup)='updateFilter($event)'>\n</mat-form-field>\n\n<div class=\"mat-box-shadow margin-333\">\n    <ngx-datatable class=\"material bg-white\" \n    [columnMode]=\"'force'\"  \n    [headerHeight]=\"50\"\n    [footerHeight]=\"50\" \n    [rowHeight]=\"50\"\n    [limit]=\"10\"\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [selectionType]=\"'single'\"\n\n          (select)='onSelect($event)'\n    >\n    </ngx-datatable>\n</div>\n"

/***/ }),

/***/ "./src/app/aurum/certificate/certificate.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/aurum/certificate/certificate.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/certificate/certificate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/aurum/certificate/certificate.component.ts ***!
  \************************************************************/
/*! exports provided: CertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateComponent", function() { return CertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/student.service */ "./src/app/aurum/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CertificateComponent = /** @class */ (function () {
    function CertificateComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.rows = [];
        this.columns = [];
        this.temp = [];
        this.selected = [];
    }
    CertificateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getAllStudents().subscribe(function (stud) {
            _this.students = stud;
            _this.rows = _this.temp = _this.students;
        });
        this.columns = [
            {
                prop: 'serialNo',
                name: 'Roll No'
            },
            {
                prop: 'division',
                name: 'Division'
            },
            {
                prop: 'firstName',
                name: 'First Name'
            },
            {
                prop: 'lastName',
                name: 'Last Name'
            },
        ];
    };
    CertificateComponent.prototype.updateFilter = function (event) {
        // console.log("--- event is fired ---")
        // console.log(event.target.value.toLowerCase())
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temp[0]);
        // Removes last "$$index" from "column"
        columns.splice(columns.length - 1);
        // console.log(columns);
        if (!columns.length)
            return;
        var rows = this.temp.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.rows = rows;
    };
    CertificateComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
        console.log(this.selected[0].firstName);
        var navigationExtras = {
            queryParams: {
                division: this.selected[0].division,
                firstName: this.selected[0].firstName,
                lastName: this.selected[0].lastName,
                serialNo: this.selected[0].serialNo,
            }
        };
        this.router.navigate(['print_certificate'], navigationExtras);
    };
    CertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificate',
            template: __webpack_require__(/*! ./certificate.component.html */ "./src/app/aurum/certificate/certificate.component.html"),
            styles: [__webpack_require__(/*! ./certificate.component.scss */ "./src/app/aurum/certificate/certificate.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CertificateComponent);
    return CertificateComponent;
}());



/***/ }),

/***/ "./src/app/aurum/create-exam/create-exam.component.html":
/*!**************************************************************!*\
  !*** ./src/app/aurum/create-exam/create-exam.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Test</div>\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"basicForm\" (ngSubmit)=\"onSubmit()\">\n      <div fxLayout=\"row wrap\">\n        <div fxFlex=\"100\" class=\"pr-1\">\n\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"title\" formControlName=\"title\" placeholder=\"Exam Topics\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['title'].hasError('required') && basicForm.controls['title'].touched\"\n              class=\"form-error-msg\"> Topics for the exam is required </small>\n          </div>\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"date\" formControlName=\"date\" placeholder=\"Evaluation Date\" [matDatepicker]=\"appDatepicker\">\n\n              <mat-datepicker-toggle matSuffix [for]=\"appDatepicker\"></mat-datepicker-toggle>\n            </mat-form-field>\n            <mat-datepicker #appDatepicker></mat-datepicker>\n          </div>\n\n\n\n          <form>\n            <p>Exam Type is {{selectedValue}}</p>\n\n            <mat-select id=\"langToggle\" placeholder=\"\" [(ngModel)]=\"selectedValue\" name=\"category\">\n              <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.value\" ngDefaultControl>\n                {{cat.viewValue}}\n              </mat-option>\n            </mat-select>\n          </form>\n\n\n          <br>\n          <div fxLayout=\"row wrap\">\n            <form>\n              <p>Selected Course is {{selectedCourse}}</p>\n\n              <mat-select id=\"langToggle\" placeholder=\"\" [(ngModel)]=\"selectedCourse\" name=\"exam\">\n                <mat-option *ngFor=\"let course of courses | async\" [value]=\"course.course_id\" ngDefaultControl>\n                  {{course.course_id}}\n                </mat-option>\n              </mat-select>\n            </form>\n          </div>\n        </div>\n\n        <br><br>\n        <div class=\"pb-1 pt-05\">\n          <mat-checkbox name=\"agreed\" formControlName=\"agreed\" class=\"pb-1\">I have reviewed the notice.</mat-checkbox>\n\n          <small *ngIf=\"basicForm.controls['agreed'].hasError('agreed') && basicForm.controls['agreed'].touched\" class=\"form-error-msg\">\n            You must review before saving! </small>\n        </div>\n      </div>\n\n\n      <button mat-raised-button color=\"primary\" [disabled]=\"basicForm.invalid\">Submit</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/aurum/create-exam/create-exam.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/aurum/create-exam/create-exam.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/create-exam/create-exam.component.ts":
/*!************************************************************!*\
  !*** ./src/app/aurum/create-exam/create-exam.component.ts ***!
  \************************************************************/
/*! exports provided: CreateExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateExamComponent", function() { return CreateExamComponent; });
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/exam.service */ "./src/app/aurum/services/exam.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateExamComponent = /** @class */ (function () {
    function CreateExamComponent(examService, router, loader) {
        this.examService = examService;
        this.router = router;
        this.loader = loader;
        this.formData = {};
        this.console = console;
        this.isSaved = false;
        this.selectedValue = 'Unit Test';
        this.categories = [
            { value: 'Unit Test', viewValue: 'Unit Test' },
            { value: 'Terminal', viewValue: 'Terminal' },
            { value: 'Class Test', viewValue: 'Class Test' },
            { value: 'Surprise', viewValue: 'Surprise' },
            { value: 'Others', viewValue: 'Others' },
        ];
    }
    CreateExamComponent.prototype.ngOnInit = function () {
        this.courses = this.examService.getCourses();
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            receiver: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", function (control) {
                var agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    };
    CreateExamComponent.prototype.onSubmit = function () {
    };
    CreateExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-exam",
            template: __webpack_require__(/*! ./create-exam.component.html */ "./src/app/aurum/create-exam/create-exam.component.html"),
            styles: [__webpack_require__(/*! ./create-exam.component.scss */ "./src/app/aurum/create-exam/create-exam.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_exam_service__WEBPACK_IMPORTED_MODULE_0__["ExamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"]])
    ], CreateExamComponent);
    return CreateExamComponent;
}());



/***/ }),

/***/ "./src/app/aurum/create-notice/create-notice.component.html":
/*!******************************************************************!*\
  !*** ./src/app/aurum/create-notice/create-notice.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Notice</div>\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"basicForm\" (ngSubmit)=\"onSubmit()\">\n      <div fxLayout=\"row wrap\">\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"title\" formControlName=\"title\" placeholder=\"Notice Title\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['title'].hasError('required') && basicForm.controls['title'].touched\"\n              class=\"form-error-msg\"> Title of this notice is required </small>\n          </div>\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"date\" formControlName=\"date\" placeholder=\"Date\" [matDatepicker]=\"appDatepicker\">\n\n              <mat-datepicker-toggle matSuffix [for]=\"appDatepicker\"></mat-datepicker-toggle>\n            </mat-form-field>\n            <mat-datepicker #appDatepicker></mat-datepicker>\n          </div>\n\n\n\n          <div class=\"pb-1\">\n            <br>\n            <Label>Receiver</Label>\n            <mat-radio-group name=\"receiver\" formControlName=\"receiver\">\n              <mat-radio-button value=\"all\">Everyone</mat-radio-button>\n              <mat-radio-button value=\"teachers\">Only Teacher</mat-radio-button>\n              <mat-radio-button value=\"students\">Only Students</mat-radio-button>\n\n            </mat-radio-group>\n          </div>\n\n\n        </div>\n\n\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"sender\" formControlName=\"sender\" placeholder=\"Sender\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['sender'].hasError('required') && basicForm.controls['sender'].touched\"\n              class=\"form-error-msg\"> Sender of the notice is required</small>\n          </div>\n\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"designation\" formControlName=\"designation\" placeholder=\"Designation\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['designation'].hasError('required') && basicForm.controls['designation'].touched\"\n              class=\"form-error-msg\"> Type in the designation of the sender </small>\n          </div>\n\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"department\" formControlName=\"department\" placeholder=\"Department\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['department'].hasError('required') && basicForm.controls['department'].touched\"\n              class=\"form-error-msg\"> Type in the department. </small>\n          </div>\n\n        </div>\n\n\n        <div class=\"pb-1\" class=\"full-width\">\n          <textarea ng-model=\"myTextarea\" cols=100 rows=7 formControlName=\"details\" placeholder=\"Notice Details\" value=\"\">\n\n            </textarea>\n          <small *ngIf=\"basicForm.controls['details'].hasError('required') && basicForm.controls['details'].touched\"\n            class=\"form-error-msg\"> Details of this notice is required </small>\n        </div>\n\n\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\">\n          <div class=\"pb-1 pt-05\">\n            <mat-checkbox name=\"agreed\" formControlName=\"agreed\" class=\"pb-1\">I have reviewed the notice.</mat-checkbox>\n\n            <small *ngIf=\"basicForm.controls['agreed'].hasError('agreed') && basicForm.controls['agreed'].touched\"\n              class=\"form-error-msg\"> You must review before saving! </small>\n          </div>\n        </div>\n      </div>\n\n\n      <button mat-raised-button color=\"primary\" [disabled]=\"basicForm.invalid\">Submit</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/aurum/create-notice/create-notice.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/aurum/create-notice/create-notice.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-radio-button {\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/aurum/create-notice/create-notice.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/aurum/create-notice/create-notice.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNoticeComponent", function() { return CreateNoticeComponent; });
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../notice */ "./src/app/aurum/notice.ts");
/* harmony import */ var _shared_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/firebaseauth.service */ "./src/app/shared/services/firebaseauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateNoticeComponent = /** @class */ (function () {
    function CreateNoticeComponent(fire, router, loader) {
        this.fire = fire;
        this.router = router;
        this.loader = loader;
        // noticeCollection: AngularFirestoreCollection<Notice>;
        // notices: Observable<Notice[]>;
        this.formData = {};
        this.console = console;
        this.isSaved = false;
    }
    CreateNoticeComponent.prototype.ngOnInit = function () {
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            receiver: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            sender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", function (control) {
                var agreed = control.value;
                if (!agreed) {
                    return { agreed: true };
                }
                return null;
            })
        });
    };
    CreateNoticeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSaved = true;
        console.log("Submit notice has been clicked");
        console.log(this.basicForm.value);
        console.log(this.basicForm.value["title"]);
        this.progressBar.mode = "indeterminate";
        this.notice = new _notice__WEBPACK_IMPORTED_MODULE_0__["Notice"]();
        this.notice.title = this.basicForm.value["title"];
        this.notice.details = this.basicForm.value["details"];
        this.notice.date = this.basicForm.value["date"];
        this.notice.sender = this.basicForm.value["sender"];
        this.notice.designation = this.basicForm.value["designation"];
        this.notice.department = this.basicForm.value["department"];
        this.notice.receiver = this.basicForm.value["receiver"];
        //   console.log("------------before calling create notice--------------");
        // console.log(this.notice.title);
        // console.log(this.notice.details);
        // console.log(this.notice.department);
        // console.log(this.notice.designation);
        if (this.isSaved) {
            this.fire
                .createNotice(this.notice)
                .then(function () {
                _this.loader.open("Creating Notice");
                setTimeout(function () {
                    _this.loader.close();
                }, 3000);
                _this.router.navigate(["notice"]);
            })
                .catch(function () {
                _this.progressBar.mode = null;
                _this.isSaved = false;
            });
        }
        // let notice: Notice = {
        //   title: "This is the title",
        //   details: "Thjis is the detail",
        //   // date: Date.now(),
        //   receiver: "Hello",
        // };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"])
    ], CreateNoticeComponent.prototype, "progressBar", void 0);
    CreateNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-create-notice",
            template: __webpack_require__(/*! ./create-notice.component.html */ "./src/app/aurum/create-notice/create-notice.component.html"),
            styles: [__webpack_require__(/*! ./create-notice.component.scss */ "./src/app/aurum/create-notice/create-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_6__["AppLoaderService"]])
    ], CreateNoticeComponent);
    return CreateNoticeComponent;
}());



/***/ }),

/***/ "./src/app/aurum/display-exam/display-exam.component.html":
/*!****************************************************************!*\
  !*** ./src/app/aurum/display-exam/display-exam.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"margin-333\">\n    <button mat-raised-button color=\"primary\" (click)=\"onCreateExam()\">Create Test</button>\n  </div> -->\n\n\n\n<div fxLayout=\"row wrap\" fxLayout.xs=\"column\">\n  <div fxFlex.gt-md=\"20%\" fxFlex.gt-sm=\"33%\" *ngFor=\"let exam of exams | async\" (click)=\"onClickExam(exam)\">\n\n    <mat-card class=\"p-0\">\n      <mat-card-title class=\"mat-bg-primary m-0\">\n        <div class=\"card-title-text\">\n          <div fxLayout=\"row\">\n            <span fxFlex fxFill>{{exam.subject}} {{exam.division}} </span>\n            <!-- <span fxFlex fxLayoutAlign=\"end center\">{{exam.maxMarks}} </span> -->\n            {{exam.maxMarks}}\n          </div>\n          <span class=\"footerText\">{{exam.state}}</span>\n        </div>\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"testContent\">\n\n          <img class=\" center .pb-1 subjectStyle\" mat-card-image src=\"assets/images/subjects/{{exam.subject | lowercase}}.png\">\n          <br>\n          <p>\n            {{exam.topic}}\n          </p>\n          <b>\n            <p style=\"padding: 0px; margin: 0px\">{{exam.category}}</p>\n          </b>\n          <mat-divider class=\"mb-1\"></mat-divider>\n          <b>\n            <p class=\"footerText\">{{exam.evalDate.toDate() | date:'mediumDate'}}</p>\n          </b>\n        </div>\n\n      </mat-card-content>\n\n    </mat-card>\n\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div fxLayout=\"row wrap\" fxLayout.xs=\"column\">\n        <div fxFlex=\"100\" fxFlex.gt-md=\"20%\" fxFlex.gt-sm=\"50\"  *ngFor=\"let exam of exams | async\"  >\n\n          <mat-card class=\"p-0\">\n            <mat-card-title class=\"mat-bg-primary m-0\">\n              <div class=\"card-title-text\">\n                <span>{{exam.subject}} {{exam.division}} </span>\n              </div>\n            </mat-card-title>\n\n            <mat-card-content>\n                <img class=\".pb-1 subjectStyle\" mat-card-image src=\"assets/images/subjects/{{exam.subject | lowercase}}.png\">\n              <br>\n              <p>\n                {{exam.topic}}\n              </p>\n\n\n\n              <mat-divider class=\"mb-1\"></mat-divider>\n              <b><p>{{exam.category}}</p> </b>\n\n            </mat-card-content>\n          </mat-card>\n\n        </div>\n      </div> -->\n"

/***/ }),

/***/ "./src/app/aurum/display-exam/display-exam.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/aurum/display-exam/display-exam.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subjectStyle {\n  padding-top: 5px;\n  height: 150px;\n  width: 150px; }\n\n.testContent {\n  text-align: center; }\n\n.footerText {\n  padding-top: 10px;\n  margin: 0px; }\n"

/***/ }),

/***/ "./src/app/aurum/display-exam/display-exam.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/aurum/display-exam/display-exam.component.ts ***!
  \**************************************************************/
/*! exports provided: DisplayExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayExamComponent", function() { return DisplayExamComponent; });
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/exam.service */ "./src/app/aurum/services/exam.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayExamComponent = /** @class */ (function () {
    function DisplayExamComponent(examService, router) {
        this.examService = examService;
        this.router = router;
    }
    DisplayExamComponent.prototype.ngOnInit = function () {
        this.exams = this.examService.getExams();
        this.courses = this.examService.getCourses();
    };
    DisplayExamComponent.prototype.onClickExam = function (exam) {
        var navigationExtras = {
            queryParams: {
                examId: exam.examId,
                maxMarks: exam.maxMarks,
                subject: exam.subject,
                division: exam.division,
                docId: exam.docId,
            }
        };
        if (exam.state === "Assigned") {
            this.router.navigate(['evaluate_test'], navigationExtras);
        }
        if (exam.state === "Evaluated") {
            this.router.navigate(['display_result'], navigationExtras);
        }
    };
    DisplayExamComponent.prototype.onCreateExam = function () {
        console.log("Add notice has been clicked");
        this.router.navigate(['create_exam']);
    };
    DisplayExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-display-exam",
            template: __webpack_require__(/*! ./display-exam.component.html */ "./src/app/aurum/display-exam/display-exam.component.html"),
            styles: [__webpack_require__(/*! ./display-exam.component.scss */ "./src/app/aurum/display-exam/display-exam.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_exam_service__WEBPACK_IMPORTED_MODULE_0__["ExamService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplayExamComponent);
    return DisplayExamComponent;
}());



/***/ }),

/***/ "./src/app/aurum/display-result/display-result.component.html":
/*!********************************************************************!*\
  !*** ./src/app/aurum/display-result/display-result.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-box-shadow margin-333\">\n\n    <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\n      [rows]=\"rows\">\n      <ngx-datatable-column name=\"Division\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <span>\n            {{value}}\n          </span>\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      <ngx-datatable-column prop=\"serialNo\" name=\"Roll No\">\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n          <span>\n            {{value}}\n          </span>\n        </ng-template>\n      </ngx-datatable-column>\n\n\n\n      <ngx-datatable-column prop=\"firstName\" name=\"First Name\">\n        <ng-template ngx-datatable-cell-template let-value=\"value\">\n          {{value}}\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      <ngx-datatable-column prop=\"lastName\" name=\"Last Name\">\n        <ng-template ngx-datatable-cell-template let-value=\"value\">\n          {{value}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column prop=\"score\" name=\"Score\">\n\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n\n        {{value}}\n        </ng-template>\n      </ngx-datatable-column>\n\n    </ngx-datatable>\n\n  </div>\n  <div class=\"margin-333\">\n    <button  mat-raised-button color=\"primary\" (click)=\"onEdit()\">Edit Result</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/aurum/display-result/display-result.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/aurum/display-result/display-result.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/display-result/display-result.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/aurum/display-result/display-result.component.ts ***!
  \******************************************************************/
/*! exports provided: DisplayResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayResultComponent", function() { return DisplayResultComponent; });
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/exam.service */ "./src/app/aurum/services/exam.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisplayResultComponent = /** @class */ (function () {
    // public students: Observable<Student[]>;
    function DisplayResultComponent(activatedRoute, examService, afs, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.examService = examService;
        this.afs = afs;
        this.router = router;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.examId = params["examId"];
            _this.maxMarks = params["maxMarks"];
            _this.division = params["division"];
            _this.docId = params["docId"];
        });
        this.getStudents();
    }
    DisplayResultComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentCol = this.afs.collection("examList", function (ref) { return ref.where("examId", '==', _this.examId).orderBy("serialNo"); });
        this.studentCol.valueChanges()
            .subscribe(function (stud) {
            console.log("------STUD-------");
            console.log(stud);
            _this.rows = stud;
        });
        console.log("++++++++++++++++++++++++++++-------");
        console.log(this.rows);
    };
    DisplayResultComponent.prototype.ngOnInit = function () {
    };
    DisplayResultComponent.prototype.onEdit = function () {
        var navigationExtras = {
            queryParams: {
                examId: this.examId,
                maxMarks: this.maxMarks,
                subject: this.subject,
                division: this.division,
                docId: this.docId,
            }
        };
        this.router.navigate(['edit_result'], navigationExtras);
    };
    DisplayResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-result',
            template: __webpack_require__(/*! ./display-result.component.html */ "./src/app/aurum/display-result/display-result.component.html"),
            styles: [__webpack_require__(/*! ./display-result.component.scss */ "./src/app/aurum/display-result/display-result.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_exam_service__WEBPACK_IMPORTED_MODULE_0__["ExamService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplayResultComponent);
    return DisplayResultComponent;
}());



/***/ }),

/***/ "./src/app/aurum/edit-result/edit-result.component.html":
/*!**************************************************************!*\
  !*** ./src/app/aurum/edit-result/edit-result.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-box-shadow margin-333\">\n\n  <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\n    [rows]=\"rows\">\n    <ngx-datatable-column name=\"Division\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span>\n          {{value}}\n        </span>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column prop=\"serialNo\" name=\"Roll No\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n        <span>\n          {{value}}\n        </span>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n\n    <ngx-datatable-column prop=\"firstName\" name=\"First Name\">\n      <ng-template ngx-datatable-cell-template let-value=\"value\">\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column prop=\"lastName\" name=\"Last Name\">\n      <ng-template ngx-datatable-cell-template let-value=\"value\">\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column prop=\"score\" name=\"Score\">\n\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <input required placeholder=\"Score\" autofocus (blur)=\"scoreChange($event, rowIndex, value)\" type=\"text\" [value]=\"value\" />\n        <small *ngIf=\"value >50\"\n              class=\"form-error-msg\"> Score is needed</small>\n      </ng-template>\n    </ngx-datatable-column>\n\n  </ngx-datatable>\n\n</div>\n<div class=\"margin-333\">\n  <button mat-raised-button color=\"primary\" (click)=\"onSave()\">Save Result</button>\n</div>\n"

/***/ }),

/***/ "./src/app/aurum/edit-result/edit-result.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/aurum/edit-result/edit-result.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/edit-result/edit-result.component.ts":
/*!************************************************************!*\
  !*** ./src/app/aurum/edit-result/edit-result.component.ts ***!
  \************************************************************/
/*! exports provided: EditResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditResultComponent", function() { return EditResultComponent; });
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/exam.service */ "./src/app/aurum/services/exam.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditResultComponent = /** @class */ (function () {
    function EditResultComponent(activatedRoute, afs, examService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.afs = afs;
        this.examService = examService;
        this.router = router;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.examId = params["examId"];
            _this.maxMarks = params["maxMarks"];
            _this.division = params["division"];
            _this.docId = params["docId"];
        });
        this.getStudents();
    }
    EditResultComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentCol = this.afs.collection("examList", function (ref) {
            return ref.where("examId", "==", _this.examId).orderBy("serialNo");
        });
        this.students = this.studentCol.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                data.docId = id;
                return data;
            });
        });
        this.students.subscribe(function (stud) {
            console.log("-------------");
            console.log(stud);
            _this.rows = stud;
        });
        console.log("++++++++++++++++++++++++++++-------");
        console.log(this.rows);
    };
    EditResultComponent.prototype.ngOnInit = function () { };
    EditResultComponent.prototype.onSave = function () {
        this.examService.updateExam(this.rows, this.examId, this.docId);
        this.router.navigate(['exam']);
    };
    EditResultComponent.prototype.scoreChange = function (event, rowIndex, value) {
        this.rows[rowIndex].score = event.target.value;
        this.rows[rowIndex].isChanged = true;
        // console.log("Index is ------>" + rowIndex);
        // console.log(event.target.value);
        // console.log(this.rows[rowIndex].firstName);
    };
    EditResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-result",
            template: __webpack_require__(/*! ./edit-result.component.html */ "./src/app/aurum/edit-result/edit-result.component.html"),
            styles: [__webpack_require__(/*! ./edit-result.component.scss */ "./src/app/aurum/edit-result/edit-result.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_exam_service__WEBPACK_IMPORTED_MODULE_0__["ExamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditResultComponent);
    return EditResultComponent;
}());



/***/ }),

/***/ "./src/app/aurum/evaluate-test/evaluate-test.component.html":
/*!******************************************************************!*\
  !*** ./src/app/aurum/evaluate-test/evaluate-test.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table mat-table [dataSource]=\"students\">\n\n</table> -->\n\n\n\n<!-- <div>\n  <h3>\n    Inline Editing\n    <small>\n      <a href=\"https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/inline.component.ts\" target=\"_blank\">\n        Source\n      </a>\n    </small>\n  </h3>\n  <ngx-datatable\n    #mydatatable\n    class=\"material\"\n    [headerHeight]=\"50\"\n    [limit]=\"5\"\n    [columnMode]=\"'force'\"\n    [footerHeight]=\"50\"\n    [rowHeight]=\"'auto'\"\n    [rows]=\"rows\">\n    <ngx-datatable-column name=\"Name\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span\n          title=\"Double click to edit\"\n          (dblclick)=\"editing[rowIndex + '-name'] = true\"\n          *ngIf=\"!editing[rowIndex + '-name']\">\n          {{value}}\n        </span>\n        <input\n          autofocus\n          (blur)=\"updateValue($event, 'name', rowIndex)\"\n          *ngIf=\"editing[rowIndex+ '-name']\"\n          type=\"text\"\n          [value]=\"value\"\n        />\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Gender\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n         <span\n          title=\"Double click to edit\"\n          (dblclick)=\"editing[rowIndex + '-gender'] = true\"\n          *ngIf=\"!editing[rowIndex + '-gender']\">\n          {{value}}\n        </span>\n        <select\n          *ngIf=\"editing[rowIndex + '-gender']\"\n          (blur)=\"editing[rowIndex + '-gender'] = false\"\n          (change)=\"updateValue($event, 'gender', rowIndex)\"\n          [value]=\"value\">\n          <option value=\"male\">Male</option>\n          <option value=\"female\">Female</option>\n        </select>\n      </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Age\">\n      <ng-template ngx-datatable-cell-template let-value=\"value\">\n        <input\n          autofocus\n          type=\"text\"\n          [value]=\"value\"\n        />\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div> -->\n\n\n\n\n\n\n\n\n\n\n<div class=\"mat-box-shadow margin-333\">\n\n  <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\n    [rows]=\"rows\">\n    <ngx-datatable-column name=\"Division\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span>\n          {{value}}\n        </span>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column prop=\"serialNo\" name=\"Roll No\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n        <span>\n          {{value}}\n        </span>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n\n    <ngx-datatable-column prop=\"firstName\" name=\"First Name\">\n      <ng-template ngx-datatable-cell-template let-value=\"value\">\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column prop=\"lastName\" name=\"Last Name\">\n      <ng-template ngx-datatable-cell-template let-value=\"value\">\n        {{value}}\n      </ng-template>\n    </ngx-datatable-column>\n\n\n\n    <ngx-datatable-column prop=\"score\" name=\"Score\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n          <input required placeholder=\"Score\" autofocus (blur)=\"scoreChange($event, rowIndex, value)\" type=\"text\"\n            [value]=\"value\" />\n        <!-- <small *ngIf=\"examForm.controls['score'].hasError('required') && examForm.controls['score'].touched\"\n              class=\"form-error-msg\"> Score is needed</small> -->\n      </ng-template>\n    </ngx-datatable-column>\n\n\n  </ngx-datatable>\n\n</div>\n\n<div class=\"margin-333\">\n  <button  mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/aurum/evaluate-test/evaluate-test.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/aurum/evaluate-test/evaluate-test.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/evaluate-test/evaluate-test.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/aurum/evaluate-test/evaluate-test.component.ts ***!
  \****************************************************************/
/*! exports provided: EvaluateTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateTestComponent", function() { return EvaluateTestComponent; });
/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/exam.service */ "./src/app/aurum/services/exam.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EvaluateTestComponent = /** @class */ (function () {
    // public students: Observable<Student[]>;
    function EvaluateTestComponent(route, examService, afs, router, _fb) {
        var _this = this;
        this.route = route;
        this.examService = examService;
        this.afs = afs;
        this.router = router;
        this._fb = _fb;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.examId = params["examId"];
            _this.maxMarks = params["maxMarks"];
            _this.division = params["division"];
            _this.docId = params["docId"];
        });
        this.getStudents();
    }
    EvaluateTestComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentCol = this.afs.collection("students", function (ref) { return ref.where("division", '==', _this.division).orderBy("serialNo"); });
        this.studentCol.valueChanges()
            .subscribe(function (stud) {
            console.log("-------------");
            console.log(stud);
            _this.rows = stud;
        });
        console.log("++++++++++++++++++++++++++++-------");
        console.log(this.rows);
    };
    EvaluateTestComponent.prototype.scoreChange = function (event, rowIndex, value) {
        this.rows[rowIndex].score = event.target.value;
        // console.log("Index is ------>" + rowIndex);
        // console.log(event.target.value);
        // console.log(this.rows[rowIndex].firstName);
    };
    EvaluateTestComponent.prototype.onSubmit = function () {
        this.examService.evaluateExam(this.rows, this.examId, this.docId);
        this.router.navigate(['exam']);
    };
    EvaluateTestComponent.prototype.onFormSubmit = function () {
    };
    EvaluateTestComponent.prototype.ngOnInit = function () {
        this.examForm = this._fb.group({
            score: this._fb.array([
                this.initScoreValidator(),
            ])
        });
    };
    EvaluateTestComponent.prototype.initScoreValidator = function () {
        // initialize our address
        return this._fb.group({
            score: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EvaluateTestComponent.prototype.addScore = function () {
        // add address to the list
        var control = this.examForm.controls['score'];
        control.push(this.initScoreValidator());
    };
    EvaluateTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-evaluate-test",
            template: __webpack_require__(/*! ./evaluate-test.component.html */ "./src/app/aurum/evaluate-test/evaluate-test.component.html"),
            styles: [__webpack_require__(/*! ./evaluate-test.component.scss */ "./src/app/aurum/evaluate-test/evaluate-test.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_exam_service__WEBPACK_IMPORTED_MODULE_0__["ExamService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EvaluateTestComponent);
    return EvaluateTestComponent;
}());



/***/ }),

/***/ "./src/app/aurum/models/news.model.ts":
/*!********************************************!*\
  !*** ./src/app/aurum/models/news.model.ts ***!
  \********************************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
var News = /** @class */ (function () {
    function News() {
    }
    return News;
}());



/***/ }),

/***/ "./src/app/aurum/news/news.component.html":
/*!************************************************!*\
  !*** ./src/app/aurum/news/news.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-333\">\n  <button mat-raised-button color=\"primary\" (click)=\"onUploadNews()\">Create News</button>\n</div>"

/***/ }),

/***/ "./src/app/aurum/news/news.component.scss":
/*!************************************************!*\
  !*** ./src/app/aurum/news/news.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aurum/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(router) {
        this.router = router;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.onUploadNews = function () {
        console.log("Upload news clicked!!!");
        this.router.navigate(['upload_news']);
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/aurum/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/aurum/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/aurum/notice.ts":
/*!*********************************!*\
  !*** ./src/app/aurum/notice.ts ***!
  \*********************************/
/*! exports provided: Notice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return Notice; });
var Notice = /** @class */ (function () {
    function Notice() {
    }
    return Notice;
}());



/***/ }),

/***/ "./src/app/aurum/notice/notice.component.html":
/*!****************************************************!*\
  !*** ./src/app/aurum/notice/notice.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-333\">\n  <button mat-raised-button color=\"primary\" (click)=\"onAddNotice()\">Create Notice</button>\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.xs=\"column\">\n  <div fxFlex=\"100\" fxFlex.gt-md=\"33%\" fxFlex.gt-sm=\"50\" *ngFor=\"let notice of notices | async\">\n\n\n    <mat-card class=\"p-0\">\n      <mat-card-title class=\"mat-bg-primary m-0\">\n          <div class=\"card-title-text\">\n\n          <div fxLayout=\"row\">\n              <span fxFlex >{{notice.title}} </span>\n            </div>\n\n          </div>\n\n      </mat-card-title>\n\n      <mat-card-content>\n          <div fxLayout=\"row\" class=\"footerText\">\n              <span fxFlex fxFill>Addressed to {{notice.addressedTo}} </span>\n              <!-- <span fxFlex fxLayoutAlign=\"end center\">{{exam.maxMarks}} </span> -->\n              {{notice.date.toDate() | date:'mediumDate'}}\n            </div>\n          <mat-divider></mat-divider>\n\n        <br>\n        <p>\n          {{notice.details}}\n\n        </p>\n        <mat-divider class=\"mb-1\"></mat-divider>\n        <h4>\n          {{notice.sender}}\n        </h4>\n        <span>{{notice.designation}}, {{notice.department}}</span>\n        <br>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n            <button mat-button color=\"warn\" class=\"mr-1\" (click)=\"deleteNotice(notice.docId)\">Delete</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/aurum/notice/notice.component.scss":
/*!****************************************************!*\
  !*** ./src/app/aurum/notice/notice.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerText {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin: 0px; }\n"

/***/ }),

/***/ "./src/app/aurum/notice/notice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aurum/notice/notice.component.ts ***!
  \**************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/animations/egret-animations */ "./src/app/shared/animations/egret-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(router, afs) {
        this.router = router;
        this.afs = afs;
    }
    NoticeComponent.prototype.ngOnInit = function () {
        this.noticeCol = this.afs.collection('notice');
        // this.notices = this.noticeCol.valueChanges();
        this.notices = this.noticeCol.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                data.docId = id;
                return data;
            });
        });
    };
    NoticeComponent.prototype.onAddNotice = function () {
        console.log("Add notice has been clicked");
        this.router.navigate(['create_notice']);
    };
    NoticeComponent.prototype.deleteNotice = function (docId) {
        this.noticeCol.doc(docId).delete().then(function () {
            console.log('deleted');
        });
    };
    NoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/aurum/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.scss */ "./src/app/aurum/notice/notice.component.scss")],
            animations: _shared_animations_egret_animations__WEBPACK_IMPORTED_MODULE_1__["egretAnimations"],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/aurum/print-certificate/print-certificate.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/aurum/print-certificate/print-certificate.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-333\">\n  <button mat-raised-button color=\"primary\" (click)=\"onPrintCertificate()\">Print Transfer Certificate</button>\n</div>\n\n<div id=\"print-section\">\n<div style=\"width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #787878\">\n  <div style=\"width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878\">\n         <span style=\"font-size:50px; font-weight:bold\">Transfer Certificate</span>\n         <br><br>\n         <span style=\"font-size:25px\"><i>This is to certify that</i></span>\n         <br><br>\n         <span style=\"font-size:30px\"><b>{{firstName}} {{lastName}}</b></span><br/><br/>\n         <span style=\"font-size:25px\"><i>was a student of Oxeye School of Technology studying in </i></span> <br/><br/>\n         <span style=\"font-size:30px\">{{division}}</span> <br/><br/>\n         <span style=\"font-size:25px\"><i>He/She bears a good moral charater. </i></span> <br/><br/>\n         <span style=\"font-size:25px\"><i>We wish him/her all the very best for future endeavours.</i></span> <br/><br/>\n\n         <!-- <span style=\"font-size:20px\">with score of <b>$grade.getPoints()%</b></span> <br/><br/><br/><br/> -->\n         <!-- <span style=\"font-size:25px\"><i>dated</i></span><br> -->\n        <!-- #set ($dt = $DateFormatter.getFormattedDate($grade.getAwardDate(), \"MMMM dd, yyyy\")) -->\n        <!-- <span style=\"font-size:30px\">$dt</span> -->\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/aurum/print-certificate/print-certificate.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/aurum/print-certificate/print-certificate.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/print-certificate/print-certificate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/aurum/print-certificate/print-certificate.component.ts ***!
  \************************************************************************/
/*! exports provided: PrintCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintCertificateComponent", function() { return PrintCertificateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintCertificateComponent = /** @class */ (function () {
    function PrintCertificateComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.division = params["division"];
            _this.firstName = params["firstName"];
            _this.lastName = params["lastName"];
            _this.serialNo = params["serialNo"];
        });
    }
    PrintCertificateComponent.prototype.ngOnInit = function () {
    };
    PrintCertificateComponent.prototype.onPrintCertificate = function () {
        console.log("Print certificate clicked!!");
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        \n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    PrintCertificateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-certificate',
            template: __webpack_require__(/*! ./print-certificate.component.html */ "./src/app/aurum/print-certificate/print-certificate.component.html"),
            styles: [__webpack_require__(/*! ./print-certificate.component.scss */ "./src/app/aurum/print-certificate/print-certificate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PrintCertificateComponent);
    return PrintCertificateComponent;
}());



/***/ }),

/***/ "./src/app/aurum/services/exam.service.ts":
/*!************************************************!*\
  !*** ./src/app/aurum/services/exam.service.ts ***!
  \************************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamService = /** @class */ (function () {
    function ExamService(afs) {
        this.afs = afs;
        // todo -- change this
        this.userId = "shekhsh01";
        this.courseColPath = "courses/" + this.userId + "/course";
        this.examCol = this.afs.collection("exam");
        this.courseCol = this.afs.collection(this.courseColPath);
    }
    ExamService.prototype.getExams = function () {
        this.exams = this.examCol.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                data.docId = id;
                return data;
            });
        });
        return this.exams;
    };
    ExamService.prototype.getCourses = function () {
        this.courses = this.courseCol.valueChanges();
        return this.courses;
    };
    ExamService.prototype.getStudents = function (division) {
        this.studentCol = this.afs.collection("students", function (ref) {
            return ref.where("division", "==", division).orderBy("serialNo");
        });
        this.students = this.studentCol.valueChanges();
        return this.students;
    };
    ExamService.prototype.evaluateExam = function (students, examId, docId) {
        var _this = this;
        var batch = this.afs.firestore.batch();
        var averageScore;
        var totalScore = 0;
        var numberOfStudents;
        var topScore = 0;
        var lowestScore = 100;
        numberOfStudents = students.length;
        students.forEach(function (stud) {
            var str = String(stud.score);
            if (stud.score == null || str.length <= 0) {
                stud.score = 0;
            }
            if (stud.score > topScore) {
                topScore = stud.score;
            }
            if (stud.score < lowestScore) {
                lowestScore = stud.score;
            }
            console.log("score is -------" + stud.score);
            totalScore = +totalScore + +stud.score;
            var docRef = _this.afs.collection("examList").ref.doc();
            batch.set(docRef, {
                examId: examId,
                firstName: stud.firstName,
                lastName: stud.lastName,
                division: stud.division,
                userId: stud.userId,
                score: stud.score,
                serialNo: stud.serialNo
            });
        });
        batch
            .commit()
            .then(function (msg) {
            console.log("Scores have been successfully updated");
            console.log(msg);
        })
            .catch(function (err) {
            console.log("There has been an error in creating scores");
            console.log(err);
        });
        averageScore = totalScore / numberOfStudents;
        averageScore = Math.round(averageScore * 100) / 100;
        console.log("Total score --->" + totalScore);
        console.log("Average score --->" + averageScore);
        console.log("Top score --->" + topScore);
        console.log("Minimum score --->" + lowestScore);
        var examDoc = this.afs.collection("exam").doc(docId);
        examDoc.update({
            state: "Evaluated",
            averageScore: averageScore,
            topScore: topScore,
            lowestScore: lowestScore,
        });
    };
    ExamService.prototype.updateExam = function (students, examId, docId) {
        var _this = this;
        var batch = this.afs.firestore.batch();
        var averageScore;
        var totalScore = 0;
        var numberOfStudents;
        var topScore = 0;
        var lowestScore = 100;
        numberOfStudents = students.length;
        try {
            students.forEach(function (stud) {
                var str = String(stud.score);
                if (stud.score == null || str.length <= 0) {
                    stud.score = 0;
                }
                if (stud.score > topScore) {
                    topScore = stud.score;
                }
                if (stud.score < lowestScore) {
                    lowestScore = stud.score;
                }
                console.log("score is -------" + stud.score);
                totalScore = +totalScore + +stud.score;
                var docRef = _this.afs.collection("examList").ref.doc(stud.docId);
                if (stud.isChanged) {
                    batch.update(docRef, {
                        examId: examId,
                        firstName: stud.firstName,
                        lastName: stud.lastName,
                        division: stud.division,
                        userId: stud.userId,
                        score: stud.score,
                        serialNo: stud.serialNo
                    });
                }
            });
            batch
                .commit()
                .then(function (msg) {
                console.log("Scores have been successfully updated");
                console.log(msg);
            })
                .catch(function (err) {
                console.log("There has been an error in creating scores");
                console.log(err);
            });
            averageScore = totalScore / numberOfStudents;
            averageScore = Math.round(averageScore * 100) / 100;
            console.log("Total score --->" + totalScore);
            console.log("Average score --->" + averageScore);
            console.log("Top score --->" + topScore);
            console.log("Minimum score --->" + lowestScore);
            var examDoc = this.afs.collection("exam").doc(docId);
            examDoc.update({
                state: "Evaluated",
                averageScore: averageScore,
                topScore: topScore,
                lowestScore: lowestScore
            });
        }
        catch (err) {
            console.log("--------i am in error--------");
        }
    };
    ExamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ExamService);
    return ExamService;
}());



/***/ }),

/***/ "./src/app/aurum/services/student.service.ts":
/*!***************************************************!*\
  !*** ./src/app/aurum/services/student.service.ts ***!
  \***************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentService = /** @class */ (function () {
    function StudentService(afs) {
        this.afs = afs;
        this.studentColPath = "students";
        this.studentCol = this.afs.collection(this.studentColPath);
    }
    StudentService.prototype.getAllStudents = function () {
        console.log("-- in getAllStudents() --");
        this.studentCol = this.afs.collection("students", function (ref) {
            return ref.orderBy("serialNo");
        });
        this.students = this.studentCol.valueChanges();
        console.log(this.students);
        return this.students;
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/aurum/upload-news/upload-news.component.html":
/*!**************************************************************!*\
  !*** ./src/app/aurum/upload-news/upload-news.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button color=\"primary\" (click)=\"onUploadNews()\">Create News</button> -->\n\n<!-- <input mat-raised-button color=\"primary\" type=\"file\" accept=\"image/*\" (change)=\"onFileChanged($event)\"> -->\n<div class=\"margin-333\">\n  <input accept=\".png,.jpg\"  style=\"display: none\" type=\"file\" (change)=\"onFileChanged($event)\" #fileInput>\n  <button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\">{{isSelected ? 'Change' : 'Select'}} Image</button>\n</div>\n\n\n<mat-card-content class=\"margin-333\">\n  <div class=\"margin-333\">\n    <!-- <img mat-card-image src=\"assets/images/photo-2.jpg\"> -->\n    <img *ngIf=\"url\"  [src]=\"url\" height=\"200\"> <br/>\n\n  </div>\n  <form  *ngIf=\"url\" [formGroup]=\"basicForm\" (ngSubmit)=\"onSubmitNews()\">\n    <div fxLayout=\"row wrap\">\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n        <div class=\"pb-1\">\n          <mat-form-field class=\"full-width\">\n            <input matInput name=\"title\" formControlName=\"title\" placeholder=\"News Title\" value=\"\">\n          </mat-form-field>\n          <small *ngIf=\"basicForm.controls['title'].hasError('required') && basicForm.controls['title'].touched\" class=\"form-error-msg\">\n            Title of the article is required </small>\n        </div>\n        <div class=\"pb-1\">\n          <mat-form-field class=\"full-width\">\n            <input matInput name=\"date\" formControlName=\"date\" placeholder=\"Date\" [matDatepicker]=\"appDatepicker\">\n            <mat-datepicker-toggle matSuffix [for]=\"appDatepicker\"></mat-datepicker-toggle>\n          </mat-form-field>\n          <mat-datepicker #appDatepicker></mat-datepicker>\n        </div>\n       \n        <div class=\"pb-1\">\n            <br>\n            <Label>Category</Label>\n            <mat-radio-group name=\"receiver\" formControlName=\"category\" fxLayout=\"column\">\n              <mat-radio-button value=\"Environment\">Environment</mat-radio-button>\n              <mat-radio-button value=\"Technology\">Technology</mat-radio-button>\n              <mat-radio-button value=\"Current Affairs\">Current Affairs</mat-radio-button>\n              <mat-radio-button value=\"Science\">Science</mat-radio-button>\n              <mat-radio-button value=\"General Knowdledge\">General Knowdledge</mat-radio-button>\n              <mat-radio-button value=\"History\">History</mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n        <div>\n          <textarea ng-model=\"myTextarea\" cols=133 rows=16 formControlName=\"details\" placeholder=\"News Details\" value=\"\">\n          </textarea>\n          <small *ngIf=\"basicForm.controls['details'].hasError('required') && basicForm.controls['details'].touched\"\n            class=\"form-error-msg\"> Details of this article is required </small>\n        </div>\n      </div>\n    </div>\n\n    <button mat-raised-button color=\"primary\" [disabled]=\"basicForm.invalid\">Save</button>\n  </form>\n</mat-card-content>"

/***/ }),

/***/ "./src/app/aurum/upload-news/upload-news.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/aurum/upload-news/upload-news.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aurum/upload-news/upload-news.component.ts":
/*!************************************************************!*\
  !*** ./src/app/aurum/upload-news/upload-news.component.ts ***!
  \************************************************************/
/*! exports provided: UploadNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadNewsComponent", function() { return UploadNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_news_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/news.model */ "./src/app/aurum/models/news.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadNewsComponent = /** @class */ (function () {
    function UploadNewsComponent() {
    }
    UploadNewsComponent.prototype.ngOnInit = function () {
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    UploadNewsComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        var reader = new FileReader();
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile.name);
        reader.readAsDataURL(this.selectedFile);
        reader.onload = function (_event) {
            _this.url = reader.result;
            if (_this.url)
                _this.isSelected = true;
        };
    };
    UploadNewsComponent.prototype.onSubmitNews = function () {
        this.news = new _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"]();
        console.log("Submit news has been clicked");
        this.news.title = this.basicForm.value["title"];
        this.news.details = this.basicForm.value["details"];
        this.news.date = this.basicForm.value["date"];
        this.news.category = this.basicForm.value["category"];
    };
    UploadNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-news',
            template: __webpack_require__(/*! ./upload-news.component.html */ "./src/app/aurum/upload-news/upload-news.component.html"),
            styles: [__webpack_require__(/*! ./upload-news.component.scss */ "./src/app/aurum/upload-news/upload-news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadNewsComponent);
    return UploadNewsComponent;
}());



/***/ }),

/***/ "./src/app/jivdaya/add-volunteer/add-volunteer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/jivdaya/add-volunteer/add-volunteer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Add Volunteer</div>\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"basicForm\" (ngSubmit)=\"onSubmit()\">\n      <div fxLayout=\"row wrap\">\n        <div fxFlex=\"50\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n\n          <!-- Serial Number -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input knifeOnlyNumbers matInput name=\"serialNo\" formControlName=\"serialNo\" placeholder=\"Serial No\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['serialNo'].hasError('required') && basicForm.controls['serialNo'].touched\"\n              class=\"form-error-msg\">Serial Number is needed for a volunteer</small>\n          </div>\n\n          <!-- First NAme -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['firstName'].hasError('required') && basicForm.controls['firstName'].touched\"\n              class=\"form-error-msg\">How can a volunteer be without First name??</small>\n          </div>\n\n          <!-- Last Name -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['lastName'].hasError('required') && basicForm.controls['lastName'].touched\"\n              class=\"form-error-msg\">How can a volunteer be without Last name??</small>\n          </div>\n          <!-- Address Line 1 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"addressLine1\" formControlName=\"addressLine1\" placeholder=\"Address Line 1\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['addressLine1'].hasError('required') && basicForm.controls['addressLine1'].touched\"\n              class=\"form-error-msg\">Address in a line can max be upto 70 chars</small>\n          </div>\n          <!-- Address Line 2 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"addressLine2\" formControlName=\"addressLine2\" placeholder=\"Address Line 2\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['addressLine2'].hasError('required') && basicForm.controls['addressLine2'].touched\"\n              class=\"form-error-msg\">Address in a line can max be upto 70 chars</small>\n          </div>\n          <!-- Address Line 3 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"addressLine3\" formControlName=\"addressLine3\" placeholder=\"Address Line 3\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['addressLine3'].hasError('required') && basicForm.controls['addressLine3'].touched\"\n              class=\"form-error-msg\">Address in a line can max be upto 70 chars</small>\n          </div>\n\n          <!-- This is column inside first column -->\n          <div fxLayout=\"row wrap\">\n            <div fxFlex=\"50\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n              <!-- first column -->\n              <!-- Category -->\n              <div class=\"pb-1\">\n                <Label>Category</Label>\n                <mat-radio-group name=\"receiver\" formControlName=\"category\" fxLayout=\"column\">\n                  <mat-radio-button value=\"Goverment\">Government</mat-radio-button>\n                  <mat-radio-button value=\"NGO\">NGO</mat-radio-button>\n                </mat-radio-group>\n                <small *ngIf=\"basicForm.controls['category'].hasError('required') && basicForm.controls['category'].touched\"\n                  class=\"form-error-msg\">Su Category aave?</small>\n              </div>\n            </div>\n            <!-- second column -->\n            <!-- District  -->\n            <div fxFlex=\"50\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n              <mat-form-field class=\"full-width\">\n                <mat-select formControlName=\"districtData\" placeholder=\"District\" (selectionChange)=\"changeDistrict($event.value)\">\n                  <mat-option *ngFor=\"let district of districts\" [value]=\"district\">\n                    {{district}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <small *ngIf=\"basicForm.controls['districtData'].hasError('required') && basicForm.controls['districtData'].touched\"\n                class=\"form-error-msg\">District su che??</small>\n\n              <!-- tehsils -->\n              <div class=\"pb-1\">\n                <br />\n                <mat-form-field class=\"full-width\">\n                  <mat-select formControlName=\"tehsilData\" placeholder=\"Tehsil\" (selectionChange)=\"changeTehsil($event.value)\">\n                    <mat-option *ngFor=\"let tehsil of tehsils\" [value]=\"tehsil\">\n                      {{tehsil}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <small *ngIf=\"basicForm.controls['tehsilData'].hasError('required') && basicForm.controls['tehsilData'].touched\"\n                  class=\"form-error-msg\">Tehsil su che??</small>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- Second column is here -->\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n          <!-- Phone 1 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone1\" formControlName=\"phone1\" placeholder=\"Phone 1\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone1'].hasError('required') && basicForm.controls['phone1'].touched\"\n              class=\"form-error-msg\">Phone 1 is a mandatory field</small>\n          </div>\n          <!-- Phone 2 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone2\" formControlName=\"phone2\" placeholder=\"Phone 2\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone2'].hasError('required') && basicForm.controls['phone2'].touched\"\n              class=\"form-error-msg\">Phone 2 should be of max 11 chars</small>\n          </div>\n          <!-- Phone 3 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone3\" formControlName=\"phone3\" placeholder=\"Phone 3\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone3'].hasError('required') && basicForm.controls['phone3'].touched\"\n              class=\"form-error-msg\">Phone 3 should be of max 11 chars</small>\n          </div>\n          <!-- Phone 4 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone4\" formControlName=\"phone4\" placeholder=\"Phone 4\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone4'].hasError('required') && basicForm.controls['phone4'].touched\"\n              class=\"form-error-msg\">Phone 4 should be of max 11 chars</small>\n          </div>\n          <!-- Email 1 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"email1\" formControlName=\"email1\" placeholder=\"Email 1\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['email1'].hasError('required') && basicForm.controls['email1'].touched\"\n              class=\"form-error-msg\">dude, please enter a valid email</small>\n          </div>\n          <!-- Email 2 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"email2\" formControlName=\"email2\" placeholder=\"Email 2\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['email2'].hasError('required') && basicForm.controls['email2'].touched\"\n              class=\"form-error-msg\">dude, please enter a valid email</small>\n          </div>\n          <!-- Designation -->\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"designation\" formControlName=\"designation\" placeholder=\"Designation\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['designation'].hasError('required') && basicForm.controls['designation'].touched\"\n              class=\"form-error-msg\">Nerd, where is the designation</small>\n          </div>\n          <!-- Description -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"description\" formControlName=\"description\" placeholder=\"Description\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['description'].hasError('required') && basicForm.controls['description'].touched\"\n              class=\"form-error-msg\">Nerd, where is the description</small>\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n\n      <button mat-raised-button color=\"primary\" [disabled]=\"basicForm.invalid\">Submit</button>\n    </form>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/jivdaya/add-volunteer/add-volunteer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/jivdaya/add-volunteer/add-volunteer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jivdaya/add-volunteer/add-volunteer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/jivdaya/add-volunteer/add-volunteer.component.ts ***!
  \******************************************************************/
/*! exports provided: AddVolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVolunteerComponent", function() { return AddVolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_city_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/city.data */ "./src/app/jivdaya/data/city.data.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _volunteer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../volunteer.service */ "./src/app/jivdaya/volunteer.service.ts");
/* harmony import */ var _models_volunteer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/volunteer */ "./src/app/jivdaya/models/volunteer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddVolunteerComponent = /** @class */ (function () {
    function AddVolunteerComponent(volunteerService, router, loader) {
        this.volunteerService = volunteerService;
        this.router = router;
        this.loader = loader;
        this.formData = {};
        this.console = console;
        this.isSaved = false;
        this.districts = _data_city_data__WEBPACK_IMPORTED_MODULE_4__["cityList"];
    }
    AddVolunteerComponent.prototype.ngOnInit = function () {
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            serialNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            phone3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            phone4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            email1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            email2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            addressLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70)]),
            addressLine2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70)]),
            addressLine3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70)]),
            tehsilData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            districtData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    AddVolunteerComponent.prototype.changeDistrict = function (data) {
        console.log("District has been selected");
        console.log(data);
        this.tehsils = Object(_data_city_data__WEBPACK_IMPORTED_MODULE_4__["getTehsil"])(data);
        this.district = data;
    };
    AddVolunteerComponent.prototype.changeTehsil = function (data) {
        console.log("Tehsil has been selected");
        console.log(data);
        this.tehsil = data;
    };
    AddVolunteerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.volunteer = new _models_volunteer__WEBPACK_IMPORTED_MODULE_7__["VolunteerModel"]();
        this.progressBar.mode = "indeterminate";
        this.volunteer.serialNo = this.basicForm.value["serialNo"];
        this.volunteer.firstName = this.basicForm.value["firstName"];
        this.volunteer.lastName = this.basicForm.value["lastName"];
        this.volunteer.designation = this.basicForm.value["designation"];
        this.volunteer.description = this.basicForm.value["description"];
        this.volunteer.category = this.basicForm.value["category"];
        this.volunteer.phone1 = this.basicForm.value["phone1"];
        this.volunteer.phone2 = this.basicForm.value["phone2"];
        this.volunteer.phone3 = this.basicForm.value["phone3"];
        this.volunteer.phone4 = this.basicForm.value["phone4"];
        this.volunteer.email1 = this.basicForm.value["email1"];
        this.volunteer.email2 = this.basicForm.value["email2"];
        this.volunteer.addressLine1 = this.basicForm.value["addressLine1"];
        this.volunteer.addressLine2 = this.basicForm.value["addressLine2"];
        this.volunteer.addressLine3 = this.basicForm.value["addressLine3"];
        this.volunteer.tehsil = this.tehsil;
        this.volunteer.district = this.district;
        this.isSaved = true; // it is time to save some data    
        if (this.isSaved) {
            this.volunteerService
                .createVolunteer(this.volunteer)
                .then(function () {
                _this.loader.open("Creating Volunteer");
                setTimeout(function () {
                    _this.loader.close();
                }, 1000);
                _this.basicForm.reset();
                _this.basicForm.pristine;
                _this.progressBar.mode = "determinate";
            })
                .catch(function () {
                _this.progressBar.mode = null;
                _this.isSaved = false;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"])
    ], AddVolunteerComponent.prototype, "progressBar", void 0);
    AddVolunteerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-volunteer',
            template: __webpack_require__(/*! ./add-volunteer.component.html */ "./src/app/jivdaya/add-volunteer/add-volunteer.component.html"),
            styles: [__webpack_require__(/*! ./add-volunteer.component.scss */ "./src/app/jivdaya/add-volunteer/add-volunteer.component.scss")]
        }),
        __metadata("design:paramtypes", [_volunteer_service__WEBPACK_IMPORTED_MODULE_6__["VolunteerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"]])
    ], AddVolunteerComponent);
    return AddVolunteerComponent;
}());



/***/ }),

/***/ "./src/app/jivdaya/data/city.data.ts":
/*!*******************************************!*\
  !*** ./src/app/jivdaya/data/city.data.ts ***!
  \*******************************************/
/*! exports provided: cityList, kutch, ahmedabad, banaskantha, patan, mehsana, sabarkantha, gandhinagar, surendranagar, rajkot, jamnagar, porbandar, junagadh, amreli, bhavnagar, anand, kheda, panchmahal, dahod, vadadora, narmada, bharuch, surat, dang, navsari, valsad, tapi, getTehsil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityList", function() { return cityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kutch", function() { return kutch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ahmedabad", function() { return ahmedabad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banaskantha", function() { return banaskantha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patan", function() { return patan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mehsana", function() { return mehsana; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sabarkantha", function() { return sabarkantha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gandhinagar", function() { return gandhinagar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surendranagar", function() { return surendranagar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rajkot", function() { return rajkot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jamnagar", function() { return jamnagar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "porbandar", function() { return porbandar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "junagadh", function() { return junagadh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amreli", function() { return amreli; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bhavnagar", function() { return bhavnagar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anand", function() { return anand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kheda", function() { return kheda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panchmahal", function() { return panchmahal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dahod", function() { return dahod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vadadora", function() { return vadadora; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "narmada", function() { return narmada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bharuch", function() { return bharuch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surat", function() { return surat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dang", function() { return dang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navsari", function() { return navsari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valsad", function() { return valsad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapi", function() { return tapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTehsil", function() { return getTehsil; });
var cityList = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Dahod",
    "Dang",
    "Gandhinagar",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mehsana",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
];
var kutch = [
    "Abadasa",
    "Anjar",
    "Bhachau",
    "Bhuj",
    "Gandhidham",
    "Lakhapat",
    "Mandavi",
    "Mundra",
    "Nakhatrana",
    "Rapar",
];
var ahmedabad = [
    "Ahmedabad City",
    "Barvala",
    "Bavala",
    "Daskroi",
    "Detroj-Rampura",
    "Dhandhuka",
    "Dholaka",
    "Mandal",
    "Ranpur",
    "Sanad",
    "Viramgam",
];
var banaskantha = [
    "Amirgadh",
    "Bhabhar",
    "Danta",
    "Dantiwada",
    "Deesa",
    "Dhanera",
    "Diodar",
    "Kankrej",
    "Palanpur",
    "Tharad",
    "Vadgam",
];
var patan = [
    "Chanasma",
    "Harij",
    "Patan",
    "Radhanpur",
    "Sami",
    "Santalpur",
    "Siddhpur",
    "Vagdod",
];
var mehsana = [
    "Becharaji",
    "Kadi",
    "Kheralu",
    "Mehsana",
    "Satalasana",
    "Unjha",
    "Vadnagar",
    "Vijapur",
    "Visnagar",
];
var sabarkantha = [
    "Bayad",
    "Bhiloda",
    "Dhansura",
    "Himmatnagar",
    "Idar",
    "Khedbrahma",
    "Malpur",
    "Meghraj",
    "Modasa",
    "Prantij",
    "Talod",
    "Vadali",
    "Vijaynagar",
];
var gandhinagar = [
    "Dehgam",
    "Gandhinagar",
    "Kalol",
    "Mansa",
];
var surendranagar = [
    "Chotila",
    "Chuda",
    "Dasada",
    "Dhangadhara",
    "Halavad",
    "Lakhatar",
    "Limbdi",
    "Muli",
    "Sayala",
    "Vadhvan",
];
var rajkot = [
    "Dhoraji",
    "Gondal",
    "Jamkandorna",
    "Jasdan",
    "Jetpur",
    "Kotada sangani",
    "Lodhika",
    "Maliya",
    "Morbi",
    "Padadhari",
    "Rajkot",
    "Tankara",
    "Upexport consta",
    "Vankaner",
];
var jamnagar = [
    "Bhanvad",
    "Dhrol",
    "Jam-Jodhpur",
    "Jamnagar",
    "Jodiya",
    "Kalavad",
    "Kalyanpur",
    "Khambhaliya",
    "Lalpur",
    "Okhamandal",
];
var porbandar = [
    "Kutiyana",
    "Porbandar",
    "Ranavav",
];
var junagadh = [
    "Bhesan",
    "Junagadh",
    "Keshod",
    "Kodinar",
    "Maliya",
    "Manavadar",
    "Mangrol",
    "Medarada",
    "Sutrapada",
    "Talala",
    "Una",
    "Vanthali",
    "Veraval",
    "Visavdar",
];
var amreli = [
    "Amreli",
    "Babra",
    "Bagsara",
    "Dhari",
    "Jafarabad",
    "Khambha",
    "Kunkavav",
    "Lathi",
    "Liliya",
    "Rajula",
    "Savarkundala",
];
var bhavnagar = [
    "Bhavnagar",
    "Botad",
    "Gadhada",
    "Gariyadhar",
    "Ghogha",
    "Mahuva",
    "Palitana",
    "Shihor",
    "Talaja",
    "Umarala",
    "Vallabhipur",
];
var anand = [
    "Aaklav",
    "Anand",
    "Borsad",
    "Khambhat",
    "Petlad",
    "Sojitra",
    "Tarapur",
    "Umreth",
];
var kheda = [
    "Balasinor",
    "Kapadvanj",
    "Kathlal",
    "Kheda",
    "Mahudha",
    "Matar",
    "Mehmedabad",
    "Nadiyad",
    "Thasra",
    "Virpur",
];
var panchmahal = [
    "Ghoghamba",
    "Godhra",
    "Halol",
    "Jambughoda",
    "Kadana",
    "Kalol",
    "Khanpur",
    "Lunavada",
    "Morva (Hadaf)",
    "Santrampur",
    "Shahera",
];
var dahod = [
    "Dahod",
    "Devgadhbaria",
    "Dhanpur",
    "Fattehpura",
    "Garbada",
    "Jhalod",
    "Limkheda",
];
var vadadora = [
    "Chhotaudepur",
    "Dabhoi",
    "Jetpur-Pavi",
    "Karjan",
    "Kavant",
    "Nasavadi",
    "Padra",
    "Sankheda",
    "Savli",
    "Shinor",
    "Vadodara",
    "Vaghodia",
];
var narmada = [
    "Dediyapada",
    "Nadod",
    "Sagbara",
    "Tilakvada",
];
var bharuch = [
    "Amod",
    "Ankleshwar",
    "Bharuch",
    "Hansot",
    "Jambusar",
    "Jhaghadiya",
    "Vagara",
    "Valiya",
];
var surat = [
    "Bardoli",
    "Choryasi",
    "Kamrej",
    "Mahuva",
    "Mandavi",
    "Mangarol",
    "Olapad",
    "Palsana",
    "Surat City",
    "Umarpada",
];
var dang = ["Dang"];
var navsari = [
    "Bansda",
    "Chikhali",
    "Gandevi",
    "Jalalpor",
    "Navsari",
];
var valsad = [
    "Dharampur",
    "Kaparada",
    "Pardi (M)",
    "Umbergaon",
    "Valsad",
];
var tapi = [
    "Nijar",
    "Songadh",
    "Uchchal",
    "Valod",
    "Vyara",
];
function getTehsil(city) {
    var cityName = city.toUpperCase();
    var talukaList;
    switch (cityName) {
        case "AHMEDABAD":
            talukaList = ahmedabad;
            break;
        case "AMRELI":
            talukaList = amreli;
            break;
        case "ANAND":
            talukaList = anand;
            break;
        case "BANASKANTHA":
            talukaList = banaskantha;
            break;
        case "BHARUCH":
            talukaList = bharuch;
            break;
        case "BHAVNAGAR":
            talukaList = bhavnagar;
            break;
        case "DAHOD":
            talukaList = dahod;
            break;
        case "DANG":
            talukaList = dang;
            break;
        case "GANDHINAGAR":
            talukaList = gandhinagar;
            break;
        case "JAMNAGAR":
            talukaList = jamnagar;
            break;
        case "JUNAGADH":
            talukaList = junagadh;
            break;
        case "KHEDA":
            talukaList = kheda;
            break;
        case "KUTCH":
            talukaList = kutch;
            break;
        case "MEHSANA":
            talukaList = mehsana;
            break;
        case "NARMADA":
            talukaList = narmada;
            break;
        case "NAVSARI":
            talukaList = navsari;
            break;
        case "PANCHMAHAL":
            talukaList = panchmahal;
            break;
        case "PATAN":
            talukaList = patan;
            break;
        case "PORBANDAR":
            talukaList = porbandar;
            break;
        case "RAJKOT":
            talukaList = rajkot;
            break;
        case "SABARKANTHA":
            talukaList = sabarkantha;
            break;
        case "SURAT":
            talukaList = surat;
            break;
        case "SURENDRANAGAR":
            talukaList = surendranagar;
            break;
        case "TAPI":
            talukaList = tapi;
            break;
        case "VADODARA":
            talukaList = vadadora;
            break;
        case "VALSAD":
            talukaList = valsad;
            break;
    }
    return talukaList;
}


/***/ }),

/***/ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/jivdaya/edit-volunteer/edit-volunteer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Add Volunteer</div>\n    <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <form [formGroup]=\"basicForm\" (ngSubmit)=\"onSubmit()\">\n      <div fxLayout=\"row wrap\">\n        <div fxFlex=\"50\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n\n          <!-- Serial Number -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input knifeOnlyNumbers matInput name=\"serialNo\" formControlName=\"serialNo\" placeholder=\"Serial No\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['serialNo'].hasError('required') && basicForm.controls['serialNo'].touched\"\n              class=\"form-error-msg\">Serial Number is needed for a volunteer</small>\n          </div>\n\n          <!-- First NAme -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['firstName'].hasError('required') && basicForm.controls['firstName'].touched\"\n              class=\"form-error-msg\">How can a volunteer be without First name??</small>\n          </div>\n\n          <!-- Last Name -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['lastName'].hasError('required') && basicForm.controls['lastName'].touched\"\n              class=\"form-error-msg\">How can a volunteer be without Last name??</small>\n          </div>\n          <!-- Address Line 1 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"addressLine1\" formControlName=\"addressLine1\" placeholder=\"Address Line 1\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['addressLine1'].hasError('required') && basicForm.controls['addressLine1'].touched\"\n              class=\"form-error-msg\">Address in a line can max be upto 70 chars</small>\n          </div>\n          <!-- Address Line 2 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"addressLine2\" formControlName=\"addressLine2\" placeholder=\"Address Line 2\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['addressLine2'].hasError('required') && basicForm.controls['addressLine2'].touched\"\n              class=\"form-error-msg\">Address in a line can max be upto 70 chars</small>\n          </div>\n          <!-- Address Line 3 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"addressLine3\" formControlName=\"addressLine3\" placeholder=\"Address Line 3\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['addressLine3'].hasError('required') && basicForm.controls['addressLine3'].touched\"\n              class=\"form-error-msg\">Address in a line can max be upto 70 chars</small>\n          </div>\n\n          <!-- This is column inside first column -->\n          <div fxLayout=\"row wrap\">\n            <div fxFlex=\"50\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n              <!-- first column -->\n              <!-- Category -->\n              <div class=\"pb-1\">\n                <Label>Category</Label>\n                <mat-radio-group name=\"receiver\" formControlName=\"category\" fxLayout=\"column\">\n                  <mat-radio-button value=\"Goverment\">Government</mat-radio-button>\n                  <mat-radio-button value=\"NGO\">NGO</mat-radio-button>\n                </mat-radio-group>\n                <small *ngIf=\"basicForm.controls['category'].hasError('required') && basicForm.controls['category'].touched\"\n                  class=\"form-error-msg\">Su Category aave?</small>\n              </div>\n            </div>\n            <!-- second column -->\n            <!-- District  -->\n            <div fxFlex=\"50\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n              <mat-form-field class=\"full-width\">\n                <mat-select formControlName=\"districtData\" placeholder=\"District\" (selectionChange)=\"changeDistrict($event.value)\">\n                  <mat-option *ngFor=\"let district of districts\" [value]=\"district\">\n                    {{district}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              <small *ngIf=\"basicForm.controls['districtData'].hasError('required') && basicForm.controls['districtData'].touched\"\n                class=\"form-error-msg\">District su che??</small>\n\n              <!-- tehsils -->\n              <div class=\"pb-1\">\n                <br />\n                <mat-form-field class=\"full-width\">\n                  <mat-select formControlName=\"tehsilData\" placeholder=\"Tehsil\" (selectionChange)=\"changeTehsil($event.value)\">\n                    <mat-option *ngFor=\"let tehsil of tehsils\" [value]=\"tehsil\">\n                      {{tehsil}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <small *ngIf=\"basicForm.controls['tehsilData'].hasError('required') && basicForm.controls['tehsilData'].touched\"\n                  class=\"form-error-msg\">Tehsil su che??</small>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- Second column is here -->\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\n          <!-- Phone 1 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone1\" formControlName=\"phone1\" placeholder=\"Phone 1\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone1'].hasError('required') && basicForm.controls['phone1'].touched\"\n              class=\"form-error-msg\">Phone 1 is a mandatory field</small>\n          </div>\n          <!-- Phone 2 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone2\" formControlName=\"phone2\" placeholder=\"Phone 2\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone2'].hasError('required') && basicForm.controls['phone2'].touched\"\n              class=\"form-error-msg\">Phone 2 should be of max 11 chars</small>\n          </div>\n          <!-- Phone 3 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone3\" formControlName=\"phone3\" placeholder=\"Phone 3\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone3'].hasError('required') && basicForm.controls['phone3'].touched\"\n              class=\"form-error-msg\">Phone 3 should be of max 11 chars</small>\n          </div>\n          <!-- Phone 4 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"phone4\" formControlName=\"phone4\" placeholder=\"Phone 4\" value=\"\" maxlength=\"11\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['phone4'].hasError('required') && basicForm.controls['phone4'].touched\"\n              class=\"form-error-msg\">Phone 4 should be of max 11 chars</small>\n          </div>\n          <!-- Email 1 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"email1\" formControlName=\"email1\" placeholder=\"Email 1\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['email1'].hasError('required') && basicForm.controls['email1'].touched\"\n              class=\"form-error-msg\">dude, please enter a valid email</small>\n          </div>\n          <!-- Email 2 -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"email2\" formControlName=\"email2\" placeholder=\"Email 2\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['email2'].hasError('required') && basicForm.controls['email2'].touched\"\n              class=\"form-error-msg\">dude, please enter a valid email</small>\n          </div>\n          <!-- Designation -->\n\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"designation\" formControlName=\"designation\" placeholder=\"Designation\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['designation'].hasError('required') && basicForm.controls['designation'].touched\"\n              class=\"form-error-msg\">Nerd, where is the designation</small>\n          </div>\n          <!-- Description -->\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"description\" formControlName=\"description\" placeholder=\"Description\" value=\"\">\n            </mat-form-field>\n            <small *ngIf=\"basicForm.controls['description'].hasError('required') && basicForm.controls['description'].touched\"\n              class=\"form-error-msg\">Nerd, where is the description</small>\n          </div>\n        </div>\n      </div>\n      <button mat-raised-button color=\"primary\" [disabled]=\"basicForm.invalid\">Update</button>\n    </form>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/jivdaya/edit-volunteer/edit-volunteer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/jivdaya/edit-volunteer/edit-volunteer.component.ts ***!
  \********************************************************************/
/*! exports provided: EditVolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVolunteerComponent", function() { return EditVolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _volunteer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../volunteer.service */ "./src/app/jivdaya/volunteer.service.ts");
/* harmony import */ var _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
/* harmony import */ var _data_city_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/city.data */ "./src/app/jivdaya/data/city.data.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditVolunteerComponent = /** @class */ (function () {
    function EditVolunteerComponent(volunteerService, router, route, location, loader) {
        var _this = this;
        this.volunteerService = volunteerService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.loader = loader;
        this.formData = {};
        this.console = console;
        this.isSaved = false;
        this.districts = _data_city_data__WEBPACK_IMPORTED_MODULE_6__["cityList"];
        this.route.queryParams.subscribe(function (params) {
            _this.docId = params["docId"];
        });
    }
    EditVolunteerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.volunteerService.getOneVolunteer(this.docId).subscribe(function (volunt) {
            _this.volunteer = volunt;
            _this.volunteer.docId = _this.docId;
            _this.district = volunt.district;
            _this.tehsil = volunt.tehsil;
            _this.changeDistrict(_this.district);
            _this.populateFormData();
        });
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            serialNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            phone3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            phone4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            email1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            email2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            addressLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70)]),
            addressLine2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70)]),
            addressLine3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(70)]),
            tehsilData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            districtData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    EditVolunteerComponent.prototype.populateFormData = function () {
        this.basicForm.patchValue({
            serialNo: this.volunteer.serialNo,
            firstName: this.volunteer.firstName,
            lastName: this.volunteer.lastName,
            designation: this.volunteer.designation,
            description: this.volunteer.description,
            category: this.volunteer.category,
            phone1: this.volunteer.phone1,
            phone2: this.volunteer.phone2,
            phone3: this.volunteer.phone3,
            phone4: this.volunteer.phone4,
            email1: this.volunteer.email1,
            email2: this.volunteer.email2,
            addressLine1: this.volunteer.addressLine1,
            addressLine2: this.volunteer.addressLine2,
            addressLine3: this.volunteer.addressLine3,
            districtData: this.district,
            tehsilData: this.volunteer.tehsil
        });
    };
    EditVolunteerComponent.prototype.changeDistrict = function (data) {
        console.log("District has been selected");
        console.log(data);
        this.tehsils = Object(_data_city_data__WEBPACK_IMPORTED_MODULE_6__["getTehsil"])(data);
        this.district = data;
    };
    EditVolunteerComponent.prototype.changeTehsil = function (data) {
        console.log("Tehsil has been selected");
        console.log(data);
        this.tehsil = data;
    };
    EditVolunteerComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("submitting for update");
        console.log(this.volunteer.docId);
        console.log(this.volunteer.serialNo);
        console.log(this.volunteer.lastName);
        this.volunteer.serialNo = this.basicForm.value["serialNo"];
        this.volunteer.firstName = this.basicForm.value["firstName"];
        this.volunteer.lastName = this.basicForm.value["lastName"];
        this.volunteer.designation = this.basicForm.value["designation"];
        this.volunteer.description = this.basicForm.value["description"];
        this.volunteer.category = this.basicForm.value["category"];
        this.volunteer.phone1 = this.basicForm.value["phone1"];
        this.volunteer.phone2 = this.basicForm.value["phone2"];
        this.volunteer.phone3 = this.basicForm.value["phone3"];
        this.volunteer.phone4 = this.basicForm.value["phone4"];
        this.volunteer.email1 = this.basicForm.value["email1"];
        this.volunteer.email2 = this.basicForm.value["email2"];
        this.volunteer.addressLine1 = this.basicForm.value["addressLine1"];
        this.volunteer.addressLine2 = this.basicForm.value["addressLine2"];
        this.volunteer.addressLine3 = this.basicForm.value["addressLine3"];
        this.volunteer.tehsil = this.tehsil;
        this.volunteer.district = this.district;
        this.volunteerService.updateVolunteer(this.volunteer)
            .then(function () {
            console.log("Volunteer is updated");
            _this.location.back();
        })
            .catch(function (err) {
            console.log("No update is made for volunteer");
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"])
    ], EditVolunteerComponent.prototype, "progressBar", void 0);
    EditVolunteerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-volunteer',
            template: __webpack_require__(/*! ./edit-volunteer.component.html */ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.html"),
            styles: [__webpack_require__(/*! ./edit-volunteer.component.scss */ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.scss")]
        }),
        __metadata("design:paramtypes", [_volunteer_service__WEBPACK_IMPORTED_MODULE_4__["VolunteerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"]])
    ], EditVolunteerComponent);
    return EditVolunteerComponent;
}());



/***/ }),

/***/ "./src/app/jivdaya/jivdaya.module.ts":
/*!*******************************************!*\
  !*** ./src/app/jivdaya/jivdaya.module.ts ***!
  \*******************************************/
/*! exports provided: JivdayaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JivdayaModule", function() { return JivdayaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_knife__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-knife */ "./node_modules/ng-knife/fesm5/ng-knife.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _add_volunteer_add_volunteer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-volunteer/add-volunteer.component */ "./src/app/jivdaya/add-volunteer/add-volunteer.component.ts");
/* harmony import */ var _view_volunteer_view_volunteer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-volunteer/view-volunteer.component */ "./src/app/jivdaya/view-volunteer/view-volunteer.component.ts");
/* harmony import */ var _edit_volunteer_edit_volunteer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-volunteer/edit-volunteer.component */ "./src/app/jivdaya/edit-volunteer/edit-volunteer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var JivdayaModule = /** @class */ (function () {
    function JivdayaModule() {
    }
    JivdayaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ng_knife__WEBPACK_IMPORTED_MODULE_3__["NgKnifeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ],
            declarations: [_add_volunteer_add_volunteer_component__WEBPACK_IMPORTED_MODULE_7__["AddVolunteerComponent"], _view_volunteer_view_volunteer_component__WEBPACK_IMPORTED_MODULE_8__["ViewVolunteerComponent"], _edit_volunteer_edit_volunteer_component__WEBPACK_IMPORTED_MODULE_9__["EditVolunteerComponent"]],
        })
    ], JivdayaModule);
    return JivdayaModule;
}());



/***/ }),

/***/ "./src/app/jivdaya/models/volunteer.ts":
/*!*********************************************!*\
  !*** ./src/app/jivdaya/models/volunteer.ts ***!
  \*********************************************/
/*! exports provided: VolunteerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerModel", function() { return VolunteerModel; });
var VolunteerModel = /** @class */ (function () {
    function VolunteerModel() {
    }
    return VolunteerModel;
}());



/***/ }),

/***/ "./src/app/jivdaya/view-volunteer/view-volunteer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/jivdaya/view-volunteer/view-volunteer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"margin-333\" style=\"width: 100%\">\n  <input matInput placeholder=\"Type to search for a volunteer\" value=\"\" (keyup)='updateFilter($event)'>\n</mat-form-field>\n\n<div class=\"mat-box-shadow margin-333\">\n  <ngx-datatable class=\"material bg-white\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\n    [limit]=\"10\" [rows]=\"rows\" [columns]=\"columns\" [selected]=\"selected\" [selectionType]=\"'single'\" (select)='onSelect($event)'>\n  </ngx-datatable>\n</div>"

/***/ }),

/***/ "./src/app/jivdaya/view-volunteer/view-volunteer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/jivdaya/view-volunteer/view-volunteer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jivdaya/view-volunteer/view-volunteer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/jivdaya/view-volunteer/view-volunteer.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewVolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVolunteerComponent", function() { return ViewVolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _volunteer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../volunteer.service */ "./src/app/jivdaya/volunteer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewVolunteerComponent = /** @class */ (function () {
    function ViewVolunteerComponent(volunteerService, router) {
        this.volunteerService = volunteerService;
        this.router = router;
        this.rows = [];
        this.columns = [];
        this.temp = [];
        this.selected = [];
    }
    ViewVolunteerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.volunteerService.getAllVolunteers().subscribe(function (volunt) {
            _this.volunteerList = volunt;
            _this.rows = _this.temp = _this.volunteerList;
        });
        this.columns = [
            {
                prop: 'serialNo',
                name: 'Serial No'
            },
            {
                prop: 'firstName',
                name: 'First Name'
            },
            {
                prop: 'lastName',
                name: 'Last Name'
            },
            {
                prop: 'category',
                name: 'Category'
            },
            {
                prop: 'district',
                name: 'District'
            },
            {
                prop: 'tehsil',
                name: 'Tehsil'
            },
            {
                prop: 'phone1',
                name: 'Phone'
            },
        ];
    };
    ViewVolunteerComponent.prototype.updateFilter = function (event) {
        // console.log("--- event is fired ---")
        // console.log(event.target.value.toLowerCase())
        var val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temp[0]);
        // Removes last "$$index" from "column"
        columns.splice(columns.length - 1);
        // console.log(columns);
        if (!columns.length)
            return;
        var rows = this.temp.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.rows = rows;
    }; // updateFilter -- closes here
    ViewVolunteerComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log("A volunteer has been selected");
        console.log(selected[0].docId);
        console.log(selected[0].firstName);
        var navigationExtras = {
            queryParams: {
                docId: selected[0].docId
            }
        };
        this.router.navigate(['edit_volunteer'], navigationExtras);
    };
    ViewVolunteerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-volunteer',
            template: __webpack_require__(/*! ./view-volunteer.component.html */ "./src/app/jivdaya/view-volunteer/view-volunteer.component.html"),
            styles: [__webpack_require__(/*! ./view-volunteer.component.scss */ "./src/app/jivdaya/view-volunteer/view-volunteer.component.scss")]
        }),
        __metadata("design:paramtypes", [_volunteer_service__WEBPACK_IMPORTED_MODULE_1__["VolunteerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewVolunteerComponent);
    return ViewVolunteerComponent;
}());



/***/ }),

/***/ "./src/app/jivdaya/volunteer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/jivdaya/volunteer.service.ts ***!
  \**********************************************/
/*! exports provided: VolunteerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerService", function() { return VolunteerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VolunteerService = /** @class */ (function () {
    function VolunteerService(afs) {
        this.afs = afs;
        this.volunteerCollection = afs.collection("volunteer");
    }
    VolunteerService.prototype.getAllVolunteers = function () {
        console.log("-- in getAllVolunteers() --");
        this.volunteerCollection = this.afs.collection("volunteer", function (ref) {
            return ref.orderBy("district");
        });
        this.volunteerList = this.volunteerCollection.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.docId = a.payload.doc.id;
                return data;
            });
        });
        console.log(this.volunteerList);
        return this.volunteerList;
    };
    VolunteerService.prototype.getOneVolunteer = function (docId) {
        console.log("----- i am getting one Volunteer ----");
        var docRef = this.volunteerCollection.doc(docId);
        this.oneVolunteer = docRef.valueChanges();
        return this.oneVolunteer;
    };
    VolunteerService.prototype.createVolunteer = function (volunteer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("i am in creating volunteer");
                        console.log(volunteer.firstName);
                        return [4 /*yield*/, this.volunteerCollection
                                .add({
                                serialNo: volunteer.serialNo,
                                firstName: volunteer.firstName,
                                lastName: volunteer.lastName,
                                designation: volunteer.designation,
                                description: volunteer.description,
                                category: volunteer.category,
                                phone1: volunteer.phone1,
                                phone2: volunteer.phone2,
                                phone3: volunteer.phone3,
                                phone4: volunteer.phone4,
                                email1: volunteer.email1,
                                email2: volunteer.email2,
                                addressLine1: volunteer.addressLine1,
                                addressLine2: volunteer.addressLine2,
                                addressLine3: volunteer.addressLine3,
                                tehsil: volunteer.tehsil,
                                district: volunteer.district,
                            })
                                .then(function (msg) {
                                console.log("volunteer has been successfully added");
                                console.log(msg);
                            })
                                .catch(function (err) {
                                console.log("There has been an error in creating volunteer");
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VolunteerService.prototype.updateVolunteer = function (volunteer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("i am in updateVolunteer");
                        console.log(volunteer.tehsil);
                        return [4 /*yield*/, this.volunteerCollection.doc(volunteer.docId)
                                .update({
                                serialNo: volunteer.serialNo,
                                firstName: volunteer.firstName,
                                lastName: volunteer.lastName,
                                designation: volunteer.designation,
                                description: volunteer.description,
                                category: volunteer.category,
                                phone1: volunteer.phone1,
                                phone2: volunteer.phone2,
                                phone3: volunteer.phone3,
                                phone4: volunteer.phone4,
                                email1: volunteer.email1,
                                email2: volunteer.email2,
                                addressLine1: volunteer.addressLine1,
                                addressLine2: volunteer.addressLine2,
                                addressLine3: volunteer.addressLine3,
                                tehsil: volunteer.tehsil,
                                district: volunteer.district,
                            })
                                .then(function (msg) {
                                console.log("volunteer has been successfully Updated");
                                console.log(msg);
                            })
                                .catch(function (err) {
                                console.log("There has been an error in creating Updated");
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VolunteerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], VolunteerService);
    return VolunteerService;
}());



/***/ }),

/***/ "./src/app/shared/animations/egret-animations.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/egret-animations.ts ***!
  \*******************************************************/
/*! exports provided: egretAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "egretAnimations", function() { return egretAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var egretAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
];


/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-bar\" *ngIf=\"layout.layoutConf.useBreadcrumb && layout.layoutConf.breadcrumb === 'simple'\">\n  <ul class=\"breadcrumb\">\n    <li *ngFor=\"let part of routeParts\"><a routerLink=\"/{{part.url}}\">{{part.breadcrumb | translate}}</a></li>\n  </ul>\n</div>\n\n<div class=\"breadcrumb-title\" *ngIf=\"layout.layoutConf.useBreadcrumb && layout.layoutConf.breadcrumb === 'title'\">\n  <h1 class=\"bc-title\">{{routeParts[routeParts.length -1]['breadcrumb'] | translate}}</h1>\n  <ul class=\"breadcrumb\" *ngIf=\"routeParts.length > 1\">\n    <li *ngFor=\"let part of routeParts\"><a routerLink=\"/{{part.url}}\" class=\"text-muted\">{{part.breadcrumb | translate}}</a></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/route-parts.service */ "./src/app/shared/services/route-parts.service.ts");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
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





var BreadcrumbComponent = /** @class */ (function () {
    // public isEnabled: boolean = true;
    function BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
        var _this = this;
        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        this.routerEventSub = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);
            // generate url from parts
            _this.routeParts.reverse().map(function (item, i) {
                item.breadcrumb = _this.parseText(item);
                item.urlSegments.forEach(function (urlSegment, j) {
                    if (j === 0)
                        return item.url = "" + urlSegment.path;
                    item.url += "/" + urlSegment.path;
                });
                if (i === 0) {
                    return item;
                }
                // prepend previous part to current part
                item.url = _this.routeParts[i - 1].url + "/" + item.url;
                return item;
            });
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    BreadcrumbComponent.prototype.parseText = function (part) {
        part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
            var r = part.params[b];
            return typeof r === 'string' ? r : a;
        });
        return part.breadcrumb;
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-customizer\">\n  <div class=\"handle\" *ngIf=\"!isCustomizerOpen\">\n    <button \n    mat-fab\n    color=\"warn\" \n    (click)=\"isCustomizerOpen = true\">\n      <mat-icon>settings</mat-icon>\n    </button>\n  </div>\n  <mat-card class=\"p-0\" *ngIf=\"isCustomizerOpen\">\n    <mat-card-title class=\"mat-bg-warn\">\n      <div class=\"card-title-text\">\n        <span>Settings</span>\n        <span fxFlex></span>\n        <button \n        class=\"card-control\" \n        mat-icon-button\n        (click)=\"isCustomizerOpen = false\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </div>\n    </mat-card-title>\n    <mat-card-content>\n      <div class=\"pb-1\">\n        <h5 class=\"mt-0\">Layouts</h5>\n        <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"selectedLayout\" (change)=\"changeLayoutStyle($event)\">\n            <mat-radio-button [value]=\"'top'\"> Top Navigation </mat-radio-button>\n            <mat-radio-button [value]=\"'side'\"> Side Navigation </mat-radio-button>\n        </mat-radio-group>\n      </div>\n      <div class=\"pb-1\">\n        <mat-checkbox [(ngModel)]=\"isTopbarFixed\" (change)=\"toggleTopbarFixed($event)\" [disabled]=\"selectedLayout === 'top'\" [value]=\"selectedLayout !== 'top'\">Fixed Topbar</mat-checkbox>\n      </div>\n      <div class=\"pb-1\">\n        <mat-checkbox [(ngModel)]=\"layoutConf.breadcrumb\" (change)=\"toggleBreadcrumb($event)\">Use breadcrumb</mat-checkbox>\n      </div>\n      <div class=\"pb-1\">\n          <h6 class=\"mt-0\">Breadcrumb Style</h6>\n          <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"layoutConf.breadcrumb\">\n              <mat-radio-button [value]=\"'simple'\"> Simple </mat-radio-button>\n              <mat-radio-button [value]=\"'title'\"> Simple with title </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      <div class=\"pb-1 pos-rel\">\n        <h6 class=\"m-0 pb-1\">Choose a Navigation Style</h6>\n        <mat-radio-group \n        fxLayout=\"column\" \n        [(ngModel)]=\"selectedMenu\" \n        (change)=\"changeSidenav($event)\" \n        [disabled]=\"selectedLayout === 'top'\">\n          <mat-radio-button \n          *ngFor=\"let type of sidenavTypes\" \n          [value]=\"type.value\">\n            {{type.name}}\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n      <mat-divider></mat-divider>\n      \n      <div class=\"pb-1 pt-1\">\n        <mat-checkbox [(ngModel)]=\"isRTL\" (change)=\"toggleDir($event)\">RTL</mat-checkbox>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-customizer {\n  position: fixed;\n  z-index: 100;\n  bottom: 16px;\n  right: 24px; }\n  #app-customizer .handle {\n    float: right; }\n  #app-customizer .mat-card-content {\n    padding: 1rem 1.5rem 2rem; }\n  .pos-rel {\n  position: relative;\n  z-index: 99; }\n  .pos-rel .olay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.5);\n    z-index: 100; }\n"

/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, layout) {
        this.navService = navService;
        this.layout = layout;
        this.isCustomizerOpen = false;
        this.sidenavTypes = [{
                name: 'Default Menu',
                value: 'default-menu'
            }, {
                name: 'Separator Menu',
                value: 'separator-menu'
            }, {
                name: 'Icon Menu',
                value: 'icon-menu'
            }];
        this.selectedMenu = 'icon-menu';
        this.isTopbarFixed = false;
        this.isRTL = false;
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        this.layoutConf = this.layout.layoutConf;
        this.selectedLayout = this.layoutConf.navigationPos;
        this.isTopbarFixed = this.layoutConf.topbarFixed;
        this.isRTL = this.layoutConf.dir === 'rtl';
    };
    CustomizerComponent.prototype.changeLayoutStyle = function (data) {
        this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
    };
    CustomizerComponent.prototype.changeSidenav = function (data) {
        this.navService.publishNavigationChange(data.value);
    };
    CustomizerComponent.prototype.toggleBreadcrumb = function (data) {
        this.layout.publishLayoutChange({ breadcrumb: data.checked });
    };
    CustomizerComponent.prototype.toggleTopbarFixed = function (data) {
        this.layout.publishLayoutChange({ topbarFixed: data.checked });
    };
    CustomizerComponent.prototype.toggleDir = function (data) {
        var dir = data.checked ? 'rtl' : 'ltr';
        this.layout.publishLayoutChange({ dir: dir });
    };
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/shared/components/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/components/customizer/customizer.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header-side/header-side.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/header-side/header-side.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSideComponent", function() { return HeaderSideComponent; });
/* harmony import */ var _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/firebaseauth.service */ "./src/app/shared/services/firebaseauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderSideComponent = /** @class */ (function () {
    function HeaderSideComponent(themeService, layout, translate, renderer, firebaseAuthService) {
        this.themeService = themeService;
        this.layout = layout;
        this.translate = translate;
        this.renderer = renderer;
        this.firebaseAuthService = firebaseAuthService;
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
        this.photoURL = this.firebaseAuthService.data["photoURL"];
    }
    HeaderSideComponent.prototype.ngOnInit = function () {
        this.egretThemes = this.themeService.egretThemes;
        this.layoutConf = this.layout.layoutConf;
        this.translate.use(this.currentLang);
    };
    HeaderSideComponent.prototype.setLang = function (e) {
        console.log(e);
        this.translate.use(this.currentLang);
    };
    HeaderSideComponent.prototype.changeTheme = function (theme) {
        this.themeService.changeTheme(this.renderer, theme);
    };
    HeaderSideComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderSideComponent.prototype.toggleSidenav = function () {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderSideComponent.prototype.toggleCollapse = function () {
        // compact --> full
        if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            }, { transitionClass: true });
        }
        // * --> compact
        this.layout.publishLayoutChange({
            sidebarStyle: 'compact'
        }, { transitionClass: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderSideComponent.prototype, "notificPanel", void 0);
    HeaderSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-side',
            template: __webpack_require__(/*! ./header-side.template.html */ "./src/app/shared/components/header-side/header-side.template.html")
        }),
        __metadata("design:paramtypes", [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseauthService"]])
    ], HeaderSideComponent);
    return HeaderSideComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header-side/header-side.template.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/header-side/header-side.template.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"topbar\">\n  <!-- Sidenav toggle button -->\n  <button\n  *ngIf=\"layoutConf.sidebarStyle !== 'compact'\"\n  mat-icon-button\n  id=\"sidenavToggle\"\n  (click)=\"toggleSidenav()\"\n  matTooltip=\"Toggle Hide/Open\">\n  <mat-icon>menu</mat-icon>\n  </button>\n  <!-- Sidenav toggle collapse -->\n  <button\n  *ngIf=\"layoutConf.sidebarStyle !== 'closed'\"\n  mat-icon-button\n  id=\"collapseToggle\"\n  fxHide.lt-md=\"true\"\n  (click)=\"toggleCollapse()\"\n  matTooltip=\"Toggle Collapse\"\n  class=\"toggle-collapsed\">\n  <mat-icon>chevron_left</mat-icon>\n  </button>\n  <!-- Search form -->\n  <div\n  fxFlex\n  fxHide.lt-sm=\"true\"\n  class=\"search-bar\">\n    <form class=\"top-search-form\">\n      <mat-icon role=\"img\">search</mat-icon>\n      <input autofocus=\"true\" placeholder=\"Search\" type=\"text\">\n    </form>\n  </div>\n  <span fxFlex></span>\n  <!-- Language Switcher -->\n  <mat-select\n  placeholder=\"\"\n  id=\"langToggle\"\n  [style.width]=\"'auto'\"\n  name=\"currentLang\"\n  [(ngModel)]=\"currentLang\"\n  (selectionChange)=\"setLang($event)\">\n    <mat-option\n    *ngFor=\"let lang of availableLangs\"\n    [value]=\"lang.code\" ngDefaultControl>{{ lang.name }}</mat-option>\n  </mat-select>\n  <!-- Theme Switcher -->\n  <button\n  mat-icon-button\n  id=\"schemeToggle\"\n  [style.overflow]=\"'visible'\"\n  matTooltip=\"Color Schemes\"\n  [matMenuTriggerFor]=\"themeMenu\"\n  class=\"topbar-button-right\">\n    <mat-icon>format_color_fill</mat-icon>\n  </button>\n  <mat-menu #themeMenu=\"matMenu\">\n    <mat-grid-list\n    class=\"theme-list\"\n    cols=\"2\"\n    rowHeight=\"48px\">\n      <mat-grid-tile\n      *ngFor=\"let theme of egretThemes\"\n      (click)=\"changeTheme(theme)\">\n        <div mat-menu-item [title]=\"theme.name\">\n          <div [style.background]=\"theme.baseColor\" class=\"egret-swatch\"></div>\n          <mat-icon class=\"active-icon\" *ngIf=\"theme.isActive\">check</mat-icon>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-menu>\n  <!-- Notification toggle button -->\n  <button\n  mat-icon-button\n  matTooltip=\"Notifications\"\n  (click)=\"toggleNotific()\"\n  [style.overflow]=\"'visible'\"\n  class=\"topbar-button-right\">\n    <mat-icon>notifications</mat-icon>\n    <span class=\"notification-number mat-bg-warn\">3</span>\n  </button>\n  <!-- Top left user menu -->\n  <button mat-icon-button [matMenuTriggerFor]=\"accountMenu\" class=\"topbar-button-right img-button\">\n    <img src={{photoURL}} alt=\"\">\n  </button>\n  <mat-menu #accountMenu=\"matMenu\">\n    <button mat-menu-item [routerLink]=\"['/profile/overview']\">\n      <mat-icon>account_box</mat-icon>\n      <span>Profile</span>\n    </button>\n    <button mat-menu-item [routerLink]=\"['/profile/settings']\">\n      <mat-icon>settings</mat-icon>\n      <span>Account Settings</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      <span>Disable alerts</span>\n    </button>\n    <button mat-menu-item [routerLink]=\"['/sessions/signin']\">\n      <mat-icon>exit_to_app</mat-icon>\n      <span>Sign out</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/components/header-top/header-top.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/header-top/header-top.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-topnav mat-elevation-z2\">\n  <div class=\"container\">\n    <div class=\"topnav\">\n      <!-- App Logo -->\n      <div class=\"topbar-branding\">\n        <img src=\"assets/images/logo.png\" alt=\"\" class=\"app-logo\">\n      </div>\n\n      <ul class=\"menu\" *ngIf=\"!layoutConf.isMobile\">\n        <li *ngFor=\"let item of menuItems; let i = index;\">\n          <div *ngIf=\"item.type !== 'separator'\" routerLinkActive=\"open\">\n            <a matRipple routerLink=\"/{{item.state}}\" *ngIf=\"item.type === 'link'\">\n              <mat-icon>{{item.icon}}</mat-icon>\n              {{item.name | translate}}\n            </a>\n            <div *ngIf=\"item.type === 'dropDown'\">\n              <label matRipple for=\"drop-{{i}}\" class=\"toggle\"><mat-icon>{{item.icon}}</mat-icon> {{item.name | translate}}</label>\n              <a matRipple><mat-icon>{{item.icon}}</mat-icon> {{item.name | translate}}</a>\n              <input type=\"checkbox\" id=\"drop-{{i}}\" />\n              <ul>\n                <li *ngFor=\"let itemLvL2 of item.sub; let j = index;\" routerLinkActive=\"open\">\n                  <a matRipple routerLink=\"{{item.state ? '/'+item.state : ''}}/{{itemLvL2.state}}\"\n                  *ngIf=\"itemLvL2.type !== 'dropDown'\">\n                    <mat-icon *ngIf=\"itemLvL2.icon\">{{itemLvL2.icon}}</mat-icon>\n                    {{itemLvL2.name | translate}}\n                  </a>\n\n                  <div *ngIf=\"itemLvL2.type === 'dropDown'\">\n                    <label matRipple for=\"drop-{{i}}{{j}}\" class=\"toggle\">{{itemLvL2.name | translate}}</label>\n                    <a matRipple><mat-icon *ngIf=\"itemLvL2.icon\">{{itemLvL2.icon}}</mat-icon>  {{itemLvL2.name | translate}}</a>\n                    <input type=\"checkbox\" id=\"drop-{{i}}{{j}}\" />\n                    <!-- Level 3 -->\n                    <ul>\n                      <li *ngFor=\"let itemLvL3 of itemLvL2.sub\" routerLinkActive=\"open\">\n                        <a matRipple routerLink=\"{{item.state ? '/'+item.state : ''}}{{itemLvL2.state ? '/'+itemLvL2.state : ''}}/{{itemLvL3.state}}\">\n                          <mat-icon *ngIf=\"itemLvL3.icon\">{{itemLvL3.icon}}</mat-icon>\n                          {{itemLvL3.name | translate}}\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <span fxFlex></span>\n      <!-- End Navigation -->\n\n      <!-- Language Switcher -->\n      <mat-select\n      *ngIf=\"!layoutConf.isMobile\"\n      placeholder=\"\"\n      id=\"langToggle\"\n      [style.width]=\"'auto'\"\n      name=\"currentLang\"\n      [(ngModel)]=\"currentLang\"\n      (selectionChange)=\"setLang()\"\n      class=\"topbar-button-right\">\n        <mat-option\n        *ngFor=\"let lang of availableLangs\"\n        [value]=\"lang.code\" ngDefaultControl>{{ lang.name }}</mat-option>\n      </mat-select>\n      <!-- Theme Switcher -->\n      <button\n      mat-icon-button\n      id=\"schemeToggle\"\n      [style.overflow]=\"'visible'\"\n      matTooltip=\"Color Schemes\"\n      [matMenuTriggerFor]=\"themeMenu\"\n      class=\"topbar-button-right\">\n        <mat-icon>format_color_fill</mat-icon>\n      </button>\n      <mat-menu #themeMenu=\"matMenu\">\n        <mat-grid-list\n        class=\"theme-list\"\n        cols=\"2\"\n        rowHeight=\"48px\">\n          <mat-grid-tile\n          *ngFor=\"let theme of egretThemes\"\n          (click)=\"changeTheme(theme)\">\n            <div mat-menu-item [title]=\"theme.name\">\n              <div [style.background]=\"theme.baseColor\" class=\"egret-swatch\"></div>\n              <mat-icon class=\"active-icon\" *ngIf=\"theme.isActive\">check</mat-icon>\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-menu>\n      <!-- Notification toggle button -->\n      <button\n      mat-icon-button\n      matTooltip=\"Notifications\"\n      (click)=\"toggleNotific()\"\n      [style.overflow]=\"'visible'\"\n      class=\"topbar-button-right\">\n        <mat-icon>notifications</mat-icon>\n        <span class=\"notification-number mat-bg-warn\">3</span>\n      </button>\n      <!-- Top left user menu -->\n      <button mat-icon-button [matMenuTriggerFor]=\"accountMenu\" class=\"topbar-button-right mr-1 img-button\">\n        <img src={{photoURL}} alt=\"\">\n      </button>\n      <mat-menu #accountMenu=\"matMenu\">\n        <button mat-menu-item [routerLink]=\"['/profile/overview']\">\n          <mat-icon>account_box</mat-icon>\n          <span>Profile</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"['/profile/settings']\">\n          <mat-icon>settings</mat-icon>\n          <span>Account Settings</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>notifications_off</mat-icon>\n          <span>Disable alerts</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"['/sessions/signin']\"\n        (click)=\"signOut()\"\n        >\n          <mat-icon>exit_to_app</mat-icon>\n          (click)=\"signOut()\"\n          <span>Sign out</span>\n        </button>\n      </mat-menu>\n      <!-- Mobile screen menu toggle -->\n      <button\n      mat-icon-button\n      class=\"mr-1\"\n      (click)=\"toggleSidenav()\"\n      *ngIf=\"layoutConf.isMobile\">\n        <mat-icon>menu</mat-icon>\n      </button>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/header-top/header-top.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/header-top/header-top.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return HeaderTopComponent; });
/* harmony import */ var _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/firebaseauth.service */ "./src/app/shared/services/firebaseauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/shared/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderTopComponent = /** @class */ (function () {
    function HeaderTopComponent(layout, navService, themeService, translate, renderer, firebaseAuthService) {
        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.firebaseAuthService = firebaseAuthService;
        this.egretThemes = [];
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
        this.photoURL = this.firebaseAuthService.data["photoURL"];
    }
    HeaderTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConf = this.layout.layoutConf;
        this.egretThemes = this.themeService.egretThemes;
        this.menuItemSub = this.navService.menuItems$
            .subscribe(function (res) {
            res = res.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
            var limit = 4;
            var mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return _this.menuItems = mainItems;
            }
            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            _this.menuItems = mainItems;
        });
    };
    HeaderTopComponent.prototype.ngOnDestroy = function () {
        this.menuItemSub.unsubscribe();
    };
    HeaderTopComponent.prototype.setLang = function () {
        this.translate.use(this.currentLang);
    };
    HeaderTopComponent.prototype.changeTheme = function (theme) {
        this.themeService.changeTheme(this.renderer, theme);
    };
    HeaderTopComponent.prototype.toggleNotific = function () {
        this.notificPanel.toggle();
    };
    HeaderTopComponent.prototype.toggleSidenav = function () {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    HeaderTopComponent.prototype.signOut = function () {
        this.firebaseAuthService.logOut();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderTopComponent.prototype, "notificPanel", void 0);
    HeaderTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-top',
            template: __webpack_require__(/*! ./header-top.component.html */ "./src/app/shared/components/header-top/header-top.component.html")
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"],
            _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseauthService"]])
    ], HeaderTopComponent);
    return HeaderTopComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import PerfectScrollbar from 'perfect-scrollbar';


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, translate, themeService, layout, media) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.themeService = themeService;
        this.layout = layout;
        this.media = media;
        this.isModuleLoading = false;
        // private sidebarPS: PerfectScrollbar;
        // private bodyPS: PerfectScrollbar;
        // private headerFixedBodyPS: PerfectScrollbar;
        this.scrollConfig = {};
        this.layoutConf = {};
        // Close sidenav after route change in mobile
        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.layout.adjustLayout({ route: routeChange.url });
        });
        // Translator init
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutConf = this.layout.layoutConf;
        // this.layout.adjustLayout();
        // console.log(this.layoutConf)
        // FOR MODULE LOADER FLAG
        this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                _this.isModuleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                _this.isModuleLoading = false;
            }
        });
    };
    AdminLayoutComponent.prototype.onResize = function (event) {
        this.layout.adjustLayout(event);
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        // this.layoutConfSub = this.layout.layoutConf$.subscribe(change => {
        //   // this.initBodyPS(change)
        // })
    };
    // initBodyPS(layoutConf:any = {}) {
    //   if(layoutConf.navigationPos === 'side' && layoutConf.topbarFixed) {
    //     if (this.bodyPS) this.bodyPS.destroy();
    //     if (this.headerFixedBodyPS) this.headerFixedBodyPS.destroy();
    //     this.headerFixedBodyPS = new PerfectScrollbar('.rightside-content-hold', {
    //       suppressScrollX: true
    //     });
    //     this.scrollToTop('.rightside-content-hold');
    //   } else {
    //     if (this.bodyPS) this.bodyPS.destroy();
    //     if (this.headerFixedBodyPS) this.headerFixedBodyPS.destroy();
    //     this.bodyPS = new PerfectScrollbar('.main-content-wrap', {
    //       suppressScrollX: true
    //     });
    //     this.scrollToTop('.main-content-wrap');
    //   }
    // }
    AdminLayoutComponent.prototype.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
        }
        if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
        }
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    };
    AdminLayoutComponent.prototype.closeSidebar = function () {
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "onResize", null);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.template.html */ "./src/app/shared/components/layouts/admin-layout/admin-layout.template.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout/admin-layout.template.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.template.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-admin-wrap\" [dir]='layoutConf.dir'>\n  <!-- Header for top navigation layout -->\n  <!-- ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT -->\n  <app-header-top \n    *ngIf=\"layoutConf.navigationPos === 'top'\" \n    [notificPanel]=\"notificationPanel\">\n  </app-header-top>\n  <!-- Main Container -->\n  <mat-sidenav-container \n  [dir]='layoutConf.dir'\n  class=\"app-admin-container app-side-nav-container mat-drawer-transition\"\n  [ngClass]=\"{\n    'navigation-top': layoutConf.navigationPos === 'top',\n    'sidebar-full': layoutConf.sidebarStyle === 'full',\n    'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',\n    'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',\n    'layout-intransition': layoutConf.layoutInTransition,\n    'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',\n    'sidebar-closed': layoutConf.sidebarStyle === 'closed',\n    'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'\n  }\">\n  <!-- SIDEBAR -->\n  <!-- ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT -->\n  <app-sidebar-side *ngIf=\"layoutConf.navigationPos === 'side'\"></app-sidebar-side>\n  \n  <!-- Top navigation layout (navigation for mobile screen) -->\n  <!-- ONLY REQUIRED FOR **TOP** NAVIGATION MOBILE LAYOUT -->\n  <app-sidebar-top *ngIf=\"layoutConf.navigationPos === 'top' && layoutConf.isMobile\"></app-sidebar-top>\n\n    <!-- App content -->\n    <div class=\"main-content-wrap\" [perfectScrollbar]=\"scrollConfig\" [disabled]=\"layoutConf.topbarFixed\">\n      <!-- Header for side navigation layout -->\n      <!-- ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT -->\n      <app-header-side \n        *ngIf=\"layoutConf.navigationPos === 'side'\"\n        [notificPanel]=\"notificationPanel\">\n      </app-header-side>\n\n      <div class=\"rightside-content-hold\" [perfectScrollbar]=\"scrollConfig\" [disabled]=\"!layoutConf.topbarFixed\">\n        <!-- View Loader -->\n        <div class=\"view-loader\" *ngIf=\"isModuleLoading\">\n          <div class=\"spinner\">\n            <div class=\"double-bounce1 mat-bg-accent\"></div>\n            <div class=\"double-bounce2 mat-bg-primary\"></div>\n          </div>\n        </div>\n        <!-- Breadcrumb -->\n        <app-breadcrumb></app-breadcrumb>\n        <!-- View outlet -->\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <!-- View overlay for mobile navigation -->\n    <div class=\"sidebar-backdrop\"\n    [ngClass]=\"{'visible': layoutConf.sidebarStyle !== 'closed' && layoutConf.isMobile}\"\n    (click)=\"closeSidebar()\"></div>\n    \n    <!-- Notificaation bar -->\n    <mat-sidenav #notificationPanel mode=\"over\" class=\"\" position=\"end\">\n      <div class=\"navigation-hold\" fxLayout=\"column\">\n        <app-notifications [notificPanel]=\"notificationPanel\"></app-notifications>\n      </div>\n    </mat-sidenav>\n  </mat-sidenav-container>\n</div>\n\n\n<!-- Only for demo purpose -->\n<!-- Remove this from your production version -->\n<app-customizer></app-customizer>"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/notifications/notifications.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/notifications/notifications.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mat-bg-primary pt-1 pb-1\">\n  <h6 class=\"m-0\">Notifications</h6>\n</div>\n<mat-nav-list class=\"notification-list\" role=\"list\">\n  <!-- Notification item -->\n  <mat-list-item *ngFor=\"let n of notifications\" class=\"notific-item\" role=\"listitem\" routerLinkActive=\"open\">\n    <mat-icon [color]=\"n.color\" class=\"notific-icon\">{{n.icon}}</mat-icon>\n    <a [routerLink]=\"[n.route || '/dashboard']\">\n      <div class=\"mat-list-text\">\n        <h4 class=\"message\">{{n.message}}</h4>\n        <small class=\"time text-muted\">{{n.time}}</small>\n      </div>\n    </a>\n  </mat-list-item>\n</mat-nav-list>\n<div class=\"text-center mt-1\" *ngIf=\"notifications.length\">\n  <small><a href=\"#\" (click)=\"clearAll($event)\">Clear all notifications</a></small>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/notifications/notifications.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(router) {
        this.router = router;
        // Dummy notifications
        this.notifications = [{
                message: 'New contact added',
                icon: 'assignment_ind',
                time: '1 min ago',
                route: '/inbox',
                color: 'primary'
            }, {
                message: 'New message',
                icon: 'chat',
                time: '4 min ago',
                route: '/chat',
                color: 'accent'
            }, {
                message: 'Server rebooted',
                icon: 'settings_backup_restore',
                time: '12 min ago',
                route: '/charts',
                color: 'warn'
            }];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (routeChange) {
            if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.notificPanel.close();
            }
        });
    };
    NotificationsComponent.prototype.clearAll = function (e) {
        e.preventDefault();
        this.notifications = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotificationsComponent.prototype, "notificPanel", void 0);
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/shared/components/notifications/notifications.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar-side/sidebar-side.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\n  <div id=\"scroll-area\" [perfectScrollbar] class=\"navigation-hold\" fxLayout=\"column\">\n    <!-- App Logo -->\n    <div class=\"branding default-bg\">\n      <img src=\"assets/images/logo.png\" alt=\"\" class=\"app-logo\">\n      <!-- Two different logos for dark and light themes -->\n      <img\n      src=\"assets/images/logo-text-white.png\"\n      alt=\"\"\n      class=\"app-logo-text\"\n      *ngIf=\"themeService.activatedTheme?.name?.indexOf('dark') !== -1\">\n      <img\n      src=\"assets/images/logo-text.png\"\n      alt=\"\"\n      class=\"app-logo-text\"\n      *ngIf=\"themeService.activatedTheme?.name?.indexOf('dark') === -1\">\n    </div>\n\n    <!-- Sidebar user -->\n    <div class=\"app-user\">\n      <div class=\"app-user-photo\">\n        <img src={{photoURL}} alt=\"\">\n      </div>\n      <span class=\"app-user-name mb-05\">\n        <mat-icon class=\"icon-xs text-muted\">lock</mat-icon>\n{{displayName}}\n</span>\n      <!-- Small buttons -->\n      <div class=\"app-user-controls\">\n        <button\n        class=\"text-muted\"\n        mat-icon-button\n        mat-xs-button\n        [matMenuTriggerFor]=\"appUserMenu\">\n          <mat-icon>settings</mat-icon>\n        </button>\n        <button\n        class=\"text-muted\"\n        mat-icon-button\n        mat-xs-button\n        matTooltip=\"Inbox\"\n        routerLink=\"/inbox\">\n          <mat-icon>email</mat-icon>\n        </button>\n        <button\n        class=\"text-muted\"\n        mat-icon-button\n        mat-xs-button\n        matTooltip=\"Sign Out\"\n        routerLink=\"/sessions/signin\"\n        (click)=\"signOut()\"\n        >\n          <mat-icon>exit_to_app</mat-icon>\n        </button>\n        <mat-menu #appUserMenu=\"matMenu\">\n            <button mat-menu-item routerLink=\"/profile/overview\">\n              <mat-icon>account_box</mat-icon>\n              <span>Profile</span>\n            </button>\n            <button mat-menu-item routerLink=\"/profile/settings\">\n              <mat-icon>settings</mat-icon>\n              <span>Account Settings</span>\n            </button>\n            <button mat-menu-item routerLink=\"/calendar\">\n              <mat-icon>date_range</mat-icon>\n              <span>Calendar</span>\n            </button>\n            <button mat-menu-item routerLink=\"/sessions/signin\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>Sign out</span>\n            </button>\n          </mat-menu>\n      </div>\n    </div>\n    <!-- Navigation -->\n    <app-sidenav [items]=\"menuItems\" [hasIconMenu]=\"hasIconTypeMenuItem\" [iconMenuTitle]=\"iconTypeMenuTitle\"></app-sidenav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/sidebar-side/sidebar-side.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSideComponent", function() { return SidebarSideComponent; });
/* harmony import */ var _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/firebaseauth.service */ "./src/app/shared/services/firebaseauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/shared/services/theme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import PerfectScrollbar from 'perfect-scrollbar';
var SidebarSideComponent = /** @class */ (function () {
    function SidebarSideComponent(navService, themeService, firebaseAuth) {
        this.navService = navService;
        this.themeService = themeService;
        this.firebaseAuth = firebaseAuth;
        this.displayName = this.firebaseAuth.data["displayName"];
        this.photoURL = this.firebaseAuth.data["photoURL"];
    }
    SidebarSideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem;
            //Checks item list has any icon type.
            _this.hasIconTypeMenuItem = !!_this.menuItems.filter(function (item) { return item.type === 'icon'; }).length;
        });
    };
    SidebarSideComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this.sidebarPS = new PerfectScrollbar('#scroll-area', {
        //     suppressScrollX: true
        //   })
        // })
    };
    SidebarSideComponent.prototype.ngOnDestroy = function () {
        // if(this.sidebarPS) {
        //   this.sidebarPS.destroy();
        // }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarSideComponent.prototype.signOut = function () {
        this.firebaseAuth.logOut();
    };
    SidebarSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar-side',
            template: __webpack_require__(/*! ./sidebar-side.component.html */ "./src/app/shared/components/sidebar-side/sidebar-side.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"],
            _services_firebaseauth_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseauthService"]])
    ], SidebarSideComponent);
    return SidebarSideComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar-top/sidebar-top.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\n  <div id=\"sidebar-top-scroll-area\" [perfectScrollbar] class=\"navigation-hold\" fxLayout=\"column\">\n    <app-sidenav [items]=\"menuItems\"></app-sidenav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/sidebar-top/sidebar-top.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTopComponent", function() { return SidebarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import PerfectScrollbar from 'perfect-scrollbar';

var SidebarTopComponent = /** @class */ (function () {
    function SidebarTopComponent(navService) {
        this.navService = navService;
    }
    SidebarTopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this.menuItems = menuItem.filter(function (item) { return item.type !== 'icon' && item.type !== 'separator'; });
        });
    };
    SidebarTopComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this.sidebarPS = new PerfectScrollbar('#sidebar-top-scroll-area', {
        //     suppressScrollX: true
        //   })
        // })
    };
    SidebarTopComponent.prototype.ngOnDestroy = function () {
        // if(this.sidebarPS) {
        //   this.sidebarPS.destroy();
        // }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    };
    SidebarTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-top',
            template: __webpack_require__(/*! ./sidebar-top.component.html */ "./src/app/shared/components/sidebar-top/sidebar-top.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], SidebarTopComponent);
    return SidebarTopComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.menuItems = [];
    }
    SidenavComponent.prototype.ngOnInit = function () { };
    // Only for demo purpose
    SidenavComponent.prototype.addMenuItem = function () {
        this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [
                { name: 'SUBITEM', state: 'cards' },
                { name: 'SUBITEM', state: 'buttons' }
            ]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('items'),
        __metadata("design:type", Array)
    ], SidenavComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hasIconMenu'),
        __metadata("design:type", Boolean)
    ], SidenavComponent.prototype, "hasIconTypeMenuItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('iconMenuTitle'),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "iconTypeMenuTitle", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.template.html */ "./src/app/shared/components/sidenav/sidenav.template.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.template.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.template.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-hold\">\n  <div class=\"icon-menu\" *ngIf=\"hasIconTypeMenuItem\">\n    <!-- Icon menu separator -->\n    <div class=\"mt-1 mb-1 nav-item-sep\">\n      <mat-divider [ngStyle]=\"{margin: '0 -24px'}\"></mat-divider>\n      <span class=\"text-muted icon-menu-title\">{{iconTypeMenuTitle}}</span>\n    </div>\n    <!-- Icon menu items -->\n    <div class=\"icon-menu-item\" *ngFor=\"let item of menuItems\">\n      <button *ngIf=\"!item.disabled && item.type === 'icon'\" mat-raised-button [matTooltip]=\"item.tooltip\" routerLink=\"/{{item.state}}\"\n        routerLinkActive=\"mat-bg-primary\">\n        <mat-icon>{{item.icon}}</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <ul appDropdown class=\"sidenav\">\n    <li *ngFor=\"let item of menuItems\" appDropdownLink routerLinkActive=\"open\">\n      <div class=\"nav-item-sep\" *ngIf=\"item.type === 'separator'\">\n        <mat-divider></mat-divider>\n        <span class=\"text-muted\">{{item.name | translate}}</span>\n      </div>\n      <div *ngIf=\"!item.disabled && item.type !== 'separator' && item.type !== 'icon'\" class=\"lvl1\">\n        <a routerLink=\"/{{item.state}}\" appDropdownToggle matRipple *ngIf=\"item.type === 'link'\">\n          <mat-icon>{{item.icon}}</mat-icon>\n          <span class=\"item-name lvl1\">{{item.name | translate}}</span>\n          <span fxFlex></span>\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\n        </a>\n        <a [href]=\"item.state\" appDropdownToggle matRipple *ngIf=\"item.type === 'extLink'\" target=\"_blank\">\n          <mat-icon>{{item.icon}}</mat-icon>\n          <span class=\"item-name lvl1\">{{item.name | translate}}</span>\n          <span fxFlex></span>\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\n        </a>\n\n        <!-- DropDown -->\n        <a *ngIf=\"item.type === 'dropDown'\" appDropdownToggle matRipple>\n          <mat-icon>{{item.icon}}</mat-icon>\n          <span class=\"item-name lvl1\">{{item.name | translate}}</span>\n          <span fxFlex></span>\n          <span class=\"menuitem-badge mat-bg-{{ badge.color }}\" [ngStyle]=\"{background: badge.color}\" *ngFor=\"let badge of item.badges\">{{ badge.value }}</span>\n          <mat-icon class=\"menu-caret\">keyboard_arrow_right</mat-icon>\n        </a>\n        <!-- LEVEL 2 -->\n        <ul class=\"submenu lvl2\" appDropdown *ngIf=\"item.type === 'dropDown'\">\n          <li *ngFor=\"let itemLvL2 of item.sub\" appDropdownLink routerLinkActive=\"open\">\n\n            <a routerLink=\"{{item.state ? '/'+item.state : ''}}/{{itemLvL2.state}}\" appDropdownToggle *ngIf=\"itemLvL2.type !== 'dropDown'\"\n              matRipple>\n              <span class=\"item-name lvl2\">{{itemLvL2.name | translate}}</span>\n              <span fxFlex></span>\n            </a>\n\n            <a *ngIf=\"itemLvL2.type === 'dropDown'\" appDropdownToggle matRipple>\n              <span class=\"item-name lvl2\">{{itemLvL2.name | translate}}</span>\n              <span fxFlex></span>\n              <mat-icon class=\"menu-caret\">keyboard_arrow_right</mat-icon>\n            </a>\n\n            <!-- LEVEL 3 -->\n            <ul class=\"submenu lvl3\" appDropdown *ngIf=\"itemLvL2.type === 'dropDown'\">\n              <li *ngFor=\"let itemLvL3 of itemLvL2.sub\" appDropdownLink routerLinkActive=\"open\">\n                <a routerLink=\"{{item.state ? '/'+item.state : ''}}{{itemLvL2.state ? '/'+itemLvL2.state : ''}}/{{itemLvL3.state}}\" appDropdownToggle\n                  matRipple>\n                  <span class=\"item-name lvl3\">{{itemLvL3.name | translate}}</span>\n                </a>\n              </li>\n            </ul>\n\n          </li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/shared/directives/dropdown-anchor.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
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


var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownAnchorDirective.prototype, "onClick", null);
    DropdownAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])),
        __metadata("design:paramtypes", [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]])
    ], DropdownAnchorDirective);
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown-link.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
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


var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DropdownLinkDirective.prototype, "open", null);
    DropdownLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]])
    ], DropdownLinkDirective);
    return DropdownLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppDropdownDirective);
    return AppDropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/egret-side-nav-toggle.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/egret-side-nav-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: EgretSideNavToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSideNavToggleDirective", function() { return EgretSideNavToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var EgretSideNavToggleDirective = /** @class */ (function () {
    function EgretSideNavToggleDirective(media, sideNav) {
        this.media = media;
        this.sideNav = sideNav;
    }
    EgretSideNavToggleDirective.prototype.ngOnInit = function () {
        this.initSideNav();
    };
    EgretSideNavToggleDirective.prototype.ngOnDestroy = function () {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    };
    EgretSideNavToggleDirective.prototype.updateSidenav = function () {
        var self = this;
        setTimeout(function () {
            self.sideNav.opened = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    };
    EgretSideNavToggleDirective.prototype.initSideNav = function () {
        var _this = this;
        this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.media.subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.updateSidenav();
        });
    };
    EgretSideNavToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[EgretSideNavToggle]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"]])
    ], EgretSideNavToggleDirective);
    return EgretSideNavToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/font-size.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/font-size.directive.ts ***!
  \**********************************************************/
/*! exports provided: FontSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeDirective", function() { return FontSizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var FontSizeDirective = /** @class */ (function () {
    function FontSizeDirective(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    FontSizeDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.fontSize = this.fontSize;
    };
    FontSizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[fontSize]' }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('fontSize')),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FontSizeDirective);
    return FontSizeDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/scroll-to.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    ;
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ;
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToDirective.prototype, "smoothScroll", null);
    ScrollToDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[scrollTo]' }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('scrollTo')),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollToDirective);
    return ScrollToDirective;
}());



/***/ }),

/***/ "./src/app/shared/helpers/url.helper.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/helpers/url.helper.ts ***!
  \**********************************************/
/*! exports provided: getQueryParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParam", function() { return getQueryParam; });
function getQueryParam(prop) {
    var params = {};
    var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
    var definitions = search.split('&');
    definitions.forEach(function (val, key) {
        var parts = val.split('=', 2);
        params[parts[0]] = parts[1];
    });
    return (prop && prop in params) ? params[prop] : params;
}


/***/ }),

/***/ "./src/app/shared/inmemory-db/chat-db.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
  \***********************************************/
/*! exports provided: ChatDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDB", function() { return ChatDB; });
var ChatDB = /** @class */ (function () {
    function ChatDB() {
    }
    ChatDB.user = [
        {
            id: "7863a6802ez0e277a0f98534",
            name: "John Doe",
            avatar: "assets/images/face-1.jpg",
            status: "online",
            chatInfo: [
                {
                    chatId: "89564a680b3249760ea21fe77",
                    contactId: "323sa680b3249760ea21rt47",
                    contactName: "Frank Powell",
                    unread: 4,
                    lastChatTime: "2017-06-12T02:10:18.931Z"
                },
                {
                    chatId: "3289564a680b2134760ea21fe7753",
                    contactId: "14663a3406eb47ffa63d4fec9429cb71",
                    contactName: "Betty Diaz",
                    unread: 0,
                    lastChatTime: "2017-06-12T02:10:18.931Z"
                }
            ]
        }
    ];
    ChatDB.contacts = [
        {
            id: "323sa680b3249760ea21rt47",
            name: "Frank Powell",
            avatar: "assets/images/faces/13.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "14663a3406eb47ffa63d4fec9429cb71",
            name: "Betty Diaz",
            avatar: "assets/images/faces/12.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "43bd9bc59d164b5aea498e3ae1c24c3c",
            name: "Brian Stephens",
            avatar: "assets/images/faces/3.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "3fc8e01f3ce649d1caf884fbf4f698e4",
            name: "Jacqueline Day",
            avatar: "assets/images/faces/16.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "e929b1d790ab49968ed8e34648553df4",
            name: "Arthur Mendoza",
            avatar: "assets/images/faces/10.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "d6caf04bba614632b5fecf91aebf4564",
            name: "Jeremy Lee",
            avatar: "assets/images/faces/9.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "be0fb188c8e242f097fafa24632107e4",
            name: "Johnny Newman",
            avatar: "assets/images/faces/5.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "dea902191b964a68ba5f2d93cff37e13",
            name: "Jeffrey Little",
            avatar: "assets/images/faces/15.jpg",
            status: "online",
            mood: ""
        },
        {
            id: "0bf58f5ccc4543a9f8747350b7bda3c7",
            name: "Barbara Romero",
            avatar: "assets/images/faces/4.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "c5d7498bbcb84d81fc72168871ac6a6e",
            name: "Daniel James",
            avatar: "assets/images/faces/2.jpg",
            status: "offline",
            mood: ""
        },
        {
            id: "97bfbdd9413e46efdaca2010400fe18c",
            name: "Alice Sanders",
            avatar: "assets/images/faces/17.jpg",
            status: "offline",
            mood: ""
        }
    ];
    ChatDB.chatCollection = [
        {
            id: "89564a680b3249760ea21fe77",
            chats: [
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Do you ever find yourself falling into the “discount trap?”",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Giving away your knowledge or product just to gain clients?",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Yes",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Don’t feel bad. It happens to a lot of us",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Do you ever find yourself falling into the “discount trap?”",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Giving away your knowledge or product just to gain clients?",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "323sa680b3249760ea21rt47",
                    text: "Yes",
                    time: "2018-02-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Don’t feel bad. It happens to a lot of us",
                    time: "2018-02-32T08:45:28.291Z"
                }
            ]
        },
        {
            id: "3289564a680b2134760ea21fe7753",
            chats: [
                {
                    contactId: "14663a3406eb47ffa63d4fec9429cb71",
                    text: "Do you ever find yourself falling into the “discount trap?”",
                    time: "2018-03-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Giving away your knowledge or product just to gain clients?",
                    time: "2018-03-32T08:45:28.291Z"
                },
                {
                    contactId: "14663a3406eb47ffa63d4fec9429cb71",
                    text: "Yes",
                    time: "2018-03-32T08:45:28.291Z"
                },
                {
                    contactId: "7863a6802ez0e277a0f98534",
                    text: "Don’t feel bad. It happens to a lot of us",
                    time: "2018-03-32T08:45:28.291Z"
                }
            ]
        }
    ];
    return ChatDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/inmemory-db.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
  \***********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _chat_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-db */ "./src/app/shared/inmemory-db/chat-db.ts");

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].user
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/excerpt.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit)
            return text;
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'excerpt' })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/get-value-by-key.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetValueByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function() { return GetValueByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "getValueByKey",
            pure: false
        })
    ], GetValueByKeyPipe);
    return GetValueByKeyPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/relative-time.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date))
            value = new Date(value);
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    };
    RelativeTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'relativeTime' })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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


var AppComfirmComponent = /** @class */ (function () {
    function AppComfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AppComfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: "<h1 matDialogTitle>{{ data.title }}</h1>\n    <div mat-dialog-content>{{ data.message }}</div>\n    <div mat-dialog-actions>\n    <button \n    type=\"button\" \n    mat-raised-button\n    color=\"primary\" \n    (click)=\"dialogRef.close(true)\">OK</button>\n    &nbsp;\n    <span fxFlex></span>\n    <button \n    type=\"button\"\n    color=\"accent\"\n    mat-raised-button \n    (click)=\"dialogRef.close(false)\">Cancel</button>\n    </div>",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], AppComfirmComponent);
    return AppComfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppConfirmService = /** @class */ (function () {
    function AppConfirmService(dialog) {
        this.dialog = dialog;
    }
    AppConfirmService.prototype.confirm = function (data) {
        if (data === void 0) { data = {}; }
        data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        var dialogRef;
        dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AppComfirmComponent"], {
            width: '380px',
            disableClose: true,
            data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed();
    };
    AppConfirmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], AppConfirmService);
    return AppConfirmService;
}());



/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  min-height: 122px;\n}"

/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <h6 class=\"m-0 pb-1\">{{ title }}</h6>\n    <div mat-dialog-content>\n        <mat-spinner [style.margin]=\"'auto'\"></mat-spinner>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: AppLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function() { return AppLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppLoaderComponent = /** @class */ (function () {
    function AppLoaderComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AppLoaderComponent.prototype.ngOnInit = function () {
    };
    AppLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-loader',
            template: __webpack_require__(/*! ./app-loader.component.html */ "./src/app/shared/services/app-loader/app-loader.component.html"),
            styles: [__webpack_require__(/*! ./app-loader.component.css */ "./src/app/shared/services/app-loader/app-loader.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], AppLoaderComponent);
    return AppLoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-loader/app-loader.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.service.ts ***!
  \******************************************************************/
/*! exports provided: AppLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderService", function() { return AppLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-loader.component */ "./src/app/shared/services/app-loader/app-loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppLoaderService = /** @class */ (function () {
    function AppLoaderService(dialog) {
        this.dialog = dialog;
    }
    AppLoaderService.prototype.open = function (title) {
        if (title === void 0) { title = 'Please wait'; }
        this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_2__["AppLoaderComponent"], { disableClose: true, backdropClass: 'light-backdrop' });
        this.dialogRef.updateSize('200px');
        this.dialogRef.componentInstance.title = title;
        return this.dialogRef.afterClosed();
    };
    AppLoaderService.prototype.close = function () {
        if (this.dialogRef)
            this.dialogRef.close();
    };
    AppLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppLoaderService);
    return AppLoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth/auth.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/auth/auth.guard.ts ***!
  \****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _firebaseauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../firebaseauth.service */ "./src/app/shared/services/firebaseauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = /** @class */ (function () {
    // private isAuthenticated; // Set this value dynamically
    function AuthGuard(authService, router, firebaseAuth) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.isAuthenticated = false; // Set this value dynamically
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.firebaseAuth.authenticated) {
            console.log("this seems to be authenticated");
            return true;
        }
        this.router.navigate(["/sessions/signin"]);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _firebaseauth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseauthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/firebaseauth.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/firebaseauth.service.ts ***!
  \*********************************************************/
/*! exports provided: FirebaseauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseauthService", function() { return FirebaseauthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var FirebaseauthService = /** @class */ (function () {
    // authState: AngularFireAuth.authState = null;
    function FirebaseauthService(storage, _firebaseAuth, router, afs) {
        // this._firebaseAuth.authState.subscribe((auth) => {
        //   console.log("--------i am in subscribe-!!!!!");
        //   this.authState = auth;
        // });
        this.storage = storage;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.afs = afs;
        this.user = null;
        // private user: any = null;
        this.authState = null;
        this.data = [];
        this.isAdmin = false;
        // this._firebaseAuth.authState
        // .take(1)
        // .map(authState => !!authState)
        // .do(auth => !auth ? this.router.navigate(["/sessions/signin"]) : true);
        // this._firebaseAuth.authState.take(1).map((auth) =>  {
        //     console.log("--------i am in MAPPP-!!!!!");
        //     console.log(auth);
        //   this.authState = auth;
        // });
    }
    FirebaseauthService.prototype.saveInLocal = function (key, val) {
        console.log("Saving = key:" + key + "value:" + val);
        this.storage.set(key, val);
        this.data[key] = this.storage.get(key);
    };
    FirebaseauthService.prototype.getFromLocal = function (key) {
        console.log("recieved= key:" + key);
        this.data[key] = this.storage.get(key);
        console.log(this.data);
    };
    Object.defineProperty(FirebaseauthService.prototype, "authenticated", {
        get: function () {
            this.getFromLocal("isAdmin");
            this.getFromLocal("displayName");
            this.getFromLocal("photoURL");
            console.log("displayName state is ----" + this.data["displayName"]);
            // return this.authState !== null;
            return this.data["displayName"] !== null;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseauthService.prototype.logOut = function () {
        console.log("-------i am logging out---------");
        this.saveInLocal("displayName", null);
        this._firebaseAuth.auth.signOut();
    };
    // isLoggedIn(): boolean {
    //   var val: boolean = false;
    //   console.log("---Firebase Auth async is logged in ");
    //   this.user.subscribe(user => {
    //     if (user) {
    //       this.docId = user.uid;
    //       // this.getRoles();
    //       this.getFromLocal("isAdmin");
    //       if (this.data["isAdmin"] == null) {
    //         this.getRoles();
    //       } else {
    //         this.isAdmin = this.data["isAdmin"];
    //       }
    //       console.log("---->>>> yes i am ");
    //       val = true;
    //     } else {
    //       console.log(":( :( :( :( no i am not");
    //       return false;
    //     }
    //   });
    //   return val;
    // }
    FirebaseauthService.prototype.signInWithEmail = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
                _this._firebaseAuth.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].Auth.Persistence.SESSION);
                _this.authState = res;
                _this.saveInLocal("displayName", "something");
                _this.docId = res.user.uid;
                _this.setRoles();
                _this.isAdmin = _this.data["isAdmin"];
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    FirebaseauthService.prototype.setRoles = function () {
        var _this = this;
        console.log("-------I am getting roles-------");
        console.log("doc id is " + this.docId);
        this.afs
            .collection("users")
            .doc(this.docId)
            .ref.get()
            .then(function (doc) {
            var temp;
            var data = doc.data();
            _this.isAdmin = data["isAdmin"];
            _this.displayName = data["displayName"];
            // console.log(this.isAdmin);
            _this.saveInLocal("isAdmin", _this.isAdmin);
            _this.saveInLocal("displayName", _this.displayName);
            temp = data["photoURL"];
            _this.saveInLocal("photoURL", temp);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    FirebaseauthService.prototype.createNotice = function (notice) {
        return __awaiter(this, void 0, void 0, function () {
            var isTeacher, isStudent, addressedTo;
            return __generator(this, function (_a) {
                console.log("---------i am in createNotice()-------------");
                if (notice.receiver === "all") {
                    isTeacher = true;
                    isStudent = true;
                    addressedTo = "Everyone";
                }
                if (notice.receiver === "teachers") {
                    isTeacher = true;
                    isStudent = false;
                    addressedTo = "Only Teachers";
                }
                if (notice.receiver === "students") {
                    isTeacher = false;
                    isStudent = true;
                    addressedTo = "Only Students";
                }
                this.afs
                    .collection("notice")
                    .add({
                    title: notice.title,
                    details: notice.details,
                    isTeacher: isTeacher,
                    isStudent: isStudent,
                    date: notice.date,
                    sender: notice.sender,
                    department: notice.department,
                    designation: notice.designation,
                    addressedTo: addressedTo
                })
                    .then(function (msg) {
                    console.log("notice has been successfully updated");
                    console.log(msg);
                })
                    .catch(function (err) {
                    console.log("There has been an error in creating notice");
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    FirebaseauthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["WebStorageService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], FirebaseauthService);
    return FirebaseauthService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/url.helper */ "./src/app/shared/helpers/url.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutService = /** @class */ (function () {
    function LayoutService(router) {
        this.router = router;
        this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ['shop'];
        this.setAppLayout();
    }
    LayoutService.prototype.setAppLayout = function () {
        //******** SET YOUR LAYOUT OPTIONS HERE *********
        this.layoutConf = {
            "navigationPos": "side",
            "sidebarStyle": "full",
            "dir": "ltr",
            "useBreadcrumb": true,
            "topbarFixed": false,
            "breadcrumb": "title" // simple, title
        };
        //******* Only for demo purpose ***
        this.setLayoutFromQuery();
        //**********************
    };
    LayoutService.prototype.publishLayoutChange = function (lc, opt) {
        var _this = this;
        if (opt === void 0) { opt = {}; }
        var duration = opt.duration || 250;
        if (!opt.transitionClass) {
            this.layoutConf = Object.assign(this.layoutConf, lc);
            return this.layoutConfSubject.next(this.layoutConf);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc, { layoutInTransition: true });
        this.layoutConfSubject.next(this.layoutConf);
        setTimeout(function () {
            _this.layoutConf = Object.assign(_this.layoutConf, { layoutInTransition: false });
            _this.layoutConfSubject.next(_this.layoutConf);
        }, duration);
    };
    LayoutService.prototype.setLayoutFromQuery = function () {
        var layoutConfString = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_3__["getQueryParam"])('layout');
        try {
            this.layoutConf = JSON.parse(layoutConfString);
        }
        catch (e) { }
    };
    LayoutService.prototype.adjustLayout = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var sidebarStyle;
        this.isMobile = this.isSm();
        this.currentRoute = options.route || this.currentRoute;
        sidebarStyle = this.isMobile ? 'closed' : this.layoutConf.sidebarStyle;
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach(function (route) {
                if (_this.currentRoute.indexOf(route) !== -1) {
                    sidebarStyle = 'closed';
                }
            });
        }
        this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle: sidebarStyle
        });
    };
    LayoutService.prototype.isSm = function () {
        return window.matchMedia("(max-width: 959px)").matches;
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/shared/services/navigation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.defaultMenu = [
            {
                name: 'HOME',
                type: 'link',
                tooltip: 'Home',
                icon: 'home',
                state: 'dashboard'
            },
            {
                name: 'DASHBOARD',
                type: 'link',
                tooltip: 'Dashboard',
                icon: 'dashboard',
                state: 'dashboard'
            },
            {
                name: 'INBOX',
                type: 'link',
                tooltip: 'Inbox',
                icon: 'inbox',
                state: 'inbox'
            },
            {
                name: 'CHAT',
                type: 'link',
                tooltip: 'Chat',
                icon: 'chat',
                state: 'chat'
            },
            {
                name: 'CRUD Table',
                type: 'link',
                tooltip: 'CRUD Table',
                icon: 'format_list_bulleted',
                state: 'cruds/ngx-table'
            },
            {
                name: 'CALENDAR',
                type: 'link',
                tooltip: 'Calendar',
                icon: 'date_range',
                state: 'calendar'
            },
            {
                name: 'DIALOGS',
                type: 'dropDown',
                tooltip: 'Dialogs',
                icon: 'filter_none',
                state: 'dialogs',
                sub: [
                    { name: 'CONFIRM', state: 'confirm' },
                    { name: 'LOADER', state: 'loader' },
                ]
            },
            {
                name: 'MATERIAL',
                type: 'dropDown',
                tooltip: 'Material',
                icon: 'favorite',
                state: 'material',
                sub: [
                    { name: 'BUTTONS1', state: 'buttons' },
                    { name: 'CARDS', state: 'cards' },
                    { name: 'GRIDS', state: 'grids' },
                    { name: 'LISTS', state: 'lists' },
                    { name: 'MENU', state: 'menu' },
                    { name: 'TABS', state: 'tabs' },
                    { name: 'SELECT', state: 'select' },
                    { name: 'RADIO', state: 'radio' },
                    { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                    { name: 'SLIDER', state: 'slider' },
                    { name: 'PROGRESS', state: 'progress' },
                    { name: 'SNACKBAR', state: 'snackbar' },
                ]
            },
            {
                name: 'FORMS',
                type: 'dropDown',
                tooltip: 'Forms',
                icon: 'description',
                state: 'forms',
                sub: [
                    { name: 'BASIC', state: 'basic' },
                    { name: 'EDITOR', state: 'editor' },
                    { name: 'UPLOAD', state: 'upload' },
                    { name: 'WIZARD', state: 'wizard' }
                ]
            },
            {
                name: 'TABLES',
                type: 'dropDown',
                tooltip: 'Tables',
                icon: 'format_line_spacing',
                state: 'tables',
                sub: [
                    { name: 'FULLSCREEN', state: 'fullscreen' },
                    { name: 'PAGING', state: 'paging' },
                    { name: 'FILTER', state: 'filter' },
                ]
            },
            {
                name: 'PROFILE',
                type: 'dropDown',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile',
                sub: [
                    { name: 'OVERVIEW', state: 'overview' },
                    { name: 'SETTINGS', state: 'settings' },
                    { name: 'BLANK', state: 'blank' },
                ]
            },
            {
                name: 'TOUR',
                type: 'link',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                name: 'MAP',
                type: 'link',
                tooltip: 'Map',
                icon: 'add_location',
                state: 'map'
            },
            {
                name: 'CHARTS',
                type: 'link',
                tooltip: 'Charts',
                icon: 'show_chart',
                state: 'charts'
            },
            {
                name: 'DND',
                type: 'link',
                tooltip: 'Drag and Drop',
                icon: 'adjust',
                state: 'dragndrop'
            },
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'SIGNUP', state: 'signup' },
                    { name: 'SIGNIN', state: 'signin' },
                    { name: 'FORGOT', state: 'forgot-password' },
                    { name: 'LOCKSCREEN', state: 'lockscreen' },
                    { name: 'NOTFOUND', state: '404' },
                    { name: 'ERROR', state: 'error' }
                ]
            },
            {
                name: 'OTHERS',
                type: 'dropDown',
                tooltip: 'Others',
                icon: 'blur_on',
                state: 'others',
                sub: [
                    { name: 'GALLERY', state: 'gallery' },
                    { name: 'PRICINGS', state: 'pricing' },
                    { name: 'USERS', state: 'users' },
                    { name: 'BLANK', state: 'blank' },
                ]
            },
            {
                name: 'MATICONS',
                type: 'link',
                tooltip: 'Material Icons',
                icon: 'store',
                state: 'icons'
            },
            {
                name: 'DOC',
                type: 'extLink',
                tooltip: 'Documentation',
                icon: 'library_books',
                state: 'http://egret-doc.mhrafi.com/'
            }
        ];
        this.separatorMenu = [
            {
                type: 'separator',
                name: 'Custom components'
            },
            {
                name: 'DASHBOARD',
                type: 'link',
                tooltip: 'Dashboard',
                icon: 'dashboard',
                state: 'dashboard'
            },
            {
                name: 'INBOX',
                type: 'link',
                tooltip: 'Inbox',
                icon: 'inbox',
                state: 'inbox'
            },
            {
                name: 'CHAT',
                type: 'link',
                tooltip: 'Chat',
                icon: 'chat',
                state: 'chat'
            },
            {
                name: 'CRUD Table',
                type: 'link',
                tooltip: 'CRUD Table',
                icon: 'format_list_bulleted',
                state: 'cruds/ngx-table'
            },
            {
                name: 'DIALOGS',
                type: 'dropDown',
                tooltip: 'Dialogs',
                icon: 'filter_none',
                state: 'dialogs',
                sub: [
                    { name: 'CONFIRM', state: 'confirm' },
                    { name: 'LOADER', state: 'loader' },
                ]
            },
            {
                name: 'PROFILE',
                type: 'dropDown',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile',
                sub: [
                    { name: 'OVERVIEW', state: 'overview' },
                    { name: 'SETTINGS', state: 'settings' },
                    { name: 'BLANK', state: 'blank' },
                ]
            },
            {
                name: 'TOUR',
                type: 'link',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                type: 'separator',
                name: 'Integrated components'
            },
            {
                name: 'CALENDAR',
                type: 'link',
                tooltip: 'Calendar',
                icon: 'date_range',
                state: 'calendar'
            },
            {
                name: 'MATERIAL',
                type: 'dropDown',
                tooltip: 'Material',
                icon: 'favorite',
                state: 'material',
                sub: [
                    { name: 'BUTTONS', state: 'buttons' },
                    { name: 'CARDS', state: 'cards' },
                    { name: 'GRIDS', state: 'grids' },
                    { name: 'LISTS', state: 'lists' },
                    { name: 'MENU', state: 'menu' },
                    { name: 'TABS', state: 'tabs' },
                    { name: 'SELECT', state: 'select' },
                    { name: 'RADIO', state: 'radio' },
                    { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                    { name: 'SLIDER', state: 'slider' },
                    { name: 'PROGRESS', state: 'progress' },
                    { name: 'SNACKBAR', state: 'snackbar' },
                ]
            },
            {
                name: 'FORMS',
                type: 'dropDown',
                tooltip: 'Forms',
                icon: 'description',
                state: 'forms',
                sub: [
                    { name: 'BASIC', state: 'basic' },
                    { name: 'EDITOR', state: 'editor' },
                    { name: 'UPLOAD', state: 'upload' },
                    { name: 'WIZARD', state: 'wizard' }
                ]
            },
            {
                name: 'TABLES',
                type: 'dropDown',
                tooltip: 'Tables',
                icon: 'format_line_spacing',
                state: 'tables',
                sub: [
                    { name: 'FULLSCREEN', state: 'fullscreen' },
                    { name: 'PAGING', state: 'paging' },
                    { name: 'FILTER', state: 'filter' },
                ]
            },
            {
                name: 'MAP',
                type: 'link',
                tooltip: 'Map',
                icon: 'add_location',
                state: 'map'
            },
            {
                name: 'CHARTS',
                type: 'link',
                tooltip: 'Charts',
                icon: 'show_chart',
                state: 'charts'
            },
            {
                name: 'DND',
                type: 'link',
                tooltip: 'Drag and Drop',
                icon: 'adjust',
                state: 'dragndrop'
            },
            {
                type: 'separator',
                name: 'Other components'
            },
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'SIGNUP', state: 'signup' },
                    { name: 'SIGNIN', state: 'signin' },
                    { name: 'FORGOT', state: 'forgot-password' },
                    { name: 'LOCKSCREEN', state: 'lockscreen' },
                    { name: 'NOTFOUND', state: '404' },
                    { name: 'ERROR', state: 'error' }
                ]
            },
            {
                name: 'OTHERS',
                type: 'dropDown',
                tooltip: 'Others',
                icon: 'blur_on',
                state: 'others',
                sub: [
                    { name: 'GALLERY', state: 'gallery' },
                    { name: 'PRICINGS', state: 'pricing' },
                    { name: 'USERS', state: 'users' },
                    { name: 'BLANK', state: 'blank' },
                ]
            },
            {
                name: 'MATICONS',
                type: 'link',
                tooltip: 'Material Icons',
                icon: 'store',
                state: 'icons'
            },
            {
                name: 'DOC',
                type: 'extLink',
                tooltip: 'Documentation',
                icon: 'library_books',
                state: 'http://egret-doc.mhrafi.com/'
            }
        ];
        this.iconMenu = [
            {
                name: 'Add Volunteer',
                type: 'link',
                tooltip: 'Add Volunteer',
                icon: 'where_to_vote',
                state: 'add_volunteer',
            },
            {
                name: 'View Volunteers',
                type: 'link',
                tooltip: 'View Volunteers',
                icon: 'table_chart',
                state: 'view_volunteer',
            },
        ];
        this.iconMenu_old = [
            {
                name: 'Add Volunteer',
                type: 'icon',
                tooltip: 'Add Volunteer',
                icon: 'home',
                state: 'where_to_vote'
            },
            {
                name: 'PROFILE',
                type: 'icon',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile/overview'
            },
            {
                name: 'TOUR',
                type: 'icon',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                type: 'separator',
                name: 'Main Items'
            },
            {
                name: 'Add Volunteer',
                type: 'link',
                tooltip: 'Add Volunteer',
                icon: 'where_to_vote',
                state: 'add_volunteer',
            },
            {
                name: 'View Volunteer',
                type: 'link',
                tooltip: 'View Volunteer',
                icon: 'table_chart',
                state: 'view_volunteer',
            },
            // {
            //   name: 'Add Volunteer',
            //   type: 'link',
            //   tooltip: 'Add Volunteer',
            //   icon: 'where_to_vote',
            //   state: 'add_volunteer',
            //   // badges: [{ color: 'accent', value: '100+' }],
            // },
            {
                name: 'Notice',
                type: 'link',
                tooltip: 'Notice',
                icon: 'aspect_ratio',
                state: 'notice',
            },
            {
                name: 'News',
                type: 'link',
                tooltip: 'News',
                icon: 'wallpaper',
                state: 'news',
            },
            {
                name: 'Exams',
                type: 'link',
                tooltip: 'Exams',
                icon: 'assignment',
                state: 'exam',
            },
            {
                name: 'Certificate',
                type: 'link',
                tooltip: 'Trasnfer Certificate',
                icon: 'print',
                state: 'transfer_certificate',
            },
            {
                name: 'DASHBOARD1',
                type: 'link',
                tooltip: 'Dashboard',
                icon: 'dashboard',
                state: 'dashboard',
                badges: [{ color: 'accent', value: '100+' }],
            },
            {
                name: 'CRUD Table',
                type: 'link',
                tooltip: 'CRUD Table',
                icon: 'format_list_bulleted',
                state: 'cruds/ngx-table'
            },
            {
                name: 'ECOMMERCE',
                type: 'dropDown',
                tooltip: 'Shop',
                icon: 'shopping_cart',
                state: 'shop',
                sub: [
                    { name: 'PRODUCTS', state: '' },
                    { name: 'PRODUCT DETAILS', state: 'products/5a9ae2106f155194e5c95d67' },
                    { name: 'CART', state: 'cart' },
                    { name: 'CHECKOUT', state: 'checkout' }
                ]
            },
            {
                name: 'INBOX',
                type: 'link',
                tooltip: 'Inbox',
                icon: 'inbox',
                state: 'inbox',
                badges: [{ color: 'primary', value: '4' }],
            },
            {
                name: 'CHAT',
                type: 'link',
                tooltip: 'Chat',
                icon: 'chat',
                state: 'chat',
                badges: [{ color: 'warn', value: '1' }]
            },
            {
                name: 'CALENDAR',
                type: 'link',
                tooltip: 'Calendar',
                icon: 'date_range',
                state: 'calendar'
            },
            {
                name: 'DIALOGS',
                type: 'dropDown',
                tooltip: 'Dialogs',
                icon: 'filter_none',
                state: 'dialogs',
                sub: [
                    { name: 'CONFIRM', state: 'confirm' },
                    { name: 'LOADER', state: 'loader' },
                ]
            },
            {
                name: 'MATERIAL',
                type: 'dropDown',
                tooltip: 'Material',
                icon: 'favorite',
                state: 'material',
                sub: [
                    { name: 'BUTTONS', state: 'buttons' },
                    { name: 'CARDS', state: 'cards' },
                    { name: 'GRIDS', state: 'grids' },
                    { name: 'LISTS', state: 'lists' },
                    { name: 'MENU', state: 'menu' },
                    { name: 'TABS', state: 'tabs' },
                    { name: 'SELECT', state: 'select' },
                    { name: 'RADIO', state: 'radio' },
                    { name: 'AUTOCOMPLETE', state: 'autocomplete' },
                    { name: 'SLIDER', state: 'slider' },
                    { name: 'PROGRESS', state: 'progress' },
                    { name: 'SNACKBAR', state: 'snackbar' },
                ]
            },
            {
                name: 'FORMS',
                type: 'dropDown',
                tooltip: 'Forms',
                icon: 'description',
                state: 'forms',
                sub: [
                    { name: 'BASIC', state: 'basic' },
                    { name: 'EDITOR', state: 'editor' },
                    { name: 'UPLOAD', state: 'upload' },
                    { name: 'WIZARD', state: 'wizard' }
                ]
            },
            {
                name: 'TABLES',
                type: 'dropDown',
                tooltip: 'Tables',
                icon: 'format_line_spacing',
                state: 'tables',
                sub: [
                    { name: 'FULLSCREEN', state: 'fullscreen' },
                    { name: 'PAGING', state: 'paging' },
                    { name: 'FILTER', state: 'filter' },
                ]
            },
            {
                name: 'PROFILE',
                type: 'dropDown',
                tooltip: 'Profile',
                icon: 'person',
                state: 'profile',
                badges: [{ color: 'primary', value: '2' }],
                sub: [
                    { name: 'OVERVIEW', state: 'overview' },
                    { name: 'SETTINGS', state: 'settings' },
                    { name: 'BLANK', state: 'blank' },
                ]
            },
            {
                name: 'TOUR',
                type: 'link',
                tooltip: 'Tour',
                icon: 'flight_takeoff',
                state: 'tour'
            },
            {
                name: 'MAP',
                type: 'link',
                tooltip: 'Map',
                icon: 'add_location',
                state: 'map'
            },
            {
                name: 'CHARTS',
                type: 'link',
                tooltip: 'Charts',
                icon: 'show_chart',
                state: 'charts'
            },
            {
                name: 'DND',
                type: 'link',
                tooltip: 'Drag and Drop',
                icon: 'adjust',
                state: 'dragndrop'
            },
            {
                name: 'SESSIONS',
                type: 'dropDown',
                tooltip: 'Pages',
                icon: 'view_carousel',
                state: 'sessions',
                sub: [
                    { name: 'SIGNUP', state: 'signup' },
                    { name: 'SIGNIN', state: 'signin' },
                    { name: 'FORGOT', state: 'forgot-password' },
                    { name: 'LOCKSCREEN', state: 'lockscreen' },
                    { name: 'NOTFOUND', state: '404' },
                    { name: 'ERROR', state: 'error' }
                ]
            },
            {
                name: 'OTHERS',
                type: 'dropDown',
                tooltip: 'Others',
                icon: 'blur_on',
                state: 'others',
                sub: [
                    { name: 'GALLERY', state: 'gallery' },
                    { name: 'PRICINGS', state: 'pricing' },
                    { name: 'USERS', state: 'users' },
                    { name: 'BLANK', state: 'blank' }
                ]
            },
            {
                name: 'MATICONS',
                type: 'link',
                tooltip: 'Material Icons',
                icon: 'store',
                state: 'icons'
            },
            {
                name: 'Multi Level',
                type: 'dropDown',
                tooltip: 'Multi Level',
                icon: 'format_align_center',
                state: '',
                sub: [
                    {
                        name: 'Level Two', type: 'dropDown', state: 'fake-1', sub: [
                            { name: 'Level Three', state: 'fake-2' },
                            { name: 'Level Three', state: 'fake-3' }
                        ]
                    },
                    { name: 'Level Two', state: 'fake-4' },
                    { name: 'Level Two', state: 'fake-5' }
                ]
            },
            {
                name: 'DOC',
                type: 'extLink',
                tooltip: 'Documentation',
                icon: 'library_books',
                state: 'http://egret-doc.mhrafi.com/'
            }
        ];
        // Icon menu TITLE at the very top of navigation.
        // This title will appear if any icon type item is present in menu.
        this.iconTypeMenuTitle = 'Frequently Accessed';
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.iconMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    // Customizer component uses this method to change menu.
    // You can remove this method and customizer component.
    // Or you can customize this method to supply different menu for
    // different user type.
    NavigationService.prototype.publishNavigationChange = function (menuType) {
        switch (menuType) {
            case 'separator-menu':
                this.menuItems.next(this.separatorMenu);
                break;
            case 'icon-menu':
                this.menuItems.next(this.iconMenu);
                break;
            default:
                this.menuItems.next(this.defaultMenu);
        }
    };
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/shared/services/route-parts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/route-parts.service.ts ***!
  \********************************************************/
/*! exports provided: RoutePartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePartsService", function() { return RoutePartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutePartsService = /** @class */ (function () {
    function RoutePartsService(router) {
        this.router = router;
    }
    RoutePartsService.prototype.ngOnInit = function () {
    };
    RoutePartsService.prototype.generateRouteParts = function (snapshot) {
        var routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    };
    RoutePartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoutePartsService);
    return RoutePartsService;
}());



/***/ }),

/***/ "./src/app/shared/services/theme.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/theme.service.ts ***!
  \**************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/url.helper */ "./src/app/shared/helpers/url.helper.ts");
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



var ThemeService = /** @class */ (function () {
    function ThemeService(document) {
        this.document = document;
        this.egretThemes = [{
                "name": "egret-dark-purple",
                "baseColor": "#9c27b0",
                "isActive": false
            }, {
                "name": "egret-dark-pink",
                "baseColor": "#e91e63",
                "isActive": false
            }, {
                "name": "egret-blue",
                "baseColor": "#247ba0",
                "isActive": false
            }, {
                "name": "egret-indigo",
                "baseColor": "#3f51b5",
                "isActive": true
            }];
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    ThemeService.prototype.applyMatTheme = function (r) {
        /*
        ****** (SET YOUR DEFAULT THEME HERE) *******
        * Assign new Theme to activatedTheme
        */
        // this.activatedTheme = this.egretThemes[0]; 
        // this.activatedTheme = this.egretThemes[1]; 
        // this.activatedTheme = this.egretThemes[2]; 
        this.activatedTheme = this.egretThemes[3];
        // *********** ONLY FOR DEMO **********
        this.setThemeFromQuery();
        // ************************************
        this.changeTheme(r, this.activatedTheme);
    };
    ThemeService.prototype.changeTheme = function (r, theme) {
        r.removeClass(this.document.body, this.activatedTheme.name);
        r.addClass(this.document.body, theme.name);
        this.flipActiveFlag(theme);
    };
    ThemeService.prototype.flipActiveFlag = function (theme) {
        var _this = this;
        this.egretThemes.forEach(function (t) {
            t.isActive = false;
            if (t.name === theme.name) {
                t.isActive = true;
                _this.activatedTheme = theme;
            }
        });
    };
    // *********** ONLY FOR DEMO **********
    ThemeService.prototype.setThemeFromQuery = function () {
        var themeStr = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["getQueryParam"])('theme');
        try {
            this.activatedTheme = JSON.parse(themeStr);
            this.flipActiveFlag(this.activatedTheme);
        }
        catch (e) { }
    };
    ThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_header_side_header_side_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header-side/header-side.component */ "./src/app/shared/components/header-side/header-side.component.ts");
/* harmony import */ var _components_sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidebar-side/sidebar-side.component */ "./src/app/shared/components/sidebar-side/sidebar-side.component.ts");
/* harmony import */ var _components_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header-top/header-top.component */ "./src/app/shared/components/header-top/header-top.component.ts");
/* harmony import */ var _components_sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sidebar-top/sidebar-top.component */ "./src/app/shared/components/sidebar-top/sidebar-top.component.ts");
/* harmony import */ var _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/customizer/customizer.component */ "./src/app/shared/components/customizer/customizer.component.ts");
/* harmony import */ var _components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layouts/admin-layout/admin-layout.component */ "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");
/* harmony import */ var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/app-loader/app-loader.component */ "./src/app/shared/services/app-loader/app-loader.component.ts");
/* harmony import */ var _directives_font_size_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/font-size.directive */ "./src/app/shared/directives/font-size.directive.ts");
/* harmony import */ var _directives_scroll_to_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/scroll-to.directive */ "./src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _directives_egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/egret-side-nav-toggle.directive */ "./src/app/shared/directives/egret-side-nav-toggle.directive.ts");
/* harmony import */ var _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/relative-time.pipe */ "./src/app/shared/pipes/relative-time.pipe.ts");
/* harmony import */ var _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/excerpt.pipe */ "./src/app/shared/pipes/excerpt.pipe.ts");
/* harmony import */ var _pipes_get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/get-value-by-key.pipe */ "./src/app/shared/pipes/get-value-by-key.pipe.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/route-parts.service */ "./src/app/shared/services/route-parts.service.ts");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/shared/services/auth/auth.guard.ts");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/app-loader/app-loader.service */ "./src/app/shared/services/app-loader/app-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT


// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT


// ONLY FOR DEMO (Removable without changing any layout configuration)

// ALL TIME REQUIRED 







// DIRECTIVES






// PIPES



// SERVICES







/*
  Only Required if you want to use Angular Landing
  (https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258)
*/
// import { LandingPageService } from '../shared/services/landing-page.service';
var classesToInclude = [
    _components_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_10__["HeaderTopComponent"],
    _components_sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_11__["SidebarTopComponent"],
    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_16__["SidenavComponent"],
    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__["NotificationsComponent"],
    _components_sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_9__["SidebarSideComponent"],
    _components_header_side_header_side_component__WEBPACK_IMPORTED_MODULE_8__["HeaderSideComponent"],
    _components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__["AdminLayoutComponent"],
    _components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_14__["AuthLayoutComponent"],
    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"],
    _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_18__["AppComfirmComponent"],
    _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_19__["AppLoaderComponent"],
    _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_12__["CustomizerComponent"],
    _directives_font_size_directive__WEBPACK_IMPORTED_MODULE_20__["FontSizeDirective"],
    _directives_scroll_to_directive__WEBPACK_IMPORTED_MODULE_21__["ScrollToDirective"],
    _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_22__["AppDropdownDirective"],
    _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_23__["DropdownAnchorDirective"],
    _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_24__["DropdownLinkDirective"],
    _directives_egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_25__["EgretSideNavToggleDirective"],
    _pipes_relative_time_pipe__WEBPACK_IMPORTED_MODULE_26__["RelativeTimePipe"],
    _pipes_excerpt_pipe__WEBPACK_IMPORTED_MODULE_27__["ExcerptPipe"],
    _pipes_get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_28__["GetValueByKeyPipe"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ],
            entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_18__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_19__["AppLoaderComponent"]],
            providers: [
                _services_theme_service__WEBPACK_IMPORTED_MODULE_29__["ThemeService"],
                _services_layout_service__WEBPACK_IMPORTED_MODULE_30__["LayoutService"],
                _services_navigation_service__WEBPACK_IMPORTED_MODULE_31__["NavigationService"],
                _services_route_parts_service__WEBPACK_IMPORTED_MODULE_32__["RoutePartsService"],
                _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"],
                _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_34__["AppConfirmService"],
                _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_35__["AppLoaderService"]
                // LandingPageService
            ],
            declarations: classesToInclude,
            exports: classesToInclude
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiURL: 'developmentApi',
    firebase: {
        apiKey: "AIzaSyAy8gUlA__L0GaEpE0ITK-_Bu0AS0UfYhA",
        authDomain: "ares-oxeye.firebaseapp.com",
        databaseURL: "https://ares-oxeye.firebaseio.com",
        projectId: "ares-oxeye",
        storageBucket: "ares-oxeye.appspot.com",
        messagingSenderId: "529691304659"
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oxeye/Documents/GitHub/ngJivDaya/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map