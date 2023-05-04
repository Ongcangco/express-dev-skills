var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods');

// All actual paths start with '/foods'

// GET /todos
router.get('/', foodsCtrl.index);

module.exports = router;
