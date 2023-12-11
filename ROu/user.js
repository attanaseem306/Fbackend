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
    try {
        const userId = req.params.id;

        // Ensure that the provided ID is valid
        if (!userId) {
            return res.status(400).send({ status: 400, message: 'Invalid user ID' });
        }

        // Find the user by ID and delete
        const deletedUser = await users.findByIdAndDelete(userId);

        // Check if the user was found and deleted successfully
        if (!deletedUser) {
            return res.status(404).send({ status: 404, message: 'User not found' });
        }

        // Send a success message in the response
        res.status(200).send({ status: 200, message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: 'Internal Server Error' });
    }
});

routes.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;

        // Ensure that the provided ID is valid
        if (!userId) {
            return res.status(400).send({ status: 400, message: 'Invalid user ID' });
        }

        // Find the user by ID and update the data
        const user = await users.findByIdAndUpdate(userId, updatedUserData, { new: true });

        // Check if the user was found and updated successfully
        if (!user) {
            return res.status(404).send({ status: 404, message: 'User not found' });
        }

        // Send the updated user data as a response
        res.status(200).send({ status: 200, user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: 'Internal Server Error' });
    }
});



// routes.put('/:id', async(req, res) => {

//     const user = await users.findByIdAndUpdate({ ...req.body })
//     res.send({
//         status: 200,
//         "user":user

//     })


// })


routes.get('/:id', async(req, res) => {
console.log(req.params._id);
    const user = await users.findById(req.params.id);
    res.send({
        status: 200,
        "user":user

    })
})






module.exports = routes