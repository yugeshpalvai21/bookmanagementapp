const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');

const authors = require('../database/fixtures');

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
      args: { name: {type: GraphQLString }},
      resolve(parent, args) {
        return authors.find((author) => author.name === args.name)
      }
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve() { 
        authors
      }
    }
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;