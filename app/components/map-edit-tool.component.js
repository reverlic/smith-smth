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
var MapEditToolComponent = (function () {
    function MapEditToolComponent() {
        this.iconType = [];
        this.
        //selectedCell: EventEmitter<any> = new EventEmitter<any>();
        updateCellType = new core_1.EventEmitter();
        //this.selectedCellType = 0;
    }
    MapEditToolComponent.prototype.clickCellType = function (value) {
        this.selectedCellType = value;
        this.updateCellType.emit(value);
    };
    MapEditToolComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 16; i++) {
            this.iconType.push({ name: 'cell-' + i, value: i });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MapEditToolComponent.prototype, "selectedCellType", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MapEditToolComponent.prototype, "updateCellType", void 0);
    MapEditToolComponent = __decorate([
        core_1.Component({
            selector: 'map-edit-tool',
            templateUrl: 'app/components/views/map-edit-tool.component.html',
            styleUrls: ['app/components/views/map-edit-tool.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], MapEditToolComponent);
    return MapEditToolComponent;
}());
exports.MapEditToolComponent = MapEditToolComponent;
//# sourceMappingURL=map-edit-tool.component.js.map