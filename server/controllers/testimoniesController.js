const Testimonios = require('../models/Testimonios');

exports.allTestimonies = (req, res) => {
    Testimonios.findAll()
        .then(testimonios => {
            res.render('testimonies', {
                testimonios
            })
        })
        .catch(err => console.log(err))
}

exports.postTestimones = (req, res) => {
    let {
        mensaje,
        email,
        nombre
    } = req.body

    let error = []

    if (!nombre) {
        error.push({
            'mensaje': 'El nombre es requerido'
        })
    }
    if (!email) {
        error.push({
            'mensaje': 'El email es requerido'
        })
    }
    if (!mensaje) {
        error.push({
            'mensaje': 'El mensaje es requerido'
        })
    }

    if (error.length > 0) {
        res.render('/testimonies', {
            error,
            nombre,
            email,
            mensaje
        })
    } else {
        Testimonios.create({
                nombre,
                email,
                mensaje
            })
            .then(() => {
                res.redirect('/testimonies')
            })
            .catch(err => console.log(err))
    }
}