const Users = require('../models/users.model');

class UsersServices {
    static async getUser(email) {
        try {
            const user = await Users.findOne({
                where: { email },
            });
            return user
        } catch (error) {

        }
    }

    static async createUsers(username, email, password) {
        try {
            const userCreated = Users.create({
                username,
                email,
                password
            })
            return userCreated
        } catch (error) {
            throw error
        }
    }

    static async updateUser(id, userData){
        try {
            const updatedUser = await Users.update(userData, {
                where: { id }
            });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UsersServices;