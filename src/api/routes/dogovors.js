const dogovorsController = (
  require('../../service/controllers/dogovors')
);

module.exports = (app) => {
  app.get('/dogovors', dogovorsController.getDogovorsHandler);
  app.post('/dogovors', dogovorsController.postDogovorsHandler);
  app.put('/dogovors', dogovorsController.putDogovorsHandler);
  app.delete('/dogovors', dogovorsController.deleteDogovorsHandler);
}
