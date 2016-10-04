import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
//import { ReactiveVar } from 'meteor/reactive-var';

import './welcomeView.html';

Template.welcomeView.helpers({
	getDevice: function () {
		/* body... */
		var realModelName = '';

		if (Template.deviceModels[device.model]) {

			realModelName = ' (' + Template.deviceModels[device.model] + ')';
		}

		return device.model + realModelName + ', ' +
	   		   device.platform + ' ' +
	   		   device.version;
	}
});

Template.sensorsList.helpers({
	checkGyroscope: function () {
		/* body... */
		if (Session.get('isDeviceReady') === true) {

			if (navigator.gyroscope) return true;
		}

		return false;
	},
	checkAltimeter: function () {
		/* body... */
		if (Session.get('isDeviceReady') === true) {

			if (altimeter) {

				//var result = new ReactiveVar();

				//altimeter.isAltimeterAvailable(function (response) {
					/* Success callback */
					//result.set(respose);
				//}, function (err) {
					/* Failure callback */
					//console.log('não foi possível determinar se o sensor está disponível');

					//result.set(false);
				//});

				//return result.get();
			} 
		}

		return false;
	}
});

Template.sensorsList.onCreated(function () {

	var instance = this;

	instance.exitApp = function () {
		
		navigator.app.exitApp();
	}

	if (Session.get('isDeviceReady') === true) {

		document.addEventListener('backbutton', instance.exitApp, false);
	}
});

Template.sensorsList.onRendered(function () {

});

Template.sensorsList.onDestroyed(function () {

	var instance = this;

	if (typeof(instance.exitApp) !== 'undefined') {

		document.removeEventListener('backbutton', instance.exitApp, false);
	}

});