const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["null"],
  })
);

app.get("/list", (req, res) => {
  res.status(200).send({
    message: "Hello there!",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
