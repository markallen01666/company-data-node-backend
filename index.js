// Company info API
// Implementation of a Node, Express, and MongoDB backend to serve a React CRUD frontend
// M Allen - 2019

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// CORS support
app.use(cors());

// controllers
const getOfficesController = require('./controllers/getOfficesController')
const getEmployeesController = require('./controllers/getEmployeesController')

// connect database
mongoose.connect('mongodb+srv://haleon55:gyc2eivi16mrejC7@cluster0-wvhp3.mongodb.net/company1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error => {
  console.log(`Mongoose connection error: ${error}`)
}))

app.get('/employees', getEmployeesController)
app.get('/offices', getOfficesController)

// Port allocation and default for Heroku commit
let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Company info API started - listening on port: ${port}`)
})
