const express = require("express");

const app = express();

let data = "Initial Data";
const port = 5001;

let waitingClientList = [];

app.get("/getData", (req, res) => {
  if (data !== req?.query?.data) {
    res.send({
      data,
    });
  } else {
    waitingClientList.push(res);
  }
});

app.get("/updateData", (req, res) => {
  data = req?.query?.data;

  while (waitingClientList.length > 0) {
    const client = waitingClientList.pop();
    client.json({ data });
  }

  res.send({
    success: "Data updated successfully",
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
