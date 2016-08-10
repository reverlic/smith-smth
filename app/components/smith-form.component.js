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
var forms_1 = require('@angular/forms');
var Smith_1 = require('../models/Smith');
var SmitFormComponent = (function () {
    function SmitFormComponent() {
        this.ranks = [{ name: 'Unrank', value: '0' }, { name: 'Novice', value: '1' }, { name: 'Appertince', value: '2' }, { name: 'Adept', value: '3' }, { name: 'Expert', value: '4' }, { name: 'Master', value: '5' }];
        this.callback = new core_1.EventEmitter();
        //this.smithModel = new Smith();
        //this.smithImport = new Smith();
    }
    SmitFormComponent.prototype.onSubmit = function () {
        //this.smithModel.Name = this.smithForm.value.name;
        //this.smithModel.Rank = this.smithForm.value.rank;
        //this.smithModel.Money = this.smithForm.value.money;
        this.callback.emit(this.smithModel);
    };
    SmitFormComponent.prototype.ngOnInit = function () {
        if (!this.smithModel) {
            this.smithModel = new Smith_1.Smith();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Smith_1.Smith)
    ], SmitFormComponent.prototype, "smithModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SmitFormComponent.prototype, "callback", void 0);
    SmitFormComponent = __decorate([
        core_1.Component({
            selector: 'smith-form',
            templateUrl: 'app/components/views/smith-form.component.html',
            directives: [forms_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], SmitFormComponent);
    return SmitFormComponent;
}());
exports.SmitFormComponent = SmitFormComponent;
//# sourceMappingURL=smith-form.component.js.map