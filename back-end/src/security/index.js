const jwt = require('jsonwebtoken');
const securityConfig = require('./configs.security');

const generateToken = (id) => {
  const payload = {
    iss: 'trybeer-api',
    aud: 'trybeer-api',
    sub: id,
  };

  return jwt.sign(payload, securityConfig.jwt.secret, securityConfig.jwt.options);
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, securityConfig.jwt.secret);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  generateToken,
  verifyToken,
};