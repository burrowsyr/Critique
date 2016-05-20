# Critique

*TODO: write a little description of Critique purpose.*

## Project setup

### Client part
We used [angular2-seed](https://github.com/mgechev/angular2-seed) as project starter.
`angular2-seed` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Out of the box ServiceWorkers and AppCache support thanks to the integration with [angular/progressive](https://github.com/angular/progressive).
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Has autoprefixer and css-lint support.

### Server part
- Sample unit tests with jasmine-node
- Express
- node

Unit tests are running with jasmine-node. This way, we use the same technology as the one on front end part. 
But must of all, that's avoiding us a lot of problem with typescript type definition which are overlaping between frameworks: Mocha use the same `describe` and `it` methods for example.

I followed [this article](http://brianflove.com/2016/03/29/typescript-express-node-js/) to have a node server running using express. I didn't set up any route for now as it will be done later on other task.

## Commands
[Angular2-seed](https://github.com/mgechev/angular2-seed) came with a lot of commands to manage front end part, and I add some others to manage backend part. Here are the main ones:

### Front end dev
```bash
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
```

### Running Front End tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```

### Backend
```bash
# Compile typescript files and run tslint
npm run tsc.server
 
# Start node server on http://localhost:3000
# this command compile typescript files and run tslint before to start the server
npm run start.server

# Running unit tests 
# this command compile typescript files, run tslint and launch the tests
npm run test.server
```
