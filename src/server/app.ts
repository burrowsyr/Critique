import * as express from 'express';

class Server {
  public app:express.Application;

  static bootstrap():Server {
    return new Server();
  }

  constructor() {
    this.app = express();
  }
}

module.exports = Server.bootstrap().app;
