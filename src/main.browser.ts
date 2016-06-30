// Angular 2 Universal
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Application
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';

// you must return bootstrap for client.ts
export function ngApp() {
  return bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    provideRouter(routes)
  ]);
}
