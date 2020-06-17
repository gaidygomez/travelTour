const express = require('express')
const path = require('path');
const routes = require('./routes')
const config = require('./config')
const parser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))
app.use(express.static('public'))

app.use( (req, res, next) => {
    const fecha = new Date()

    res.locals.anioActual = fecha.getFullYear()
    res.locals.ruta = req.path
    return next()
})

const configuration = config[app.get('env')]
app.locals.title = configuration.nombre

app.use(parser.urlencoded({extended: true}))
app.use('/', routes())
app.listen(3000)
