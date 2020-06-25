const getOwners = 
  require('../../core/interactors/owners');
//const postRoutename = 
//  require('../../core/interactors/postRoutename');
//const putRoutename = 
//  require('../../core/interactors/putRoutename');
//const deleteRoutename = 
//  require('../../core/interactors/deleteRoutename');

const ownersRepositoryMongoose = 
  require('../storage/repositories/owners/inMongoose');
const makeOwnersRepository = 
  require('../../core/repositories/owners');
const ownersRepository = 
  makeOwnersRepository(ownersRepositoryMongoose);

const getOwnersHandler = async (req, res) => {
  const ownersId = req.body.id || 0;
  console.log("ownersId: ", ownersId);
  console.log("getOwners", getOwners);
  const getOwnersData = await getOwners 
    (ownersId, ownersRepository);
  console.log('getOwnersData :', getOwnersData);
  console.log("ownersRepository :", ownersRepository);
  res.json(
    getOwnersData
  //  ||
  //  {message: "Hello from getRoutenameHandler"}
  )
} 
const postOwnersHandler = async (req, res) => {
  res.json({message: "Hello from postRoutenameHandler"})
} 
const putRoutenameHandler = async (req, res) => {
  res.json({message: "Hello from putRoutenameHandler"})
} 
const deleteRoutenameHandler = async (req, res) => {
  res.json({message: "Hello from deleteRoutenameHandler"})
} 

module.exports = {
  getOwnersHandler,
  postOwnersHandler,
 // postRoutenameHandler,
 // putRoutenameHandler,
 // deleteRoutenameHandler,
}
