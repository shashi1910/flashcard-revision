const express = require("express");
const path = require("path");
const port = 3000;

let initial_path = path.join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "menu.html"));
});

app.get("/revision", (req, res) => {
  res.sendFile(path.join(initial_path, "revision.html"));
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}/`);
});
