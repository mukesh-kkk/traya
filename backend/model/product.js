const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    feedback: {
        type: String,
        default: ''
    }

})

module.exports = mongoose.model('Product', productSchema);
