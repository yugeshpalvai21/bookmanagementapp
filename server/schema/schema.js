const { authors, books } = require('../sampleData');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'yugeshpalvai',
  password: 'samplepassword',
  database: 'bookmanagementapp'
});

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

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

// client.query(add_default_books_query, (err, res) => {
//   if (err) throw err;
//   console.log('ADDED DEFAULT BOOKS SUCCESSFULLY',res);
//   client.end();
// });

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    // books: { 
    //   type: new GraphQLList(BookType),
    //   resolve(parent, args){
    //     return books.filter(book => book.authorId === parent.id)
    //    }
    // }
  })
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: { 
      type: AuthorType,
      resolve(parent, args){
        return authors.find(author => author.id === parent.authorId)
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args, context, info) => {
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM authors`; 
          client.query(query, (err, res) => {
            if (err) reject(err);
            console.log(res.rows);
            resolve(res.rows); 
          });
        });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return authors.find(author => args.id === author.id )
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return books
      } 
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args){
        return books.find(book => book.id === args.id)
      }
    }
  }
});


module.exports = new GraphQLSchema({query: RootQuery});