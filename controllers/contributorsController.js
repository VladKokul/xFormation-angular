angular.module('ngFormation').controller('contributorsController', function($scope, contributorsFactory){
			
		 	$scope.contributors;

		 	contributorsFactory.getContributors().success(function(data){
		 		$scope.contributors = data;
		 	}).error(function(error){
		 		console.log(error);
		 	});

		})