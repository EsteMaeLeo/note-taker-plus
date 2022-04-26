const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray) {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            
            const parseNotes = JSON.parse(data);

            const { id, title, text } = body;
            const newNote = {
                id,
                title,
                text,
            };

            parseNotes.push(newNote);

            fs.writeFile(
                './db/db.json',
                JSON.stringify(parseNotes, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
            );
            
            const response = {
                status: 'success',
                body: newNote,
            };
            
            return response;

        }
    });


}

function deletenote(id) {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            
            const parseNotes = JSON.parse(data);

            const deleteNote = parseNotes.filter(note => note.id !== id);

            fs.writeFile(
                './db/db.json',
                JSON.stringify(deleteNote, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully delete notes!')
            );
            
            const response = {
                status: 'success',
                body: deleteNote,
            };
            
            return response;

        }
    });


}

module.exports = {

    createNewNote,
    deletenote,
  };