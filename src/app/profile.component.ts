import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {DbService} from "./db.service";

@Component({
    selector: 'app-profile',
    template: `
                <p>
                    Name: {{student.name}}
                    <br/>
                    Email: {{student.email}}
                </p>
              `,
    styles: []
})

export class ProfileComponent implements OnDestroy{
    student : {id: string, name: string, email: string};
    students : {id: string, name: string, email: string}[] ;
    private subscription: Subscription;
    id: string;
    constructor(private route: ActivatedRoute, private dbService:DbService){
        this.subscription = route.params.subscribe((param:any) => this.id = param['id']);
        this.students = dbService.getData();
        this.students = this.students.filter(x => x.id == this.id);
        this.student = this.students[0];
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}