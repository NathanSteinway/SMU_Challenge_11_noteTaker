//===============================================================
// Below are the necessary dependencies for this app to function.
//===============================================================

const express = require('express');

//========================================
// Get the express server up and running!
//========================================

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
})

