// import Raven from 'raven-js';
function init() {
  // Raven.config("API KEY HERE", {
  //   release: '1-0-0',
  //   environment: 'development-test'
  // }).install();
}

function log(err) {
  console.error(err);

  // Raven.captureException(error);
}

export default {
  init,
  log
};
