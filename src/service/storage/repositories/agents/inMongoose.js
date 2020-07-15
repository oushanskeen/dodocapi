
//  imports ----------------------------------------------------------
    const mongoose = require('mongoose');
    mongoose.set('useFindAndModify', false);

//  models -----------------------------------------------------------
    const Agents = require('../../models/agents');

//  functions --------------------------------------------------------
    const create = async (_entity) => {
      let response = await Agents.create(_entity);
      return response 
        || {stubName : "agentsMongooseCreateStub"};
    };
    const readOne = async (_id) => {
      const modelName = _id.route;
      //let response = await models.modelName.find({},{_id:0,__v:0});
      let response = async(model) => ({
   //     '/owners': await Owners.find({},{_id:0,__v:0}),
        '/agents': await Agents.find({},{_id:0,__v:0}),
      });
      //const response = await Agents.find({}, {_id:0, __v:0});
      console.log("reposnse on get request in agnets controller: ",
        response(modelName)
      );
      return response(modelName)
        || { stubName : "ownersMongooseReadOneStub"};
    };
    const readAll = () => "routenameMongooseReadAllStub";
    const update = async (_entity) => {
      let response = //await Agents.create(_entity);
        await Agents.findOneAndUpdate(
          { name: _entity.name },
          { $set: {..._entity }},
          {new: true}
      );
      //let response = await Owners.find({});
      return response
        || {stubName: "ownersMongooseUpdateStub"};
    }
    const delet = async( _id) => {
      //console.log(`delete id in mongoose delete method: `, _ownersId);
      let response = await Agents.deleteOne({id:_id});
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
