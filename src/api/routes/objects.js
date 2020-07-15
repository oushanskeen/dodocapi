const objectsController = (
  require('../../service/controllers/objects')
);

module.exports = (app) => {
  app.get('/objects', objectsController.getObjectsHandler);
  app.post('/objects', objectsController.postObjectsHandler);
  app.put('/objects', objectsController.putObjectsHandler);
  app.delete('/objects', objectsController.deleteObjectsHandler);
}
