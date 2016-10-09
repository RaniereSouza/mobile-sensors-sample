import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

import './gyroscopeView.html';

Template.gyroscopeView.helpers({
	gyroscopeData: function () {
		
		let instance = Template.instance(),
			gyroscopeData = instance.gyroscopeData ? instance.gyroscopeData.get() : [0.0, 0.0, 0.0];

		//console.log(gyroscopeData);

		let result = {x: gyroscopeData[0], y: gyroscopeData[1], z: gyroscopeData[2]};

		return result;
	}
});

Template.gyroscopeView.onCreated(function () {

	let instance = this;
	
	instance.gyroscopeData = new ReactiveVar(/*{x: 0.0, y: 0.0, z: 0.0}*/ [0.0, 0.0, 0.0]);
	
	if (Session.get('isDeviceReady') === true) {

		console.log('start watching sensor');

		//instance.gyroscopeWatchId = navigator.gyroscope.watch(function (speed) {
			/* Success callback */

			//console.log('x: '+ speed.x +'; y: ' + speed.y + '; z: ' + speed.z + ';');

			//instance.gyroscopeData.set(speed);
		//}, function () {
			/* Fail callback */

			//console.log('watch sensor failed');
		//}, {frequency: 100});

		if (sensors) {

			instance.gyroscopeWatchId = Meteor.setInterval(function () {
				
				sensors.getState(function (result) {
					/* Success callback */

					//console.log(result);

					instance.gyroscopeData.set(result);
				});
			}, 100);
		}		
	}
});

Template.gyroscopeView.onDestroyed(function () {

	let instance = this;
	
	if (instance.gyroscopeWatchId) {

		//navigator.gyroscope.clearWatch(instance.gyroscopeWatchId);

		Meteor.clearInterval(instance.gyroscopeWatchId);
		sensors.disableSensor();

		console.log('stopped watching sensor');
	}
});