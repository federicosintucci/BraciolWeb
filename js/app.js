angular.module('app', ['app.controllers', 'ui.router'])
.run(function ($rootScope,   $state,   $stateParams) {

	// It's very handy to add references to $state and $stateParams to the $rootScope
	// so that you can access them from any scope within your applications.For example,
	// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
	// to active whenever 'contacts.list' or one of its decendents is active.
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})

.config(function ($stateProvider, $urlRouterProvider) {

	// Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state("home", {
		url: "/home",
		templateUrl: "templates/home.html",
		controller: "HomeCtrl"
	})

	.state("add", {
		url: "/add",
		templateUrl: "templates/add.html",
		controller: "AddCtrl"
	});
	
});
