const express = require("express");

const port = 5001;
const app = express();

let data = "Initial Data";

app.get("/getData", (req, res) => {
  res.send({
    data,
  });
});

// Dummy update, actual update might by happening on DB for various reasons/ scenarios
app.get("/updateData", (req, res) => {
  data = `Updated data - ${new Date().toLocaleString()}`;
  res.send({
    data,
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
