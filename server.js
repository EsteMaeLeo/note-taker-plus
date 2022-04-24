
const apiRoutes = require('./routes/apiRoutes');

const fs = require('fs');
const path = require('path');

const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

// Generate a v4 (random) id
const { v4: uuidv4 } = require('uuid')

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);

const  dbNote  = require("./db/db");

console.log(dbNote);

// app.get('/api/notes', (req, res) => {
//     const newId = uuidv4()
//     console.log(newId);
//     res.json(dbNote);
//   });

// app.post('/api/notes', (req, res) => {
//     const newId = uuidv4()
//     req.body.id
//     console.log(req.body);
//     res.json(req.body);
//   });

app.listen(PORT, () => {
    console.log(`(>‿◠)✌ API server now on port 3002!`);
  });