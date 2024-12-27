const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000; // You can choose any port

// Enable CORS to allow the frontend to communicate with the backend
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Default MySQL user in XAMPP
  password: '',  // Default MySQL password is empty
  database: 'web_development',  // Name of the database (change it to match your DB name)
});

// Check MySQL connection
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

// API Route to Fetch Web Course Data
app.get('/api/web', (req, res) => {
  const query = 'SELECT * FROM web'; // Fetch data from the 'web' table
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed for web courses' });
    } else {
      res.json(results); // Send the web courses data
    }
  });
});

// API Route to Fetch Python Course Data
app.get('/api/python/', (req, res) => {
  const query = 'SELECT * FROM python'; // Fetch data from the 'python' table
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed for python courses' });
    } else {
      res.json(results); // Send the python courses data
    }
  });
});

app.get('/api/ds/', (req, res) => {
    const query = 'SELECT * FROM  ds'; // Fetch data from the 'python' table
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Database query failed for ds courses' });
      } else {
        res.json(results); // Send the python courses data
      }
    });
  });

  // Example Node.js route for fetching course by ID
app.get("/api/course/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM courses WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Error fetching course details" });
    if (results.length === 0) return res.status(404).json({ error: "Course not found" });
    res.json(results[0]); // Send the first course as a response
  });
});


// Start the Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
