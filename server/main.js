const express = require('express');

const app = express();

app.use("/", (request, response) => {
  response.send("THIS IS ROOT PAGE");
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});