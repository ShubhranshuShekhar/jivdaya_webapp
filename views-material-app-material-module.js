(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-material-app-material-module"],{

/***/ "./src/app/views/material/app-autocomplete/app-autocomplete.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/material/app-autocomplete/app-autocomplete.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-autocomplete/app-autocomplete.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/material/app-autocomplete/app-autocomplete.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Autocomplete</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-form-field>\n      <input matInput placeholder=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    </mat-form-field>\n\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\n        {{ state }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-autocomplete/app-autocomplete.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/material/app-autocomplete/app-autocomplete.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAutocompleteComponent", function() { return AppAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var AppAutocompleteComponent = /** @class */ (function () {
    function AppAutocompleteComponent() {
        var _this = this;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterStates(name); }));
    }
    AppAutocompleteComponent.prototype.ngOnInit = function () {
    };
    AppAutocompleteComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp("^" + val, 'gi').test(s); })
            : this.states;
    };
    AppAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./app-autocomplete.component.html */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./app-autocomplete.component.css */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAutocompleteComponent);
    return AppAutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-buttons/app-buttons.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/views/material/app-buttons/app-buttons.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-buttons/app-buttons.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/material/app-buttons/app-buttons.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Buttons</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <div class=\"pb-1\">\n      <p>Basic buttons</p>\n      <button mat-button class=\"mr-1\">Default</button>\n      <button mat-button color=\"primary\" class=\"mr-1\">Primary</button>\n      <button mat-button color=\"accent\" class=\"mr-1\">Accent</button>\n      <button mat-button color=\"warn\" class=\"mr-1\">Warn</button>\n      <button mat-button disabled class=\"mr-1\">Disabled</button>\n    </div>\n\n    <div class=\"pb-1\">\n      <p>Raised buttons</p>\n      <button mat-raised-button class=\"mr-1\">Default</button>\n      <button mat-raised-button color=\"primary\" class=\"mr-1\">Primary</button>\n      <button mat-raised-button color=\"accent\" class=\"mr-1\">Accent</button>\n      <button mat-raised-button color=\"warn\" class=\"mr-1\">Warn</button>\n      <button mat-raised-button disabled class=\"mr-1\">Disabled</button>\n    </div>\n\n    <div class=\"pb-1\">\n      <p>Fab buttons</p>\n      <button mat-fab color=\"warn\" class=\"mr-1\"><mat-icon>create</mat-icon></button>\n      <button mat-mini-fab color=\"warn\" class=\"mr-1\"><mat-icon>create</mat-icon></button>\n    </div>\n\n    <div class=\"pb-1\">\n      <p>Toggle buttons</p>\n      <mat-button-toggle-group #group=\"matButtonToggleGroup\">\n        <mat-button-toggle value=\"left\">\n          <mat-icon>format_align_left</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"center\">\n          <mat-icon>format_align_center</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"right\">\n          <mat-icon>format_align_right</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"justify\" disabled>\n          <mat-icon>format_align_justify</mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-buttons/app-buttons.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/material/app-buttons/app-buttons.component.ts ***!
  \*********************************************************************/
