"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var builder_service_1 = require("./builder.service");
describe('BuilderService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(builder_service_1.BuilderService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
