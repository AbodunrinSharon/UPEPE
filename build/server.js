const VERSION = '1.0.0';
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('path');
const app = express();
const server = createServer(app);
const logger = require('./logger.js');
const log = logger.createLogger('[Server-Socket]');
const port = '8080';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD.OPTIONS.POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


app.use(express.static(join(__dirname, '../public/')));

server.listen(port, () => {
    log(`server running at http://localhost:${port}`);
});