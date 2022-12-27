const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');
// const { BookType } = require('../types');

const client = require('../../database/client');


const AuthorType = (types) => new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    // books: { 
    //   type: new GraphQLList(BookType),
    //   resolve(parent, args){
    //     return new Promise((resolve, reject) => {
    //       const query = `SELECT * FROM books WHERE author_id = ${parent.id}`;
    //       client.query(query, (err, res) => {
    //         if (err) reject(err);
    //         resolve(res.rows);
    //       });
    //     });
    //    }
    // }
  })
});

module.exports = AuthorType;