'use strict';

/* Controllers */
function HistoryTimeline($scope, $http){
 	$http.get('events/events.json').success(function(data) {
    	$scope.events = data;

    	var decadeArray = new Array();

    	var a = $scope.events;

    	for(var event in events){
    		event.theDate;
    	}

    	console.log(event);



	});
	$scope.orderProp = 'theDate';
}