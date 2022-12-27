const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');
// const { AuthorType } = require('../types');
const client = require('../../database/client');


const BookType = (types) => new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    // author: { 
    //   type: AuthorType,
    //   resolve(parent, args, context, info){
    //     return new Promise((resolve, reject) => {          
    //       const query = `SELECT * FROM authors WHERE id = ${parent.author_id} LIMIT 1`;
    //       client.query(query, (err, res) => {
    //         if (err) reject(err);
    //         resolve(res.rows[0]);
    //       })
    //     });
    //   }
    // }
  })
});

module.exports = BookType;