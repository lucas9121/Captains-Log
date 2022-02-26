const router = require('express').Router()
const Logs = require('../models/logs')

// INDEX //
router.get('/', (req, res) => {
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
router.get('/new', (req,res) => {
    res.render('New')
})


// DELETE //
router.delete('/:id', (req, res) => {
    Logs.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})


// UPDATE // 
router.put('/:id', (req,res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Logs.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${req.params.id}`)
        }
    })
})


// CREATE //
router.post('/', (req, res) => {
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
router.get('/:id/edit', (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Edit', {
                log: foundLog
            })
        }
    })
})


// SHOW //
router.get('/:id', (req, res) => {
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

module.exports = router