const router = require("express").Router();

const { createNewNote } = require("../../lib/notes");

const  notes  = require("../../db/db.json");


const { v4: uuidv4 } = require('uuid')


router.post("/notes", (req, res) => {
    // req.body is where our incoming content will be
    // set id based UUID
    const newId = uuidv4()
    req.body.id = newId;
    console.log(req.body);
    const animal = createNewNote(req.body, notes);
    res.json(notes);

})

module.exports  = router;