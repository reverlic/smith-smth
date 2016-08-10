import { Component , OnInit } from '@angular/core';
import { Router,ActivatedRoute }           from '@angular/router';


import { Smith } from '../models/Smith'
import { BsService } from '../services/blackSmith.service';
import { SmitFormComponent } from '../components/smith-form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/controllers/views/home.component.html',
  providers:[BsService],
  directives:[SmitFormComponent]
})

export class HomeComponent implements OnInit { 
	smithModel : Smith;
	data : Smith[] = [];
	sub : any;
	lastestId : number;
	public addNewSmithCallback: Function;

	constructor(private bsService: BsService,private router: Router,private route:ActivatedRoute) {
	}

	deleteSmith(id){
		console.log('Smith Id '+id+' deleted');
	}

	editSmith(id){
		this.router.navigate(['/updateSmith',id]);
	}

	addNewMetalSmith(){
		//let link = ['/detail', hero.id];
		//this.router.navigate(link);
		let link = ['/newsmith']
		this.router.navigate(link);
	}


	ngOnInit() {
		this.bsService.getAllBs().then(data => {
			this.data = data;
			if(data){
					this.smithModel = data[0];
			}
		})
	 this.sub = this.route.params.subscribe(params => {this.lastestId = +params['lastestId']; })
	}	
}
