// Convention is to name the model in uppercase and singular
const Food = require('../models/food');

module.exports = {
    index,
    show,
  };

function show (req, res) {
    res.render('food/show', {
        food: Food.getOne(req.params.id),
    });
}

function index(req, res) {
    res.render('food/index', {
      foods: Food.getAll()
    });
  }