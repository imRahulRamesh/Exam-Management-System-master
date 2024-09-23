const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  TeacherName: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
  },
  Description: {
    type: String,
  },
  Date: {
    type: Date,
  },
  File: {
    type: String,
    required: false
  },
  Marks: {
    type: Number,
  },
  Questions: [
    {
      question: { type: String },
      number: { type: Number }, // Or adjust the type based on your requirement
    },
  ],
  active: {
    type: Boolean,
    required: true,
  },
},{timestamps:true});

module.exports =  mongoose.model("Assignments", Schema);