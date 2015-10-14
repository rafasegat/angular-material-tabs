angular.module('appshake', ['appshake.controllers', 'appshake.services', 'ngCordova', 'ngMaterial', 'ngAnimate', 'ui.router', 'ngAnimate'])


.config(function($stateProvider, $urlRouterProvider) {
	
    $urlRouterProvider.otherwise('/tab/shake');

    $stateProvider
    .state('tab', {
	    abstract: true,
	    url: '/tab',
	    templateUrl: 'templates/tabs.html',
	 })
	    .state('tab.shake', {
	        url: "/shake",
	        views:{
	        	'tab-shake': {
	        		templateUrl: "templates/tab-shake.html",
	        		controller: "shakeCtrl"
	        	}
	    	}
	    })
	    	.state('tab.shake-stores', {
		        url: "/shake/stores",
		        views:{
		        	'tab-shake': {
		        		templateUrl: "templates/shake-stores.html",
		        		controller: "storesCtrl"
		        	}
		    	}
		    })

	    .state('tab.search', {
	        url: "/search",
	        views:{
	        	'tab-search': {
	        		templateUrl: "templates/tab-search.html",
	        		controller: "searchCtrl"
	        	}
	    	}
	    })
	    .state('tab.info', {
	        url: "/info",
	    	views:{
	    		'tab-info': {
	        		templateUrl: "templates/tab-info.html",
	        		controller: "infoCtrl"
	    		}
	    	}    
	    })
	    .state('tab.config', {
	        url: "/config",
	    	views:{
	    		'tab-config': {        	
	        		templateUrl: "templates/tab-config.html",
	        		controller: "configCtrl"
	    		}
	    	}    
	    });

});