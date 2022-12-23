const authors = require('../sampleData');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return authors.find(author => args.id === author.id )
      }
    }
  }
});


module.exports = new GraphQLSchema({query: RootQuery});