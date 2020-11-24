const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const express = require('express');
const router = express.Router();
const User = require('../model/User')

/* GET users listing. */
router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res.status(500).json({
        message: 'Error logging in',
        error: err,
      })
    }

    if (user === null) {
      return res.status(500).json({
        message: 'Email address you entered is not found.',
      })
    }

    // compare submitted password with password inside db
    return bcrypt.compare(req.body.password, user.password, function (
        err,
        isMatched
    ) {
      if (isMatched === true) {
        return res.json({
          user: {
            _id: user._id,
            email: user.email,
          },
          token: jwt.sign(
              { _id: user._id, email: user.email },
              'formationgwz'
          ), // generate JWT token here
        })
      } else {
        return res.status(500).json({
          message: 'Invalid Email or Password entered.',
        })
      }
    })
  })
});
router.post('/register', function(req, res)  {
  // throw validation errors

  // initialize record
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })

  // encrypt password
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(user.password, salt)
  user.password = hash

  // save record
  user.save(function (err, user) {
    if (err) {
      return res.status(500).json({
        message: 'Error saving record',
        error: err,
      })
    }
    return res.json({
      message: 'saved',
      _id: user._id,
    })
  })
})
module.exports = router;
