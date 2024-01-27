const graphql = require('graphql');

const {GraphQLSchema, GraphQLObjectType, GraphQLString} = graphql;

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
      type: BookType,
      resolve(parent, args) {
        return [];
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
