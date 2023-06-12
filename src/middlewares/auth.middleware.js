// * jwt
const jwt = require("jsonwebtoken");
const AuthServices = require('../services/auth.services');

const authenticate = (req, res, next) => {
  try {
    const token = req.headers["access-token"];

    if (!token) {
      return next({
        status: 401,
        name: "no token",
        message: "Token is not present on request headers",
      });
    }

    const decoded = AuthServices.verifyToken(token)

    req.user = decoded;
    next();
  } catch (error) {
    next({
      status: 498,
      name: "invalid or expired token",
      message: error,
    });
  }
};

module.exports = authenticate;
