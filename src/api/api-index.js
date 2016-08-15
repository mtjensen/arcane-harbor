'use strict';

var express = require('express');
var Todo = require('../models/todo-model');

var router = express.Router();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

router.get('/todos', function(req, res) {
	Todo.find({}, function(err, todos) {
	if (err) {
	return res.status(500).json({ message: err.message });
	}
	res.json({ todos: todos });
	});
});

router.post('/todos', function(req, res) {
	var todo = req.body;
	Todo.create(todo, function(err, todo) {
		if(err) {
			return req.status(500).json({err: err.message})
		} else {
			res.json({'todo': todo, message: 'Todo created'})
		}
	})
})

//the colon in the route indicates a required parameter

router.put('/todos/:id', function(req, res) {
	var id = req.params.id;
	var todo = req.body;
	if(todo && todo._id !== id) {
		return req.status(500).json({err: 'IDs don\'t match'})
	}
	Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
	//pass the new: true option to .findByIdAndUpdate() to tell Mongoose to return the updated document
		if(err) {
			return req.status(500).json({err: err.message})
		} else {
			res.json({'todo': todo, message: 'Todo updated'})
		}
	})
})

router.delete('/todos/:id', function(req, res) {
	var id = req.params.id;
	Todo.findByIdAndRemove(id, function(err, result) {
	if (err) {
	return res.status(500).json({ err: err.message });
	}
	res.json({ message: 'Todo Deleted' });
	});
});

module.exports = router;
