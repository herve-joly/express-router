const express = require("express");
const router = express.Router();

// List of Users
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

//GET all users
router.get("/user", async (req, res) => {
  await res.send(users);
});
//GET one user
router.get("/user/:id", async (req, res) => {
  const person = users[req.params.id - 1];
  await res.send(person);
});
//post
router.post("/user", async (req, res) => {
  const newUser = req.body;
  fruits.push(newUser);
  res.send(users);
});
//put
router.put("/user/:id", async (request, response) => {
  const index = Number(request.params.id) - 1;
  const upUser = request.body;
  users[index] = upUser;
  await response.send(users);
});
//delete
router.delete("/user/:id", async (req, res) => {
  const id = Number(req.params.id);
  const userIndex = id - 1;
  users.splice(userIndex, 1);
  await res.json(users);
});

module.exports = router;
