// const express = require('express'); this for common js
import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controller/postController.js'
const router = express.Router();



// To get all posts
router.get('/', getPosts);

// Get single post 
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

// module.exports =   router; this for common js
export default router;