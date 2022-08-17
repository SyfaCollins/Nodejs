/** @format */

// First Web Server

const express = require("express");

const app = express();

const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},

]

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
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('The course with the given id was not found')
res.send(course)
});

/**
 * 
 */

/*
Environment varibles
PORT 

*/

const port = process.env.PORT || 3000;

/*
finally we listen at a given port
*/

app.listen(port, () => console.log(`listening on port ${port}...`));


