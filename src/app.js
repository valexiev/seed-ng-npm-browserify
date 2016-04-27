'use strict';

var angular = require('angular'),
	uiRouter = require('angular-ui-router'),
	routes = require("./routes");


require("./states");


angular.module('app', [
    uiRouter,
    'home'
])
	.config(routes);


