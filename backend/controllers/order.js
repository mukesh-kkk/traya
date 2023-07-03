const Order = require('../model/order');

exports.addOrder = async (req, res) => {
 
  const { userId, productId } = req.body;
  console.log(req.body);

  try {
      if (!userId && !productId) {
          res.send('  userID and producrID is required');
      } else {
          await Order.create(req.body);
          res.send('Order Placed succesfully');
      }


  } catch (err) {
      res.send('Somethign went wrong');
  }
};


exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(400).json({ error:'Something is wrong'});
  }
};

exports.giveFeedback = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { feedback } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.feedback = feedback;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    res.json({ feedback: order.feedback });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editFeedback = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { feedback } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.feedback = feedback;
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrder = async (req, res, next) => {
  const { userId } = req.params;

  try {
    if (userId) {
      const usersOrder = await Order.find({userId:userId}).populate('productId', 'name image');
      res.status(200).json({ data: usersOrder });
    } else {
      res.send('Please send a proper user id');
    }
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
};
