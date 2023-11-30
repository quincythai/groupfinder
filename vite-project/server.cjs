// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001; // choose a port for your backend

// Connect to SQLite database (create if not exists)
const db = new sqlite3.Database('./mydatabase.db');

// Define your API routes here
app.get('/api/data', (req, res) => {
  // Example: Fetch data from SQLite database
  db.all('SELECT * FROM my_table', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});