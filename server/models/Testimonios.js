const Sequelize = require("sequelize");
const db = require("../config/db");

const Testimonios = db.define('testimonios', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

module.exports = Testimonios