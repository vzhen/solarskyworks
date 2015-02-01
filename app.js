var dependencies = [
					'ngSanitize',
					'ngRoute',
					];

var app = angular.module('app', dependencies)
	.config([	'$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'partials/home.html'
			});
			$routeProvider.when('/services', {
				templateUrl: 'partials/services.html',
				controller: 'servicesCtrl'
			});
			$routeProvider.when('/projects', {
				templateUrl: 'partials/projects.html',
				controller: 'projectsCtrl'
			});
			$routeProvider.when('/findus', {
				templateUrl: 'partials/findus.html'
			});
			$routeProvider.when('/livedata', {
				templateUrl: 'partials/livedata.html'
			});
			$routeProvider.when('/external', {
				templateUrl: 'partials/external.html'
			});
		}
	])

	.controller('servicesCtrl', [
		'$scope',
		'$http',
		function($scope, $http) {
			$http({
				method: 'GET',
				url: 'data/data.json'
			}).
				success(function(data, status, headers, config) {
			    $scope.services = data.services;
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		}
	])

	.controller('projectsCtrl', [
		'$scope',
		'$http',
		function($scope, $http) {
			$http({
				method: 'GET',
				url: 'data/data.json'
			}).
				success(function(data, status, headers, config) {
			    $scope.projects = data.projects;
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
		}
	])

	.filter('orderObjectBy', function() {
	  return function(items, field, reverse) {
	    var filtered = [];
	    angular.forEach(items, function(item) {
	      filtered.push(item);
	    });
	    filtered.sort(function (a, b) {
	      return (a[field] > b[field]);
	    });
	    if(reverse) filtered.reverse();
	    return filtered;
	  };
	})
