const express = require("express");

const app = express();

const port = 3000;

app.get("/sse", (req, res) => {
  // Setup sse logic
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");

  res.write("data: Welcome to Server sent event \n\n");

  const intervalId = setInterval(() => {
    res.write(`data: The server time is ${new Date().toLocaleDateString()} \n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
