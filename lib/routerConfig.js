import { Router } from 'meteor/iron:router';

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