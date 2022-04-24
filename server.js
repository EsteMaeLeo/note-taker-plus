const express = require('express');
const { dbNote } = require('./db/db.json')
// Generate a v4 (random) id
const { v4: uuidv4 } = require('uuid')


const app = express();

app.get('/api/notes', (req, res) => {
    const newId = uuidv4()
    console.log(newId);
    res.json(dbNote);
  });

  app.post('/api/notes', (req, res) => {});

app.listen(3002, () => {
    console.log(`(>‿◠)✌ API server now on port 3001!`);
  });