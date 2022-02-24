const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const products = require ('./routes/products')
const user = require ('./routes/user')
const invoice = require ('./routes/invoices')
app.use(bodyParser.json()); //otetaan bodyparser käyttöön



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/products', products)
app.use('/user', user)
app.use('/invoices', invoice)






app.listen(3000)