const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const UsersServices = require('../services/users.services')
const AuthServices = require('../services/auth.services')
const CarServices = require('../services/car.services')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UsersServices.getUser(email)
    if (!user) {
      return next({
        status: 400,
        name: "Invalid email",
        message: "user not exist",
      });
    }

    if (!user.validUser) {
      return next({
        status: 400,
        name: "email is not verified",
        message: "User needs verified his/her email",
      });
    }

    // comparar las contraseñas
    const validPassword = await AuthServices.compare(password, user.password);

    if (!validPassword) {
      return next({
        status: 400,
        name: "Invalid password",
        message: "The password does not match with user email",
      });
    }
       const { id, username } = user;

    // Genear token
    const userData = { id, username, email };
    const token = AuthServices.genToken(userData)
    // agregar el token en userData
    userData.token = token;
    //creo el carrito del usuario
    const car = await CarServices.getCar(id)
    userData.carId = car[0].id;
    res.json(userData);

  } catch (error) {
    next(error);
  }
};

const validateEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    console.log("token: ",token)

    const decoded = AuthServices.verifyToken(token);

    if (!decoded) {
      next({
        status: 400,
        name: "Error de verificación",
        message: "Algo sucedio con la verificació, solicite nuevamente",
      });
    }

    await Users.update(
      { validUser: true },
      {
        where: { email: decoded.email },
      }
    );

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  validateEmail,
};