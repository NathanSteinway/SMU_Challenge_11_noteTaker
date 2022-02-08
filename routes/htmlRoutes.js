//=====================================================================
// Router and path are required to allow interaction w/ rest of program
//=====================================================================

const router = require('express').Router();
const path = require('path');

// Added a res.status(200) declaration to show success.

router.get('/notes', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// Must export so other parts of the program can use router.

module.exports = router;