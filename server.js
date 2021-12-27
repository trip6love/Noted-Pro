const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const notesData = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    notesData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, '/t'));
    res.json(notesData);
})

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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Add function to create a new note //
//function addnewNote(body, array) {
    //const newNote = body;
    
    //if (!Array.isArray(array))
        //array = [];
    
    //if (array.length === 0)
        //array.push(0);
    
   // body.id = array[0];
    //array[0]++;

    //array.push(newNote);
    //fs.writeFileSync(
        //path.join(__dirname, './db/db.json'),
        //JSON.stringify(array, null, 2)
    //);
    ////return newNote;
///};

// Add a post //
//app.post('/api/notes', (req, res) => {
    //const newNote = addnewNote(req.body, notesData);
    //res.json(newNote);
//});

// Listening to PORT and logging the in use server number //
app.listen(PORT,() => {
    console.log (`Server is now live on port ${PORT}!`);
});