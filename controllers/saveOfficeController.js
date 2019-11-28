// store new office data in database - controller

const Offices = require("../models/Offices.js");
const localCors = require("cors");

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
  await Offices.create({
    office: "Stonehouse",
    building: "Welby Court",
    number: "",
    street: "Harrington Road",
    town: "Stonehouse",
    postcode: "ST13 9OA",
    adminLock: false
  });
   */
  res.send("Done! " + req.body.office);
};
