const Viajes = require('../models/Viajes');

exports.travelsInfo = (req, res) => {
    Viajes.findAll()
        .then((viajes) => {
            res.render('travels', {
                viajes
            })
        })
        .catch(err => console.log(err))
}

exports.singleTravelInfo = (req, res) => {
    Viajes.findByPk(req.params.id)
        .then((viaje) => res.render('travel', {
            viaje
        }))
        .catch(err => console.log(err))
}