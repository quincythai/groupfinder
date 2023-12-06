//TODO: add a table for each class. Each table should have the following columns: Image, Heading, Text, currentNumPeople, and totalPeopleNeeded.
//TODO: add a table that stores all of the different classes that are in the system.
//TODO: add a table that stores the user's information, including username, password, and classes.
//TODO: Refactor code to use ? VALUES syntax instead of string concatenation and literal values.

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
    case 'dateCreated':
      return 'ID';
    case 'Availability':
      return 'totalPeopleNeeded - currentNumPeople DESC';
    default:
      return 'ID';
  }
}
db.all(`CREATE TABLE IF NOT EXISTS user_groups (user TEXT, className TEXT, heading TEXT)`, (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }
});

// API route to fetch data from our database, with a GET request containing the class name.
app.get('/api/courses', (req, res) => {
  // Example: Fetch data from SQLite database
  const className = req.query.className || req.body.className;
  const sortBy = req.query.sortBy || req.body.sortBy;
  console.log(sortBy)
  if (sortBy) {
    const parsedSortBy = parseSortBy(sortBy);
    console.log(parsedSortBy)
    db.all(
      `SELECT * FROM ${className} ORDER BY ${parsedSortBy}`, (err, rows) => {
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

app.get('/api/user-class', (req, res) => {
  const user = req.query.user || req.query.body;
  console.log(user)
  db.all(
    `SELECT className FROM 'user-class' WHERE user = '${user}' GROUP BY className `, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error when fetching data from user-class'});
        return;
      }
      // console.log(rows);
      res.json(rows);
    }
  );
});



app.get('/api/classDesc', (req,res)=>{
  const className = req.query.className || req.query.body;
  console.log(className);
  db.all(`SELECT * From class WHERE '${className}' = Title`, (err, rows) =>{
    if(err){
      console.error(err);
      res.status(500).json({error:'Error when fetching data from class'});
      return;
    }
    res.json(rows);
  })
});


//api route to add a user to a class
app.post('/api/addUserToClass', (req, res)=>{
  // const user = req.query.user || req.query.body.user;
  const { username, classCode } = req.body;


  db.all(`INSERT INTO 'user-class' (user, className) VALUES ('${username}', '${classCode}')`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error when adding user to class' });
    } else {
      res.status(200).json({ message: 'User added to class successfully' });
    }
  });
});

app.post('/api/addNewClass', (req, res)=>{
  // const user = req.query.user || req.query.body.user;
  const {Title, Desc, imageSrc, Link} = req.body;


  db.all(`INSERT INTO 'class' (Title, Description, imageSrc, Link) VALUES ('${Title}', '${Desc}', '${imageSrc}', '${Link}')`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error when adding user to class' });
    } else {
      res.status(200).json({ message: 'User added to class successfully' });
    }
  });
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
// Checks if the user is already in a group in the class, and if so, changes the group they are in.
app.post('/api/joingroup', (req, res) => {
  const className = req.body.className;
  const heading = req.body.heading;
  const username = req.body.user || req.body.username;

  console.log("Joining group with className " + className + " and heading " + heading + " as user " + username);

  db.all(` SELECT * FROM user_groups WHERE className = ? AND user = ?`, [className, username], (err, rows) => {
    if (err) {
        console.error(err);
        // Close the database connection
        return;
    }

    if (rows.length > 0) {
        // If rows exist, perform an UPDATE
        const updateQuery = `
            UPDATE user_groups
            SET heading = ?
            WHERE className = ? AND user = ?
        `;
        db.run(updateQuery, [heading, className, username], (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Row updated successfully`);
            }
        });
    } else {
        // If no rows exist, perform an INSERT
        const insertQuery = `
            INSERT INTO user_groups (className, user, heading)
            VALUES (?, ?, ?)
        `;
        db.run(insertQuery, [className, username, heading], (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`Row inserted successfully`);
            }
        });
    }

  });
  // Database query to count the number of people in the group from user_groups, and set currentNumPeople to that count.
  var currentNumInGroup;
  db.all(`SELECT COUNT(*) FROM user_groups WHERE className = ? AND heading = ?`, [className, heading], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when adding person to group with Heading ${heading} in class ${className}` });
      return;
    }
    currentNumInGroup = rows[0]['COUNT(*)'];
  });

  if (currentNumInGroup == undefined) {
    res.status(500).json({ error: `Error when counting number of people in group` });
    return;
  }
  db.all(`UPDATE ${className} SET currentNumPeople = ? WHERE Heading = ?`, [currentNumInGroup, heading], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when adding person to group with Heading ${heading} in class ${className}` });
      return;
    }
    console.log("Success joining group with className " + className + " and heading " + heading);
    res.json(rows);
  });

});
//For debugging / testing purposes, updates the count of a given group to the number of entries for that group in the user_groups table.
app.post('/api/updategroupcount', (req, res) => {
  const className = req.body.className;
  const heading = req.body.heading;

  var currentNumInGroup;
  db.all(`SELECT COUNT(*) FROM user_groups WHERE className = ? AND heading = ?`, [className, heading], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when adding person to group with Heading ${heading} in class ${className}` });
      return;
    }
    currentNumInGroup = rows[0]['COUNT(*)'];
  });
  if (currentNumInGroup == undefined) {
    res.status(500).json({ error: `Error when counting number of people in group` });
    return;
  }
  db.all(`UPDATE ${className} SET currentNumPeople = ? WHERE Heading = ?`, [currentNumInGroup, heading], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when adding person to group with Heading ${heading} in class ${className}` });
      return;
    }
    console.log("Success joining group with className " + className + " and heading " + heading);
    res.json(rows);
  });
});

// API Route to get the users in a group, with a GET request containing the class name, and the group Heading.
app.get('/api/getusersingroup', (req, res) => {

  const className = req.query.className || req.body.className;
  const heading = req.query.heading || req.body.heading;
  
  db.all(`SELECT user FROM user_groups WHERE className = ? AND heading = ?`, [className, heading], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when getting users in group with Heading ${heading} in class ${className}` });
      return;
    }
    res.json(rows);
  });
});

// API route to get the current group of a user, with a GET request containing the username and the class name.
app.get('/api/getcurrentgroup', (req, res) => {
  const username = req.query.username || req.body.username;
  const className = req.query.className || req.body.className;

  console.log(username, className)
  
  db.all(`SELECT heading FROM user_groups WHERE user = ? AND className = ?`, [username, className], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: `Error when getting user's group in class ${className}` });
      return;
    }
    res.json(rows);
  });
});

// API route to add a class to the database, with a POST request containing the class name.
app.post('/api/addclass', (req, res) => {
  const className = req.query.className || req.body.className;
  
  db.all(`CREATE TABLE ${className} (Image TEXT, Heading TEXT, Text TEXT, currentNumPeople INTEGER, totalPeopleNeeded INTEGER)`, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/getclasses', (req, res) => {
  const user = req.query.user || req.body.user;
  db.all(`SELECT DISTINCT className FROM user_groups WHERE user = ?`, [user], (err, rows) => {
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