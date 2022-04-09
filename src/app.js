const express = require("express");
require("./db/conn");
const Register = require("./models/registers");

const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get("/", async (req, res) => {
//   try {
//     const StudentsData = await Student.find();
//     res.send(StudentsData);
//   } catch (e) {
//     res.send(e);
//   }
// });

app.post("/Create", async (req, res) => {
  console.log(req.body);
  try {
    const user = new Register({});
    const add = await user.generateAuthToken(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/addData", async (req, res) => {
  // console.log(req.body);
  const _id = req.body._id;
  try {
    const add = await Register.findOne();
    res.send(add);

    const adds = await add.generateAuthToken(req.body);
    const createUser = await adds.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`surver is running at port no. ${port}`);
});
