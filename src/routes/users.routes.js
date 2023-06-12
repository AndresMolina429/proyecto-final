// Router de express
const { Router } = require("express");
const { createUser, updateUser } = require("../controllers/users.controllers");
const { createUserValidator } = require("../validators/user.validators");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", createUserValidator, createUser);
router.put("/users/:id", authenticate, updateUser);

module.exports = router;
