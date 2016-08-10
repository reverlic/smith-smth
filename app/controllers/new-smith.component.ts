import { Component , OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { Smith } from '../models/Smith'
import { BsService } from '../services/blackSmith.service';
import { SmitFormComponent } from '../components/smith-form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/controllers/views/new-smith.component.html',
  providers:[BsService],
  directives:[SmitFormComponent]
})

export class newSmithComponent implements OnInit { 
	smithModel : Smith;
	data : Smith[] = [];
	errMsg: string;

	constructor(private bsService: BsService,private router: Router) {
	}

	addNewSmith(smith: Smith){
		this.bsService.createBs(smith).then(result => {console.log(result);
			this.router.navigate(['/home',result.Id]);
		}).catch(e => console.log(this.errMsg = e.status + ' ' + e.statusText))//this.errMsg=JSON.parse(e._body).message);
	}

	ngOnInit() {

	}	
}
