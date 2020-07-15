
//  imports ----------------------------------------------------------
    const mongoose = require('mongoose');
    mongoose.set('useFindAndModify', false);

//  models -----------------------------------------------------------
    const Objects = require('../../models/objects');

//  functions --------------------------------------------------------
    const create = async (_entity) => {
      let response = await
      Objects.create(_entity);
      return response 
        || {stubName : "objectsMongooseCreateStub"};
    };
    const readOne = async (_id) => {
      const modelName = _id.route;
     // console.log("modelName in inMongoose: ", modelName);
     // console.log("MODEL in inMongoose: ", models[modelName]);

      //let response = await models.modelName.find({},{_id:0,__v:0});
      let response = async(model) => ({
        '/objects': await Objects.find({},{_id:0,__v:0})
      });
      return response(modelName)
        || { stubName : "objectsMongooseReadOneStub"};
    };
    const readAll = () => "routenameMongooseReadAllStub";
    const update = async (_entity) => {
      let response = //await Owners.create(_ownersEntity);
        await Objects.findOneAndUpdate(
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
      let response = await Objects.deleteOne({id:_id});
      return response
      || "objectsMongooseDeleteStub";
    };

//  exports ----------------------------------------------------------
    module.exports = {
      create,
      readOne,
      readAll,
      update,
      delet
    }
