'use strict';


module.exports = function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise( '/home' );

	$stateProvider
		.state( 'home', {
			url: '/home',
			views: {
				'main': {
					'controller': 'HomeController',
					//templateUrl: 'home/home.tpl.html'
					'template': 'Lorem ipsum wwwasasasa saSAs'
				}
			},
			data:{ pageTitle: 'Home' }
		});


};