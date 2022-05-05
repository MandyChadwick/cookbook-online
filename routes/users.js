const express = require('express');
const router = express.Router();
const validator = require('../middleware/validate');

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', validator.saveUser, usersController.createUser);

router.put('/:id', validator.saveUser, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;


