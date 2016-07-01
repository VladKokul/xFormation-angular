angular.module('ngFormation').factory('githubFactory', function($http){

			function getGithub() {
				return $http.get('https://api.github.com/users/x-formation/repos');
			}

			return {
				getGithub: getGithub
			}

});