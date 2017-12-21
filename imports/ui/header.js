import { Template } from 'meteor/templating';
 
import './header/messagelistel.js';
import './header/notiflistel.js';
import "./header/tasklistel.js"
import './header.html';

// to fix when data will be stored in DB (count)
var messageListCount = 2;
var notificationListCount = 5;
var taskListCount = 4;

Template.header.helpers({
	messageListElements: [
		{
			imageURL: '/img/user2-160x160.jpg',
			from: 'Support Team',
			time: '2 mins',
			message: 'Why not buy a new awesome theme?'},
		{
			imageURL: '/img/user3-128x128.jpg',
			from: 'AdminLTE Design Team',
			time: '5 mins',
			message: 'Why not buy a new awesome theme?'},
	],

});

Template.header.helpers({
	notificationListElements: [
		{
			msgType: 'fa-users',
			msgColor: 'text-aqua',
			message: '5 new members joined today' 
		},
		{
			msgType: 'fa-warning',
			msgColor: 'text-yellow',
			message: 'Very long description here that may not fit into the page and may cause design problems' 
		},
		{
			msgType: 'fa-users',
			msgColor: 'text-red',
			message: '5 new members joine' 
		},
		{
			msgType: 'fa-shopping-cart',
			msgColor: 'text-green',
			message: '25 sales made' 
		},
		{
			msgType: 'fa-user',
			msgColor: 'text-red',
			message: 'You changed your username' 
		},
	],
});

Template.header.helpers({
	taskListElements:[
		{
			message: 'Design some buttons',
			percentvalue: 20,
			barcolor: 'progress-bar-aqua'
		},
		{
			message: 'Create a nice theme',
			percentvalue: 40,
			barcolor: 'progress-bar-green'
		},
		{
			message: 'Some task I need to do',
			percentvalue: 70,
			barcolor: 'progress-bar-red'
		},
		{
			message: 'Make beautiful transitions',
			percentvalue: 100,
			barcolor: 'progress-bar-yellow'
		},
	]
});

Template.header.helpers({
  messageListElementsCount: function() {
    return messageListCount;
  }
});

Template.header.helpers({
  notificationListElementsCount: function() {
    return notificationListCount;
  }
});

Template.header.helpers({
  taskListElementsCount: function() {
    return taskListCount;
  }
});