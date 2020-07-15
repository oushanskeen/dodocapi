module.exports = (_objectsRepository) => {
  return {
    create: entity => _objectsRepository.create(entity),
    readOne: id => _objectsRepository.readOne(id),
    readAll: () => _objectsRepository.readAll(),
    update: (entity) => _objectsRepository.update(entity),
    delet: (id) => _objectsRepository.delet(id)
  }
}
