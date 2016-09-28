import { Router } from 'meteor/iron:router';

Router.route('/', {
	name: 'welcomeView',
	controller: MainController,
	action: 'welcome'
});