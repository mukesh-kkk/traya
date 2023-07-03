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
    }

})

module.exports = mongoose.model('Product', productSchema);
