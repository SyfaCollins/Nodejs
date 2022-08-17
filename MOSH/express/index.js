/** @format */

// First Web Server
const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

/*
This is how we define a route.
We specify the path or url
and a route handler or a call 
back function

*/
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

/**
 * Route Parameters
 * Used to get a single record
 */

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given id was not found");
  res.send(course);
});

/**
 * Handling POST Requests
 * we use this to create a new course
 */
app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body,schema);
  console.log(result);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

/*
Environment varibles
PORT 

*/

const port = process.env.PORT || 3000;

/*
finally we listen at a given port
*/

app.listen(port, () => console.log(`listening on port ${port}...`));
