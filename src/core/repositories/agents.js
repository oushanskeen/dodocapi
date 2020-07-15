module.exports = (_agentsRepository) => {
  return {
    create: entity => _agentsRepository.create(entity),
    readOne: id => _agentsRepository.readOne(id),
    readAll: () => _agentsRepository.readAll(),
    update: (entity) => _agentsRepository.update(entity),
    delet: (id) => _agentsRepository.delet(id)
  }
}
