import * as express from 'express';
import * as bodyParser from 'body-parser';

class Server {
  public app:express.Application;

  static bootstrap():Server {
    return new Server();
  }

  constructor() {
    this.app = express();
  }
}
