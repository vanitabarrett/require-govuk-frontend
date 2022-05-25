'use strict'

const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

console.log(require.resolve("govuk-frontend"))

app.get("/", (req, res) => {
  res.status(200).send("Test");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
