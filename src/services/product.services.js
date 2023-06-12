const Product = require('../models/product.model');
const ProductInCar = require('../models/productInCar.model');
const Users = require('../models/users.model');
const { Op } = require("sequelize");

class ProductServices {

    static async createProduct(newProduct) {
        try {
            const { name, description, price, availableQty, userId, productImage } = newProduct;
            const productCreated = Product.create({
                name,
                description,
                price,
                availableQty,
                userId,
                productImage
            })
            return productCreated
        } catch (error) {
            throw error
        }
    }

    static async updateProduct(id,newProduct) {
        try {
            const { description } = newProduct;
            const productUpdated = Product.update({ description }, {
                where: { id }
            })
            return productUpdated
        } catch (error) {
            throw error
        }
    }

    static async getProduct(id) {
        try {
            const product = Product.findOne({
                where: { id }
            })
            return product
        } catch (error) {
            throw error
        }
    }

    static async createProductInCar(newProductInCar) {
        try {
            const { productId, carId, quantity, price } = newProductInCar;
            //
            const productInCarCreated = ProductInCar.findOrCreate({
                where: { productId }, 
                defaults: { carId, quantity, price },
                update: {quantity, price}
            })
            return productInCarCreated
        } catch (error) {
            throw error
        }
    }

    static async getAllProducts() {
        try {
            const allProducts = Product.findAll({
                attributes: [ 'id', 'name', 'description', 'price', 'availableQty'],
                include: {
                    model: Users,
                    attributes: [ 'username']
                },
                where: {
                    availableQty: {
                        [ Op.gt ]: 0,
                 },
                }
            })
            return allProducts
        } catch (error) {
            throw error
        }
    }

}
module.exports = ProductServices;