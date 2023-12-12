const app = require('express')
const routes = app.Router()
const blogs = require('../Model/blog')

routes.get('/', async (req, res) => {
    const userBlogpost = await blogs.find()
    res.status(200).send({
        status: 200,
        userBlog: userBlogpost

    })
})



routes.get('/:id', async (req, res) => {
    const id=req.params.id
    const userBlogpost = await blogs.findById(id)
    res.status(200).send({
        status: 200,
        userBlog: userBlogpost

    })
})


routes.post('/', async (req, res) => {

    const userBlogpost = await blogs.create({ ...req.body })
    res.status(200).send({
        status: 200,
        userBlog: userBlogpost

    })

})






routes.delete('/:id',async (req, res) => {

    try {
        const id = req.params.id;

        // Ensure that the provided ID is valid
        if (!id) {
            return res.status(400).send({ status: 400, message: 'Invalid user ID' });
        }

        // Find the user by ID and delete
        const DeleteBlog = await blogs.findByIdAndDelete(id);

        // Check if the user was found and deleted successfully
        if (!DeleteBlog) {
            return res.status(404).send({ status: 404, message: 'Blog not found' });
        }

        // Send a success message in the response
        res.status(200).send({ status: 200, message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: 'Internal Server Error' });
    }
})



routes.put('/:id',async (req, res) => {

try {
    const id = req.params.id;
    const updatedUserData = req.body;

    // Ensure that the provided ID is valid
    if (!id) {
        return res.status(400).send({ status: 400, message: 'Invalid user ID' });
    }

    // Find the user by ID and update the data
    const blog = await blogs.findByIdAndUpdate(id, updatedUserData, { new: true });

    // Check if the user was found and updated successfully
    if (!blog) {
        return res.status(404).send({ status: 404, message: 'blog not found' });
    }

    // Send the updated user data as a response
    res.status(200).send({ status: 200, blog });
} catch (error) {
    console.error(error);
    res.status(500).send({ status: 500, message: 'Internal Server Error' });
}

} )   

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