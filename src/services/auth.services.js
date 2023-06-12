const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

class AuthServices {
    static genToken(payload) {
        try {
            const token = jwt.sign(payload, 'pasar128', {
                algorithm: 'HS512',
                expiresIn: '1d'
            })
            return token;
        } catch (error) {
            throw error;
        }
    }

    static verifyToken(token) {
        try {
            const decoded = jwt.verify(token, 'pasar128', {
                algorithms: "HS512"
            });
            return decoded;
        } catch (error) {
            throw error;
        }
    }

    static hashedPassword(password) {
        try {
            const hashed = bcrypt.hash(password, 10);
            return hashed;
        } catch (error) {
            throw error;
        }
    }

    static compare(password, userPassword) {
        try {
            const validPassword = bcrypt.compare(password, userPassword);
            return validPassword;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthServices;