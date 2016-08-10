import { Component , OnInit } from '@angular/core';
import { Router,ActivatedRoute }           from '@angular/router';

import { Smith } from '../models/Smith'
import { BsService } from '../services/blackSmith.service';
import { SmitFormComponent } from '../components/smith-form.component';
import { loadingSquareComponent } from '../components/loading-square.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/controllers/views/update-smith.component.html',
  providers:[BsService],
  directives:[SmitFormComponent]
})

export class updateSmithComponent implements OnInit { 
	smithModel : Smith;
	errMsg: string;
	sub: any;
	smithId: number;
	passingtitle = 'passing title';

	constructor(private bsService: BsService,private router: Router,private route:ActivatedRoute) {
		this.smithModel = new Smith();
	}

	updateSmith(smith: Smith){
		this.bsService.updateBs(smith).then(result => {console.log(result);
			this.router.navigate(['/home',result.Id]);
			}).catch(e => console.log(this.errMsg = e.status + ' ' + e.statusText))//this.errMsg=JSON.parse(e._body).message);
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {this.smithId = +params['smithId']; });
		this.bsService.getBsById(this.smithId).then(data => {
			if(data){
					this.smithModel = data[0];
			}
		})
	}	
}
