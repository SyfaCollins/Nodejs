/** @format */

// console.log('Task Manager App')
const express = require("express");
const app = express();

/**
 * routes
 */

app.get("/api", (req, res) => {
  res.send("Task Manager");
  res.end();
});

/**
 * standard server
 */
const port = 3000;
app.listen(port, console.log(`Server running on port ${port}`));
