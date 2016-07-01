angular.module('ngFormation').controller('githubController', function($scope, githubFactory){
			
		 	$scope.github;

		 	githubFactory.getGithub().success(function(data){
		 		$scope.github = data;
		 	}).error(function(error){
		 		console.log(error);
		 	});

		})