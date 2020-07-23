
//  imports ----------------------------------------------------------
    const mongoose = require('mongoose');
    mongoose.set('useFindAndModify', false);

//  models -----------------------------------------------------------
    const Owners = require('../../models/owners');
    const models = {
     '/owners': Owners,
    };

//  functions --------------------------------------------------------
    const create = async (_ownersEntity) => {
      console.log("ON OWNER CREATE IN MONGOOSE"+
        JSON.stringify(_ownersEntity)
      );
      let response = await
      Owners.create(_ownersEntity);
      return response 
        || {stubName : "ownersMongooseCreateStub"};
    };
    const readOne = async (_ownersId) => {
      const modelName = _ownersId.route;
      console.log("modelName in inMongoose: ", modelName);
      console.log("MODEL in inMongoose: ", models[modelName]);

      //let response = await models.modelName.find({},{_id:0,__v:0});
      let response = async(model) => ({
        '/owners': await Owners.find({},{_id:0,__v:0})
      });
      return response(modelName)
        || { stubName : "ownersMongooseReadOneStub"};
    };
    const readAll = () => "routenameMongooseReadAllStub";
    const update = async (_ownersEntity) => {
      console.log("inMOngose ONPUDATE OwnerENTITY: ", _ownersEntity);
      let response = //await Owners.create(_ownersEntity);
        await Owners.findOneAndUpdate(
          { name: _ownersEntity.name },
          { $set: {..._ownersEntity }},
          {new: true}
        )
      //let response = await Owners.find({});
      return response
        || {stubName: "ownersMongooseUpdateStub"};
    }
    const delet = async( _ownersId) => {
      console.log(`delete id in mongoose delete method: `, _ownersId);
      let response = await Owners.deleteOne({id:_ownersId});
      return response
      || "ownersMongooseDeleteStub";
    };

//  exports ----------------------------------------------------------
    module.exports = {
      create,
      readOne,
      readAll,
      update,
      delet
    }
