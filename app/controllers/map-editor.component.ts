import { Component , OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

import { Router,ActivatedRoute }           from '@angular/router';
import { Map,MapCell } from '../Models/map';

import { MapComponent } from '../components/map.component';

@Component({
  selector: 'map-editor',
  templateUrl: 'app/controllers/views/map-editor.component.html',
  directives: [FORM_DIRECTIVES,MapComponent]
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

	onCreate(xSize,ySize){
		this.mapData = new Map(xSize,ySize);
	}

	ngOnInit() {
		for(let i = 0;i < 16;i++){
			this.iconType.push({name:'cell-'+i,value:i});
		}
	}	
}
