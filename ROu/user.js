const app = require('express')
const users = require('../Model/user')
const routes = app.Router()

routes.get('/', async (req, res) => {
    const user = await users.find()
    res.status(200).send({
        status: 200,
        user

    })
})

routes.post('/', async (req, res) => {
    const user = await users.create({ ...req.body })
    res.send({
        status: 200,
        user

    })
})



routes.delete('/:id', (req, res) => {


})


routes.put('/:id', (req, res) => {



})


routes.get('/:id', (req, res) => {



})

module.exports = routes