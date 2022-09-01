const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    recommendation: String,
    grading: {
        type: Number,
        min: 1,
        max: 5
    },
    comments: String
},{
    timestamps: true
})

var postSchema = new mongoose.Schema({
    title: String,
    location: String,
    description: String,
    review: [reviewSchema],
    image: String
})

module.exports = mongoose.model('Post', postSchema);
