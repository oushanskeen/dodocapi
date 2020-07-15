const getOwners = 
  require('../../core/interactors/getOwners');
const getDics = 
  require('../../core/interactors/getDics');
const postOwners = 
  require('../../core/interactors/postOwners');
const postDics = 
  require('../../core/interactors/postDics');
const putOwners = 
  require('../../core/interactors/putOwners');
const deleteOwners = 
  require('../../core/interactors/deleteOwners');

const ownersRepositoryMongoose = 
  require('../storage/repositories/owners/inMongoose');
const dicRepositoryMongoose = 
  require('../storage/repositories/dics/inMongoose');
const makeOwnersRepository = 
  require('../../core/repositories/owners');
const makeDicRepository = 
  require('../../core/repositories/dics');
const ownersRepository = 
  makeOwnersRepository(ownersRepositoryMongoose);
const dicRepository = 
  makeDicRepository(dicRepositoryMongoose);

const getDicHandler = async (req, res) => {
  console.log("getOwnersHandler request: ", req);
  console.log("getOwnersHandler request: ", req.route.path);
  const dicId = 
    {
      id: req.body.id,
      route: req.route.path
    }
    || 
    {
      id: 668,
      route: req.route.path
    };
  //const getOwnersData = 
  //  await getOwners(ownersId, ownersRepository, 'owner');
  const getDicData = 
    await getDics(dicId, dicRepository);
  try {
    res.status(200).json(
      getDicData[req.route.path][0]
  //    || {stubName: "getOwnersHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 
const postDicHandler = async (req, res) => {
  console.log("request body in post verb from: ", req.body);
  const dicEntity = 
    req.body 
  //  || {stubName:"ownerEntityFromPostOwnerHandlerStub"};
  const postDicData = 
    await postDics(dicEntity, dicRepository)
  try {
    res.status(200).json(
      postDicData 
  //    || {stubName: "postOwnersDataFromOwnerHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const putDicHandler = async (req, res) => {
  console.log("putOwnersHandler req.body", req.body);
  const newVersionValue = Date.now();
  const ownersEntity = {
    ...req.body, 
  }
  const putOwnersData = 
    await putOwners(ownersEntity, ownersRepository);
  try {
    res.status(200).json(
      putOwnersData
      || {message: "Hello from putOwnersHandler"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const deleteDicHandler = async (req, res) => {
  //console.log("req.body.id: ", req.body.id);
  console.log("req.body in deleteOwnersHandler: ", req.body);
 // console.log("req: ", req);
  const ownersId = req.body.id || 0;
  console.log("ownerId for delete: ", ownersId);
  const deleteOwnersData = await deleteOwners(
    ownersId, ownersRepository); 
  try {
    res.status(200).json(
      {message: `owner with Id ${ownersId} is away.`}
      || {message: "seem have to show your the delete stub"}
    )
  } catch (err) {
    res.statu(500).send(err);
  }
} 

module.exports = {
  getDicHandler,
  postDicHandler,
  putDicHandler,
  deleteDicHandler,
}
