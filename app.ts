import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();

const server = new Server();

server.listen();

/**
 * commands: tsc --watch
 * nodemon dist/app.js
 */
