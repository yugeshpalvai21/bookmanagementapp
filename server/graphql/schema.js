// const { authors, books } = require('../sampleData');
const { GraphQLSchema } = require('graphql');

const RootQuery = require('./resolvers/queries');

const Mutation = require('./resolvers/mutation');


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});