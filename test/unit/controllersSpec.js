describe('bddApp Controllers -->', function(){
	describe('homeController -->', function(){
		beforeEach(angular.mock.module('bddApp'));
		var calculatorService;
		beforeEach(inject(function($injector) {
			calculatorService = $injector.get('calculatorService');
			$controller = $injector.get('$controller');
		}));
		describe('Initialization -->', function(){
			it('should initialize operand1 to 0', inject(function() {
				var $scope = {};
				var controller = $controller('homeController', { $scope: $scope });
				expect($scope.operand1).toBe(0);
			}));
			it('should initialize operator to +', inject(function() {
				var $scope = {};
				var controller = $controller('homeController', { $scope: $scope });
				expect($scope.operator).toBe('+');
			}));
			it('should initialize operand2 to 0', inject(function() {
				var $scope = {};
				var controller = $controller('homeController', { $scope: $scope });
				expect($scope.operand2).toBe(0);
			}));
		});
		describe('Method Definition -->', function(){
			it('should have a function defined for add', inject(function() {
				var $scope = {};
				var controller = $controller('homeController', { $scope: $scope });
				expect($scope.add).toBeDefined();
			}));
		});
	});
});