const jwt = require('jsonwebtoken');

const createToken = (userId) => {
  var token = jwt.sign({ userId: userId }, process.env.SECRET_TOKEN_KEY, {
    expiresIn: '7d',
  });

  return token;
};




module.exports = {createToken}