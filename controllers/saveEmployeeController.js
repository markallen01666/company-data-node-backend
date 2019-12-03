// store new office data in database - controller

const Employees = require("../models/Employees.js");

module.exports = async (req, res) => {
   await Employees.create({
     staffId: req.body.staffId,
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     office: req.body.office,
     position: req.body.position,
     telephone: req.body.telephone,
     email: req.body.email,
     adminLock: req.body.adminLock
   },
   function(err, document) {
     if (err) {
       res.json({
         status: "Fail",
         message: "Not allowed - duplicate record!"
       });
     } else {
       res.json({
         status: "Success",
         message: "Recorded added to system!"
       });
     }
   });
};
