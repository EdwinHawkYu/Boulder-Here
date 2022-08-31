const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title: String,
    location: String,
    description: String,
    image: String
})

module.exports = mongoose.model('Post', postSchema);
