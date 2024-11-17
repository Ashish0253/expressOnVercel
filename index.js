const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send({message: "API is running..."});
});

app.listen(5000, () => console.log("Server ready on port 5000"));

module.exports = app;
