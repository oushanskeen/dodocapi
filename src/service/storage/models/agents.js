const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ownersSchema = new Schema({
  id:{ type: String },
  version:{ type: Number},
  type:{
    type: String,
  },
 name: {
 type: String,
 },
  compFullName:{
    type: String,
    required: true,
    trim: true,
  },
  compShortName:{
    type: String,
    required: true,
    trim: true,
  },
  ///FIO:{
  ///  type: String,
  //  required: true,
  //  trim: true,
  //},
  INN:{
    type: String,
    required: true,
    trim: true,
  },
  KPP:{
    type: String,
    required: true,
    trim: true,
  },
  OGRN:{
    type: String,
    required: true,
    trim: true,
  },
  OKPO:{
    type: String,
    required: true,
    trim: true,
  },
  GosRegDate:{
    type: String,
    required: true,
    trim: true
  },
  YurAdress:{
    type: String,
    required: true,
    trim: true
  },
  FactAdress:{
    type: String,
    required: true,
    trim: true,
  },
  GenDirector:{
    type: String,
    required: true,
    trim: true
  },
  Buhgalter:{
    type: String,
    required: true,
    trim: true,
  },
  tel:{
    type: String,
    required: true,
    trim: true
  },
  bankName:{
    type: String,
    required: true,
    trim: true
  },
  BIK:{
    type: String,
    required: true,
    trim: true
  },
  RS:{
    type: String,
    required: true,
    trim: true
  },
  KS:{
    type: String,
    required: true,
    trim: true
  },
  //signature:{
  //  type: String,
  //  required: true,
  //  trim: true
  //}
  //data:{
  //  type: [],
  //  required: true
  //},
  //timestamps: true
});
const Agents = mongoose.model('Agents', ownersSchema);
module.exports = Agents;