/*! exports provided: AppButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppButtonsComponent", function() { return AppButtonsComponent; });
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

var AppButtonsComponent = /** @class */ (function () {
    function AppButtonsComponent() {
    }
    AppButtonsComponent.prototype.ngOnInit = function () {
    };
    AppButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./app-buttons.component.html */ "./src/app/views/material/app-buttons/app-buttons.component.html"),
            styles: [__webpack_require__(/*! ./app-buttons.component.css */ "./src/app/views/material/app-buttons/app-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppButtonsComponent);
    return AppButtonsComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-card/app-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-card/app-card.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-card/app-card.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-card/app-card.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"33\">\n    <mat-card class=\"p-0\">\n      <mat-card-title class=\"mat-bg-primary m-0\">\n        <div class=\"card-title-text\">\n          <span>Card with heading</span>\n          <span fxFlex></span>\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu1\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu1=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Settings</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>notifications_off</mat-icon>\n              <span>Disable alerts</span>\n            </button>\n            <button mat-menu-item>\n                <mat-icon>close</mat-icon>\n                <span>Remove panel</span>\n            </button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <img mat-card-image src=\"assets/images/photo-2.jpg\">\n      <mat-card-content>\n        <p>\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur eveniet iste iusto\n          veritatis. Adipisci quas repellat sed. Quasi quaerat aut.\n        </p>\n        <mat-divider class=\"mb-1\"></mat-divider>\n        <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n        <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"33\">\n    <mat-card class=\"p-0\">\n      <mat-card-title class=\"mat-bg-accent m-0\">\n        <div class=\"card-title-text\">\n          <span>Card with heading</span>\n          <span fxFlex></span>\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu2\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu2=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Settings</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>notifications_off</mat-icon>\n              <span>Disable alerts</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>close</mat-icon>\n              <span>Remove panel</span>\n            </button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <img mat-card-image src=\"assets/images/photo-1.jpg\">\n      <mat-card-content>\n        <p>\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur eveniet iste iusto\n          veritatis. Adipisci quas repellat sed. Quasi quaerat aut.\n        </p>\n        <mat-divider class=\"mb-1\"></mat-divider>\n        <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n        <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div fxFlex=\"100\" fxFlex.gt-xs=\"33\">\n    <mat-card class=\"p-0\">\n      <mat-card-title class=\"mat-bg-warn m-0\">\n        <div class=\"card-title-text\">\n          <span>Card with heading</span>\n          <span fxFlex></span>\n          <button class=\"card-control\" mat-icon-button [matMenuTriggerFor]=\"menu3\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu3=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>settings</mat-icon>\n              <span>Settings</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>notifications_off</mat-icon>\n              <span>Disable alerts</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>close</mat-icon>\n              <span>Remove panel</span>\n            </button>\n          </mat-menu>\n        </div>\n        <mat-divider></mat-divider>\n      </mat-card-title>\n      <img mat-card-image src=\"assets/images/photo-3.jpg\">\n      <mat-card-content>\n        <p>\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur eveniet iste iusto\n          veritatis. Adipisci quas repellat sed. Quasi quaerat aut.\n        </p>\n        <mat-divider class=\"mb-1\"></mat-divider>\n        <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n        <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n  <div\n  fxFlex=\"100\" \n  fxFlex.gt-xs=\"50\">\n    <mat-card class=\"example-card\">\n      <img mat-card-image src=\"assets/images/photo-1.jpg\">\n      <mat-card-content>\n        <p>\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, \n          sapiente est atque tenetur eveniet iste iusto veritatis magni eum, sunt eius \n          laudantium adipisci repudiandae numquam, incidunt suscipit. Veritatis ea autem, \n          beatae quae quia cum tempora, voluptatum dignissimos. Reiciendis animi, quos sint. \n          Vero maxime molestiae.\n        </p>\n        <mat-divider class=\"mb-1\"></mat-divider>\n        <button mat-icon-button><mat-icon>favorite</mat-icon></button>\n        <button mat-icon-button><mat-icon>share</mat-icon></button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div \n  fxFlex=\"100\"\n  fxFlex.gt-xs=\"50\">\n    <mat-card>\n      Super simple card\n    </mat-card>\n\n    <mat-card class=\"default\">\n      <mat-card-title>Standard Card Title</mat-card-title>\n      <mat-card-subtitle>Card subtitle</mat-card-subtitle>\n      <mat-card-content>\n        <p>\n          Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, \n          sapiente est atque tenetur eveniet iste iusto veritatis magni eum, sunt eius \n          laudantium adipisci repudiandae numquam, incidunt suscipit. Veritatis ea autem, \n          beatae quae quia cum tempora, voluptatum dignissimos. Reiciendis animi, quos sint. \n          Vero maxime molestiae.\n        </p>\n      </mat-card-content>\n      <mat-divider></mat-divider>\n      <mat-card-actions>\n        <button color=\"warn\" mat-button>Favorite</button>\n        <button mat-button>Share</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/views/material/app-card/app-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-card/app-card.component.ts ***!
  \***************************************************************/
/*! exports provided: AppCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCardComponent", function() { return AppCardComponent; });
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

var AppCardComponent = /** @class */ (function () {
    function AppCardComponent() {
    }
    AppCardComponent.prototype.ngOnInit = function () {
    };
    AppCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./app-card.component.html */ "./src/app/views/material/app-card/app-card.component.html"),
            styles: [__webpack_require__(/*! ./app-card.component.css */ "./src/app/views/material/app-card/app-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppCardComponent);
    return AppCardComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-grid/app-grid.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-grid/app-grid.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-grid/app-grid.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-grid/app-grid.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Grids</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-tab-group>\n      <mat-tab label=\"Fixed Height\">\n        <br>\n        <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n          <mat-grid-tile\n              *ngFor=\"let fg of gridFixedHeight\"\n              [colspan]=\"fg.cols\"\n              [rowspan]=\"fg.rows\"\n              [style.background]=\"fg.color\"\n              [style.color]=\"'#ffffff'\">\n            {{fg.text}}\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-tab>\n      <mat-tab label=\"Ratio Height\">\n        <br>\n        <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n          <mat-grid-tile\n          *ngFor=\"let rg of gridRatioHeight\"\n          [style.background]=\"'#607d8b'\"\n          [style.color]=\"'#ffffff'\" >{{rg}}</mat-grid-tile>\n        </mat-grid-list>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-grid/app-grid.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-grid/app-grid.component.ts ***!
  \***************************************************************/
/*! exports provided: AppGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGridComponent", function() { return AppGridComponent; });
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

var AppGridComponent = /** @class */ (function () {
    function AppGridComponent() {
        this.gridFixedHeight = [
            { text: 'One', cols: 3, rows: 1, color: '#607d8b' },
            { text: 'Two', cols: 1, rows: 2, color: '#607d8b' },
            { text: 'Three', cols: 1, rows: 1, color: '#607d8b' },
            { text: 'Four', cols: 2, rows: 1, color: '#607d8b' },
        ];
        this.gridRatioHeight = ['Grid One', 'Grid Two', 'Grid Three', 'Grid Four'];
    }
    AppGridComponent.prototype.ngOnInit = function () {
    };
    AppGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./app-grid.component.html */ "./src/app/views/material/app-grid/app-grid.component.html"),
            styles: [__webpack_require__(/*! ./app-grid.component.css */ "./src/app/views/material/app-grid/app-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppGridComponent);
    return AppGridComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-list/app-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-list/app-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-list/app-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-list/app-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\" m-0\">\n    <div class=\"card-title-text\">\n      <span>Lists</span>\n    </div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n\n  <mat-card-content>\n    <mat-list>\n      <h3 matSubheader>Simple List</h3>\n      <mat-list-item>List Item 1</mat-list-item>\n      <mat-list-item>List Item 2</mat-list-item>\n      <mat-list-item>List Item 3</mat-list-item>\n    </mat-list>\n    <mat-divider class=\"mb-1\"></mat-divider>\n    <mat-list>\n      <h3 matSubheader>Top management</h3>\n      <mat-list-item>\n        <img mat-list-avatar src=\"assets/images/face-1.jpg\" alt=\"\">\n        <h3 matLine>Mark</h3>\n        <p matLine>CEO</p>\n      </mat-list-item>\n      <mat-list-item>\n        <img mat-list-avatar src=\"assets/images/face-2.jpg\" alt=\"\">\n        <h3 matLine>Gevorg Spartak</h3>\n        <p matLine>COO</p>\n      </mat-list-item>\n      <mat-list-item>\n        <img mat-list-avatar src=\"assets/images/face-3.jpg\" alt=\"\">\n        <h3 matLine>Petros Toros</h3>\n        <p matLine>CFO</p>\n      </mat-list-item>\n      <mat-divider class=\"mb-1\"></mat-divider>\n      <h3 matSubheader>Subordinates</h3>\n      <mat-list-item>\n        <img mat-list-avatar src=\"assets/images/face-4.jpg\" alt=\"\">\n        <h3 matLine>Roy</h3>\n        <p matLine>Marketing Manager</p>\n      </mat-list-item>\n      <mat-list-item>\n        <img mat-list-avatar src=\"assets/images/face-1.jpg\" alt=\"\">\n        <h3 matLine>Henrik Gevorg</h3>\n        <p matLine>Lead Developer</p>\n      </mat-list-item>\n      <mat-list-item>\n        <img mat-list-avatar src=\"assets/images/face-1.jpg\" alt=\"\">\n        <h3 matLine>Jhone Doe</h3>\n        <p matLine>Marketing manager</p>\n      </mat-list-item>\n    </mat-list>\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-list/app-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-list/app-list.component.ts ***!
  \***************************************************************/
/*! exports provided: AppListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListComponent", function() { return AppListComponent; });
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

var AppListComponent = /** @class */ (function () {
    function AppListComponent() {
    }
    AppListComponent.prototype.ngOnInit = function () {
    };
    AppListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./app-list.component.html */ "./src/app/views/material/app-list/app-list.component.html"),
            styles: [__webpack_require__(/*! ./app-list.component.css */ "./src/app/views/material/app-list/app-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppListComponent);
    return AppListComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/material/app-material.module.ts ***!
  \*******************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-autocomplete/app-autocomplete.component */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.ts");
/* harmony import */ var _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-buttons/app-buttons.component */ "./src/app/views/material/app-buttons/app-buttons.component.ts");
/* harmony import */ var _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-card/app-card.component */ "./src/app/views/material/app-card/app-card.component.ts");
/* harmony import */ var _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-grid/app-grid.component */ "./src/app/views/material/app-grid/app-grid.component.ts");
/* harmony import */ var _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-list/app-list.component */ "./src/app/views/material/app-list/app-list.component.ts");
/* harmony import */ var _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-menu/app-menu.component */ "./src/app/views/material/app-menu/app-menu.component.ts");
/* harmony import */ var _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-progress/app-progress.component */ "./src/app/views/material/app-progress/app-progress.component.ts");
/* harmony import */ var _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-radio/app-radio.component */ "./src/app/views/material/app-radio/app-radio.component.ts");
/* harmony import */ var _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-select/app-select.component */ "./src/app/views/material/app-select/app-select.component.ts");
/* harmony import */ var _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-slider/app-slider.component */ "./src/app/views/material/app-slider/app-slider.component.ts");
/* harmony import */ var _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-snackbar/app-snackbar.component */ "./src/app/views/material/app-snackbar/app-snackbar.component.ts");
/* harmony import */ var _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-tab/app-tab.component */ "./src/app/views/material/app-tab/app-tab.component.ts");
/* harmony import */ var _app_material_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-material.routing */ "./src/app/views/material/app-material.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_app_material_routing__WEBPACK_IMPORTED_MODULE_18__["MaterialRoutes"])
            ],
            declarations: [
                _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__["AppAutocompleteComponent"],
                _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_7__["AppButtonsComponent"],
                _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_8__["AppCardComponent"],
                _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_9__["AppGridComponent"],
                _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_10__["AppListComponent"],
                _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_11__["AppMenuComponent"],
                _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_12__["AppProgressComponent"],
                _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_13__["AppRadioComponent"],
                _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_14__["AppSelectComponent"],
                _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_15__["AppSliderComponent"],
                _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_16__["AppSnackbarComponent"],
                _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_17__["AppTabComponent"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/views/material/app-material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/views/material/app-material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-autocomplete/app-autocomplete.component */ "./src/app/views/material/app-autocomplete/app-autocomplete.component.ts");
/* harmony import */ var _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-buttons/app-buttons.component */ "./src/app/views/material/app-buttons/app-buttons.component.ts");
/* harmony import */ var _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-card/app-card.component */ "./src/app/views/material/app-card/app-card.component.ts");
/* harmony import */ var _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-grid/app-grid.component */ "./src/app/views/material/app-grid/app-grid.component.ts");
/* harmony import */ var _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-list/app-list.component */ "./src/app/views/material/app-list/app-list.component.ts");
/* harmony import */ var _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-menu/app-menu.component */ "./src/app/views/material/app-menu/app-menu.component.ts");
/* harmony import */ var _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-progress/app-progress.component */ "./src/app/views/material/app-progress/app-progress.component.ts");
/* harmony import */ var _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-radio/app-radio.component */ "./src/app/views/material/app-radio/app-radio.component.ts");
/* harmony import */ var _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-select/app-select.component */ "./src/app/views/material/app-select/app-select.component.ts");
/* harmony import */ var _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-slider/app-slider.component */ "./src/app/views/material/app-slider/app-slider.component.ts");
/* harmony import */ var _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-snackbar/app-snackbar.component */ "./src/app/views/material/app-snackbar/app-snackbar.component.ts");
/* harmony import */ var _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-tab/app-tab.component */ "./src/app/views/material/app-tab/app-tab.component.ts");












