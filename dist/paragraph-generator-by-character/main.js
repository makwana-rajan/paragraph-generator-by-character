(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{font-family: 'Roboto', sans-serif;}\r\n.float-left{position: fixed; bottom: 0; left: 0; padding: 20px; height: 100vh; background-size: auto 100%; background-image: url('2.jpg');  display:flex;  align-items:center;}\r\n.float-left h1{ color: #fff; font-size: 72px;}\r\n.float-left h2{ font-size: 27px; margin-bottom: 20px;}\r\n.float-left p{color: #fff; font-size: 16px; }\r\n.float-right{ padding: 20px; position: absolute; height: 100%; right: 0;}\r\n.output-div{ padding: 10px; margin-bottom: 20px; border: dotted 2px #ddd; border-radius: 10px; word-wrap: break-word;}\r\n.float-right p{ color: #000; font-size: 14px; line-height: normal;}\r\n@media only screen and (max-width: 767px) {\r\n  .float-left{ height: auto;}\r\n  h1{ font-size: 40px;}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxrQ0FBa0MsQ0FBQztBQUN4QyxZQUFZLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQywrQkFBZ0QsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7QUFDaE0sZ0JBQWdCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5QyxnQkFBZ0IsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7QUFDdEQsY0FBYyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7QUFDN0MsY0FBYyxjQUFjLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUN6RSxhQUFhLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztBQUN0SCxnQkFBZ0IsWUFBWSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0FBRW5FO0VBQ0UsYUFBYSxhQUFhLENBQUM7RUFDM0IsSUFBSSxnQkFBZ0IsQ0FBQztDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7fVxyXG4uZmxvYXQtbGVmdHtwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMDsgbGVmdDogMDsgcGFkZGluZzogMjBweDsgaGVpZ2h0OiAxMDB2aDsgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvMi5qcGdcIik7ICBkaXNwbGF5OmZsZXg7ICBhbGlnbi1pdGVtczpjZW50ZXI7fVxyXG4uZmxvYXQtbGVmdCBoMXsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogNzJweDt9XHJcbi5mbG9hdC1sZWZ0IGgyeyBmb250LXNpemU6IDI3cHg7IG1hcmdpbi1ib3R0b206IDIwcHg7fVxyXG4uZmxvYXQtbGVmdCBwe2NvbG9yOiAjZmZmOyBmb250LXNpemU6IDE2cHg7IH1cclxuLmZsb2F0LXJpZ2h0eyBwYWRkaW5nOiAyMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMTAwJTsgcmlnaHQ6IDA7fVxyXG4ub3V0cHV0LWRpdnsgcGFkZGluZzogMTBweDsgbWFyZ2luLWJvdHRvbTogMjBweDsgYm9yZGVyOiBkb3R0ZWQgMnB4ICNkZGQ7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHdvcmQtd3JhcDogYnJlYWstd29yZDt9XHJcbi5mbG9hdC1yaWdodCBweyBjb2xvcjogIzAwMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogbm9ybWFsO31cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZmxvYXQtbGVmdHsgaGVpZ2h0OiBhdXRvO31cclxuICBoMXsgZm9udC1zaXplOiA0MHB4O31cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n  <div class=\"row\">\n    <div class=\"float-left col-lg-6 col-md-6 col-sm-12\">\n      <div>\n        <h1>Paragraph Generator</h1>\n        <P>Your project looks great on any device. Content can be easily read and a user understands freely what you\n          wanted to say him or her.</P>\n      </div>\n    </div>\n    <div class=\"float-right col-lg-6 col-md-6 col-sm-12\">\n      <h2>About</h2>\n      <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network\n        applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient,\n        perfect for data-intensive real-time applications that run across distributed devices.For deploying Angular 6\n        app to Heroku you can follow most of the steps in this post however there are some config changes in Angular 6\n        from Angular 2/4 which are needed.For deploying Angular 6 app to Heroku you can follow most of the steps in\n        this post however there are some config changes in Angular 6 from Angular 2/4 which are needed.</p>\n      <form>\n        <div class=\"form-group\">\n          <label>Select number of character:</label>\n          <select class=\"form-control\" (change)=\"onSelectCharLimit($event.target.value)\">\n            <option value=\"100\" selected>100</option>\n            <option value=\"200\">200</option>\n            <option value=\"300\">300</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label class=\"col-lg-6 col-md-6 col-sm-12\">Write Content</label>\n            <label class=\"col-lg-6 col-md-6 col-sm-12\">Number of Character: {{numberOfChar}}</label>\n          </div>\n          <textarea class=\"form-control\" rows=\"7\" cols=\"90\" [(ngModel)]=\"textContent\" (keyup)=\"onContentChange($event.target.value)\"\n            name=\"textContentName\" #textContentName=\"ngModel\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Formated Content</label>\n          <div class=\"output-div row\" *ngFor=\"let content of formatedContent; let i = index\">\n            <div class=\"pl-2\">{{i + 1}}.</div>\n            <div class=\"col-11\">\n            <span class=\"pl-4\">{{content}}</span>\n          </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'paragraph-generator';
        this.charLimit = 100;
        this.textContent = '';
        this.formatedContent = [];
        this.numberOfTimeIteration = 0;
        this.startPosition = 0;
        this.endPosition = 0;
        this.numberOfChar = 0;
    }
    AppComponent.prototype.onSelectCharLimit = function (value) {
        this.charLimit = Number(value);
        this.endPosition = value;
        this.onContentChange(this.textContent);
    };
    AppComponent.prototype.onContentChange = function (value) {
        this.numberOfChar = value.replace(/\s/g, '').length;
        this.numberOfTimeIteration = Number((this.numberOfChar / this.charLimit).toString().charAt(0)) + 1;
        this.formatedContent.length = 0;
        this.endPosition = 0;
        for (var i = 1; i <= this.numberOfTimeIteration; i++) {
            if (i === 1) {
                this.startPosition = 0;
                if (this.numberOfChar <= this.charLimit) {
                    this.endPosition = value.length;
                }
                else {
                    this.endPosition = this.charLimit + this.getNumberOfSpaces(value, i);
                }
            }
            else {
                this.startPosition = this.getFormatedContentLength();
                if (this.numberOfChar <= this.charLimit * i) {
                    this.endPosition = value.length;
                }
                else {
                    this.endPosition = (this.charLimit * i) + this.getNumberOfSpaces(value, i);
                }
            }
            if (this.startPosition !== this.endPosition) {
                this.formatedContent.push(value.substring(this.startPosition, this.endPosition));
            }
        }
    };
    AppComponent.prototype.getNumberOfSpaces = function (value, i) {
        var space = 0;
        var chartTotal = 0;
        for (var k = 0; k < value.length; k++) {
            if (value.charAt(k) === ' ') {
                space++;
            }
            else {
                chartTotal++;
            }
            if (chartTotal === this.charLimit * i) {
                break;
            }
        }
        return space;
    };
    AppComponent.prototype.getSpacePosition = function (string, start, end) {
        var index = 0;
        var res = [];
        while ((index = string.substring(start, end).indexOf(' ', index + 1)) > 0) {
            res.push(index);
        }
        return res;
    };
    AppComponent.prototype.getFormatedContentLength = function () {
        var length = 0;
        for (var i = 0; i < this.formatedContent.length; i++) {
            length += this.formatedContent[i].length;
        }
        return length;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Applications\Angular\paragraph-generator-by-character\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map