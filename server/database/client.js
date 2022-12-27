const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'yugeshpalvai',
  password: 'samplepassword',
  database: 'bookmanagementapp'
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

module.exports = client;

// authors_create_query = `
//   CREATE TABLE authors  (
//   id serial PRIMARY KEY,
//   name VARCHAR(255),
//   location VARCHAR(255)
//   )
// `;

// books_create_query = `
//     CREATE TABLE books (
//       id serial PRIMARY KEY,
//       title VARCHAR(255),
//       genre VARCHAR(255),
//       author_id INTEGER REFERENCES authors(id)
//     );
// `;


// add_default_authors_query = `
//   INSERT INTO authors (name, location) 
//   VALUES ('author1', 'location1'),
//   ('author2', 'location2'),
//   ('author3', 'location3');
// `;

// add_default_books_query = `
//   INSERT INTO books (title, genre, author_id) 
//   VALUES ('book1', 'genre1', 1),
//   ('book2', 'genre2', 2),
//   ('book3', 'genre3', 3),
//   ('book4', 'genre4', 1),
//   ('book5', 'genre1', 2);
// `;


// client.query(add_default_books_query, (err, res) => {
//   if (err) throw err;
//   console.log('ADDED DEFAULT BOOKS SUCCESSFULLY',res);
//   client.end();
// });