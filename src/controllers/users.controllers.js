const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendWelcomeMail } = require("../utils/sendMails");
require("dotenv").config();
const UsersServices = require('../services/users.services')
const AuthServices = require('../services/auth.services')

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashed = await AuthServices.hashedPassword(password)

    await UsersServices.createUsers(username, email, hashed)
    res.status(201).send();
    const verifyToken = AuthServices.genToken({username, email})
    sendWelcomeMail(email, { username, verifyToken });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, avatar } = req.body;
    console.log(username, avatar)
    await UsersServices.updateUser(id, { username, avatar })
    res.status(204).send();
  } catch (error) {
    response.status(404).json(error);
  }
};


module.exports = {
  createUser,
  updateUser
};

// alguien esta editando
