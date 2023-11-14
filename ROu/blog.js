const app = require('express')
const routes = app.Router()
const blogs = require('../Model/blog')

routes.get('/', async(req, res) => {
    const userBlogpost=await blogs.find()
 res.status(200).send({
    status: 200,
    user: userBlogpost

})
})

routes.post('/',async(req,res)=>{
  
 const userBlogpost=await blogs.create({...req.body})
 res.status(200).send({
    status: 200,
    user: userBlogpost

})
 
})






// routes.delete('/:id', (req, res) => {
  
//     users.splice(req.params.id-1,1)
    
//     res.status(200).send({
//         status: 200,
//         user: users

//     })
// })


// routes.put('/:id', (req, res) => {
  
// if (users[req.params.id-1]) {
//   users[req.params.id-1].name='Change name'
//   res.status(200).send({
//     status: 200,
//     message: users
// })

// }    

// else{
//     res.status(200).send({
//         status:500,
//         message:'user not found'
//     })
// }
    
// })


// routes.get('/:id', (req, res) => {
//    console.log('pharams0', req.params);
//     const singalUser = users.find((data) => data.id == req.params.id)

//     if (!singalUser) {
//         res.status(500).send({
//             status: 500,
//             message: 'Error User is not found'
//         })
//     }

//     if (singalUser) {
//         res.status(200).send({
//             status: 200,
//             singalUser
//         })
//     }


// })

module.exports = routes