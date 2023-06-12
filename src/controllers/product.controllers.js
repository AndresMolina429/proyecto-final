const ProductServices = require('../services/product.services')
const CarServices = require('../services/car.services')


const createProduct = async (req, res, next) => {
  try {
    const newProduct = req.body
    await ProductServices.createProduct(newProduct)
    res.status(201).send();
  } catch (error) {
    console.log(error)
    next({
      status: 400,
      name: "Invalid Create Product",
      message: "Error en la creación del producto"
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    await ProductServices.updateProduct(id, updateData )
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const createProductInCar = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body
    const userId = req.user.id
    const car = await CarServices.getCar(userId)
    const carId = car[0].id
    const product = await ProductServices.getProduct(productId)
    const { price } = product;
    const priceProduct = price * quantity
    const newProductInCar = {
      carId,
      productId,
      quantity,
      price: priceProduct
    }
    //*! falta actualozar si el producto ya existe
    const productInCar = await ProductServices.createProductInCar(newProductInCar)
    console.log(productInCar)
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};


const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await ProductServices.getAllProduct()
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error)
    next({
      status: 400,
      name: "Invalid Create Product",
      message: "Error en la creación del producto"
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  createProductInCar,
  getAllProducts
};
