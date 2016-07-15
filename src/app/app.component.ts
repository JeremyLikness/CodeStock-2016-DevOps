import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

    public now: Date; 

    constructor() {
        this.now = new Date();
    }

    public ngOnInit(): void {
        setInterval(() => this.now = new Date(), 900);
    }
}