var MaterialRoutes = [
    {
        path: '',
        data: { title: 'Material' },
        children: [{
                path: 'buttons',
                component: _app_buttons_app_buttons_component__WEBPACK_IMPORTED_MODULE_1__["AppButtonsComponent"],
                data: { title: 'Buttons', breadcrumb: 'BUTTONS' }
            }, {
                path: 'cards',
                component: _app_card_app_card_component__WEBPACK_IMPORTED_MODULE_2__["AppCardComponent"],
                data: { title: 'Cards', breadcrumb: 'CARDS' }
            }, {
                path: 'tabs',
                component: _app_tab_app_tab_component__WEBPACK_IMPORTED_MODULE_11__["AppTabComponent"],
                data: { title: 'Tabs', breadcrumb: 'TABS' }
            }, {
                path: 'grids',
                component: _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_3__["AppGridComponent"],
                data: { title: 'Grids', breadcrumb: 'GRIDS' }
            }, {
                path: 'lists',
                component: _app_list_app_list_component__WEBPACK_IMPORTED_MODULE_4__["AppListComponent"],
                data: { title: 'Lists', breadcrumb: 'LISTS' }
            }, {
                path: 'menu',
                component: _app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_5__["AppMenuComponent"],
                data: { title: 'Menu', breadcrumb: 'MENU' }
            }, {
                path: 'select',
                component: _app_select_app_select_component__WEBPACK_IMPORTED_MODULE_8__["AppSelectComponent"],
                data: { title: 'Select', breadcrumb: 'SELECT' }
            }, {
                path: 'radio',
                component: _app_radio_app_radio_component__WEBPACK_IMPORTED_MODULE_7__["AppRadioComponent"],
                data: { title: 'Radio', breadcrumb: 'RADIO' }
            }, {
                path: 'snackbar',
                component: _app_snackbar_app_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["AppSnackbarComponent"],
                data: { title: 'Snackbar', breadcrumb: 'SNACKBAR' }
            }, {
                path: 'autocomplete',
                component: _app_autocomplete_app_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__["AppAutocompleteComponent"],
                data: { title: 'Autocomplete', breadcrumb: 'AUTOCOMPLETE' }
            }, {
                path: 'slider',
                component: _app_slider_app_slider_component__WEBPACK_IMPORTED_MODULE_9__["AppSliderComponent"],
                data: { title: 'Slider', breadcrumb: 'SLIDER' }
            }, {
                path: 'progress',
                component: _app_progress_app_progress_component__WEBPACK_IMPORTED_MODULE_6__["AppProgressComponent"],
                data: { title: 'Progress', breadcrumb: 'PROGRESS' }
            }]
    }
];


