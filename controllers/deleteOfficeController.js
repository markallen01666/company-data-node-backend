// delete office - controller

const Offices = require('../models/Offices.js')

module.exports = async (req, res) => {
  const office = await Offices.deleteOne({ office: req.body.office })
  console.log("Delete request received")
  console.log(req.body.office);
  res.json({
    status: "Success",
    message: "Record deleted"
  });
}
