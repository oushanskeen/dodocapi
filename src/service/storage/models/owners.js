const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ownersSchema = new Schema({
  id:{
    type: Number
  }
  //name: {
  //  type: String,
  //  required: true,
  //  unique: true,
  //  trim: true,
  //},
  //data:{
  //  type: [],
  //  required: true
  //},
  //timestamps: true
});
const Owners = mongoose.model('Owners', ownersSchema);
module.exports = Owners;
