const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');

const BookType = (types) => new GraphQLObjectType({
  name: 'Book',
  fields: () => {
    const { AuthorType } = require('./types');
    return { 
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: { 
        type: AuthorType,
        resolve(parent, args, context, info){
          return new Promise((resolve, reject) => {          
            const query = `SELECT * FROM authors WHERE id = ${parent.author_id} LIMIT 1`;
            context.db.query(query, (err, res) => {
              if (err) reject(err);
              resolve(res.rows[0]);
            })
          });
        }
      }
    }
  }
});

module.exports = BookType;