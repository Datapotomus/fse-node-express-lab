const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller')


//getting all the users
// router.get("/users", (req, res) => {
//     res.json(users)
// })
router.get("/users", userController.getAllUsers)

//getting a single user
// router.get("/users/:id", (req, res) => {
//   // res.send(req.params.id)
//   const foundUser = users.find( (user) => user.id === parseInt(req.params.id))
    
//         //if we found the user return it otherwise return a 404
//         if(foundUser){
//             res.json(foundUser)
//         }else{
//             res.sendStatus(404)
//         }
// })
router.get("/users/:id", userController.findById)

//add users
router.post("/users", userController.addUser)

//delete a user
router.delete("/users/:id", userController.deleteUser)
//Change a user
router.put("/users/:id", userController.updateUser)


module.exports = router;