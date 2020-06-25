module.exports = (_ownersRepository) => {
  return {
    create: entity => _ownersRepository.create(entity),
    readOne: id => _ownersRepository.readOne(id),
    readAll: () => _ownersRepository.readAll(),
    update: (entity) => _ownersRepository.update(entity),
    delet: (id) => _ownersRepository.delet(id)
  }
}
