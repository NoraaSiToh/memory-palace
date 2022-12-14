'use strict';
var router = require('express').Router();
var db = require('../db');
var User = db.model('user');
var Item = db.model('item');


//get all saved items for a user
router.get('/items', function(req, res, next){
	if(req.user){
		Item.findAll({
					where: {
						userId: req.user.id
					}
				})
			.then(function(items){
					res.send(items);
				});
	}
	else res.sendStatus(401);
});

//save an item
router.post('/items', function(req, res, next){
	if(req.user){
		req.body.userId = req.user.id;
		return Item.create(req.body)
			.then(function(item){
				res.send(item);
			});
	}
	else res.sendStatus(200);

});

//add a message
router.put('/items/', function(req, res, next){
	if(req.user){
		req.body.userId = req.user.id;
		Item.update({
			message: req.body.message
		}, {where: {
			positionX: req.body.position.x,
			positionY: req.body.position.y,
			positionZ: req.body.position.z
		}})
	}
	else res.sendStatus(300);

});

//delete an item
router.delete('/items/:id', function(req, res, next){
	if(req.user){
		req.body.userId = req.user.id;
		Item.destroy({where:{
			userId: req.user.id,
			id: req.params.id
		}});
	}
	else res.sendStatus(200);
});

module.exports = router;