const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./graphql-schema');

const app = express();

// app.use("/", (request, response) => {
//   response.send("THIS IS ROOT PAGE");
// });

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});