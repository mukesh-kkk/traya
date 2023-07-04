const express = require('express');
const productController = require('../controllers/product');
const router = express.Router();

router.post('/product', productController.CreateProduct);
router.get('/products', productController.GetProduct);
router.patch('/product', productController.UpdateProducts);
module.exports = router;
