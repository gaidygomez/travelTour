const Viajes = require('../models/Viajes');
const Testimonios = require('../models/Testimonios');

exports.indexPage = (req, res) => {
    let promises = []

    promises.push(Viajes.findAll({
        limit: 3
    }))
    promises.push(Testimonios.findAll({
        limit: 3
    }))

    let result = Promise.all(promises)

    result.then(resultado => {
            res.render('index', {
                viajes: resultado[0],
                clase: 'home',
                testimonios: resultado[1]
            })
        })
        .catch(err => console.log(err))
}