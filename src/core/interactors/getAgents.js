module.exports = (_agentsData, _agentsRepository) => {
  console.log("core interactor : ", _agentsData);
  return _agentsRepository.readOne(_agentsData);

}


