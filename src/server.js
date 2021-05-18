function getServerUrl() {
  if (process.env.REACT_APP_DEV_MODE) {
    return 'http://localhost:5000/';
  }
  return 'https://hidden-mesa-04199.herokuapp.com/';
}

module.exports = { getServerUrl };
