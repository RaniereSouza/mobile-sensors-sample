import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

import './gyroscopeView.html';

Template.gyroscopeView.helpers({
	gyroscopeData: function () {
		
		var instance = Template.instance(),
			gyroscopeData = instance.gyroscopeData ? instance.gyroscopeData.get() : {x: 0.0, y: 0.0, z: 0.0};

		//console.log(gyroscopeData);

		return gyroscopeData;
	}
});

Template.gyroscopeView.onCreated(function () {

	var instance = this;
	
	instance.gyroscopeData = new ReactiveVar({x: 0.0, y: 0.0, z: 0.0});
	
	if (Session.get('isDeviceReady') === true) {

		console.log('start watching sensor');

		instance.gyroscopeWatchId = navigator.gyroscope.watch(function (speed) {
			/* Success callback */

			//console.log('x: '+ speed.x +'; y: ' + speed.y + '; z: ' + speed.z + ';');

			instance.gyroscopeData.set(speed);
		}, function () {
			/* Fail callback */

			console.log('watch sensor failed');
		}, {frequency: 100});	
	}
});

Template.gyroscopeView.onDestroyed(function () {

	var instance = this;
	
	if (instance.gyroscopeWatchId) {

		navigator.gyroscope.clearWatch(instance.gyroscopeWatchId);

		console.log('stopped watching sensor');
	}
});