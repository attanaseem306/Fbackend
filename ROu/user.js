const app = require('express')
const users = require('../Model/user')
const routes = app.Router()

routes.get('/', async (req, res) => {
    const user = await users.find()
    res.status(200).send({
        status: 200,
        "user":user

    })
})

routes.post('/', async (req, res) => {
    const user = await users.create({ ...req.body })
    res.send({
        status: 200,
        "user":user
    })
})



routes.delete('/:id', async (req, res) => {

    const user = await users.findByIdAndDelete({ ...req.body })
    res.send({
        status: 200,
        "user":user
      })
})


routes.put('/:id', async(req, res) => {

    const user = await users.findByIdAndUpdate({ ...req.body })
    res.send({
        status: 200,
        "user":user

    })


})


routes.get('/:id', async(req, res) => {
console.log(req.params._id);
    const user = await users.findById(req.params.id);
    res.send({
        status: 200,
        "user-id":user

    })
})






module.exports = routes