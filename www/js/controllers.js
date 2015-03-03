bddApp.controller('homeController',['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.add = function(){
		$scope.result = $scope.operand1 + $scope.operand2;
	};
}]);