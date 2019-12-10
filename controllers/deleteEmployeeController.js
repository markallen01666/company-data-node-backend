// delete employee - controller

const Employees = require('../models/Employees.js')

module.exports = async (req, res) => {
  const employees = await Employees.deleteOne({ staffId: req.body.staffId })
  res.json({
    status: "Success",
    message: "Record deleted"
  });
}
