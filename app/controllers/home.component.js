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
var loading_square_component_1 = require('../components/loading-square.component');
var HomeComponent = (function () {
    function HomeComponent(bsService, router, route) {
        this.bsService = bsService;
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.deleteSmith = function (id) {
        console.log('Smith Id ' + id + ' deleted');
    };
    HomeComponent.prototype.editSmith = function (id) {
        this.router.navigate(['/updateSmith', id]);
    };
    HomeComponent.prototype.addNewMetalSmith = function () {
        //let link = ['/detail', hero.id];
        //this.router.navigate(link);
        var link = ['/newsmith'];
        this.router.navigate(link);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsService.getAllBs().then(function (data) {
            console.log(data);
            _this.data = data;
            if (data) {
                _this.smithModel = data[0];
            }
        }).catch(function (e) {
            _this.error = 'something wrong when we try to get metalsmith :( ';
            _this.data = [];
        });
        this.sub = this.route.params.subscribe(function (params) { _this.lastestId = +params['lastestId']; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/controllers/views/home.component.html',
            providers: [blackSmith_service_1.BsService],
            directives: [smith_form_component_1.SmitFormComponent, loading_square_component_1.loadingSquareComponent]
        }), 
        __metadata('design:paramtypes', [blackSmith_service_1.BsService, router_1.Router, router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map