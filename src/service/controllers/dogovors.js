const getDogovors = 
  require('../../core/interactors/getDogovors');
const postDogovors = 
  require('../../core/interactors/postDogovors');
const putDogovors = 
  require('../../core/interactors/putDogovors');
const deleteDogovors = 
  require('../../core/interactors/deleteDogovors');

const dogovorsRepositoryMongoose = 
  require('../storage/repositories/dogovors/inMongoose');
const makeDogovorsRepository = 
  require('../../core/repositories/dogovors');
const dogovorsRepository = 
  makeDogovorsRepository(dogovorsRepositoryMongoose);

const getDogovorsHandler = async (req, res) => {
  console.log("getDogovorsHandler request: ", req);
  console.log("getDogovorsHandler request: ", req.route.path);
  const dogovorsId = 
    {
      id: req.body.id,
      route: req.route.path
    }
    || 
    {
      id: 668,
      route: req.route.path
    };
  const getDogovorsData = 
    await getDogovors(dogovorsId, dogovorsRepository, 'dogovor');
  console.log("dogovor controllers getReqHandler : ", getDogovorsData);
  try {
    res.status(200).json(
      getDogovorsData
      //[req.route.path]
      || {stubName: "getDogovorsHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 
const postDogovorsHandler = async (req, res) => {
  console.log("request body in post verb from: ", req.body);
  const dogovorsEntity = 
    req.body 
  //  || {stubName:"ownerEntityFromPostOwnerHandlerStub"};
  const postDogovorsData = 
    await postDogovors(dogovorsEntity, dogovorsRepository)
  try {
    res.status(200).json(
      postDogovorsData 
  //    || {stubName: "postOwnersDataFromOwnerHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const putDogovorsHandler = async (req, res) => {
  console.log("putDogovorsHandler req.body", req.body);
  const newVersionValue = Date.now();
  const dogovorsEntity = {
    ...req.body, 
  }
  const putDogovorsData = 
    await putDogovors(dogovorsEntity, dogovorsRepository);
  try {
    res.status(200).json(
      putDogovorsData
      || {message: "Hello from putDogovorsHandler"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const deleteDogovorsHandler = async (req, res) => {
  //console.log("req.body.id: ", req.body.id);
  console.log("req.body in deleteDogovorsHandler: ", req.body);
 // console.log("req: ", req);
  const dogovorsId = req.body.id || 0;
  console.log("dogovorsId for delete: ", dogovorsId);
  const deleteDogovorsData = await deleteDogovors(
    dogovorsId, dogovorsRepository); 
  try {
    res.status(200).json(
      {message: dogovorsId}
      || {message: "seem have to show your the delete stub"}
    )
  } catch (err) {
    res.statu(500).send(err);
  }
} 

module.exports = {
  getDogovorsHandler,
  postDogovorsHandler,
  putDogovorsHandler,
  deleteDogovorsHandler,
}
