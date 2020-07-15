
//  imports ----------------------------------------------------------
    const mongoose = require('mongoose');
    mongoose.set('useFindAndModify', false);

//  models -----------------------------------------------------------
    const Dogovors = require('../../models/dogovors');

//  functions --------------------------------------------------------
    const create = async (_entity) => {
      let response = await
      Dogovors.create(_entity);
      return response 
        || {stubName : "dogovorsMongooseCreateStub"};
    };
    const readOne = async (_id) => {
      //const modelName = _ownersId.route;
      //console.log("modelName in inMongoose: ", modelName);
      //console.log("MODEL in inMongoose: ", models[modelName]);

      //let response = await models.modelName.find({},{_id:0,__v:0});
      let response = 
        //async(model) => ({
      //  '/dogovors': 
        await Dogovors.find({},{_id:0,__v:0})
      //}
      //);
      console.log("getDOgovorRequest response: ", response);
      return response //(modelName)
        || { stubName : "dogovorsMongooseReadOneStub"};
    };
    const readAll = () => "routenameMongooseReadAllStub";
    const update = async (_entity) => {
      let response = //await Owners.create(_ownersEntity);
        await Dogovors.findOneAndUpdate(
          { name: _entity.name },
          { $set: {..._entity }},
          {new: true}
        )
      //let response = await Owners.find({});
      return response
        || {stubName: "ownersMongooseUpdateStub"};
    }
    const delet = async( _id) => {
      console.log(`delete id in mongoose delete method: `, _id);
      let response = await Dogovors.deleteOne({id:_id});
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
