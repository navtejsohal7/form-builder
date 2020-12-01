"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BuilderComponent = void 0;
var core_1 = require("@angular/core");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var dialog_1 = require("@angular/material/dialog");
var dialog_component_1 = require("../dialog/dialog.component");
var BuilderComponent = /** @class */ (function () {
    function BuilderComponent(dialog, builderService) {
        this.dialog = dialog;
        this.builderService = builderService;
        this.value = {
            label: "",
            value: ""
        };
        this.success = false;
        this.fieldModels = [];
        this.modelFields = [];
    }
    BuilderComponent.prototype.ngOnInit = function () {
        this.getFormFields();
        this.getModelFields();
    };
    BuilderComponent.prototype.getFormFields = function () {
        var _this = this;
        this.builderService.getFormFields()
            .subscribe(function (fields) { return _this.fieldModels = fields; });
    };
    BuilderComponent.prototype.getModelFields = function () {
        var _this = this;
        this.builderService.getModelFields()
            .subscribe(function (fields) { return _this.modelFields = fields; });
    };
    BuilderComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            drag_drop_1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            drag_drop_1.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    BuilderComponent.prototype.openDialog = function (name) {
        var dialogConfig = new dialog_1.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            name: name,
            modelFields: this.modelFields
        };
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    BuilderComponent = __decorate([
        core_1.Component({
            selector: 'app-builder',
            templateUrl: './builder.component.html',
            styleUrls: ['./builder.component.sass']
        })
    ], BuilderComponent);
    return BuilderComponent;
}());
exports.BuilderComponent = BuilderComponent;
