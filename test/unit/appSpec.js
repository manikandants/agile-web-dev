describe('bddApp Routes', function() {
	beforeEach(angular.mock.module('bddApp'));
	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		$location = $injector.get('$location');
		$rootScope = $injector.get('$rootScope');
		$route = $injector.get('$route');
	}));
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	it('should load the home page on successful load of /', inject(function($httpBackend, $location, $rootScope, $route) {
		$httpBackend.expectGET('partials/home.html').respond(200, 'main HTML');
		$location.path('/');
		$rootScope.$digest();
		$httpBackend.flush();
		expect($route.current.controller).toBe('homeController');
	}));
});
