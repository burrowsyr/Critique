import {provide} from '@angular/core';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';
import {
    it,
    inject,
    describe,
    beforeEachProviders,
    expect
} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {AppComponent} from './app.component';

describe('App', () => {
  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: MockBackend}),
    AppComponent
  ]);
  it('should work', inject([AppComponent], (app:AppComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));
});
