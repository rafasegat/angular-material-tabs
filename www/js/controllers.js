angular.module('appshake.controllers', ['appshake.services'])

// .controller('appCtrl', function($scope, $location, $log){

// 	$scope.selectedIndex = 0;

// 	$scope.$watch('selectedIndex', function(current, old) {
// 		console.log($location.url("/shake"));
//       switch(current) {
//         case 0: $location.url("/shake"); break;
//         case 1: $location.url("/search"); break;
//         case 2: $location.url("/info"); break;
//         case 3: $location.url("/config"); break;
//       }
//     });

// })

.controller('shakeCtrl', function($scope, $rootScope){

	$rootScope.homePageIsShown = true;

	console.log($scope.homePageIsShown);

	$scope.state = {};
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
      var prev = fromState.data ? fromState.data.prev : '';
      $scope.state.back = (toState.name === prev);
      $scope.state.toHome = (toState.name === 'tab.shake');
      $scope.$apply();
    });

})

.controller('storesCtrl', function($scope, $rootScope){

	alert('fddf');

})

.controller('searchCtrl', function($scope){

	$scope.homePageIsShown = false;

	console.log($scope.homePageIsShown);

})

.controller('infoCtrl', function($scope){

	$scope.homePageIsShown = false;

})

.controller('configCtrl', function($scope){

	$scope.msg = function(){
		alert('dssdds');
	}

});