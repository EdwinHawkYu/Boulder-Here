const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    recommendation: String,
    grading: Number,
    quality: String
},{
    timestamps: true
})

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    review: [reviewSchema],
    googleID: String
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);