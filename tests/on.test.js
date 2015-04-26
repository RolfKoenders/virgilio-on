
var Virgilio = require('virgilio');

describe('Virgilio-on', function() {
	var virgilio = null;
	beforeEach(function() {
		virgilio = new Virgilio();
		virgilio.loadModule$(require('../'));
	});

	it('allows to register an event to an action', function() {
		virgilio.defineAction$(function testAction() {});
		virgilio.testAction.on('test-event');
		virgilio.emit('test-event').must.be.true();
	});

	it('can run actions based on an event', function() {
		var actionCounter = 0;
		
		virgilio.defineAction$(function testAction() {
			actionCounter++;
		});
		
		virgilio.defineAction$(function testSecondAction() {
			actionCounter++;
		})
		
		virgilio.testAction.on('test-event');
		virgilio.testSecondAction.on('test-event');

		virgilio.emit('test-event');
		
		actionCounter.must.equal(2);
	});
});
