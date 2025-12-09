const express = require("express");

const app = express();

const port = 3000;

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-random' 'unsafe-inline' https://dev-tinder-backend-r1ek.onrender.com/feed"
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});
