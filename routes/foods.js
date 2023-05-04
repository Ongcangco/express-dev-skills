var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods');

// All actual paths start with '/foods'

// GET /foods
router.get('/', foodsCtrl.index);

// GET /foods/:id
router.get('/:id', foodsCtrl.show);

module.exports = router;
