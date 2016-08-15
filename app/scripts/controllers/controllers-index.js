'use strict';

var angular = require('angular');

angular.module('todoListApp').controller('mainCtrl', require('./main-controller'));
angular.module('todoListApp').controller('todoCtrl', require('./todo-controller'));
