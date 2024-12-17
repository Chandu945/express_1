const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});

// Route
app.get("/", (req, res) => {
  res.send("<h1>Hello to Node JS</h1>");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
