import { Component , OnInit } from '@angular/core';
import { Router,ActivatedRoute }           from '@angular/router';


import { Smith } from '../models/Smith'
import { BsService } from '../services/blackSmith.service';

@Component({
  selector: 'smith-profile',
  templateUrl: 'app/controllers/views/smith-profile.component.html',
  providers:[BsService],
})

export class ProfileComponent implements OnInit { 

	title = 'the legendary begins';
	constructor(private bsService: BsService,private router: Router,private route:ActivatedRoute) {}


	ngOnInit() {

	}	
}
