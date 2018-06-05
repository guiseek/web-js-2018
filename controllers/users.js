let mongoose = require('mongoose');
let User = require('../models/users');

module.exports = {
  findAll: function (req, res) {
    User.find({}).exec((err, users) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(users);
      }
    });
  },
  create: function (req, res) {
    let user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({
          message: err
        });
      } else {
        res.json({
          message: 'Usere criado com sucesso',
          user: user
        });
      }
    });
  }
};