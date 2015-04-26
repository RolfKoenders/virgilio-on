
# Virgilio-on

[![npm version](https://badge.fury.io/js/virgilio-on.svg)](http://badge.fury.io/js/virgilio-on)

Event-driven actions for [virgilio](https://github.com/icemobilelab/virgilio/)

## Usage

Lets say we have a blinkLight and sendPush action on our Doorbell namespace.

```javascript
var Doorbell = virgilio.namespace$('modules.doorbell');
Doorbell.defineAction$(function blinkLight() {
	console.log('Blink HUE light');
	// return Utils.hue.blink(...).then(func..{});
});
Doorbell.defineAction$(function sendPush() {
	console.log('Send RING RING push message');
	// return Utils.push.send(...).then(func..{});
});
```

We want these actions to run when a specific event is triggered, for example 'doorbell'. To make this happen we can assign an event to them.

```javascript
Doorbell.blinkLight.on('doorbell');
Doorbell.sendPush.on('doorbell');
```

Now, when we send the 'doorbell' event the actions will run.

```javascript
// Lets assume we have a virgilio instance
virgilio.emit('doorbell');
```

There is a working example of the above in the examples directory.
