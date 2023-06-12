const Car = require('../models/car.model');

class CarServices {

    static async getCar(userId) {
        try {
            let car = await Car.findOrCreate({
                where: { userId },
                defaults: { userId }
            })
            return car
        } catch (error) {
            throw error
        }
    }



}
module.exports = CarServices;