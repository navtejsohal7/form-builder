"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DialogComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(builderService, dialogRef, data) {
        this.builderService = builderService;
        this.dialogRef = dialogRef;
        this.modelFields = [];
        this.fieldType = [
            {
                "name": "input",
                "type": ["text", "email", "password", "number"]
            },
            {
                "name": "button",
                "type": ["submit", "reset"]
            }
        ];
        this.name = data.name;
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.getModelFields();
        var type = this.getType(this.name);
        this.type = type[0].type;
    };
    DialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setLatestFormFields();
        });
    };
    DialogComponent.prototype.getModelFields = function () {
        var _this = this;
        this.builderService.getModelFields()
            .subscribe(function (fields) { return _this.modelFields = fields; });
    };
    DialogComponent.prototype.setLatestFormFields = function () {
        var _this = this;
        var fields = this.modelFields.map(function (mod) {
            if (mod.name == _this.name) {
                mod.value = "test";
            }
            return mod;
        });
        this.builderService.setModelFields(fields);
    };
    DialogComponent.prototype.getType = function (value) {
        var test = this.fieldType.filter(function (type) { return type.name == value; });
        return test;
    };
    DialogComponent.prototype.onSubmit = function (values) {
        var fields = this.modelFields.map(function (mod) {
            if (mod.name == values.name) {
                var returnedTarget = Object.assign(mod, values);
                return returnedTarget;
            }
        });
        this.builderService.setModelFields(fields);
        this.dialogRef.close();
    };
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.sass']
        }),
        __param(2, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
