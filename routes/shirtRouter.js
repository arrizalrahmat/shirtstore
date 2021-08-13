const express = require('express');
const ShirtController = require('../controllers/ShirtController');

const router = express.Router();

router.get('/add', ShirtController.add);
router.post('/add', ShirtController.addPost);
router.get('/edit/:id', ShirtController.edit);
router.post('/edit/:id', ShirtController.editPost);
router.get('/delete/:id', ShirtController.delete);

module.exports = router;
