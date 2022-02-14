import * as express from 'express';
import { Express } from 'express';
import { connect } from 'mongoose';
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import { routes } from './routes';
import errorHandler from './handlers/error.handler';
import compression = require('compression');

// Environnement
const API_PORT: number = Number(process.env.API_PORT) || 3000;
const API_DB_DSN: string = process.env.API_DB_DSN || 'mongodb://localhost:27017/store';

// Application
const app: Express = express();

// Middleware
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database
async function run(): Promise<void> {
    console.log('[database]', API_DB_DSN);

    // Database connection
    await connect(API_DB_DSN);

    console.log('[database] has been started');

    // Load routes
    routes(app);

    // Handle error
    app.use(errorHandler);

    module.exports = app.listen(API_PORT, () => {
        console.log(`[express] server has started on port ${API_PORT}`);
    });
}

run().catch(err => console.log('[server error]', err));
