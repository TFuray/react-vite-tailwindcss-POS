const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tickets', require('./routes/ticketRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tables', require('./routes/tableRoutes'))
// app.use('/api/orders', require('./routes/orderRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
