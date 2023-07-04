const User = require('../model/user');

exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const user = await User.create({ name, email, phone, password });

    const newUser = user.toObject();
    delete newUser.password
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });


    if (!user) {
      throw new Error('Invalid email or password');
    }

    if (user.password !== password) {
      throw new Error('Invalid email or password');
    }
    const newUser = user.toObject();
    delete newUser.password


    res.json({ message: 'Login successful', data: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
