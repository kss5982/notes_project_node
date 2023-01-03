// info will print all normal log messages
const info = (...params) => {
  console.log(...params);
};

// error will print for all error messages
const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  error,
};
