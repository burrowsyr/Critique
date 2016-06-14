import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

import {AboutComponent} from './+about';
import {HomeComponent} from './+home';

import {XLargeDirective} from './shared';

@Component({
  moduleId: __filename,
  selector: 'app',
  directives: [
    ...ROUTER_DIRECTIVES,
    XLargeDirective
  ],
  styles: [`
    * { padding:0; margin:0; }
    #universal { text-align:center; font-weight:bold; padding:15px 0; }
    nav { background:#158126; min-height:40px; border-bottom:5px #046923 solid; }
    nav a { font-weight:bold; text-decoration:none; color:#fff; padding:20px; display:inline-block; }
    nav a:hover { background:#00AF36; }
    .hero-universal { min-height:500px; display:block; padding:20px; background: url('/src/logo.png') no-repeat center center; }
    .inner-hero { background: rgba(255, 255, 255, 0.75); border:5px #ccc solid; padding:25px; }
    .router-link-active { background-color: #00AF36; }
    blockquote { border-left:5px #158126 solid; background:#fff; padding:20px 20px 20px 40px; }
    blockquote::before { left: 1em; }
    main { padding:20px 0; }
    pre { font-size:12px; }
  `],
  templateUrl: './app.component.html'
})
@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/about', component: AboutComponent, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class AppComponent {
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
