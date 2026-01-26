const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  res.setHeader("Expires", "Sat, 27 Jan 2023 11:20:39 GMT");
  next();
});

app.use(
  express.static(path.join(__dirname, "public"), {
    // cacheControl: false,
    // etag: false,
    // lastModified: false,
  }),
);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
