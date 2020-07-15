const getObjects = 
  require('../../core/interactors/getObjects');
const postObjects = 
  require('../../core/interactors/postObjects');
const putObjects = 
  require('../../core/interactors/putObjects');
const deleteObjects = 
  require('../../core/interactors/deleteObjects');

const objectsRepositoryMongoose = 
  require('../storage/repositories/objects/inMongoose');
const makeObjectsRepository =
  require('../../core/repositories/objects');
const objectsRepository = 
  makeObjectsRepository(objectsRepositoryMongoose);

const getObjectsHandler = async (req, res) => {
  //console.log("getAgentsHandler request: ", req);
  //console.log("getAgentsHandler request: ", req.route.path);
  const objectId = 
    {
      id: req.body.id,
      route: req.route.path
    }
    || 
    {
      id: 668,
      route: req.route.path
    };
  const getObjectsData = 
    await getObjects(objectId, objectsRepository, 'object');
  console.log('controllers/agents.getAgentsData: ', getObjectsData);
  //res.send("hello from objects controller");
  
  try {
    res.status(200).json(
      getObjectsData[req.route.path]
      || {stubName: "getObjectsHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
  
} 

const postObjectsHandler = async (req, res) => {
  console.log("request body in post verb from: ", req.body);
  const objectsEntity = 
    req.body 
    || {stubName:"objectEntityFromPostOwnerHandlerStub"};
  const objectsData = 
    await postObjects(objectsEntity, objectsRepository)
  try {
    res.status(200).json(
      objectsData 
      || {stubName: "postObjectssDataFromObjectsHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 

const putObjectsHandler = async (req, res) => {
  console.log("putObjectsHandler req.body", req.body);
  const newVersionValue = Date.now();
  const objectsEntity = {...req.body, }
  const putObjectsData = 
    await putObjects(objectsEntity, objectsRepository);
  try {
    res.status(200).json(
      putObjectsData
      || {message: "Hello from putObjectsHandler"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 

const deleteObjectsHandler = async (req, res) => {
  //console.log("req.body.id: ", req.body.id);
  console.log("req.body in deleteObjectssHandler: ", req.body);

 // console.log("req: ", req);
  const objectsId = req.body.id || 0;
  console.log("objectsId for delete: ", objectsId);
  const deleteObjectsData = await deleteObjects(
    objectsId, objectsRepository); 
  try {
    res.status(200).json(
      {message: objectsId}
      || {message: "seem have to show your the delete stub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 

module.exports = {
  getObjectsHandler,
  postObjectsHandler,
  putObjectsHandler,
  deleteObjectsHandler,
}
