import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Rx";
import {Subscription} from "rxjs/Rx";
import{DbService} from "./db.service";

@Injectable()
export class MyCanActivateGuard implements CanActivate {
  length;
  id;

  constructor(private dbService: DbService, private router : Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.id = route.params['id'];
    
    this.length = this.dbService.getData().filter(x => x.id == this.id).length;
    
    if(this.length != 0){
      return true;
    }
    else{
      this.router.navigate(['profile']);
      return false;
    }
  }
}