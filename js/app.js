angular.module('fitTime', ['fitTime.controllers', 'ui.router'])
.run(function ($rootScope,   $state,   $stateParams) {

	// It's very handy to add references to $state and $stateParams to the $rootScope
	// so that you can access them from any scope within your applications.For example,
	// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
	// to active whenever 'contacts.list' or one of its decendents is active.
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	Parse.initialize("mmySDXuRuwXemjhDUa2XtmsLHtm2GtuZtYijr4Kp", "SJerJ4D4nTUle0oW5s0UYwzKd1XRz9IyTF0eWi4K");
})

.config(
	function ($stateProvider, $urlRouterProvider) {

	// Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state("login", {
		url: "/",
		templateUrl: "templates/login.html",
		controller: "LoginCtrl"
	})

	.state("dashboard", {
		url: "/dashboard",
		templateUrl: "templates/dashboard.html",
		controller: "DashboardCtrl"
	})

	.state("clubs", {
		url: "/clubs",
		templateUrl: "templates/clubs.html",
		controller: "ClubsCtrl"
	});
});
