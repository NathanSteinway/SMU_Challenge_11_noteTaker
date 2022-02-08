const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

// Had to JSON.parse because db.json notes don't display properly for some reason?
// Reads api/notes and returns data as json

router.get('/notes', (req, res) => {
    const data = fs.readFileSync('./db/db.json');
    res.json(JSON.parse(data));
});

// This one was weird.
// using uuid here to assign each note with a randomized id.
// sets notes to JSON parsed reading of ./db/db.json, then
// sets newNote as req.body so that app can used uuid.v4();
// rest

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;