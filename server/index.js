const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const client = require('./database/client');


const schema = require('./graphql/schema');

require('dotenv').config();

const app = express();

const context = { db: client };

// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);



app.use('/graphql', graphqlHTTP({
  schema: schema,
  context: context,
  graphiql: process.env.NODE_ENV === 'local'
}));

// app.use("/", (req, res) => {
//   // console.log(typeof req);
//   // console.log(typeof res);
//   res.send("<h1>Welcome to Book Management App</h1>");
// });


app.listen(3000, console.log(`Server is up and running on PORT ${process.env.PORT}`));