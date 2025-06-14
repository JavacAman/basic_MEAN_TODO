const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


// get api READ
router.get('/users', usersController.getUsers);

// post api CREATE
router.post('/users', jsonParser, usersController.postUsers);

// put api UPDATE
router.put('/users', jsonParser, usersController.putUsers);

// delete api DELETE
router.delete('/users/:id', usersController.deleteUsers);

//get user by id
router.get('/users/:id', usersController.getUserById);

module.exports = router;