'use strict';

function MainCtrl ($scope, $log, $interval, $timeout, dataService) {

	dataService.getTodos(function(response){
	var todos = response.data.todos;
	$scope.todos =  todos;
	});

	$scope.addTodo = function() {
	$scope.todos.unshift({name: "This is a new todo.",
	completed: false});
	};

}

module.exports = MainCtrl;
