import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

    public now: string; 

    constructor() {
        this.now = "July 14, 2016";
    }
}