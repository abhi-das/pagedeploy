webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-container\">\r\n    <img src=\"assets/svg/ngx-bootstrap.svg\" class=\"logo\">\r\n</div>\r\n<quiz></quiz>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-container {\n  text-align: center; }\n\n.logo {\n  max-height: 20em;\n  padding-bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quiz_multiple_choice_multiple_choice_component__ = __webpack_require__("../../../../../src/app/quiz/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quiz_single_choice_single_choice_component__ = __webpack_require__("../../../../../src/app/quiz/single-choice/single-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__quiz_user_input_user_input_component__ = __webpack_require__("../../../../../src/app/quiz/user-input/user-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quiz_feedback_data_feedback_data_component__ = __webpack_require__("../../../../../src/app/quiz/feedback-data/feedback-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_8__quiz_multiple_choice_multiple_choice_component__["a" /* MultipleChoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__quiz_single_choice_single_choice_component__["a" /* SingleChoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__quiz_user_input_user_input_component__["a" /* UserInputComponent */],
                __WEBPACK_IMPORTED_MODULE_13__quiz_feedback_data_feedback_data_component__["a" /* FeedbackDataComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* ModalModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_window_service__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_15__services_quiz_service__["a" /* QuizSevice */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/feedback-data/feedback-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-data__container\" id=\"formDataContainer\">\n\t<div class=\"form-data__inner\" *ngIf=\"formDataValues\">\n\t\t<p><strong>Form Data:</strong></p>\n\t\t<pre>{{formDataValues | json }}</pre>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/quiz/feedback-data/feedback-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-data__container {\n  background: #c7c7c7;\n  padding: 2em; }\n\n.form-data__inner {\n  width: 80%;\n  margin: auto; }\n\npre {\n  background: #f6f6f6;\n  padding: 2em;\n  border: 1px solid #e1dddd;\n  border-radius: .4em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/feedback-data/feedback-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackDataComponent = (function () {
    function FeedbackDataComponent() {
    }
    FeedbackDataComponent.prototype.ngOnInit = function () {
    };
    FeedbackDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'feedback-data',
            template: __webpack_require__("../../../../../src/app/quiz/feedback-data/feedback-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/feedback-data/feedback-data.component.scss")],
            inputs: ['formDataValues']
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackDataComponent);
    return FeedbackDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/multiple-choice/multiple-choice.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mchoice form-group\"> \r\n\t<div class=\"mchoice__item\">\r\n\t\t<p>\r\n\t\t\t<span class=\"mchoice__item-count\">{{index}}</span> \r\n\t\t\t<i class=\"mchoice__item-icon fa fa-long-arrow-right\"></i>\r\n\t\t</p>\r\n\t\t<p class=\"mchoice__label\">{{qz.headline}}</p>\r\n\t</div>\r\n\t<div class=\"mchoice__checkbox\" *ngFor='let choice of qz.choices; let idx = index'>\r\n\r\n  \t\t<div class=\"pretty p-icon p-pulse\" [formGroup]=\"headerSectionFormGroup\">\r\n\r\n\t        <input id=\"{{fieldName}}{{index}}{{idx}}\" \r\n        \t\ttype=\"checkbox\" name=\"{{fieldName}}{{index}}\" value=\"{{choice.value}}\" \r\n\t        \t*ngIf=\"qz.nextEnable == true\" (click)=\"navTo($event,'')\"/>\r\n\t        \t\r\n\t        <input id=\"{{fieldName}}{{index}}\" \r\n        \t\ttype=\"checkbox\" name=\"{{fieldName}}{{index}}\" value=\"{{choice.value}}\" \r\n\t        \t*ngIf=\"qz.nextEnable == false\"  (click)=\"navTo($event,navigateNext)\"/>\r\n\r\n\t        <div class=\"state p-info\">\r\n\t            <i class=\"icon fa fa-check\"></i>\r\n\t            <label>{{choice.label}}</label>\r\n\t        </div>\r\n\t    </div>\r\n\t</div>\r\n</div>\r\n\r\n<p class=\"mchoice__btn-next\" \r\n\t*ngIf=\"qz.nextEnable && !isLastQ\" [ngx-scroll-to]=\"navigateNext\">\r\n\t<span class=\"mchoice__btn-next-text\">OK   <i class=\"fa fa-check\"></i></span>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/quiz/multiple-choice/multiple-choice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mchoice__label {\n  font-weight: 700;\n  font-size: 1.3em;\n  display: inline-block;\n  margin-left: 1em; }\n\n.mchoice__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: #275b62;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n  .mchoice__item-count {\n    font-size: 1.3em; }\n  .mchoice__item p {\n    position: relative;\n    margin-right: 1.5em; }\n\n.mchoice__item-icon {\n  position: absolute;\n  top: .5em;\n  left: 1.5em; }\n\n.mchoice__checkbox {\n  padding-left: 3.5em;\n  padding-top: 1em;\n  color: #275b62; }\n\n.mchoice__btn-next {\n  margin-left: 3.5em;\n  width: auto;\n  height: 35px;\n  cursor: pointer; }\n  .mchoice__btn-next-text {\n    display: inline-block;\n    background-color: #98cfd6;\n    padding: .5em 1em;\n    font-size: 19px;\n    color: #275b62;\n    margin-right: .5em; }\n\n.mchoice .pretty .state label {\n  margin-left: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/multiple-choice/multiple-choice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleChoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultipleChoiceComponent = (function () {
    function MultipleChoiceComponent(_scrollToService) {
        this._scrollToService = _scrollToService;
    }
    MultipleChoiceComponent.prototype.ngOnInit = function () {
        var isRequired = (this.qz.required ? __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required : null);
        this.selectedArr = [];
        this.newFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.selectedArr, isRequired);
        this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
    };
    MultipleChoiceComponent.prototype.navTo = function ($ev, navId) {
        if ($ev.target.checked) {
            this.selectedArr.push($ev.target.value);
        }
        else {
            this.selectedArr.splice(this.selectedArr.indexOf($ev.target.value), 1);
        }
        this.newFormControl.setValue(this.selectedArr);
        if (navId) {
            var config = {
                target: navId
            };
            this._scrollToService.scrollTo(config);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */])
    ], MultipleChoiceComponent.prototype, "headerSectionFormGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], MultipleChoiceComponent.prototype, "fieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], MultipleChoiceComponent.prototype, "qz", void 0);
    MultipleChoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'multiple-choice',
            template: __webpack_require__("../../../../../src/app/quiz/multiple-choice/multiple-choice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/multiple-choice/multiple-choice.component.scss")],
            inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<form\r\n\t[formGroup] = 'form'\r\n\t(ngSubmit)=\"onFeedbackSubmit(form.value, '#formDataContainer')\"\r\n\t>\r\n\r\n\t<ul class=\"quiz-list\">\r\n\r\n\t    <li id=\"quest{{idx}}\" class=\"quiz-list__item\" \r\n\t    \t*ngFor=\"let question of questions; let idx = index; let isLastQ = last\" >\r\n\r\n\t        <single-choice *ngIf=\"question.question_type == 'single-choice'\" \r\n\t        \t[qz]=\"question\" \r\n\t        \t[index]=\"(idx+1)\"\r\n\t        \t[isLastQ]=\"isLastQ\"\r\n\t        \t[headerSectionFormGroup]=\"form\"\r\n\t        \t[fieldName]=\"'schoice'+(idx)\"\r\n\t        \t[navigateNext]=\"'#quest'+(idx+1)\">\r\n\t        </single-choice>\r\n\r\n\t        <multiple-choice *ngIf=\"question.question_type == 'multiple-choice'\" \r\n\t        \t[qz]=\"question\" \r\n\t        \t[index]=\"(idx+1)\"\r\n\t        \t[isLastQ]=\"isLastQ\"\r\n\t        \t[headerSectionFormGroup]=\"form\"\r\n\t        \t[fieldName]=\"'mchoice'+(idx)\"\r\n\t        \t[navigateNext]=\"'#quest'+(idx+1)\">\r\n\t        </multiple-choice>\r\n\t\r\n\t\t\t<user-input *ngIf=\"question.question_type == 'text'\" \r\n\t\t\t\t[qz]=\"question\" \r\n\t        \t[index]=\"(idx+1)\"\r\n\t        \t[isLastQ]=\"isLastQ\"\r\n\t        \t[headerSectionFormGroup]=\"form\"\r\n\t        \t[fieldName]=\"'userchoice'+(idx)\"\r\n\t        \t[navigateNext]=\"'#quest'+(idx+1)\">\r\n\t        </user-input>\r\n\t        \r\n\t    </li>\r\n\t</ul>\r\n\t<div class=\"form-group quiz-list__btn-container\">\r\n\t\t<button class=\"quiz-list__btn-submit\" \r\n\t\t\tname=\"submit\" type=\"submit\" [disabled]=\"!form.valid\">\r\n\t\t\t<span class=\"quiz-list__btn-submit-text\">Submit</span>\r\n\t\t\t<span> show <strong>Form Data</strong></span>\r\n\t\t</button>\r\n\t</div>\r\n</form>\r\n\r\n<!-- <pre>{{your_form or control_name | json }}</pre> -->\r\n<feedback-data [formDataValues]=\"formData\"></feedback-data>"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  font-family: 'Montserrat', sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.quiz-list {\n  list-style: none;\n  margin-top: 2em;\n  padding-bottom: 5em;\n  padding-left: 0; }\n  .quiz-list__item {\n    min-height: 15em;\n    padding: 2em 0;\n    text-align: left;\n    margin-bottom: 1em; }\n  .quiz-list__btn-container {\n    margin-left: 3.5em;\n    padding-right: 5em;\n    padding-left: 5em;\n    padding-bottom: 10em; }\n  .quiz-list__btn-submit {\n    outline: none;\n    border: none;\n    background-color: transparent;\n    color: #275b62;\n    font-family: 'Montserrat', sans-serif; }\n    .quiz-list__btn-submit-text {\n      display: inline-block;\n      background-color: #98cfd6;\n      padding: .5em 1em;\n      font-size: 19px;\n      color: #275b62;\n      margin-right: .5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__ = __webpack_require__("../../../../../src/app/services/quiz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = (function () {
    function QuizComponent(_scrollToService, _qzSer) {
        this._scrollToService = _scrollToService;
        this._qzSer = _qzSer;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qzData = this._qzSer.getQuiz().subscribe(function (res) {
            // console.log('right here > ', res['questionnaire']['questions']);
            _this.questions = res['questionnaire']['questions'];
        });
        // Form Controls
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({});
    };
    QuizComponent.prototype.onFeedbackSubmit = function (feedback, showDtContainer) {
        // console.log("feedback > ", showDtContainer);
        this.formData = feedback;
        var config = {
            target: showDtContainer
        };
        this._scrollToService.scrollTo(config);
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'quiz',
            template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */], __WEBPACK_IMPORTED_MODULE_3__services_quiz_service__["a" /* QuizSevice */]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/single-choice/single-choice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"schoice form-group\"> \r\n\t<div class=\"schoice__item\">\r\n\t\t<p>\r\n\t\t\t<span class=\"schoice__item-count\">{{index}}</span> \r\n\t\t\t<i class=\"schoice__item-icon fa fa-long-arrow-right\"></i>\r\n\t\t</p>\r\n\t\t<p class=\"schoice__label\">{{qz.headline}}</p>\r\n\t</div>\r\n\r\n\t<div class=\"schoice__radio\" *ngFor='let choice of qz.choices'>\r\n\t\r\n\t    <div class=\"pretty p-icon p-round p-pulse\" [formGroup]=\"headerSectionFormGroup\">\r\n\r\n\t        <input type=\"radio\" name=\"{{fieldName}}\" value=\"{{choice.value}}\"\r\n\t        \t*ngIf=\"qz.nextEnable == true\" (change)=\"navTo($event,'')\" />\r\n\r\n\t        <input type=\"radio\" name=\"{{fieldName}}\" value=\"{{choice.value}}\"\r\n\t        \t*ngIf=\"qz.nextEnable == false\" (change)=\"navTo($event, navigateNext)\"/>\r\n\r\n\t        <div class=\"state p-info\">\r\n\t            <i class=\"icon fa fa-check\"></i>\r\n\t            <label>{{choice.label}}</label>\r\n\t        </div>\r\n\t    </div>\r\n\t</div>\r\n</div>\r\n\r\n<p class=\"schoice__btn-next\" \r\n\t*ngIf=\"qz.nextEnable && !isLastQ\" [ngx-scroll-to]=\"navigateNext\">\r\n\t<span class=\"schoice__btn-next-text\">OK   <i class=\"fa fa-check\"></i></span>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/quiz/single-choice/single-choice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".schoice__label {\n  font-weight: 700;\n  font-size: 1.3em;\n  display: inline-block;\n  margin-left: 1em; }\n\n.schoice__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: #275b62;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n  .schoice__item-count {\n    font-size: 1.3em; }\n  .schoice__item p {\n    position: relative;\n    margin-right: 1.5em; }\n\n.schoice__item-icon {\n  position: absolute;\n  top: .5em;\n  left: 1.5em; }\n\n.schoice__radio {\n  padding-left: 3.5em;\n  padding-top: 1em;\n  color: #275b62; }\n\n.schoice__btn-next {\n  margin-left: 3.5em;\n  width: auto;\n  height: 35px;\n  cursor: pointer; }\n  .schoice__btn-next-text {\n    display: inline-block;\n    background-color: #98cfd6;\n    padding: .5em 1em;\n    font-size: 19px;\n    color: #275b62;\n    margin-right: .5em; }\n\n.schoice .pretty .state label {\n  margin-left: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/single-choice/single-choice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleChoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleChoiceComponent = (function () {
    function SingleChoiceComponent(_scrollToService) {
        this._scrollToService = _scrollToService;
    }
    SingleChoiceComponent.prototype.ngOnInit = function () {
        var isRequired = (this.qz.required ? __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required : null);
        this.newFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.selectedValue, isRequired);
        this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
    };
    SingleChoiceComponent.prototype.navTo = function ($ev, navId) {
        this.selectedValue = $ev.target.value;
        this.newFormControl.setValue(this.selectedValue);
        if (navId) {
            var config = {
                target: navId
            };
            this._scrollToService.scrollTo(config);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */])
    ], SingleChoiceComponent.prototype, "headerSectionFormGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], SingleChoiceComponent.prototype, "fieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], SingleChoiceComponent.prototype, "qz", void 0);
    SingleChoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'single-choice',
            template: __webpack_require__("../../../../../src/app/quiz/single-choice/single-choice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/single-choice/single-choice.component.scss")],
            inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]])
    ], SingleChoiceComponent);
    return SingleChoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/user-input/user-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group text-choice\">\r\n\t<div class=\"user-text__item\">\r\n\t\t<p>\r\n\t\t\t<span class=\"user-text__item-count\">{{index}}</span> \r\n\t\t\t<i class=\"user-text__item-icon fa fa-long-arrow-right\"></i>\r\n\t\t</p>\r\n\t\t<p class=\"user-text__label\">{{qz.headline}}</p>\r\n\t</div>\r\n\t<div class=\"user-text__field-container\">\r\n\t\t<input class=\"user-text__field\" type=\"text\" autocomplete=\"false\" name=\"{{fieldName}}\" \r\n\t\t\tvalue=\"\" (change)=\"navTo($event, '')\" (keydown.enter)=\"navTo($event, navigateNext)\" />\r\n\t</div>\r\n</div>\r\n<p class=\"user-text__btn-next\" [ngx-scroll-to]=\"navigateNext\"> \r\n\t<span class=\"user-text__btn-next-text\">OK   <i class=\"fa fa-check\"></i></span>\r\n\t<span> press <strong>Enter</strong></span>\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/quiz/user-input/user-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-text__label {\n  font-weight: 700;\n  font-size: 1.3em;\n  display: inline-block;\n  margin-left: 1em; }\n\n.user-text__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: #275b62;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n  .user-text__item-count {\n    font-size: 1.3em; }\n  .user-text__item p {\n    position: relative;\n    margin-right: 1.5em; }\n\n.user-text__item-icon {\n  position: absolute;\n  top: .5em;\n  left: 1.5em; }\n\n.user-text__field-container {\n  margin-left: 3.5em;\n  padding-top: 1em; }\n\n.user-text__field {\n  font-size: 24px;\n  line-height: 30px;\n  width: 100%;\n  resize: none;\n  background: transparent;\n  outline: none;\n  box-sizing: border-box;\n  color: #275b62;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 1px solid #9ec2c7; }\n  .user-text__field:focus {\n    border-color: transparent; }\n\n.user-text__btn-next {\n  margin-left: 3.5em;\n  cursor: pointer;\n  width: auto;\n  height: 35px;\n  color: #275b62; }\n  .user-text__btn-next-text {\n    display: inline-block;\n    background-color: #98cfd6;\n    padding: .5em 1em;\n    font-size: 19px;\n    margin-right: .5em; }\n\n.user-text .pretty .state label {\n  margin-left: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/user-input/user-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInputComponent = (function () {
    function UserInputComponent(_scrollToService) {
        this._scrollToService = _scrollToService;
    }
    UserInputComponent.prototype.ngOnInit = function () {
        this.userFieldVal = '';
        var isRequired = (this.qz.required ? __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required : null);
        this.newFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this.userFieldVal, isRequired);
        this.headerSectionFormGroup.addControl(this.fieldName, this.newFormControl);
    };
    UserInputComponent.prototype.navTo = function ($ev, navId) {
        this.userFieldVal = $ev.target.value;
        this.newFormControl.setValue(this.userFieldVal);
        if (navId) {
            var config = {
                target: navId
            };
            this._scrollToService.scrollTo(config);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */])
    ], UserInputComponent.prototype, "headerSectionFormGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], UserInputComponent.prototype, "fieldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], UserInputComponent.prototype, "qz", void 0);
    UserInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-input',
            template: __webpack_require__("../../../../../src/app/quiz/user-input/user-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/user-input/user-input.component.scss")],
            inputs: ['qz', 'index', 'isLastQ', 'navigateNext', 'headerSectionFormGroup', 'fieldName']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]])
    ], UserInputComponent);
    return UserInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/quiz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizSevice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizSevice = (function () {
    function QuizSevice(_http) {
        this._http = _http;
    }
    QuizSevice.prototype.getQuiz = function () {
        var res = this._http.get("./assets/data/questionnaire.json")
            .map(function (quizRes) { return quizRes.json(); });
        // Add Error hanlding logic here
        return res;
    };
    QuizSevice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], QuizSevice);
    return QuizSevice;
}());



/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map