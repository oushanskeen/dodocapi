
//  imports ----------------------------------------------------------
    const mongoose = require('mongoose');

//  models -----------------------------------------------------------
    const Owners = require('../../models/owners');

//  functions --------------------------------------------------------
    const create = _routenameEntity => "routenameMongooseCreateStub"
    const readOne = async (_ownersId) => {
      let response = await Owners.find();
      return response || "ownersMongooseReadOneStub";
    };
    console.log('Mongoose inside', readOne());
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
