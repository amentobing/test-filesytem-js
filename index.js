const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server on working!");
});

app.get("/test", (req, res) => {
  res.send(__dirname + "/files/1-KONSEP-DASAR-PYTHON.docx");
});

app.listen(3000);
