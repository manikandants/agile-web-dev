bddApp.controller('homeController',['$scope', 'calculatorService', function($scope, calculatorService){
	$scope.operand1 = 0;
	$scope.operator = '+';
	$scope.operand2 = 0;
	$scope.add = function(){
		$scope.result = calculatorService.add($scope.operand1, $scope.operand2);
	};
	$scope.add();
}]);