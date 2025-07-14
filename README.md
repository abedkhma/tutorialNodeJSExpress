# Node.js Express Tutorial

A comprehensive tutorial project demonstrating core Node.js and Express.js concepts including RESTful APIs, middleware, error handling, and static file serving.

## 🚀 Features

- **RESTful API** - Complete CRUD operations for posts
- **Middleware Implementation** - Custom logger, error handling, and 404 handling
- **Static File Serving** - Serve HTML, CSS, and JavaScript files
- **ES6 Modules** - Modern JavaScript module system
- **Error Handling** - Centralized error handling with custom error middleware
- **Query Parameters** - Support for limiting results
- **Frontend Integration** - Simple HTML interface to interact with the API

## 📁 Project Structure

```
tutorialNodeJSExpress/
├── controller/
│   └── postController.js      # Business logic for posts
├── middleware/
│   ├── error.js              # Error handling middleware
│   ├── logger.js             # Request logging middleware
│   └── notFound.js           # 404 handling middleware
├── public/
│   ├── about.html            # About page
│   ├── index.html            # Main page with API interface
│   └── js/
│       └── main.js           # Frontend JavaScript
├── routes/
│   └── posts.js              # Post routes
├── server.js                 # Main server file
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **ES6 Modules** - Modern JavaScript module system
- **Colors** - Terminal color output for logging

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tutorialNodeJSExpress
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:8000`

## 🚀 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with file watching
- `npm test` - Run tests (not implemented yet)

## 📡 API Endpoints

### Posts API (`/api/posts`)

| Method | Endpoint         | Description                                         |
| ------ | ---------------- | --------------------------------------------------- |
| GET    | `/api/posts`     | Get all posts (supports `?limit=N` query parameter) |
| GET    | `/api/posts/:id` | Get a single post by ID                             |
| POST   | `/api/posts`     | Create a new post                                   |
| PUT    | `/api/posts/:id` | Update an existing post                             |
| DELETE | `/api/posts/:id` | Delete a post                                       |

### Example API Usage

```bash
# Get all posts
curl http://localhost:8000/api/posts

# Get limited posts
curl http://localhost:8000/api/posts?limit=2

# Get single post
curl http://localhost:8000/api/posts/1

# Create new post
curl -X POST http://localhost:8000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "New Post"}'

# Update post
curl -X PUT http://localhost:8000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Post"}'

# Delete post
curl -X DELETE http://localhost:8000/api/posts/1
```

## 🏗️ Architecture Concepts

### 1. **Middleware Pattern**

- **Logger Middleware**: Logs all incoming requests with colored output
- **Error Handler**: Centralized error handling for consistent error responses
- **Not Found Handler**: Handles 404 errors for undefined routes

### 2. **Route Organization**

- Routes are separated into dedicated files (`routes/posts.js`)
- Clean separation of concerns between routing and business logic

### 3. **Controller Pattern**

- Business logic is separated into controller files (`controller/postController.js`)
- Controllers handle request processing and response formatting

### 4. **Static File Serving**

- Express serves static files from the `public` directory
- HTML, CSS, and JavaScript files are automatically served

### 5. **Error Handling**

- Custom error objects with status codes
- Centralized error handling middleware
- Proper HTTP status codes for different scenarios

## 🎨 Frontend Features

The project includes a simple HTML interface (`public/index.html`) that demonstrates:

- Form for creating new posts
- Button to fetch and display all posts
- JavaScript integration with the REST API

## 🔧 Key Learning Points

### ES6 Modules vs CommonJS

```javascript
// ES6 Modules (used in this project)
import express from "express";
export default router;

// CommonJS (alternative)
const express = require("express");
module.exports = router;
```

### Middleware Implementation

```javascript
// Custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next(); // Important: call next() to continue
};
```

### Error Handling

```javascript
// Creating custom errors
const error = new Error("Not Found");
error.status = 404;
next(error);

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.message });
};
```

### Route Parameters and Query Strings

```javascript
// Route parameters
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
});

// Query parameters
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
});
```

## 🌟 Advanced Features

1. **Query Parameter Support**: The GET `/api/posts` endpoint supports a `limit` query parameter to restrict the number of returned posts
2. **Colored Logging**: HTTP methods are color-coded in the console output
3. **Proper HTTP Status Codes**: 200, 201, 400, 404, 500 status codes are used appropriately
4. **Input Validation**: Basic validation for required fields
5. **Error Propagation**: Errors are properly propagated through the middleware chain

## 🚨 Error Handling

The application includes comprehensive error handling:

- **404 Not Found**: For undefined routes and missing resources
- **400 Bad Request**: For invalid input data
- **500 Internal Server Error**: For unexpected server errors
- **Custom Error Messages**: Descriptive error messages for better debugging

## 📝 Development Notes

- The project uses ES6 modules (indicated by `"type": "module"` in package.json)
- Static files are served from the `public` directory
- All API responses are in JSON format
- The server runs on port 8000 by default (configurable via PORT environment variable)

## 🤝 Contributing

This is a tutorial project, but contributions are welcome! Feel free to:

- Add new features
- Improve error handling
- Add tests
- Enhance the frontend interface
- Add documentation

## 📄 License

This project is licensed under the ISC License.

---

**Happy Coding! 🎉**
