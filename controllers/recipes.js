const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb()
  .db()
  .collection('recipes')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('recipes')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createRecipe = async (req, res) => {
  const recipes = {
    
    recipeCategory: req.body.recipeCategory,
    recipeContributer: req.body.recipeContributer,
    recipeName: req.body.recipeName,
    recipeURL: req.body.recipeURL
  };
  const response = await mongodb.getDb().db().collection('recipes').insertOne(recipes);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the recipe.');
  }
};

const updateRecipe = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const recipe = {
    
    recipeCategory: req.body.recipeCategory,
    recipeContributer: req.body.recipeContributer,
    recipeName: req.body.recipeName,
    recipeURL: req.body.recipeURL
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('recipes')
    .replaceOne({ _id: userId }, recipe);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the recipe.');
  }
};

const deleteRecipe = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('recipes').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the recipe.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createRecipe,
  updateRecipe,
  deleteRecipe
};





