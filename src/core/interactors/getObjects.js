module.exports = (_objectsData, _objectsRepository) => {
  console.log("core interactor : ", _objectsData);
  return _objectsRepository.readOne(_objectsData);
}


