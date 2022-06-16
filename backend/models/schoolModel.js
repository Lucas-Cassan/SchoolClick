const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: String,
  theme: String,
  tags: [],
  information: {},
});
const schoolModel = mongoose.model("school", schoolSchema);
module.exports = schoolModel;
