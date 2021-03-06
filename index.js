// Company info API
// Implementation of a Node, Express, and MongoDB backend to serve a React CRUD frontend
// M Allen - 2019

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// CORS support
app.use(cors());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// controllers
const getEmployeesController = require('./controllers/getEmployeesController')
const saveEmployeeController = require("./controllers/saveEmployeeController")
const updateEmployeeController = require("./controllers/updateEmployeeController")
const deleteEmployeeController = require("./controllers/deleteEmployeeController")
const getOfficesController = require('./controllers/getOfficesController')
const saveOfficeController = require("./controllers/saveOfficeController")
const updateOfficeController = require("./controllers/updateOfficeController")
const deleteOfficeController = require("./controllers/deleteOfficeController")


// connect database
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://haleon55:gyc2eivi16mrejC7@cluster0-wvhp3.mongodb.net/company1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error => {
  console.log(`Mongoose connection error: ${error}`)
}))

// Enable CORS pre-flight requests
app.options('/employees/add', cors())
app.options('/employees/update', cors())
app.options('/employees/delete', cors())
app.options('/offices/add', cors())
app.options('/offices/update', cors())
app.options('/offices/delete', cors())

app.get('/employees', getEmployeesController)
app.post("/employees/add", saveEmployeeController)
app.post("/employees/update", updateEmployeeController)
app.post("/employees/delete", deleteEmployeeController)
app.get('/offices', getOfficesController)
app.post("/offices/add", saveOfficeController)
app.post("/offices/update", updateOfficeController)
app.post("/offices/delete", deleteOfficeController)


// Port allocation and default for Heroku commit
let port = process.env.PORT
if (port == null || port == '') {
  port = 4000
}
app.listen(port, () => {
  console.log(`Company info API started - listening on port: ${port}`)
})
