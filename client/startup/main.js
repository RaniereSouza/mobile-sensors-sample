import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

//### Granting that the mobile device is ready ###
Meteor.startup(function () {
	/* body... */
	if (Meteor.isCordova) {

		console.log(device.cordova);

		Session.set('isDeviceReady', true);
	}
});

//### Registering a dictionary linking device product names with model names ###
Template.deviceModels = {
	'XT1069': 'Motorola Moto G 2014'
}

//### Registering some handy global template helpers ###
Template.registerHelper('isEqual', function (a, b) {
	/* body... */
	return (a === b);
});

Template.registerHelper('isCordova', function () {
	/* body... */
	return Meteor.isCordova;
});

Template.registerHelper('isDeviceReady', function () {
	/* body... */
	return (Session.get('isDeviceReady') === true);
})

Template.registerHelper('isAndroid', function () {
	/* body... */
	return ((Session.get('isDeviceReady') === true) &&
		   (device.platform === 'Android'));
});