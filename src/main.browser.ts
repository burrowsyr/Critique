import 'angular2-universal/polyfills';

import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';

import {AppComponent} from './app/app.component';

enableProdMode();

// use `bootstrap` or `prebootComplete` callback from universal repo
// to ensure preboot completes after bootstraps
bootstrap(AppComponent, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS
]);
