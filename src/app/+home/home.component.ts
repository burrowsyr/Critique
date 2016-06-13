import {Component} from '@angular/core';

@Component({
  moduleId: __filename,
  selector: 'home',
  styleUrls: [
    // './home.style.css' // doesn't work on the server atm
  ],
  // templateUrl: './home.template.html' // doesn't work on the server atm
  template: `
    <div>This is the "Home" page</div>
  `
})
export class HomeComponent { }
