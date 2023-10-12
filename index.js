const express = require('express');
const routes = require('./ROu/user');
const app = express();
const mongoose=require('mongoose')
const user=require('./Model/blog')

mongoose.connect('mongodb+srv://blog:blog@cluster0.k9nakt3.mongodb.net/').then(()=>{
    console.log('mongoose Conenct');
}).catch((error)=>{
    console.log(error);
})


















// const morgan = require('morgan');
// const userRoutes = require('./routes/user')

// function middleware(req, res, next) {
//     console.log('Middleware console')
//     next()
// }
// function ok(req ,res,done){
//     console.log('ok he');
//     done()
// }
// app.use(morgan('tiny'))
// app.use(middleware)
// app.use(ok)
app.use('/user',routes)
app.use(express.json())

app.get('/',async (req, res) => {
    const users = await user.find()
    res.send({
        status: 200,
        msg: "API is working fine with nodemon",
        users
    })
})

app.get('/:id',async (req, res) => {
    const users = await user.findById(req.params.id)
    res.send({
        status: 200,
        msg: "API is working fine with nodemon",
        users
    })
})

app.post('/',async (req, res) => {
    try{
        const userCreate = await user.create({...req.body})
        res.send({
            status: 200,
            msg: "API is working fine with nodemon",
            userCreate
        })
    }catch(error){
        console.log(error);
    }
  
})

// app.get('/about', (req, res) => {
//     res.send({
//         status: 200,
//         msg: "About Route"  
//     })
// })


// app.use('/user', userRoutes)

const port = 3000

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});