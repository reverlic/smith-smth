import { Component , Input,Output,EventEmitter,OnInit } from '@angular/core';
import {  
  FORM_DIRECTIVES,  
} from '@angular/forms';


import { Smith } from '../models/Smith'

@Component({
  selector: 'smith-form',
  templateUrl: 'app/components/views/smith-form.component.html',
  directives: [FORM_DIRECTIVES],  
})

export class SmitFormComponent implements OnInit { 
	ranks = [{name:'Unrank',value:'0' },{name:'Novice',value:'1'},{name:'Appertince',value:'2'},{name:'Adept',value:'3'},{name:'Expert',value:'4'},{name:'Master',value:'5'}];	

  	@Input()
	smithModel: Smith;

	@Output()
  	callback:  EventEmitter<Smith> = new EventEmitter<Smith>();

	

	constructor() {  
		//this.smithModel = new Smith();
		//this.smithImport = new Smith();
	}


	onSubmit(){
		
		//this.smithModel.Name = this.smithForm.value.name;
		//this.smithModel.Rank = this.smithForm.value.rank;
		//this.smithModel.Money = this.smithForm.value.money;
		this.callback.emit(this.smithModel);
	}

	ngOnInit(){
		if(!this.smithModel){
			this.smithModel = new Smith();
		}
	}

}
