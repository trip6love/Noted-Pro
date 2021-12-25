const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const notesData = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Add API routes //
app.get('/api/notes', (req, res) => {
    res.json(notesData.slice(1));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Add function to create a new note //
function newNote(body, array) {
    const newNote = body;
    
    if (!Array.isArray(array))
        array = [];
    
    if (array.length === 0)
        array.push(0);
    
    body.id = array[0];
    array[0]++;

    array.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(array, null, 2)
    );
    return newNote;
};

// Add a post //


// Listening to PORT and logging the in use server number //
app.listen(PORT,() => {
    console.log (`Server is now live on port ${PORT}!`);
});