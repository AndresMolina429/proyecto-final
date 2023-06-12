const { check } = require("express-validator");
const validateResults = require("../utils/validate");

const createProductValidator = [
  check("name", "Error en el nombre del producto")
    .exists()
    .withMessage("Debe enviarse el nombre del producto")
    .notEmpty()
    .withMessage("Debe enviarse el nombre del producto")
    .isString()
    .withMessage("La el nombre debe ser un texto")
    .isLength({ min: 4, max: 50 })
    .withMessage(
      "El nombre del producto debe ser min de 4 caracteres y max de 50"
    ),
  check("description", "errores en la descripción")
    .exists()
    .withMessage("No se esta enviando la descripción del producto")
    .notEmpty()
    .withMessage("La descripción no puede esta vacia")
    .isString()
    .withMessage("La descripción debe ser un texto")
    .isLength({ min: 10 })
    .withMessage("La descripción debe tener minimo 10 caracteres"),
  check("price", "errores en el precio del producto ")
    .exists()
    .withMessage("Debe enviarse el precio del producto")
    .notEmpty()
    .withMessage("La descripción no puede esta vacia")
    .isNumeric()
    .withMessage("El precio debe ser numérico"),
  check("availableQty", "Error en la cantidad del producto")
    .exists()
    .withMessage("No se esta enviando la cantidad de stock del producto")
    .notEmpty()
    .withMessage("La cantidad no puede esta vacia"),
  check("user_id", "Error en el usuario")
    .exists()
    .withMessage("No se esta enviando el usuario")
    .notEmpty()
    .withMessage("El usuario no puede esta vacio")
  ,validateResults,
];

module.exports = {
  createProductValidator,
};
