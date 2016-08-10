"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./controllers/home.component');
var smith_profile_component_1 = require('./controllers/smith-profile.component');
var update_smith_component_1 = require('./controllers/update-smith.component');
var new_smith_component_1 = require('./controllers/new-smith.component');
var pass_smith_component_1 = require('./components/pass-smith.component');
var map_editor_component_1 = require('./controllers/map-editor.component');
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'home/:lastestId',
        component: home_component_1.HomeComponent,
    },
    { path: 'profile',
        component: smith_profile_component_1.ProfileComponent
    },
    {
        path: 'newsmith',
        component: new_smith_component_1.newSmithComponent
    },
    {
        path: 'updateSmith/:smithId',
        component: update_smith_component_1.updateSmithComponent
    },
    {
        path: 'passobject',
        component: pass_smith_component_1.passComponent
    },
    {
        path: 'map-editor',
        component: map_editor_component_1.MapEditorComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map