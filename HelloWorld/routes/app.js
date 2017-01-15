var express = require('express');
var router = express.Router();

/*Load index.hbs Hello World view*/
router.get('/', function (req, res, next) {
    res.render('index');
});

//This route print a variable message from param msg catched in router.post 
router.get('/message/:msg', function (req, res, next) {
    res.render('node',{message: req.params.msg});
});

/*This route print a variable message from here
router.get('/message/', function (req, res, next) {
    res.render('node',{message: 'message test from /message/'});
});*/

router.post('/message/', function(req,res,next){
	var message = req.body.message;
	res.redirect('/message/' + message ); //append message to the route. 
});

module.exports = router;