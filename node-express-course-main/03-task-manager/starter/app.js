/** @format */

// console.log('Task Manager App')
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

/**
 * middleware
 * express json
 */
app.use(express.json());

/**
 * routes
 * plus route structures
 */

app.get("/api", (req, res) => {
  res.send("Task Manager");
  // res.end();
});

app.use("/api/v1/tasks", tasks);

//app.get('/api/v1/tasks')  --get all the tasks
//app.post('/api/v1/tasks')  --create a new task
//app.get('/api/v1/task:id')  --get a single task
//app.patch('/api/v1/task:id')  --update a task
//app.get('/api/v1/task:id')  --delete a task

/**
 * standard server
 */
const port = 3000;
app.listen(port, console.log(`Server running on port ${port}`));