/***/ }),

/***/ "./src/app/views/material/app-menu/app-menu.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/material/app-menu/app-menu.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-menu/app-menu.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-menu/app-menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\" m-0\">\n    <div class=\"card-title-text\">\n      <span>Menu</span>\n    </div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <p class=\"mat-card-title mt-1\">Icon menu</p>\n    <mat-toolbar class=\"inbox-toolbar mt-1\">\n      <button mat-icon-button [matMenuTriggerFor]=\"iconMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #iconMenu=\"matMenu\">\n        <button mat-menu-item>\n            <mat-icon>settings</mat-icon>\n            <span>Settings</span>\n        </button>\n        <button mat-menu-item>\n            <mat-icon>notifications_off</mat-icon>\n            <span>Disable alerts</span>\n        </button>\n        <button mat-menu-item>\n            <mat-icon>close</mat-icon>\n            <span>Remove panel</span>\n        </button>\n      </mat-menu>\n    </mat-toolbar>\n\n    <p class=\"mat-card-title mt-1\">Menu without icon</p>\n    <mat-toolbar class=\"inbox-toolbar mt-1\">\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n            <span>Settings</span>\n        </button>\n        <button mat-menu-item>\n              <span>Disable alerts</span>\n          </button>\n        <button mat-menu-item>\n            <span>Remove panel</span>\n        </button>\n      </mat-menu>\n    </mat-toolbar>\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-menu/app-menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-menu/app-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: AppMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function() { return AppMenuComponent; });
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

