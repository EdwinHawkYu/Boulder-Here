const Climb = require('../models/climb');

module.exports={
    index,
    new: newClimb
}

function index(req, res){
    res.render('climbs/index');
}

function newClimb(req, res){
    res.render('climbs/new');
}