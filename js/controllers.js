angular.module('app.controllers', ['ui.bootstrap', 'ngAnimate', 'ngFileUpload', 'app.services', 'ParseServices'])

.controller('HomeCtrl', function($scope, ParseObject, ParseQuery) {

	function getAllRestaurants(){
		var query = new Parse.Query('Restaurants');
		ParseQuery(query, {functionToCall:'find'}).then(function(restaurants){
			$scope.allRestaurants = [];
			for(var i=0; i<restaurants.length; i++)
			{
				$scope.allRestaurants.push(new ParseObject(restaurants[i]), "restaurantId");
			}
			console.log($scope.allRestaurants)
		})
	}
	getAllRestaurants();
})

.controller('AddCtrl', function($scope, Upload, ParseObject, ParseQuery) {

	$scope.$watch('file', function (file) {
		$scope.upload($scope.file);
	});

	$scope.upload = function (file) {
		Upload.upload({
			url: 'upload/url',
			fields: {'username': $scope.username},
			file: file
		}).progress(function (evt) {
			var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
		}).success(function (data, status, headers, config) {
			console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
		}).error(function (data, status, headers, config) {
			console.log('error status: ' + status);
		})
	};



	$scope.newRestaurant = new ParseObject('Restaurants', ['restaurantId','restaurantAddress','restaurantLogoImage']);
});