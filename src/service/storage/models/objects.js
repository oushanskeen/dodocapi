const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectSchema = new Schema({
  id:{ type: String },
  version:{ type: Number},
  type:{
    type: String,
  },
 name: {
   type: String,
 },
 adress: {
    type: String,
 },
  contactsFIO: {
    type: String
  },
  workRegime: {
    type: String
  }
});
const Objects = mongoose.model('Objects', objectSchema);
module.exports = Objects;
