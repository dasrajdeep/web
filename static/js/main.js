// Main JavaScript.

var app = angular.module('d33p.in', ['ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
		    .primaryPalette('teal')
		    .accentPalette('green');
	});