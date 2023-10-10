const app = require('express')
const routes = app.Router()

const users = [
    {
        name: 'Bilal',
        id: 1
    },
    {
        name: 'Faiz',
        id: 2
    },
    {
        name: 'Ahbaab',
        id: 3
    }
]

routes.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        user: users

    })
})




routes.delete('/:id', (req, res) => {
  
    users.splice(req.params.id-1,1)
    
    res.status(200).send({
        status: 200,
        user: users

    })
})


routes.put('/:id', (req, res) => {
  
if (users[req.params.id-1]) {
  users[req.params.id-1].name='Change name'
  res.status(200).send({
    status: 200,
    message: users
})

}    

else{
    res.status(200).send({
        status:500,
        message:'user not found'
    })
}
    
})


routes.get('/:id', (req, res) => {
   console.log('pharams0', req.params);
    const singalUser = users.find((data) => data.id == req.params.id)

    if (!singalUser) {
        res.status(500).send({
            status: 500,
            message: 'Error User is not found'
        })
    }

    if (singalUser) {
        res.status(200).send({
            status: 200,
            singalUser
        })
    }


})

module.exports = routes