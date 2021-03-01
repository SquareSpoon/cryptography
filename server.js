const door = 200 
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')
app.use(bodyParser.urlencoded({ extended: true}))
app.get('/users', (req, res, next) => {
    console.log('cadastrando')
    next()
})
app.get('/users', (req,res,next) => {
    res.send(db.getUsers())
})
app.get('/users/:id', (req,res,next) => {
    res.send(db.getUser(req.params.id))
})
app.post('/users/:id', (req,res,next) => {
    try{
        const user = db.saveUser({
            nick: req.body.nick,
            password: req.body.password
        })
        res.send(user)
        res.status(204)
    } catch(msg){
        res.status(500).send(`deu esse erro ${msg}`)
    }
})
app.listen(door, () => {
    console.log('working...')
})  