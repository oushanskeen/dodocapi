module.exports = (_routenameId, _routenameRepository) => {
  return _routenameRepository.readOne(_routenameId);
}
