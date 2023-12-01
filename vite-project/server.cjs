//TODO: add a table for each class. Each table should have the following columns: Image, Heading, Text, currentNumPeople, and totalPeopleNeeded.
//TODO: add a table that stores all of the different classes that are in the system.
//TODO: add a table that stores the user's information, including username, password, and classes.

// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000; // choose a port for your backend

// Connect to SQLite database (create if not exists)
const db = new sqlite3.Database('./mydatabase.db');

// Define your API routes here
app.get('/api/data', (req, res) => {
  // Example: Fetch data from SQLite database
  const className = req.query.className;
  db.all(`SELECT * FROM ${className}`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  });
});

// API route to add rows to our database, with a POST request containing Image, Heading, Text,
// currentNumPeople, and totalPeopleNeeded.
app.post('/api/addcard', (req, res) => {
  const className = req.query.className;
  const Image = req.query.Image;
  const Heading = req.query.Heading;
  const Text = req.query.Text;
  const currentNumPeople = req.query.currentNumPeople;
  const totalPeopleNeeded = req.query.totalPeopleNeeded;

  db.all(`INSERT INTO ${className} VALUES (${Image}, ${Heading}, ${Text}, ${currentNumPeople}, ${totalPeopleNeeded})`, (err, rows) => {
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