angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider

		.when('/', {
			templateUrl: 'views/pages/home.html'
		})
		.when('/login', {
			templateUrl: 'views/pages/login.html'
		})
		.when('/signup', {
			templateUrl: 'views/pages/signup.html'
		})


    //FIXME: its not working
	//$locationProvider.html5Mode(true);	

});