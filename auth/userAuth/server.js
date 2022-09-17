/** @format */

const express = require("express");
const app = express();
// const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.json(users);
  // console.log(req.url);
  // console.log(req.method);
});

//port Verb

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);

    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.post('/users', async(req,res)=>{
//   const auth = req.body.name
//   users.push(auth)
//   console.log(users)
// })

//PORT

const port = 3000;

app.listen(port, () => console.log(`Listening at port ${port}`));
