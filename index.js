const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.download(__dirname + "/files/1-KONSEP-DASAR-PYTHON.docx");
});

app.listen(3000);
