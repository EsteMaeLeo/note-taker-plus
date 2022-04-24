const express = require('express');
const { dbNote } = require('./db/db.json')
const fs = require('fs');
const path = require('path');

// Generate a v4 (random) id
const { v4: uuidv4 } = require('uuid')

const app = express();

const PORT = process.env.PORT || 3002;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);

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
    console.log(`(>‿◠)✌ API server now on port 3001!`);
  });