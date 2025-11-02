const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); // ✅ Create HTTP server
const io = new Server(server); // ✅ Attach socket.io to the HTTP server

const port = 3000;

// Serve the client HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle incoming client connections
io.on("connection", (socket) => {
  console.log("Connection established");
  // This runs whenever a new client connects to the server.
  // 'socket' represents the specific user's connection.

  // Listen for a "chat message" event from this client
  socket.on("chat message", (msg) => {
    console.log("Recieved message!");
    // 'msg' contains the message sent by the client
    // Broadcast this message to all connected clients (including the sender)
    io.emit("chat message", msg);

    // If you wanted to send it only to others (not the sender):
    // socket.broadcast.emit("chat message", msg);
  });

  // Listen for the disconnect event when a user leaves
  socket.on("disconnect", () => {
    console.log("User disconnected");
    // This fires when the user closes the tab or loses connection
  });
});

// Start the HTTP server (not app.listen)
server.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`);
});
