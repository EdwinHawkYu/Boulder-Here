const Climb = require('../models/climb');
const Post = require('../models/post');

module.exports = {
    create
}

function create(req,res){
    Post.findById(req.params.id,function(err, post){
        console.log('Testing')
        console.log(post.review)
        post.review.push(req.body);
        console.log(post)
        post.save(function(err){
            res.redirect(`/climbs/${post._id}`);
        })
    })
}