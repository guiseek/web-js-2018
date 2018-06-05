var express = require('express');
var router = express.Router();
let users = require('./../controllers/users');
/* GET users listing. */
router.get('/', function(req, res) {
  users.findAll(req, res);
});
router.post('/', function(req, res) {
  users.create(req, res);
});
module.exports = router;
