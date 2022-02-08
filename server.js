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

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});

