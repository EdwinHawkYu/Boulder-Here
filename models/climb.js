const mongoose = require('mongoose');
// const passport = require('passport');

var reviewSchema = new mongoose.Schema({
    recommendation: String,
    grading: {
        type: Number,
        min: 1,
        max: 5
    },
    quality: String
},{
    timestamps: true
})


var userSchema = new mongoose.Schema({
    name: String,    email: String,
    // post: [postSchema],
    review: [reviewSchema],
    googleID: String
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
