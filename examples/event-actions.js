
var Virgilio = require('virgilio');
var virgilio = new Virgilio();

// Load virgilio-on
virgilio.loadModule$(require('../lib/virgilio-on'));

function doorbell() {
	var virgilio = this;
	var Doorbell = virgilio.namespace$('modules.doorbell');

	Doorbell.defineAction$(function sendPush() {
		console.log('Send RING RING push message to device');
		// return Utils.push.send(...).then(func..{});
	});

	Doorbell.defineAction$(function blinkLight() {
		console.log('Blink HUE light');
		// return Utils.lights.blink(...).then(func..{});
	});

	Doorbell.sendPush.on('doorbell');
	Doorbell.blinkLight.on('doorbell');
};

function exampleEmit() {
	var virgilio = this;

	// This can be called for example from an API request
	setTimeout(function() {
		virgilio.emit('doorbell');
	}, 1000);
}

virgilio.loadModule$(doorbell);
virgilio.loadModule$(exampleEmit);
