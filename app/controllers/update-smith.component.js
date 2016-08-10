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
var Smith_1 = require('../models/Smith');
var blackSmith_service_1 = require('../services/blackSmith.service');
var smith_form_component_1 = require('../components/smith-form.component');
var updateSmithComponent = (function () {
    function updateSmithComponent(bsService, router, route) {
        this.bsService = bsService;
        this.router = router;
        this.route = route;
        this.passingtitle = 'passing title';
        this.smithModel = new Smith_1.Smith();
    }
    updateSmithComponent.prototype.updateSmith = function (smith) {
        var _this = this;
        this.bsService.updateBs(smith).then(function (result) {
            console.log(result);
            _this.router.navigate(['/home', result.Id]);
        }).catch(function (e) { return console.log(_this.errMsg = e.status + ' ' + e.statusText); }); //this.errMsg=JSON.parse(e._body).message);
    };
    updateSmithComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) { _this.smithId = +params['smithId']; });
        this.bsService.getBsById(this.smithId).then(function (data) {
            if (data) {
                _this.smithModel = data[0];
            }
        });
    };
    updateSmithComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/controllers/views/update-smith.component.html',
            providers: [blackSmith_service_1.BsService],
            directives: [smith_form_component_1.SmitFormComponent]
        }), 
        __metadata('design:paramtypes', [blackSmith_service_1.BsService, router_1.Router, router_1.ActivatedRoute])
    ], updateSmithComponent);
    return updateSmithComponent;
}());
exports.updateSmithComponent = updateSmithComponent;
//# sourceMappingURL=update-smith.component.js.map