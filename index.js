#!/usr/bin/env node
"use strict";
const express = require('express');
const app = express();
const Switch = require('./switch.js');
const Validator = require('./requestValidator.js');
let switcher = new Switch();

app.post('/state/:state', function(req, res) {
   if (Validator.validateState(req.params.state)) {
     res.status(204).send(switcher.setState(req.params.state === "ON" ? 1 : 0));
   } else {
	  res.status(400).send();
   }
});

app.get('/state', function(req, res) {
   res.send(switcher.state.toString());
});

// Start the Express server
app.listen(4000, () => console.log('Server running on port 4000!'));