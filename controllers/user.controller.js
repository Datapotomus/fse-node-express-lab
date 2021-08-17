
const users = [
  {
    id: 1,
    firstName: "eric",
    lastName: "Schwartz"
  },
  {
    id: 2,
    firstName: "bob",
    lastName: "Smith"
  },
  {
    id: 3,
    firstName: "Susan",
    lastName: "McCaskill"
  }
]

const userController = {
  getAllUsers: function (req, res) {
    res.json(users)
  },

  findById: function (req, res) {
    // res.send(req.params.id)
    const foundUser = users.find((user) => user.id === parseInt(req.params.id))

    //if we found the user return it otherwise return a 404
    if (foundUser) {
      res.json(foundUser)
    } else {
      res.sendStatus(404)
    }
  },
  addUser: function (req, res) {
    //adding user to the object 
    users.push(req.body)

    //returns the request body and a 201 as successful.
    res.status(201).json(req.body)
  },
  deleteUser: function (req, res) {
    // res.send(req.params.id)
    const foundUserIndex = users.find((user) => user.id === parseInt(req.params.id))

    //if we found the user return it otherwise return a 404
    if (foundUserIndex !== -1) {
      users.splice(foundUserIndex, 1);
      res.json(users);
    } else {
      res.sendStatus(404)
    }
  },
  updateUser: function (req, res) {
    // res.send(req.params.id)
    let foundUser = users.find((user) => user.id === parseInt(req.params.id))

    //if we found the user update it otherwise return a 404
    if (foundUser) {
      foundUser = Object.assign(foundUser, req.body);
      res.json(foundUser);
    } else {
      res.sendStatus(404)
    }
  }
}

module.exports = userController;