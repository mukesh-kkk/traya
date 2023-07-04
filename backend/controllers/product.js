const product = require('../model/product');

exports.CreateProduct = async (req, res) => {

    const { name, image } = req.body;
    try {
        if (!name || !image) {
            res.send('Product name or image  is required');

        } else {
            await product.create(req.body);
            res.send('Successfully addded products')
        }

    } catch (err) {
        res.send('Something went wrong')
    }

}

exports.GetProduct = async (req, res) => {
    const ans = await product.find();
    res.status(200).json({ data: ans });
}
exports.UpdateProducts = async (req, res) => {
    const { _id } = req.body;
    const { rating, feedback } = req.body;
    const ans = await product.findOneAndUpdate({ _id }, { rating, feedback });
    res.status(200).json({ data: ans });
}
