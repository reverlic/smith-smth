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
var router_1 = require('@angular/router');
var map_1 = require('../Models/map');
var map_component_1 = require('../components/map.component');
var MapEditorComponent = (function () {
    function MapEditorComponent(router, route) {
        this.router = router;
        this.route = route;
        this.selectedCell = { x: null, y: null };
        this.title = 'the legendary begins';
        this.iconType = [];
        this.selectedCellType = 0;
    }
    MapEditorComponent.prototype.onCellSeleted = function (position) {
        this.selectedCell = position;
        this.editSelectedCell(this.selectedCellType);
    };
    MapEditorComponent.prototype.editSelectedCell = function (cellType) {
        this.mapData.layout[this.selectedCell.x][this.selectedCell.y].terrain = cellType;
    };
    MapEditorComponent.prototype.onCreate = function (xSize, ySize) {
        this.mapData = new map_1.Map(xSize, ySize);
    };
    MapEditorComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 16; i++) {
            this.iconType.push({ name: 'cell-' + i, value: i });
        }
    };
    MapEditorComponent = __decorate([
        core_1.Component({
            selector: 'map-editor',
            templateUrl: 'app/controllers/views/map-editor.component.html',
            directives: [forms_1.FORM_DIRECTIVES, map_component_1.MapComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], MapEditorComponent);
    return MapEditorComponent;
}());
exports.MapEditorComponent = MapEditorComponent;
//# sourceMappingURL=map-editor.component.js.map