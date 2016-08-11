import { Component , OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

import { Router,ActivatedRoute }           from '@angular/router';
import { Map,MapCell } from '../Models/map';

import { MapComponent } from '../components/map.component';
import { MapEditToolComponent } from '../components/map-edit-tool.component';

@Component({
  selector: 'map-editor',
  templateUrl: 'app/controllers/views/map-editor.component.html',
  directives: [FORM_DIRECTIVES,MapComponent,MapEditToolComponent]
})

export class MapEditorComponent implements OnInit { 
	mapData: Map;
	selectedCell = {x:null,y:null}
	selectedCellType: number;
	title = 'the legendary begins';
	iconType = [];
	constructor(private router: Router,private route:ActivatedRoute) {
		this.selectedCellType = 0;
	}

	onCellSeleted(position){
		this.selectedCell = position;
		this.editSelectedCell(this.selectedCellType);
	}

	editSelectedCell(cellType:number){
		this.mapData.layout[this.selectedCell.x][this.selectedCell.y].terrain = cellType;
	}

	editCellType(cellType:number){
		this.selectedCellType = cellType;
	}

	onCreate(xSize,ySize){
		this.mapData = new Map(xSize,ySize);
	}

	downloadMap(){
			console.log('1');
		    var link = document.createElement('a');
    		link.setAttribute('download','mapData.json');
    		console.log('2');
    		link.href = 'data:application/x-download;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.mapData));
    		link.click();
	}


	ngOnInit() {
		for(let i = 0;i < 16;i++){
			this.iconType.push({name:'cell-'+i,value:i});
		}
	}	
}
