const mongoose = require('mongoose')

const CheckScheme = new mongoose.Schema({

    title: { type: mongoose.SchemaTypes.String, required: true },
    description: { type: mongoose.SchemaTypes.String, required: true, unique: true },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'users', required: true },

})

const userBlog = mongoose.model('blogs', CheckScheme)
module.exports = userBlog




// username
// "atta"
// email
// "atta@gmail.com"
// password
// "atta"