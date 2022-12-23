var express = require('express');

require('dotenv').config();

var app = express();

// console.log(process.env.NODE_ENV);
// console.log(process.env.PORT);

app.use("/", (req, res) => {
  // console.log(typeof req);
  // console.log(typeof res);
  res.send("<h1>Welcome to Book Management App</h1>");
})


app.listen(3000, console.log(`Server is up and running on PORT ${process.env.PORT}`));