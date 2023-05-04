// Convention is to name the model in uppercase and singular
const Food = require('../models/food');

module.exports = {
    index
  };

function index(req, res) {
    res.render('food/index', {
      foods: Food.getAll()
    });
  }