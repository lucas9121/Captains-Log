//Enviroment//
require('dotenv').config()

//Express Boilerplate//
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Logs = require('./models/logs')

//MVC SETUP //
//views //
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// MIDDLEWARE //
app.use(express.urlencoded({extended: true}))

// INDEX //
// app.get('/logs', (req, res) => {
//     res.send('WORK!!!!!!!!')
// })
app.get('/logs', (req, res) => {
    Logs.find({}, (err, foundLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Index', {
                logs: foundLog
            })
        }
    })
})


// NEW //
app.get('/logs/new', (req,res) => {
    res.render('New')
})


// DELETE //


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


app.listen(port, () => {
    console.log(`Ready to read Captain's log on port: ${port}`)
})