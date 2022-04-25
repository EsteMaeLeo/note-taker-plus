const router = require("express").Router();
const fs = require('fs');
const path = require('path');

const { createNewNote, deletenote } = require("../../lib/notes");

const  notes  = require("../../db/db.json");


const { v4: uuidv4 } = require('uuid')

router.get("/notes", (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parseNotes = JSON.parse(data);

            res.json(parseNotes);
        }
    });
});

router.post("/notes", (req, res) => {
    // req.body is where our incoming content will be
    // set id based UUID
    const newId = uuidv4()
    req.body.id = newId;
    console.log(req.body);
    const response = createNewNote(req.body, notes);
    res.json(response);

})

router.delete("/notes/:id", (req, res) => {
    const result = deletenote(req.params.id);
    console.log(result);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

module.exports  = router;