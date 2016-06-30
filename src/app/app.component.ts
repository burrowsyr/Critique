import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Http} from '@angular/http';

import {XLargeDirective} from './shared';

@Component({
  moduleId: __filename,
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES,
    XLargeDirective
  ],
  styleUrls: [
    'app.style.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title: string = 'is awesome';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    // limit the use of setTimeouts
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    // use services for http calls
    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
