const express = require("express");

const app = express();

app.get("/set-cookie", (req, res) => {
  try {
    res.cookie("authToken", "abc123", {
      httpOnly: true, // Not accessible via JS
      secure: true, // HTTPS only
      sameSite: "Strict", // CSRF protection
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    res.send({
      message: "Hello",
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
