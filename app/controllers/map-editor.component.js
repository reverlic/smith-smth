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
var map_edit_tool_component_1 = require('../components/map-edit-tool.component');
var blackSmith_service_1 = require('../services/blackSmith.service');
var loading_square_component_1 = require('../components/loading-square.component');
var MapEditorComponent = (function () {
    function MapEditorComponent(router, route, bsService) {
        this.router = router;
        this.route = route;
        this.bsService = bsService;
        this.selectedCell = { x: null, y: null };
        this.title = 'the legendary begins';
        this.iconType = [];
        /*UI State*/
        this.STATE = {
            select: 1,
            edit: 2,
            create: 3
        };
        this.uiState = {
            previous: null,
            now: this.STATE.select };
        this.selectedCellType = 0;
    }
    MapEditorComponent.prototype.changeUIState = function (newState) {
        this.uiState.previous = this.uiState.now;
        this.uiState.now = newState;
    };
    MapEditorComponent.prototype.onCellSeleted = function (position) {
        this.selectedCell = position;
        this.editSelectedCell(this.selectedCellType);
    };
    MapEditorComponent.prototype.clickCreate = function () {
        this.changeUIState(this.STATE.create);
        this.name = '';
        this.xSize = 1;
        this.ySize = 1;
    };
    MapEditorComponent.prototype.editSelectedCell = function (cellType) {
        this.mapData.layout[this.selectedCell.x][this.selectedCell.y].terrain = cellType;
    };
    MapEditorComponent.prototype.editCellType = function (cellType) {
        this.selectedCellType = cellType;
    };
    MapEditorComponent.prototype.onCreate = function (xSize, ySize, name) {
        this.mapData = new map_1.Map(xSize, ySize);
        this.mapData.name = name;
        this.changeUIState(this.STATE.create);
    };
    MapEditorComponent.prototype.downloadMap = function () {
        var link = document.createElement('a');
        link.setAttribute('download', 'mapData.json');
        link.href = 'data:application/x-download;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.mapData));
        link.click();
    };
    MapEditorComponent.prototype.saveMap = function () {
        this.bsService.syncMapData(this.mapData).then(function (x) { return console.log(x); });
    };
    MapEditorComponent.prototype.getMapById = function (mapId) {
        var _this = this;
        this.bsService.getMapById(mapId).then(function (map) {
            map.layout = _this.bsService.deCompressedLayout(map.layout);
            _this.mapData = map;
        });
    };
    MapEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsService.getAllMap().then(function (maps) {
            _this.mapList = maps;
        }).catch(function (e) {
            _this.error = 'something wrong when we try to get metalsmith :( ';
        });
        for (var i = 0; i < 16; i++) {
            this.iconType.push({ name: 'cell-' + i, value: i });
        }
    };
    MapEditorComponent = __decorate([
        core_1.Component({
            selector: 'map-editor',
            templateUrl: 'app/controllers/views/map-editor.component.html',
            providers: [blackSmith_service_1.BsService],
            directives: [forms_1.FORM_DIRECTIVES, map_component_1.MapComponent, map_edit_tool_component_1.MapEditToolComponent, loading_square_component_1.loadingSquareComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, blackSmith_service_1.BsService])
    ], MapEditorComponent);
    return MapEditorComponent;
}());
exports.MapEditorComponent = MapEditorComponent;
//# sourceMappingURL=map-editor.component.js.map