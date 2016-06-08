'use strict';

var angular = require('angular');

angular.module('todoListApp').controller('mainCtrl', require('./mainController'));
angular.module('todoListApp').controller('todoCtrl', require('./todoController'));
