const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const notesData = require('./db/db.json');