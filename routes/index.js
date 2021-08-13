const express = require('express');
const ShirtController = require('../controllers/ShirtController');
const shirtRouter = require('./shirtRouter');

const router = express.Router();

router.get('/', ShirtController.list);

router.use('/shirts', shirtRouter);

module.exports = router;
