
const ownersController = (
  require('../../service/controllers/owners')
);

module.exports.get = (app) => {
  app.get(
    '/owners', 
    ownersController.getOwnersHandler
  )
}
module.exports.post = (app) => {
  app.post(
    '/owners', 
    ownersController.postOwnersHandler
  )
}
module.exports.put = (app) => {
  app.put(
    '/owners', 
    ownersController.putOwnersHandler
  )
}
module.exports.delete = (app) => {
  app.delete(
    '/owners', 
    ownersController.deleteOwnersHandler
  )
}
