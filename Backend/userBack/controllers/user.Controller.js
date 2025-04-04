const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/createToken');

const login = async (req, res) => {
  const response = await userSchema.findOne({ email: req.body.email });

  if (!response) {
    return res.send({ message: 'User Not Found!', success: false });
  }

  var isMatched = await bcrypt.compare(req.body.password, response.password);

  if (!isMatched) {
    return res.send({ message: 'Invalid Password!', success: false });
  }
  console.log(req);

  var token = createToken(response._id);

  console.log(token, '...token');

  res.send({ message: 'Login Successfull', token, user: response,  success: true });
};

const signup = async (req, res) => {
  let response = await userSchema.findOne({ email: req.body.email });

  if (response) {
    return res.send({ message: 'User already exists', success: false });
  } else {
    var encryptedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = encryptedPassword;

    response = await userSchema.create(req.body);

    if (response) {
      res.send({ message: 'Post Successfull', success: true });
    }
  }
};

const allUsers = async (req, res) => {
  const response = await userSchema.find();
  res.send(response);
};


module.exports = { login, signup, allUsers };
