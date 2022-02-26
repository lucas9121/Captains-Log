//Enviroment//
require('dotenv').config()

//Express Boilerplate//
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const logs = require('./controllers/logs.js')
const port = 3000
const Logs = require('./models/logs')

//MVC SETUP //
//views //
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// MIDDLEWARE //
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    next()
})

app.use(methodOverride('_method'))

//router connection
app.use('/logs', logs)






app.listen(port, () => {
    console.log(`Ready to read Captain's log on port: ${port}`)
})