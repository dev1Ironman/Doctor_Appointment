const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
    
  },
  mobileNo: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Patient", PatientSchema);