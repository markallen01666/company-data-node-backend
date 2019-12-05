// update office data in database using office as key - controller

const Offices = require("../models/Offices.js");

module.exports = async (req, res) => {
  await Offices.findOneAndUpdate(
    { office: req.body.office },
    {
      building: req.body.building,
      number: req.body.number,
      street: req.body.street,
      town: req.body.town,
      postcode: req.body.postcode,
      adminLock: req.body.adminLock
    }
  );
  res.json({
    status: "Success",
    message: "Record updated"
  });
};
