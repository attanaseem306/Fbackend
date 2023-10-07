const app=require('express')
const routes=app.Router()


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


routes.get('/' ,(req,res)=>{
    res.status(200).send({
     
   status :200,
   user:users

    })
})



routes.get('/:id' ,(req,res)=>{
   
    const singalUser=users.find((data)=>data.id==req.params.id)

    if(!singalUser){
       res.status(500).send({
        status : 500,
        message:'Error User is not found'
       })
    }

    if (singalUser) {
        res.status(200).send({
            status :200,
            singalUser
        })
    }


})

module.exports = routes