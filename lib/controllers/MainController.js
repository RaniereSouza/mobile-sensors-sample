import { RouteController } from 'meteor/iron:router';

MainController = RouteController.extend({
	welcome: function () {
		
		if (this.ready()) {

			this.render('welcomeView');
		}
	}, 
	gyroscope: function () {
		
		if (this.ready()) {

			this.render('gyroscopeView');
		}
	}
});