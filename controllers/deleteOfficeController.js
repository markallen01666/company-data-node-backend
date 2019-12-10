// delete office - controller

const Offices = require('../models/Offices.js')

module.exports = async (req, res) => {
  const office = await Offices.deleteOne({ office: req.body.office })
  res.json({
    status: "Success",
    message: "Record deleted"
  });
}
