module.exports = (_dicsRepository) => {
  return {
    create: entity => _dicsRepository.create(entity),
    readOne: id => _dicsRepository.readOne(id),
    readAll: () => _dicsRepository.readAll(),
    update: (entity) => _dicsRepository.update(entity),
    delet: (id) => _dicsRepository.delet(id)
  }
}
