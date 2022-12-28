const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');

const AuthorType = (types) => new GraphQLObjectType({
  name: 'Author',
  fields: () => {
    const { BookType } = require('./types');
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      location: { type: GraphQLString },
      books: { 
        type: new GraphQLList(BookType),
        resolve(parent, args, context, info){
          return new Promise((resolve, reject) => {
            const query = `SELECT * FROM books WHERE author_id = ${parent.id}`;
            context.db.query(query, (err, res) => {
              if (err) reject(err);
              resolve(res.rows);
            });
          });
         }
      }
    }
  }
});

module.exports = AuthorType;