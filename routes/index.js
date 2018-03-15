var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenida', autor: 'Juan Camilo Arevalo' });
});

module.exports = router;
