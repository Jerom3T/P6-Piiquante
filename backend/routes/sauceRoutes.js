const express = require('express');
const router = express.Router();

const sauceController = require('../controllers/sauceController');
const auth = require('../middleware/auth');

// Routes pour les sauces
router.post('/', auth, multer, sauceController.createSauce);
router.put('/:id', auth, multer, sauceController.modifySauce);
router.delete('/:id', auth, sauceController.deleteSauce);
router.get('/:id', auth, sauceController.getOneSauce);
router.get('/', auth, sauceController.getAllSauces);
router.post('/:id/like', auth, sauceController.likeSauce);

module.exports = router;