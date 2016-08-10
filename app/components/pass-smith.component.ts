import { Component , OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { Smith } from '../models/Smith'


@Component({
  selector: 'test',
  template: '<h3>redirecting...</h3>',
})

export class passComponent implements OnInit { 
	id : number;
	
	constructor(private router: Router) {
		this.id = 1;
	}

	ngOnInit() {
		this.router.navigate(['/home',this.id]);
	}	
}
