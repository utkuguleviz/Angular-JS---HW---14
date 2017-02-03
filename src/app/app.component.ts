import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div>
                <nav>
                  
                    <a [routerLink] = "['homepage']">Homepage</a>
                    <a [routerLink] = "['students']">Students</a>
                  
                </nav>
                <router-outlet></router-outlet>
             </div>
            `,
  styles: [],
  providers: []
})
export class AppComponent {
  
}
