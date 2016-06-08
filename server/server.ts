/// <reference path='../typings/index.d.ts' />
import * as express from 'express';
import * as logger from 'morgan';
import * as favicon from 'serve-favicon';
import { join } from 'path';
import {json, urlencoded} from 'body-parser';

const app: express.Application = express();
app.disable('x-powered-by');

app.use(favicon(join(__dirname, '../public', 'favicon.ico')));

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', express.static(join(__dirname, '../dist')));

export { app }
