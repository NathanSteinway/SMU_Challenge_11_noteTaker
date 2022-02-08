//===============================================================
// Below are the necessary dependencies for this app to function.
//===============================================================

const express = require('express');

//================================================
//Routes to handle html and api get/post requests
//================================================

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//========================================
// Get the express server up and running!
//========================================

const app = express();
const PORT = process.env.PORT || 3001;

//================================
// Middleware
//================================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//========================
// Get and post requests.
//========================

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index/html'));
});

// Had to JSON.parse because db.json notes don't display properly for some reason?

app.get('/notes', (req, res) => {
    const data = fs.readFileSync('./db/db.json');
    res.json(JSON.parse(data));
});

// using uuid here to assign each note with a randomized id

app.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
});


app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});

