// store new office data in database - controller

const Offices = require("../models/Offices.js");
const localCors = require('cors');

// CORS support
//app.use(localCors());

module.exports = async (req, res) => {
/*
   await Offices.create({  
     office: req.body.office,
     building: req.body.building,
     number: req.body.number,
     street: req.body.street,
     town: req.body.town,
     postcode: req.body.postcode,
     adminLock: req.body.adminLock
   });
   */
  let data = {  
   office: req.body.office,
   building: req.body.building,
   number: req.body.number,
   street: req.body.street,
   town: req.body.town,
   postcode: req.body.postcode,
   adminLock: req.body.adminLock
 };
   res.send("Done! ");
};
