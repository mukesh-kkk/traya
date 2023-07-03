const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();

router.post('/product',productController.CreateProduct );
router.get('/products',productController.GetProduct);

module.exports = router;
