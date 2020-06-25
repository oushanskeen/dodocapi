
//  imports ----------------------------------------------------------
    const mongoose = require('mongoose');

//  models -----------------------------------------------------------
//    import or declare ?
//  const RoutenameModel = mongoose.model('Routename', )
    const OwnersModel = require('../../models/owners');

//  functions --------------------------------------------------------
    const create = _routenameEntity => "routenameMongooseCreateStub"
    const readOne = async (_ownersId) => {
      let response = await OwnersModel.find({"id":_ownersId});
      return response[0].data || "ownersMongooseReadOneStub";
    };
    const readAll = () => "routenameMongooseReadAllStub";
    const update = _routenameEntity => "routenameMongooseUpdateStub";
    const delet = _routenameId => "routenameMongooseDeleteStub";

//  exports ----------------------------------------------------------
    module.exports = {
      create,
      readOne,
      readAll,
      update,
      delet
    }
