import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//Routes file
import {myRoutes} from "./app.routes";
import {HomepageComponent} from './homepage.component';
import {StudentsComponent} from './students.component';
import {ProfileComponent} from './profile.component';
import {ErrorComponent} from "./error.component";

import {MyCanActivateGuard} from "./mycanactivate.guard";
import {DbService} from "./db.service";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [DbService, MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
