/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./configureStore.dev');
} else {
  module.exports = require('./configureStore.prod');
}
/* eslint-enable global-require */
