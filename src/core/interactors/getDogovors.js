module.exports = (_ownersData, _ownersRepository) => {
  console.log("core interactor : ", _ownersData);
  return _ownersRepository.readOne(_ownersData);
}


