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

module.exports = {

    createNewNote,
    
  };