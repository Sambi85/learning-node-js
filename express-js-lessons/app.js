const http = require('http');

// no more routes, we import express! 
const express = require('express');

const app = express();


const server = http.createServer(app);

server.listen(3003);