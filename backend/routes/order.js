const express = require('express');
const orderController = require('../controllers/order');

const router = express.Router();

router.post('/order', orderController.addOrder);
router.get('/:userId/orders',orderController.getOrder)
router.delete('/orders/:orderId', orderController.deleteOrder);
router.post('/orders/:orderId/feedback', orderController.giveFeedback);
router.get('/orders/:orderId/feedback', orderController.getFeedback);
router.put('/orders/:orderId/feedback', orderController.editFeedback);

module.exports = router;
