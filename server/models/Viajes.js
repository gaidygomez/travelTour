const  Sequelize  = require("sequelize")
const db = require('../config/db')

const Viaje = db.define('viaje', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    img: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponible: {
        type: Sequelize.STRING
    }
})

module.exports = Viaje
