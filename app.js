// For this assignment, you will build a simple HTTP server in NodeJS using Express.
// Tyler Ivie | DGM 4790

const http = require("http");
const express = require('express');
const app = express();
const router = express.Router();

const apiRoutes = require('./routes/data');
app.use(apiRoutes);

app.use('/', (req, res, next) => {
    res.send(
      "<h1>Welcome to the HTML Page served from my HTTP Node Server!</h1><a href='/api'>See JSON Data</a>"
    );
})

app.listen(5000);