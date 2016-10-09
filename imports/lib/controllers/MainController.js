import { RouteController } from 'meteor/iron:router';

import '/imports/client/views/welcomeView.js';
import '/imports/client/views/gyroscopeView.js';


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

export default MainController;