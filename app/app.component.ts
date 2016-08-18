import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LeftNavigation } from './components/left-navigation.component';

//import './rxjs-extensions';

@Component({
  selector: 'my-app',
  template: `
  <left-nav></left-nav>
  <h1>{{title}}</h1>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES,LeftNavigation],
})
export class AppComponent {
  title = 'QWERTY';
}
