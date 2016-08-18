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
var http_1 = require('@angular/http');
var map_1 = require('../models/map');
require('rxjs/add/operator/toPromise');
var BsService = (function () {
    function BsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3050/api/'; // URL to web api
    }
    BsService.prototype.getAllBs = function () {
        return this.http.get(this.baseUrl + 'getallbs')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BsService.prototype.createBs = function (smith) {
        return this.http.post(this.baseUrl + 'createbs', smith)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BsService.prototype.getBsById = function (smithId) {
        return this.http.post(this.baseUrl + 'getbs', { Id: smithId })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BsService.prototype.updateBs = function (smith) {
        return this.http.post(this.baseUrl + 'updatebs', smith)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BsService.prototype.syncMapData = function (map) {
        var mapModel = {
            id: null,
            name: map.name,
            layout: JSON.stringify(this.compressedLayout(map.layout)),
        };
        if (map.id) {
            mapModel.id = map.id;
            return this.http.post(this.baseUrl + 'updatemap', mapModel)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.post(this.baseUrl + 'createmap', mapModel)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    BsService.prototype.getAllMap = function () {
        return this.http.get(this.baseUrl + 'getallmap')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BsService.prototype.getMapById = function (mapId) {
        return this.http.post(this.baseUrl + 'getmap', { id: mapId })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BsService.prototype.compressedLayout = function (layout) {
        var result = [];
        for (var i = 0; i < layout.length; i++) {
            result[i] = [];
            for (var j = 0; j < layout[i].length; j++) {
                console.log(layout[i][j].terrain + "," + (layout[i][j].special == null ? '-' : layout[i][j].special));
                result[i].push(layout[i][j].terrain + "," + (layout[i][j].special == null ? '-' : layout[i][j].special));
            }
        }
        console.log(result);
        return result;
    };
    BsService.prototype.deCompressedLayout = function (layout) {
        var result = [];
        for (var i = 0; i < layout.length; i++) {
            result[i] = [];
            for (var j = 0; j < layout[i].length; j++) {
                var mapCell = layout[i][j].split(',');
                var item = new map_1.MapCell();
                item.terrain = Number.parseInt(mapCell[0]);
                item.special = mapCell[1] == '-' ? null : Number.parseInt(mapCell[1]);
                result[i].push(item);
            }
        }
        console.log(result);
        return result;
    };
    BsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BsService);
    return BsService;
}());
exports.BsService = BsService;
//# sourceMappingURL=blackSmith.service.js.map