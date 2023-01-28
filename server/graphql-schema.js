const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    name: {type: GraphQLString},
    location: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "all author queries",
  fields: {
    author: {
      type: AuthorType,
      resolve: () => ({name: 'yugesh', location: 'India'})
    }
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;