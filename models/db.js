// models/db.js
const Database = require('better-sqlite3');
const db = new Database('users.db'); // will create this file if not exists

module.exports = db;