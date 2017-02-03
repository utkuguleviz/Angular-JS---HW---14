import {Component, OnInit} from "@angular/core";

import {DbService} from './db.service';

@Component({
    selector: "app-students",
    template: `
                <ul>
                    <li *ngFor = "let student of students"><a [routerLink] = "['/profile', student.id]" >{{student.name}}</a></li>
                </ul>
              `,
    styles: []
})

export class StudentsComponent implements OnInit{
    students : { id: string, name: string, email: string}[];
    constructor(private dbService : DbService) {}

    ngOnInit(){
        this.students = this.dbService.getData();
    }
}