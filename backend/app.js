const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes)
app.use(orderRoutes)
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('db connected')
}).catch((err) => {
  console.log('not connected', err)
})
app.listen(process.env.APP_PORT, () => {
  console.log(` app listening on port ${process.env.APP_PORT}`)
})