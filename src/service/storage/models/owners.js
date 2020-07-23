const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ownersSchema = new Schema({

  // common
  id:{ type: String },
  version:{ type: Number},
  type:{type: String},
  name: {type: String},

  // type YL
  compFullName:{type: String,trim: true},
  compShortName:{type: String,trim: true},
  INN:{type: String,trim: true},
  KPP:{type: String,trim: true},
  OGRN:{type: String,trim: true},
  OKPO:{type: String,trim: true},
  GosRegDate:{type: String,trim: true},
  YurAdress:{type: String,trim: true},
  FactAdress:{type: String,trim: true},
  GenDirector:{type: String,trim: true},
  Buhgalter:{type: String,trim: true},
  tel:{type: String,trim: true},
  bankName:{type: String,trim: true},
  BIK:{type: String,trim: true},
  RS:{type: String,trim: true},
  KS:{type: String,trim: true},
  signature:{type: String,trim: true},

  // type IP
  FullName:{type: String,trim: true},
  ShortName:{type: String,trim: true},
  FIO:{type: String,trim: true},
  INN:{type: String,trim: true},
  OGRNIP:{type: String,trim: true},
  OGRNIPDate:{type: String,trim: true},

 // type FL
  NameInformal:{type: String,trim: true},
  lastName:{type: String,trim: true},
  firstName:{type: String,trim: true},
  midName:{type: String,trim: true},
  docType:{type: String,trim: true},
  Serial:{type: String,trim: true},
  number:{type: String,trim: true},
  whoGave:{type: String,trim: true},
  whenGave:{type: String,trim: true},
  codeGave:{type: String,trim: true},
  addressGave:{type: String,trim: true},
//  codeGave:{type: String,trim: true},
//  codeGave:{type: String,trim: true},
//  codeGave:{type: String,trim: true},
  //data:{
  //  type: [],
  //  required: true
  //},
  //timestamps: true
});
const Owners = mongoose.model('Owners', ownersSchema);
module.exports = Owners;
