// Offices database schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const OfficeSchema = new Schema({
  office: {
    type: String,
    required: true,
    unique: true
  },
  building: {
    type: String
  },
  number: {
    type: String
  },
  street: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  }
})

OfficeSchema.plugin(uniqueValidator) // Handle error on duplicate office

const Office = mongoose.model('Office', OfficeSchema)
module.exports = Office
