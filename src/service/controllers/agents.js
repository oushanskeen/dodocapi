const getAgents = 
  require('../../core/interactors/getAgents');
const postAgents = 
  require('../../core/interactors/postAgents');
const putAgents = 
  require('../../core/interactors/putAgents');
const deleteAgents = 
  require('../../core/interactors/deleteAgents');

const agentsRepositoryMongoose = 
  require('../storage/repositories/agents/inMongoose');
const makeAgentsRepository = 
  require('../../core/repositories/agents');
const agentsRepository = 
  makeAgentsRepository(agentsRepositoryMongoose);

const getAgentsHandler = async (req, res) => {
  //console.log("getAgentsHandler request: ", req);
  //console.log("getAgentsHandler request: ", req.route.path);
  const agentsId = 
    {
      id: req.body.id,
      route: req.route.path
    }
    || 
    {
      id: 668,
      route: req.route.path
    };
  const getAgentsData = 
    await getAgents(agentsId, agentsRepository, 'agent');
  console.log('controllers/agents.getAgentsData: ', getAgentsData);
  try {
    res.status(200).json(
      getAgentsData[req.route.path]
      || {stubName: "getOwnersHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 
const postAgentsHandler = async (req, res) => {
  console.log("request body in post verb from: ", req.body);
  const agentsEntity = 
    req.body 
  //  || {stubName:"ownerEntityFromPostOwnerHandlerStub"};
  const postAgentsData = 
    await postAgents(agentsEntity, agentsRepository)
  try {
    res.status(200).json(
      postAgentsData 
  //    || {stubName: "postOwnersDataFromOwnerHandlerStub"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const putAgentsHandler = async (req, res) => {
  console.log("putAgentsHandler req.body", req.body);
  const newVersionValue = Date.now();
  const agentsEntity = {...req.body, }
  const putAgentsData = 
    await putAgents(agentsEntity, agentsRepository);
  try {
    res.status(200).json(
      putAgentsData
      || {message: "Hello from putAgentsHandler"}
    )
  } catch (err) {
    res.status(500).send(err)
  }
} 
const deleteAgentsHandler = async (req, res) => {
  //console.log("req.body.id: ", req.body.id);
  console.log("req.body in deleteAgentsHandler: ", req.body);

 // console.log("req: ", req);
  const agentsId = req.body.id || 0;
  console.log("agentsId for delete: ", agentsId);
  const deleteAgentsData = await deleteAgents(
    agentsId, agentsRepository); 
  try {
    res.status(200).json(
      {message: agentsId}
      || {message: "seem have to show your the delete stub"}
    )
  } catch (err) {
    res.status(500).send(err);
  }
} 

module.exports = {
  getAgentsHandler,
  postAgentsHandler,
  putAgentsHandler,
  deleteAgentsHandler,
}
