const Climb = require('../models/climb')

module.exports={
    index
}

function index(req, res){
    res.render('climbs/index')
}