var express = require('express');
var listEndpoints = require('express-list-endpoints');
var authRoutes = require('./auth');
var usersRoutes = require('./users');
var router = express.Router();


router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.get('/', (req, res) => {
  res.json(listEndpoints(router))
})

module.exports = router;
