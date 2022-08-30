const Climb = require('../models/climb');

module.exports={
    index,
    new: newClimb
}

function index(req, res, next){
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    console.log(req.user)
    Climb.find(modelQuery)
    .sort(sortKey).exec(function(err, users){
        if(err) return next(err);
        res.render('climbs/index', {
            user: req.user,
            name: req.query.name,
            sortKey
        });
    })   
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
            name: req.query.name,
            sortKey
        });
    }) 
}