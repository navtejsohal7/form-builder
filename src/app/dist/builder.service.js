"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BuilderService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var mock_fields_1 = require("./mock-fields");
var BuilderService = /** @class */ (function () {
    function BuilderService() {
        this.fields = mock_fields_1.modelFields;
    }
    BuilderService.prototype.getFormFields = function () {
        return rxjs_1.of(mock_fields_1.fieldModels);
    };
    BuilderService.prototype.getModelFields = function () {
        return rxjs_1.of(this.fields);
    };
    BuilderService.prototype.setModelFields = function (fields) {
        this.fields = fields;
        return rxjs_1.of(this.fields);
    };
    BuilderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BuilderService);
    return BuilderService;
}());
exports.BuilderService = BuilderService;
