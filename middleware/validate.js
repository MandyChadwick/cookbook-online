const validator = require('../helpers/validate');



const saveUser = (req, res, next) => {
    const validationRule = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        streetAddress: 'required|string',
        zipCode: 'required|string',
        birthday: 'string',
        favoriteFood: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };
  



  const saveRecipe = (req, res, next) => {
    const validationRule = {
        recipeCategory: 'required|string',
        recipeContributer: 'required|string',
        recipeName: 'required|email',
        recipeURL: 'required|string'
      
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };
  
  module.exports = {
    saveUser,
    saveRecipe
  };

//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   email: req.body.email,
//   streetAddress: req.body.streetAddress,
//   zipCode: req.body.zipCode,
//   birthday: req.body.birthday,
//   favoriteFood: req.body.favoriteFood

//   recipeCategory: req.body.recipeCategory,
//   recipeContributer: req.body.recipeContributer,
//   recipeName: req.body.recipeName,
//   recipeURL: req.body.recipeURL
