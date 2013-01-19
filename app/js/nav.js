$(function() {

	// Do our DOM lookups beforehand
	var nav_container = $("#nav-container");
	var nav = $("#sticky-navigation");

	nav.waypoint(function(){
		nav.toggleClass('stuck').animate();
	});

});