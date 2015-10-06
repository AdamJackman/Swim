var swimApp = angular.module('swimApp', [
	'ngRoute',
	'swimCtrls'
]);

swimApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', { templateUrl: "Swim.html", controller: 'homeCtrl'})
			.when('/tasks/account-update', {templateUrl: 'templates/account-update.html', controller: "mainCtrl"})
			.when('/tasks/bi', {templateUrl: 'templates/bi.html', controller: "mainCtrl"})
			.when('/tasks/cif-parser', {templateUrl: 'templates/cif-parser.html', controller: "mainCtrl"})
			.when('/tasks/database-update', {templateUrl: 'templates/database-update.html', controller: "mainCtrl"})
			.when('/tasks/ebill', {templateUrl: 'templates/ebill.html', controller: "mainCtrl"})
			.when('/tasks/ecm', {templateUrl: 'templates/ecm.html', controller: "mainCtrl"})
			.when('/tasks/ivr', {templateUrl: 'templates/ivr.html', controller: "mainCtrl"})
			.when('/tasks/mobile.html', {templateUrl: 'templates/mobile.html', controller: "mainCtrl"})
			.when('/tasks/notification', {templateUrl: 'templates/notification.html', controller: "mainCtrl"})
			.when('/tasks/oms', {templateUrl: 'templates/oms.html', controller: "mainCtrl"})
			.when('/tasks/payment-blocking', {templateUrl: 'templates/payment-blocking.html', controller: "mainCtrl"})
			.when('/tasks/posting-file', {templateUrl: 'templates/posting-file.html', controller: "mainCtrl"})
			.when('/tasks/report-writer', {templateUrl: 'templates/report-writer.html', controller: "mainCtrl"})
			.when('/tasks/simulator', {templateUrl: 'templates/simulator.html', controller: "mainCtrl"})
			.when('/tasks/ui-customizations', {templateUrl: 'templates/ui-customizations.html', controller: "mainCtrl"})
			.when('/tasks/update-partial', {templateUrl: 'templates/update-partial.html', controller: "mainCtrl"})
			.when('/tasks/validators', {templateUrl: 'templates/validators.html', controller: "mainCtrl"})
			.when('/tasks/zero-out', {templateUrl: 'templates/zero-out.html', controller: "mainCtrl"})
			// when('/tasks/', {
			// 	templateUrl: 'templates/home.html',
			// 	controller: 'optionsCtrl'
			// }).
			.otherwise({redirectTo: '/'});
	}]);

var swimCtrls = angular.module('swimCtrls', []);

swimCtrls.controller('mainCtrl', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams){
		$scope.greeting = "Place";
	}]);

swimCtrls.controller('homeCtrl', ['$scope', '$http', '$window',
	function($scope, $http, $window){
		$scope.greeting = "Holder";

	}]);