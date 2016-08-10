import { Component,Input,Output,EventEmitter } from '@angular/core';

import { Map,MapCell } from '../Models/map';


@Component({
  selector: 'map',
  templateUrl: 'app/components/views/map.component.html',
  styleUrls: ['app/components/views/map.component.css']
})

export class MapComponent { 

	@Input()
	mapData: Map;

	@Output()
	selectedCell: EventEmitter<any> = new EventEmitter<any>();

	onSelect(x,y){
		this.selectedCell.emit({x:x,y:y});
	}

	showMapData(){
		console.log(this.mapData);
	}

}
