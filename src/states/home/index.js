'use strict';

var angular = require('angular'),
	homeController = require('./controller');


module.exports = angular.module('home', [])
  .controller('HomeController', homeController);