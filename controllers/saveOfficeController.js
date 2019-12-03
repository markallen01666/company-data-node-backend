// store new office data in database - controller

const Offices = require("../models/Offices.js");

module.exports = async (req, res) => {
  await Offices.create(
    {
      office: req.body.office,
      building: req.body.building,
      number: req.body.number,
      street: req.body.street,
      town: req.body.town,
      postcode: req.body.postcode,
      adminLock: req.body.adminLock
    },
    function(err, document) {
      if (err) {
        res.json({
          status: "Fail",
          message: "Not allowed: duplicate office name! This office name already exists in the database."
        });
      } else {
        res.json({
          status: "Success",
          message: "Recorded added to system!"
        });
      }
    }
  );
};
