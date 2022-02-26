//Enviroment//
require('dotenv').config()

//Express Boilerplate//
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
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

// INDEX //
app.get('/logs', (req, res) => {
    Logs.find({}, (err, foundLogs) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Index', {
                logs: foundLogs
            })
        }
    })
})


// NEW //
app.get('/logs/new', (req,res) => {
    res.render('New')
})


// DELETE //
app.delete('/logs/:id', (req, res) => {
    Logs.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})


// UPDATE // 



// CREATE //
app.post('/logs', (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Logs.create(req.body, (err, createdLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('Show')
        }
    })
})


// EDIT //


// SHOW //
app.get('/logs/:id', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Show', {
                log: foundLog
            })
        }
    })
})


app.listen(port, () => {
    console.log(`Ready to read Captain's log on port: ${port}`)
})