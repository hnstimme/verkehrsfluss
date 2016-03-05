var intervalLength = 30000;

function screenCap() {
	loadMap();
	// loadRadar();
}

function loadMap() {
	var page = require('webpage').create();

	page.viewportSize = {
	  width: 2500,
	  height: 2500
	};

	page.open('https://www.google.com/maps/@49.1426930,9.2108790,15z/data=!5m1!1e1', function(success) {
		var timestamp = (new Date()).toLocaleString();

		console.log(success, timestamp);
		if(success) {
			map_wait(timestamp);
		}
	});

	function map_wait(timestamp) {
		setTimeout(function() {
			page.render('screengrabs/map-' + timestamp + '.png');
		}, 5000);
	}
}

function loadRadar() {
	var page = require('webpage').create();

	page.viewportSize = {
	  width: 2500,
	  height: 2500
	};

	function radar_wait() {
		setTimeout(function() {
			var timestamp = (new Date()).toLocaleString();
			page.render('screengrabs/radar-' + timestamp + '.png');
		}, 5000);
	}
}

screenCap();
var interval = setInterval(screenCap, intervalLength);
