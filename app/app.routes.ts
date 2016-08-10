import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './controllers/home.component';
import { ProfileComponent } from './controllers/smith-profile.component';
import { updateSmithComponent } from './controllers/update-smith.component';
import { newSmithComponent } from './controllers/new-smith.component';
import { Smith } from './models/smith';
import { passComponent } from './components/pass-smith.component';
import { MapEditorComponent } from './controllers/map-editor.component';

const routes: RouterConfig = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'home/:lastestId',
		component: HomeComponent,
	},
	{	path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'newsmith',
		component: newSmithComponent
	},
	{
		path: 'updateSmith/:smithId',
		component: updateSmithComponent
	},
	{
		path: 'passobject',
		component: passComponent
	},
	{
		path: 'map-editor',
		component: MapEditorComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
];

export const appRouterProviders = [
  provideRouter(routes)
];
