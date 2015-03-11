bddApp.controller('homeController',['$scope', '$http', '$location', 'calculatorService', function($scope, $http, $location, calculatorService){
	$scope.operand1 = 10;
	$scope.operator = '+';
	$scope.operand2 = 15;
	$scope.add = function(){
		$scope.result = calculatorService.add($scope.operand1, $scope.operand2);
	};
	$scope.add();
}]);