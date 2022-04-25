
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

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
app.use('/', htmlRoutes);

const  dbNote   = require("./db/db");

console.log(dbNote);
console.log(dbNote.lenght);

 let id = 'e057da0b-951b-4438-a4b0-115d880861ab';
//  const result = dbNote.filter(note => note.id === id)[0];
//  console.log(result);

//  function findById(id, noteArray) {
//     const result = noteArray.forEach(note => console.log(note));
//     console.log(result);
//     return result;
// };

//console.log(findById(id, dbNote));

app.listen(PORT, () => {
    console.log(`(>‿◠)✌ API server now on port 3002!`);
  });