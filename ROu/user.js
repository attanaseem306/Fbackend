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



routes.delete('/:id', async (req, res) => {

    const user = users.findByIdAndDelete({ ...req.body })
    res.send({
        status: 200,
        user

    })

})


routes.put('/:id', (req, res) => {

    const user = users.findByIdAndUpdate({ ...req.body })
    res.send({
        status: 200,
        user

    })


})


routes.get('/:id', (req, res) => {

    const user = users.findById(req.params.id)
    res.send({
        status: 200,
        user

    })



})


module.exports = routes