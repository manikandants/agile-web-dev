bddApp.controller('homeController',['$scope', '$http', '$location', 'calculatorService', function($scope, $http, $location, calculatorService){
	$scope.add = function(){
		$scope.result = calculatorService.add($scope.operand1, $scope.operand2);
	};
}]);