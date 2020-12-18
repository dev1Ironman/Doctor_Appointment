const Patient = require("../models/patient");
const express = require('express');
const router = express.Router()


//List all available tasks from database....
// exports.listAllPatients = (req, res) => {
//   Task.find({}, (err, task) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.status(200).json(task);
//   });
// };
router.get('/', (req, res) => {
  return new Promise((resolve, reject) => {
    Patient.find({}, (err, response) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(response);
    });
  })
})

router.post('/', (req, res) => {
  return new Promise((resolve, reject) => {
    let newPatient = new Patient();
  console.log(req.body)
  newPatient.name = req.body.name;
  newPatient.age = req.body.age;
  newPatient.mobileNo = req.body.mobileNo;
  newPatient.date = req.body.date;
  newPatient.time = req.body.time;
  newPatient.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(task);
  });
  });
});
exports.createNewPatients = (req, res) => {
  let newPatient = new Patient();
  console.log(req.body)
  newPatient.name = req.body.name;
  newPatient.age = req.body.age;
  newPatient.mobileNo = req.body.mobileNo;
  newPatient.date = req.body.date;
  newPatient.time = req.body.time;
  newPatient.save((err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(task);
  });
};

module.exports = router;