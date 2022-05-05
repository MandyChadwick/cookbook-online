const express = require('express');
const router = express.Router();
const validator = require('../middleware/validate');

const recipesController = require('../controllers/recipes');

router.get('/', recipesController.getAll);

router.get('/:id', recipesController.getSingle);

router.post('/', validator.saveRecipe, recipesController.createRecipe);

router.put('/:id', validator.saveRecipe, recipesController.updateRecipe);

router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;


// router.post('/', validation.saveContact, contactsController.createContact);

// router.put('/:id', validation.saveContact, contactsController.updateContact);