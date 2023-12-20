const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Server on working!");
});

app.use("/test", (req, res) => {
  res.send(__dirname + "/files/1-KONSEP-DASAR-PYTHON.docx");
});

app.listen(3000);
