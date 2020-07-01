const ownersController = (
  require('../../service/controllers/owners')
);

module.exports = (app) => {
  app.get('/owners', ownersController.getOwnersHandler);
  app.post('/owners', ownersController.postOwnersHandler);
  app.put('/owners', ownersController.putOwnersHandler);
  app.delete('/owners', ownersController.deleteOwnersHandler);
}
