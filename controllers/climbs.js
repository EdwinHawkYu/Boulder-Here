const Climb = require('../models/climb');
const Post = require('../models/post');
const request = require('request');
const fs = require('fs');

module.exports={
    index,
    new: newClimb,
    create,
    show,
    delete: deleteClimb,
    edit,
    update
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
        console.log(post);
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
        post.remove();
        post.save(function(err){
            res.redirect('/climbs')
        })
    })

}

function edit(req, res){
    Post.findOne({_id: req.params.id}, function(err, post){
        res.render('climbs/edit',{
            post,
            user: req.user
        })
    })
}

function update(req,res){

    Post.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(function(){
        Post.findOne({_id:req.params.id})
        .then(function(){
            res.redirect('/climbs');
        })
    })

}

function base64_encode(image){
    var bitmap = fs.readFileSync(image);
    return bitmap.toString('base64');
}

function upload(req, res){
    console.log(req.file);
    let image = base64_encode(req.file.path);

    const options = {
        url: "https://api.imgur.com/3/image",
        method: "POST",
        headers: {
            Authorization: `Client-ID ${IMGUR_CLIENT_ID}`
        },
        formData: {
            image: image,
            type: 'base64'
        }
    }

    request(options, function(err, response){
        if(err) return console.log(err)
        let body = JSON.parse(response.body)
        //
        //
        res.redirect('/climbs')
    })

}