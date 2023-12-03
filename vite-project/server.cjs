//TODO: add a table for each class. Each table should have the following columns: Image, Heading, Text, currentNumPeople, and totalPeopleNeeded.
//TODO: add a table that stores all of the different classes that are in the system.
//TODO: add a table that stores the user's information, including username, password, and classes.

// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001; // choose a port for your backend
app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database (create if not exists)
const db = new sqlite3.Database('./mydatabase.db');

function parseSortBy(sortBy) {
  switch (sortBy) {
    case 'Time Created':
      return 'ID';
    case 'Open Spots':
      return 'currentNumPeople - totalPeopleNeeded';
    default:
      return 'ID';
  }
}
// API route to fetch data from our database, with a GET request containing the class name.
app.get('/api/courses', (req, res) => {
  // Example: Fetch data from SQLite database
  const className = req.query.className;
  const sortBy = req.query.sortBy;
  if (sortBy) {
    sortBy = parseSortBy(sortBy);
    db.all(`SELECT * FROM ${className} ORDER BY ${sortBy}`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: `Error when fetching data from ${className}` });
        return;
      }
      res.json(rows);
    });
  } else {
    db.all(`SELECT * FROM ${className}`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: `Error when fetching data from ${className}` });
        return;
      }
      res.json(rows);
    });
  }
});

// API route to add rows to our database, with a POST request containing Image, Heading, Text,
// currentNumPeople, and totalPeopleNeeded.
app.post('/api/addgroup', (req, res) => {
  // console.log(req.body)
  const className = req.body.className;
  const image = req.body.image;
  const heading = req.body.heading;
  const text = req.body.text;
  const currentNumPeople = req.body.currentNumPeople;
  const totalPeopleNeeded = req.body.totalPeopleNeeded;

  db.all(`INSERT INTO ${className} (Image, Heading, Text, currentNumPeople, totalPeopleNeeded) VALUES ("${image}", "${heading}", "${text}", ${currentNumPeople}, ${totalPeopleNeeded})`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when adding group to ${className}` });
      return;
    }
  });
});

// API route to add a person to the card, with a POST request containing the class name, and the group Heading.
app.post('/api/addperson', (req, res) => {
  const className = req.query.className;
  const heading = req.query.heading;

  db.all(`UPDATE ${className} SET currentNumPeople = currentNumPeople + 1 WHERE Heading = ${heading}`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when adding person to group with Heading ${heading} in class ${className}` });
      return;
    }
    res.json(rows);
  });
});

// API route to add a class to the database, with a POST request containing the class name.
app.post('/api/addclass', (req, res) => {
  const className = req.query.className;
  
  db.all(`CREATE TABLE ${className} (Image TEXT, Heading TEXT, Text TEXT, currentNumPeople INTEGER, totalPeopleNeeded INTEGER)`, (err, rows) => {
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