const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    , status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    feedback: {
        type: String,

    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    }



}, { timestamps: true });
module.exports = mongoose.model('order', orderSchema);
