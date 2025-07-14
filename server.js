// const express = require('express'); this for common js
import express from 'express' // this for module 
import path from 'path'; // this for module 
import {fileURLToPath} from 'url' // to use __dirname, it is in common js not module
import posts from './routes/posts.js'// this for module 
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
// const path = require('path');
const port = process.env.PORT || 8000;
// const posts = require('./routes/posts');

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// logger middleware
app.use(logger);

// // ----------------setup static folder----------------------------
// // This single line take off the other explicit writing code
app.use(express.static(path.join(__dirname, 'public')));
// // app.get('/', (req, res) => {
// //     // res.send('Hello World!');
// //     // res.send({message: 'Hello World'});
// //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });
// //
// // app.get('/about', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// // });
// // ----------------setup static folder----------------------------

app.use('/api/posts', posts); 


// Error Handler 
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));