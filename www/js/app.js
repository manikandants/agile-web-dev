var bddApp = angular.module('bddApp', [
	'ngRoute'
]);

bddApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl : 'partials/home.html',
		controller : 'homeController'
	});
}]);
