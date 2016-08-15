import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'left-nav',
  templateUrl: 'app/components/views/left-nav.component.html'
})
export class LeftNavigation { 
	constructor(private router: Router){

	}

	navigateTo(target){
		console.log('navigate to ' + target);
		this.router.navigate([target]);
	}
}
