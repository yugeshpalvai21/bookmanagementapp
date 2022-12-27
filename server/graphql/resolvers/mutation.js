const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');

const { AuthorType } = require('../types');
const { BookType } = require('../types');

const client = require('../../database/client');

const Mutation = new GraphQLObjectType({
  name: "MutationType",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: { 
        name: { type: GraphQLString },
        location: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        return new Promise((resolve, reject) => {
          const query = `INSERT INTO authors (name, location) VALUES ('${args.name}', '${args.location}') RETURNING *`;
          console.log(query);
          client.query(query, (err, res) => {
            if (err) reject(err);
            console.log(res);
            resolve(res.rows[0]);
          });
        });
      }
    },
    addBook: {
      type: BookType,
      args: {
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID }
      },
      resolve(parent, args){
        return new Promise((resolve, reject) => {
          const query = `INSERT INTO books (title, genre, author_id) VALUES ('${args.title}', '${args.genre}', '${args.authorId}') RETURNING *`;
          // console.log(query);
          client.query(query, (err, res) => {
            // console.log(err);
            if(err){
              reject(err)
            }
            resolve(res.rows[0]);
          });
        });
      }
    }
  }
});

module.exports = Mutation;