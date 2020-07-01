const getOwners = 
  require('../../core/interactors/getOwners');
const postOwners = 
  require('../../core/interactors/postOwners');
const putOwners = 
  require('../../core/interactors/putOwners');
const deleteOwners = 
  require('../../core/interactors/deleteOwners');

const ownersRepositoryMongoose = 
  require('../storage/repositories/owners/inMongoose');
const makeOwnersRepository = 
  require('../../core/repositories/owners');
const ownersRepository = 
  makeOwnersRepository(ownersRepositoryMongoose);

const getOwnersHandler = async (req, res) => {
  const ownersId = req.body.id || 668;
  const getOwnersData = 
    await getOwners(ownersId, ownersRepository);
  try {
    res.status(200).json(
      getOwnersData
  //    || {stubName: "getOwnersHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 
const postOwnersHandler = async (req, res) => {
  console.log("request body in post verb from: ", req.body);
  const ownersEntity = 
    req.body 
  //  || {stubName:"ownerEntityFromPostOwnerHandlerStub"};
  const postOwnersData = 
    await postOwners(ownersEntity, ownersRepository)
  try {
    res.status(200).json(
      postOwnersData 
  //    || {stubName: "postOwnersDataFromOwnerHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const putOwnersHandler = async (req, res) => {
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
const deleteOwnersHandler = async (req, res) => {
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
  getOwnersHandler,
  postOwnersHandler,
  putOwnersHandler,
  deleteOwnersHandler,
}
