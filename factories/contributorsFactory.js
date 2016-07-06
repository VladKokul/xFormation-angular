app.factory('contributorsFactory', function($http){

			function getContributors() {
				return $http.get('json/contributors.json');
			}

			return {
				getContributors: getContributors
			}

});