import { Component , OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'map-edit-tool',
  templateUrl: 'app/controllers/views/map-edit-tool.component.html',
  directives: [FORM_DIRECTIVES]
})

export class MapEditToolComponent implements OnInit { 
	selectedCellType: number;
	iconType = [];
	constructor() {
		this.selectedCellType = 0;
	}

	ngOnInit() {
		for(let i = 0;i < 16;i++){
			this.iconType.push({name:'cell-'+i,value:i});
		}
	}	
}
