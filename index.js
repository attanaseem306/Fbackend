const express = require('express');
const app = express();
const mongoose=require('mongoose')
const routeBlog = require('./ROu/blog');
const routeUser = require('./ROu/user');

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
app.use('/users',routeUser)
app.use(express.json())
app.use('/blogs',routeBlog)
app.get('/',async (req, res) => {
    res.send({
        status: 200,
        msg: "API is working fine with nodemon",
    })
})

app.get('/:id', (req, res) => {
    res.send({
        status: 200,
        msg: "API is working fine with nodemon",
    })
})

app.post('/', (req, res) => {
        res.send({
            status: 200,
            msg: "API is working fine with nodemon",
        })
  
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