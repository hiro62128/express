var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello Page' });
});

module.exports = router;
