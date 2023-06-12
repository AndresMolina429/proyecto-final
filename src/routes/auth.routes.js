const { Router } = require("express");
const { login, validateEmail } = require("../controllers/auth.controllers");
const { loginUserValidator } = require("../validators/user.validators");

const router = Router();
router.post("/auth/login", loginUserValidator, login);
router.get("/auth/email-validate", validateEmail);

module.exports = router;