const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("hello world")
})

router.get('/welcome', (req, res) =>{
  res.send("Welcome to the welcome route")
})

module.exports = router;
