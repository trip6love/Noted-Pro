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


app.listen(3001,() => {
    console.log (`Server is now live on port ${PORT}!`);
});