var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods');

// All actual paths start with '/foods'

// GET request / foods
router.get('/', foodsCtrl.index);
//GET /foods/new <-- Define BEFORE show route
router.get('/new', foodsCtrl.new);
//Get /foods/:id
router.get('/:id', foodsCtrl.show);

// POST /foods
router.post('/', foodsCtrl.create);

//DELETE
router.delete('/:id', foodsCtrl.delete);



module.exports = router;
