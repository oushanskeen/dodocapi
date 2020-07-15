module.exports = (_dicData, _dicRepository) => {
  console.log("core interactor : ", _dicData);
  console.log("_dicRepository: ", _dicRepository);
  return _dicRepository.readOne(_dicData);
}


