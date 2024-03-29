// importing mongoose dependency
const mongoose = require("mongoose");

// create a post schema
const assignmentschema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentschema);
 



