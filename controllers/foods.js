// Convention is to name the model in uppercase and singular
const Food = require('../models/food');

module.exports = {
    index,
    show,
    new: newFood,
    create,
    delete: deleteFood
  };

  function deleteFood(req, res) {
    Food.deleteOne(req.params.id);
    res.redirect('/foods');
  }
  

function create(req, res) {
    Food.create(req.body);
    res.redirect('/foods');
}

function newFood(req, res) {
      res.render('foods/new', { title: 'New Food' });
  }

function show(req, res) {
    res.render('foods/show', {
      food: Food.getOne(req.params.id),
        title: 'Food Details'
    });
}

function index(req, res) {
    res.render('foods/index', {
      foods: Food.getAll(),
      title: 'All Foods'
    });
  }