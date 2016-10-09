import { Router } from 'meteor/iron:router';

import '../client/layouts/mainLayout.js';
//import '../client/partials/mainHeader.js';
//import '../client/partials/mainFooter.js';

Router.configure({
	layoutTemplate: 'mainLayout',
	yieldTemplates: {
		'mainHeader': {
			to: 'mainHeader'
		},
		'mainFooter': {
			to: 'mainFooter'
		}
	}
});