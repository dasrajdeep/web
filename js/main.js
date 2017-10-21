// Main JavaScript.

var app = angular.module('d33p.in', ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		    .primaryPalette('teal')
		    .accentPalette('green');
	});

app.controller('LayoutController', function($scope, $mdMedia) {
	
	$scope.height = window.innerHeight - 50;
	$scope.imgWidth = Math.min( window.innerWidth, window.innerHeight ) / 3;
	
	$scope.partials = {
		container: 'partials/container.html',
		about: 'partials/about.html',
		bio: 'partials/bio.html',
		cv: 'partials/cv.html',
		pindrop: 'partials/pindrop.html',
		prutor: 'partials/prutor.html'
	};
});