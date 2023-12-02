//TODO: add a table for each class. Each table should have the following columns: Image, Heading, Text, currentNumPeople, and totalPeopleNeeded.
//TODO: add a table that stores all of the different classes that are in the system.
//TODO: add a table that stores the user's information, including username, password, and classes.

const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')

const app = express()
const port = 5001

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('./mydatabase.db')

// Define API routes

// Fetch data from a specific class
app.get('/api/data/:className', (req, res) => {
  const className = req.params.className

  db.all(`SELECT * FROM ${className}`, (err, rows) => {
    if (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
      return
    }
    res.json(rows)
  })
})

// Add a card to a specific class
app.post('/api/addcard/:className', (req, res) => {
  const className = req.params.className
  const { Image, Heading, Text, currentNumPeople, totalPeopleNeeded } = req.body

  // TODO: Add proper validation for the incoming data

  const query = `INSERT INTO ${className} (Image, Heading, Text, currentNumPeople, totalPeopleNeeded)
                 VALUES (?, ?, ?, ?, ?)`

  db.run(
    query,
    [Image, Heading, Text, currentNumPeople, totalPeopleNeeded],
    function (err) {
      if (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal Server Error' })
        return
      }
      res.json({ message: 'Card added successfully', cardId: this.lastID })
    }
  )
})

// Contact us
app.post('/api/contact_us', (req, res) => {
  const { email, message } = req.body

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' })
  }

  const query = 'INSERT INTO contact_us (email, message) VALUES (?, ?)'

  db.run(query, [email, message], function (err) {
    if (err) {
      console.error('Error inserting data into the database:', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }

    console.log('Data inserted successfully:', this.lastID)
    res.status(200).json({ message: 'Data inserted successfully' })
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
