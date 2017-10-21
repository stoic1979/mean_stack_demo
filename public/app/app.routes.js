angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider

		.when('/', {
			templateUrl: 'views/pages/home.html'
		})
		.when('/login', {
			templateUrl: 'views/pages/login.html'
		})


    //FIXME: its not working
	//$locationProvider.html5Mode(true);	

});