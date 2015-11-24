window.onload =function() { 
  $('#starter').hide().fadeIn(3000, function() { 
  }); 
} 
$('body').tooltip({
    selector: '[title]'
});
// Create app
var myApp = angular.module('myApp',['ui.router']);
// Configure app
myApp.config(function($stateProvider){

	$stateProvider.state('home', { // Resume
		url:'/home',
		templateUrl: 'templates/home.html', // HTML fragment
		controller: 'HomeController', // About controller 
	})
	.state('about', { //  About page
		url:'/about',
		templateUrl: 'templates/about.html', // HTML fragment
		controller: 'AboutController', // About controller 
	})
	.state('content', { //  Projects page
		url:'/content',
		templateUrl: 'templates/projects.html', // HTML fragment
		controller: 'ContentController', // Content controller 
	})
})

.controller('HomeController', function($scope){
	$('#starter').hide(1200);
})

.controller('AboutController', function($scope, $http){
	$('#starter').hide(1200);
})

.controller('ContentController', function($scope, $http){
	$('#starter').hide(1200);
	$http.get("data/data.json").success(function(response){
	    	$scope.projects = response;
	    });
})