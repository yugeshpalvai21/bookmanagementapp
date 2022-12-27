const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');

const { AuthorType } = require('../types');
const { BookType } = require('../types');

const client = require('../../database/client');


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
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM authors WHERE id = ${args.id}`;
          client.query(query, (err, res) => {
            if(err) reject(err);
            resolve(res.rows[0]);
          });
        });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM books`;
          client.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res.rows);
          });
        });
      } 
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args){
        return new Promise((resolve, reject) => {
          const query = `SELECT * FROM books WHERE id = ${args.id}`;
          client.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res.rows[0]);
          });
        });
      }
    }
  }
});

module.exports = RootQuery;