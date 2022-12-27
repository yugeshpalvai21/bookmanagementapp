const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./graphql/schema');

require('dotenv').config();

const app = express();

// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);



app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'local'
}));

// app.use("/", (req, res) => {
//   // console.log(typeof req);
//   // console.log(typeof res);
//   res.send("<h1>Welcome to Book Management App</h1>");
// });


app.listen(3000, console.log(`Server is up and running on PORT ${process.env.PORT}`));