var express = require('express');
var router = express.Router();
const User = require('../model/User')
/* GET users listing. */
router.get('/', function(req, res) {
  User.findOne( function (err, user) {
    if (err) {
      return res.status(500).json({
        message: 'Error logging in',
        error: err,
      })
    }
    return res.json({  user })
  })

});
router.get('/:id', function(req, res) {
  const id = req.params.id
  User.findOne( {_id:id},function (err, user) {
    if (err) {
      return res.status(500).json({
        message: 'Error logging in',
        error: err,
      })
    }
    return res.json({  user })
  })

});
module.exports = router;
