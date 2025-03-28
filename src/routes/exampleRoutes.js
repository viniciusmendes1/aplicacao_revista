// src/routes/exampleRoutes.js
const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/example', exampleController.exampleFunction);

module.exports = router;