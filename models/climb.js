const mongoose = require('mongoose');
const passport = require('passport');

var reviewSchema = new mongoose.Schema({
    recommendation: String,
    grading: Number,
    quality: String
},{
    timestamps: true
})

// var postSchema = new mongoose.Schema({
//     title: String,
//     location: String,
//     description: String,
//     image: String
// })

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    // post: [postSchema],
    review: [reviewSchema],
    googleID: String
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
// module.exports = mongoose.model('Post', postSchema);
module.exports = mongoose.model('Review', reviewSchema);
