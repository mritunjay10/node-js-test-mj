const express = require('express');
const router  = express.Router();
const userController = require('../controller/user.controller');

router.get('/', function(req, res) {

    userController.create(req, res)
});

module.exports = router;