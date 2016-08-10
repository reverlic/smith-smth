"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var blackSmith_service_1 = require('../services/blackSmith.service');
var smith_form_component_1 = require('../components/smith-form.component');
var newSmithComponent = (function () {
    function newSmithComponent(bsService, router) {
        this.bsService = bsService;
        this.router = router;
        this.data = [];
    }
    newSmithComponent.prototype.addNewSmith = function (smith) {
        var _this = this;
        this.bsService.createBs(smith).then(function (result) {
            console.log(result);
            _this.router.navigate(['/home', result.Id]);
        }).catch(function (e) { return console.log(_this.errMsg = e.status + ' ' + e.statusText); }); //this.errMsg=JSON.parse(e._body).message);
    };
    newSmithComponent.prototype.ngOnInit = function () {
    };
    newSmithComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/controllers/views/new-smith.component.html',
            providers: [blackSmith_service_1.BsService],
            directives: [smith_form_component_1.SmitFormComponent]
        }), 
        __metadata('design:paramtypes', [blackSmith_service_1.BsService, router_1.Router])
    ], newSmithComponent);
    return newSmithComponent;
}());
exports.newSmithComponent = newSmithComponent;
//# sourceMappingURL=new-smith.component.js.map