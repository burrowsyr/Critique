# Critique

A web tool to manage pull requests.

Critique is developing following [Angular 2 Universal Patterns](https://github.com/angular/universal), which allows us to render our angular 2 app from both client and server sides.
This [video](https://www.youtube.com/watch?v=TCj_oC3m6_U) explains well what is Angular 2 Universal Patterns (about 15min).

## Project setup

We used [Angular2 universal starter](https://github.com/angular/universal-starter) to set up our project.

### Known Issues: 
 - [Prerender does not work with styleUrls](https://github.com/angular/universal/issues/294)
 - [Angular 2 Universal production ready](https://github.com/angular/universal/issues/247) (not ready for production use yet)

### Tooling and useful resources
We use [Webpack module bundler](https://webpack.github.io/) to bundle (and build) this project. 
There is a useful [webpack guide](https://angular.io/docs/ts/latest/guide/webpack.html) in angular 2 documentation, which allows to have a better understanding of how webpack works with angular 2.

[Tslint](https://palantir.github.io/tslint/) is configured to use [codelyzer](https://github.com/mgechev/codelyzer), but it is not a part of the build process yet. You should configure your IDE to use tslint anyway.

## Project structure

*TODO: better description, adding explanations*

```
/src              
    /app                //Angular2 application sources
    /backend            //Backend sources
    /index.html         //HTML container for the app
    /main.browser.ts    //bootstart Angular2 application
    /main.node.ts       //configure Angular2 universal
    /server.ts          //configure our server
    /typings.d.ts       //Custom Type Definitions (a lot of comment in there explaining the purpose of this file)
```

## Commands

```bash
npm install #installation of dependencies and typings

npm run build #clean dist folder and call webpack to bundle client and server parts of the application

npm run watch #build client and server parts of the application and watch for changes in sources

npm run server #launch our express server using nodemon

npm start #bundle and watch client and server part of the application, and run our express server. Server restart automatically when sources changed, but navigator doesn't refresh the page by itself.

npm run debug #run the server in debug mode

npm test #run client unit tests using karma
```

## Jenkins
Job **Critique - Pull Request Checker** launch backend tests and then front end unit test.
