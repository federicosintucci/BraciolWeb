angular.module('fitTime.controllers', ['fitTime.services', 'ParseServices'])

.controller('LoginCtrl', function($scope, $state, $stateParams) {

	$scope.scenario = 'Log in';
	$scope.currentUser = Parse.User.current();

	$scope.signUp = function(form) {
		var user = new Parse.User();
		user.set("email", form.email);
		user.set("username", form.username);
		user.set("password", form.password);

		user.signUp(null, {
			success: function(user) {
				$scope.currentUser = user;
				console.log(user);
				$scope.$apply();
			},
			error: function(user, error) {
				alert("Unable to sign up:  " + error.code + " " + error.message);
			}
		});
	};

	$scope.logIn = function(form) {
		Parse.User.logIn(form.username, form.password, {
			success: function(user) {
				$scope.currentUser = user;
				console.log(user);
				$scope.$apply();
			},
			error: function(user, error) {
				alert("Unable to log in: " + error.code + " " + error.message);
			}
		});
	};

	$scope.logOut = function(form) {
		Parse.User.logOut();
		$scope.currentUser = null;
	};

})

.controller('DashboardCtrl', function($scope) {

})

.controller('ClubsCtrl', function($scope, ParseObject, ParseQuery) {

	function getAllClub(){
      var query = new Parse.Query('Club');
      ParseQuery(query, {functionToCall:'find'}).then(function(clubs){
        $scope.allClubs = [];
        for(var i=0; i<clubs.length; i++)
        {
          $scope.allClubs.push(new ParseObject(clubs[i]), "clubId");
        }
        console.log($scope.allClubs)
      })
    }
    getAllClub();

	$scope.newClub = new ParseObject('Club', ['clubId','clubAddres','clubSecret','clubLogoImage']);
});