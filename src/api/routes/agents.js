//const dicsController = (
//  require('../../service/controllers/dics')
//);
const agentsController = (
  require('../../service/controllers/agents')
);

module.exports = (app) => {
  app.get('/agents', agentsController.getAgentsHandler);
  app.post('/agents', agentsController.postAgentsHandler);
  app.put('/agents', agentsController.putAgentsHandler);
  app.delete('/agents', agentsController.deleteAgentsHandler);
}
