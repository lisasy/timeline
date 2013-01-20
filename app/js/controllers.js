'use strict';

/* Controllers */
function HistoryTimeline($scope, $http){
 	$http.get('events/events.json').success(function(data) {
    	$scope.events = data;

    	var decadeArray = new Array();

    	var events = $scope.events;

    	function getFullYear(year){

    	};

    	function getDecade(){}

    	for(var i = 0; i<events.length; i++){
    		var date = events[i].theDate;
    		console.log(date);
    	}



	});
	$scope.orderProp = 'theDate';
}