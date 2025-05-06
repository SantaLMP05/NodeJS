const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const userController = require("./controllers/users_controller");
const expressLayouts = require('express-ejs-layouts');
const path = require("path");
// const ObjectBox = require('objectbox');

const app = express();
const PORT = 3000;

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

// ✅ Correct layout path (no leading slash, no .ejs)
app.set('layout', 'layouts/main');
// const db = new ObjectBox('myDatabase.db');


//users Routes
app.get('/', userController.getHome);
app.post('/add', userController.getAddUser);
app.get('/view/:id', userController.viewUser);
app.get('/update/:id', userController.updateUser);
app.post('/delete/:id', userController.deleteUser);


// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
