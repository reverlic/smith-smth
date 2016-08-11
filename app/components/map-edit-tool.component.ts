import { Component , OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'map-edit-tool',
  templateUrl: 'app/components/views/map-edit-tool.component.html',
  styleUrls: ['app/components/views/map-edit-tool.component.css'],
})

export class MapEditToolComponent implements OnInit { 
	iconType = [];

	@Input()
	selectedCellType: number;

	@Output()
	//selectedCell: EventEmitter<any> = new EventEmitter<any>();
	updateCellType: EventEmitter<any> = new EventEmitter<any>();
	
	constructor() {
		//this.selectedCellType = 0;
	}

	clickCellType(value){
		this.selectedCellType = value;
		this.updateCellType.emit(value);
	}

	ngOnInit() {
		for(let i = 0;i < 16;i++){
			this.iconType.push({name:'cell-'+i,value:i});
		}
	}	
}
