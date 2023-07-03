const express = require('express')
const app = express()
const mongoose=require('mongoose')
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const productRoutes=require('./routes/product')
const cors=require('cors')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes)
app.use(orderRoutes)
mongoose.connect('mongodb://localhost:27017/traya',{
  useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>{
  console.log('db connected')
}).catch(()=>{
  console.log('not connected')
})
app.listen(5000, () => {
  console.log(` app listening on port 5000`)
})