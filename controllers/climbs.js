const Climb = require('../models/climb');
const Post = require('../models/post');
const passport = require('passport');

module.exports={
    index,
    new: newClimb,
    create,
    show,
    delete: deleteClimb
}

function index(req, res, next){
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    console.log(req.user)
    Climb.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
        console.log('Users: ', users)
        if(err) return next(err);
        Post.find({}, function(err, post){
            // console.log('Post: ', post)
            res.render('climbs/index', {
                users,
                post,
                user: req.user,
                name: req.query.name
            });
        });
    })   ;
}

function newClimb(req, res){
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    console.log(req.user)
    Climb.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
        if(err) return next(err);
        res.render('climbs/new', {
            user: req.user,
            name: req.query.name
        });
    }) 
}

function create(req, res){
    
    let post = new Post(req.body);
    post.save(function(err){
        if(err) return res.redirect('climbs/new');
        // console.log(post);
        res.redirect('/climbs');
    })

}

function show(req, res){
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';

    Climb.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
        Post.findById(req.params.id, function(err, post){
            res.render('climbs/show', {
                post,
                user: req.user
            })
        })
    })
}

function deleteClimb(req, res){

    Post.findOne({_id: req.params.id}, function(err, post){
        console.log('Here is the student:')
        console.log(post)
        post.remove();
        post.save(function(err){
            res.redirect('/climbs')
        })
    })

}