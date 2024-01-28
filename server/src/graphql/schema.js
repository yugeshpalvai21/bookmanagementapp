const graphql = require('graphql');
const books = require('../sample_data');
const { GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLList, 
  GraphQLNonNull } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    title: { type: GraphQLString},
    description: { type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getBooks: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    getBook: {
      type: BookType,
      args: {id: { type: new GraphQLNonNull(GraphQLString)}},
      resolve(parent, args) {
        return books.find(book => book.id === args.id)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
