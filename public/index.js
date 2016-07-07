var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('mean-retail.components', ['ng']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

_.each(services, function(factory, name) {
  components.factory(name, factory);
});

components.factory('Search',function(){
	
	return{
		Field:''
		
	};
});

var app = angular.module('mean-retail', ['mean-retail.components', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
	when('/',{
		redirectTo:'/index.html'
	}).
	when('/body',{
		templateUrl: 'templates/body.html'
	}).
    when('/category/:category', {
      templateUrl: 'templates/category_view.html'
    }).
    when('/checkout', {
      template: '<checkout></checkout>'
    }).	
    when('/product/:id', {
      template: '<product-details></product-details>'
    }).
	when('/logout',{		
		template:'<logout></logout>'
	}).
	when('/contact',{		
		templateUrl:'templates/contact.html'
	});
	
});