var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent() {
    }
    AppMenuComponent.prototype.ngOnInit = function () {
    };
    AppMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./app-menu.component.html */ "./src/app/views/material/app-menu/app-menu.component.html"),
            styles: [__webpack_require__(/*! ./app-menu.component.css */ "./src/app/views/material/app-menu/app-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppMenuComponent);
    return AppMenuComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-progress/app-progress.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/material/app-progress/app-progress.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-progress/app-progress.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/material/app-progress/app-progress.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Progress</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <div class=\"pb-1\">\n      <h6>Progress Spinner</h6>\n      <p class=\"text-muted\">Determinate</p>\n      <mat-progress-spinner\n      [color]=\"'primary'\"\n      [mode]=\"'determinate'\" \n      [value]=\"60\"></mat-progress-spinner>\n\n      <p class=\"text-muted pt-1\">Indeterminate</p>\n      <mat-progress-spinner \n      [color]=\"'primary'\"\n      [mode]=\"'indeterminate'\"></mat-progress-spinner>\n    </div>\n\n    <div class=\"pb-1\">\n      <h6>Progress Bar</h6>\n      <p class=\"text-muted\">Determinate</p>\n      <mat-progress-bar\n      [mode]=\"'determinate'\"\n      [value]=\"60\">\n      </mat-progress-bar>\n\n      <p class=\"text-muted pt-1\">Buffer</p>\n      <mat-progress-bar\n      [mode]=\"'buffer'\"\n      [value]=\"40\"\n      [bufferValue]=\"70\">\n      </mat-progress-bar>\n\n      <p class=\"text-muted pt-1\">Indeterminate</p>\n      <mat-progress-bar\n      [mode]=\"'indeterminate'\">\n      </mat-progress-bar>\n\n      <p class=\"text-muted pt-1\">Query</p>\n      <mat-progress-bar\n      [mode]=\"'query'\">\n      </mat-progress-bar>\n\n    </div>\n    \n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/material/app-progress/app-progress.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/material/app-progress/app-progress.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProgressComponent", function() { return AppProgressComponent; });
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

var AppProgressComponent = /** @class */ (function () {
    function AppProgressComponent() {
    }
    AppProgressComponent.prototype.ngOnInit = function () {
    };
    AppProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./app-progress.component.html */ "./src/app/views/material/app-progress/app-progress.component.html"),
            styles: [__webpack_require__(/*! ./app-progress.component.css */ "./src/app/views/material/app-progress/app-progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppProgressComponent);
    return AppProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-radio/app-radio.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/material/app-radio/app-radio.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-radio/app-radio.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/material/app-radio/app-radio.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"m-0\">\n    <div class=\"card-title-text\">\n      <span>Radio button</span>\n    </div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <p class=\"mt-1\">Simple Radio buttons</p>\n\n    <mat-radio-group fxLayout=\"column\" class=\"mb-1\">\n      <mat-radio-button [style.marginBottom]=\"'.5rem'\" value=\"1\">Option 1</mat-radio-button>\n      <mat-radio-button [style.marginBottom]=\"'.5rem'\" value=\"2\">Option 2</mat-radio-button>\n    </mat-radio-group>\n\n    \n    <p>Radios with ngModel</p>\n    <mat-radio-group fxLayout=\"column\" [(ngModel)]=\"selectedSeason\">\n      <mat-radio-button \n      [style.marginBottom]=\"'.5rem'\" \n      *ngFor=\"let season of seasons\" \n      [value]=\"season\">\n        {{season}}\n      </mat-radio-button>\n    </mat-radio-group>\n    <div class=\"mt-1\">Your favorite season is: {{selectedSeason}}</div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/material/app-radio/app-radio.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/material/app-radio/app-radio.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRadioComponent", function() { return AppRadioComponent; });
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

var AppRadioComponent = /** @class */ (function () {
    function AppRadioComponent() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    AppRadioComponent.prototype.ngOnInit = function () {
    };
    AppRadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(/*! ./app-radio.component.html */ "./src/app/views/material/app-radio/app-radio.component.html"),
            styles: [__webpack_require__(/*! ./app-radio.component.css */ "./src/app/views/material/app-radio/app-radio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppRadioComponent);
    return AppRadioComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-select/app-select.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/material/app-select/app-select.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-select/app-select.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/material/app-select/app-select.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">\n      <span>Dropdown select</span>\n    </div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    \n    <form class=\"pt-1\">\n        <mat-select id=\"langToggle\" placeholder=\"\" [(ngModel)]=\"selectedValue\" name=\"food\" class=\"mb-1\">\n          <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\" ngDefaultControl>\n            {{food.viewValue}}\n          </mat-option>\n        </mat-select>\n        <p> Selected value: {{selectedValue}} </p>\n    </form>\n\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-select/app-select.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/material/app-select/app-select.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSelectComponent", function() { return AppSelectComponent; });
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

var AppSelectComponent = /** @class */ (function () {
    function AppSelectComponent() {
        this.selectedValue = 'pizza';
        this.foods = [
            { value: 'steak', viewValue: 'Steak' },
            { value: 'pizza', viewValue: 'Pizza' },
            { value: 'tacos', viewValue: 'Tacos' }
        ];
    }
    AppSelectComponent.prototype.ngOnInit = function () {
    };
    AppSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./app-select.component.html */ "./src/app/views/material/app-select/app-select.component.html"),
            styles: [__webpack_require__(/*! ./app-select.component.css */ "./src/app/views/material/app-select/app-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSelectComponent);
    return AppSelectComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-slider/app-slider.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/material/app-slider/app-slider.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-slider/app-slider.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/material/app-slider/app-slider.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Slider</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <div class=\"pb-1\">\n      <h6>Default</h6>\n      <mat-slider [style.width]=\"'300px'\"></mat-slider>\n    </div>\n    <div class=\"pb-1\">\n      <h6>Thumb Label</h6>\n      <mat-slider \n      color=\"primary\"\n      [style.width]=\"'300px'\"\n      [thumbLabel]=\"true\"></mat-slider>\n    </div>\n    <div class=\"pb-1\">\n      <h6>Step</h6>\n      <mat-slider \n      [style.width]=\"'300px'\"\n      [step]=\"5\"></mat-slider>\n    </div>\n    <div class=\"pb-1\">\n      <h6>Invert</h6>\n      <mat-slider \n      [style.width]=\"'300px'\"\n      [invert]=\"true\"></mat-slider>\n    </div>\n    <div class=\"pb-1\">\n      <h6>Vertical</h6>\n      <mat-slider \n      [style.width]=\"'300px'\"\n      [vertical]=\"true\"></mat-slider>\n    </div>\n    <div class=\"pb-1\">\n      <h6>Disabled</h6>\n      <mat-slider \n      [style.width]=\"'300px'\"\n      [disabled]=\"true\"></mat-slider>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/material/app-slider/app-slider.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/material/app-slider/app-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSliderComponent", function() { return AppSliderComponent; });
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

var AppSliderComponent = /** @class */ (function () {
    function AppSliderComponent() {
    }
    AppSliderComponent.prototype.ngOnInit = function () {
    };
    AppSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./app-slider.component.html */ "./src/app/views/material/app-slider/app-slider.component.html"),
            styles: [__webpack_require__(/*! ./app-slider.component.css */ "./src/app/views/material/app-slider/app-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSliderComponent);
    return AppSliderComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-snackbar/app-snackbar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/material/app-snackbar/app-snackbar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-snackbar/app-snackbar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/material/app-snackbar/app-snackbar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\" m-0\">\n    <div class=\"card-title-text\">\n      <span>Snack Bar</span>\n    </div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <p class=\"mt-1\"><code>MdSnackBar</code> Service opens snack bar notification</p>\n    <br>\n    <button mat-raised-button (click)=\"openSnackBar()\">Open SnackBar</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/views/material/app-snackbar/app-snackbar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/material/app-snackbar/app-snackbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: AppSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSnackbarComponent", function() { return AppSnackbarComponent; });
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


var AppSnackbarComponent = /** @class */ (function () {
    function AppSnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    AppSnackbarComponent.prototype.openSnackBar = function () {
        console.log('test');
        this.snackBar.open('This is a message', 'close', { duration: 2000 });
    };
    AppSnackbarComponent.prototype.ngOnInit = function () {
    };
    AppSnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./app-snackbar.component.html */ "./src/app/views/material/app-snackbar/app-snackbar.component.html"),
            styles: [__webpack_require__(/*! ./app-snackbar.component.css */ "./src/app/views/material/app-snackbar/app-snackbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AppSnackbarComponent);
    return AppSnackbarComponent;
}());



/***/ }),

/***/ "./src/app/views/material/app-tab/app-tab.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/material/app-tab/app-tab.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/material/app-tab/app-tab.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/material/app-tab/app-tab.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"p-0\">\n  <mat-card-title class=\"\">\n    <div class=\"card-title-text\">Tabs</div>\n    <mat-divider></mat-divider>\n  </mat-card-title>\n  <mat-card-content>\n    <mat-tab-group>\n      <mat-tab label=\"Tab 1\">\n        <p class=\"pt-1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <p class=\"pt-1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quod dolores explicabo at nisi voluptatum doloribus,\n          natus consequatur voluptate reprehenderit, obcaecati nulla quibusdam porro iste autem. Quia, quod possimus voluptas?</p>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/views/material/app-tab/app-tab.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/material/app-tab/app-tab.component.ts ***!
  \*************************************************************/
/*! exports provided: AppTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTabComponent", function() { return AppTabComponent; });
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

var AppTabComponent = /** @class */ (function () {
    function AppTabComponent() {
    }
    AppTabComponent.prototype.ngOnInit = function () {
    };
    AppTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./app-tab.component.html */ "./src/app/views/material/app-tab/app-tab.component.html"),
            styles: [__webpack_require__(/*! ./app-tab.component.css */ "./src/app/views/material/app-tab/app-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppTabComponent);
    return AppTabComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-material-app-material-module.js.map