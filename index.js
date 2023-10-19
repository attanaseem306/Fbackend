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


app.use(express.json())
app.use('/users',routeUser)
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


const port = 3000

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});