const express = require('express')
const router = express.Router()

const aboutController = require('../controllers/aboutController')
const indexController = require('../controllers/indexController')
const travelsController = require('../controllers/travelsController')
const testimoniesController = require('../controllers/testimoniesController');

module.exports = function () {
    router.get('/', indexController.indexPage)

    router.get('/about', aboutController.aboutInfo)

    router.get('/travels', travelsController.travelsInfo)

    router.get('/travels/:id', travelsController.singleTravelInfo)

    router.get('/testimonies', testimoniesController.allTestimonies)

    router.post('/testimonies', testimoniesController.postTestimones)

    return router
}