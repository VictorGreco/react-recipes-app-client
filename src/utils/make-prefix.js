function makePrefix(prefix) {
  return function getTestId(dataTestId) {
    return `${prefix}-${dataTestId}`;
  };
}

export default makePrefix;
