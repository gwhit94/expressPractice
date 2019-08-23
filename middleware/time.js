const express = require('express');
const app = express();

function time(req, res, next) {
    console.log('Time:', Date.now(), ` Hi, I'm a middleware B-)`);
    next()
}

module.exports = time;