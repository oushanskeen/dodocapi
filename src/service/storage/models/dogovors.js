const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dogovorsSchema = new Schema({
  id:{type:String},
  //version:{ type: Number},
  name:{type:String},
  date:{type:String},
  objName:{type:String},
  objId:{type:String},
  ownerName:{type:String},
  ownerId:{type:Number},
  agentName:{type:String},
  agentId:{type:String},
  dogovorType:{type:String},
  systems:{type:String},
  price:{type:String},
  srokDeistviya:{type:String}
});
const Dogovors = mongoose.model('Dogovors', dogovorsSchema);
module.exports = Dogovors;
