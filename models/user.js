

  const db = require('./db');

  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      address TEXT,
      email TEXT,
      contact TEXT
    )
  `).run();
  

module.exports = {
    getAll: () => {
      return db.prepare('SELECT * FROM users').all();
    },
  
    add: (user) => {
      db.prepare(`
        INSERT INTO users (name, address, email, contact)
        VALUES (?, ?, ?, ?)
      `).run(user.name, user.address, user.email, user.contact);
    },
    delete: (id) => {
      db.prepare('DELETE FROM users WHERE id = ?').run(id);
    },
  
    getById: (id) => {
      return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
    },
  
    update: (user) => {
      db.prepare(`
        UPDATE users SET name = ?, address = ?, email = ?, contact = ?
        WHERE id = ?
      `).run(user.name, user.address, user.email, user.contact, user.id);
    }
  };