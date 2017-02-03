import {RouterModule, Routes} from "@angular/router";

import {HomepageComponent} from  "./homepage.component";
import {StudentsComponent} from  "./students.component";
import {ProfileComponent} from "./profile.component";
import {ErrorComponent} from "./error.component";

import {MyCanActivateGuard} from "./mycanactivate.guard";

const MY_ROUTES : Routes = [
    //{ path: 'students', component: StudentsComponent, children :[{path: 'profile/:id', component: ProfileComponent, canActivate: [MyCanActivateGuard]}]},
    { path:'', component: HomepageComponent},
    {path: 'home', redirectTo: ''},
    {path: 'homepage', redirectTo: ''},
    {path: 'students', component: StudentsComponent},
    {path: 'profile', component: ErrorComponent},
    {path: 'profile/:id', component: ProfileComponent, canActivate: [MyCanActivateGuard]}
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);


