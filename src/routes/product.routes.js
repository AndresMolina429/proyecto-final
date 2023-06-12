const { Router } = require("express");
const { createProduct, updateProduct, createProductInCar } = require("../controllers/product.controllers");
const authenticate = require("../middlewares/auth.middleware");
const { createProductValidator } = require("../validators/product.validators");

const router = Router();

// TODO proteger esta ruta

router.post("/product", authenticate, createProductValidator, createProduct);
router.put("/product/:id",authenticate, updateProduct);
router.post("/product/incar", authenticate, createProductInCar );

module.exports = router;
