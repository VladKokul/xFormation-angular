	angular.module('ngFormation')

.controller('contributorsController', function($scope, contributorsFactory) {
  $scope.sortType     = 'name'; 
  $scope.sortReverse  = false;  
  
	$scope.contributors;

		 	contributorsFactory.getContributors().success(function(data){
		 		$scope.contributors = data;
		 	}).error(function(error){
		 		console.log(error);
		 	});
  
});
