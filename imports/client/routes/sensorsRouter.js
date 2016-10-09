import { Router } from 'meteor/iron:router';

import MainController from '../../lib/controllers/MainController.js';

Router.route('/', {
	name: 'welcomeView',
	controller: MainController,
	action: 'welcome'
});

Router.route('/gyroscope', {
	name: 'gyroscopeView',
	controller: MainController,
	action: 'gyroscope'
});