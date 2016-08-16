import { Component , OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

import { Router,ActivatedRoute }           from '@angular/router';
import { Map,MapCell } from '../Models/map';

import { MapComponent } from '../components/map.component';
import { MapEditToolComponent } from '../components/map-edit-tool.component';
import { BsService } from '../services/blackSmith.service';
import { loadingSquareComponent } from '../components/loading-square.component';

@Component({
  selector: 'map-editor',
  templateUrl: 'app/controllers/views/map-editor.component.html',
  providers: [BsService],
  directives: [FORM_DIRECTIVES,MapComponent,MapEditToolComponent,loadingSquareComponent]
})

export class MapEditorComponent implements OnInit { 
	mapData: Map;
	error: any;
	mapList: Map[];
	selectedCell = {x:null,y:null}
	selectedCellType: number;
	title = 'the legendary begins';
	iconType = [];
	createState = false;

	name : string;
	xSize : number;
	ySize : number;

	constructor(private router: Router,private route:ActivatedRoute,private bsService: BsService) {
		this.selectedCellType = 0;
	}

	onCellSeleted(position){
		this.selectedCell = position;
		this.editSelectedCell(this.selectedCellType);
	}

	clickCreate(){
		this.createState = true;
		this.name = '';
		this.xSize = 1;
		this.ySize = 1;
	}

	editSelectedCell(cellType:number){
		this.mapData.layout[this.selectedCell.x][this.selectedCell.y].terrain = cellType;
	}

	editCellType(cellType:number){
		this.selectedCellType = cellType;
	}

	onCreate(xSize,ySize,name){
		this.mapData = new Map(xSize,ySize);
		this.mapData.name = name;
		this.createState = false;
	}

	downloadMap(){
			console.log('1');
		    var link = document.createElement('a');
    		link.setAttribute('download','mapData.json');
    		console.log('2');
    		link.href = 'data:application/x-download;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.mapData));
    		link.click();
	}

	saveMap(){
		this.bsService.syncMapData(this.mapData).then(x => console.log(x));
	}

	getMapById(mapId){

		this.bsService.getMapById(mapId).then(map => {this.mapData = map;});
	}

	ngOnInit() {
		this.bsService.getAllMap().then(maps => {
			this.mapList = maps;
		}).catch(e => { 
			this.error = 'something wrong when we try to get metalsmith :( ';
		 });

		for(let i = 0;i < 16;i++){
			this.iconType.push({name:'cell-'+i,value:i});
		}
	}	
}
