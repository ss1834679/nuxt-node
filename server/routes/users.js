var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"name": "张三", id: 1,age:12});
});

module.exports = router;
