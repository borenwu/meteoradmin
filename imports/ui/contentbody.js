import { Template } from 'meteor/templating';

import './menu/labelel.js';
import './menu/menuel.js';
import './contentbody.html';

Template.contentbody.helpers({
	menuElements:[
		{
			header: true,
			menuName: 'MAIN NAVIGATION'
		},
		{
			active: true,
			menuName: 'Dashboard',
			leftIcon: 'fa-dashboard',
			rightIcon: 'fa-angle-left',
			subMenuElements:[
				{
					active: true,
					url: 'index1.html',
					menuName: 'Dashboard 1',
				},
				{
					url: 'index2.html',
					menuName: 'Dashboard 2',
				},
			],
		},
		{
			menuName: 'Layout Options',
			leftIcon: 'fa-files-o',
			labels:[
				{
					color:'label-primary',
					value: 4,
				}
			],
			subMenuElements:[
				{
					active: true,
					url: 'pages/layout/top-nav.html',
					menuName: 'Top Navigation',
				},
				{
					url: 'pages/layout/boxed.html',
					menuName: 'Boxed',
				},
				{
					url: 'pages/layout/fixed.html',
					menuName: 'Fixed',
				},
				{
					url: 'pages/layout/collapsed.html',
					menuName: 'Collapsed Sidebar',
				},
			],
		},
		{
			menuName: 'Widgets',
			leftIcon: 'fa-th',
			labels:[
				{
					color:'label-primary bg-green',
					value: 'new',
				}
			],
			url: 'pages/widgets.html',
		},
		{
			menuName: 'Charts',
			leftIcon: 'fa-pie-chart',
			rightIcon: 'fa-angle-left',
			subMenuElements:[
				{
					active: true,
					url: 'pages/charts/chartjs.html',
					menuName: 'Chart JS',
				},
				{
					url: 'pages/charts/morris.html',
					menuName: 'Morris',
				},
				{
					url: 'pages/charts/flot.html',
					menuName: 'Flot',
				},
				{
					url: 'pages/charts/inline.html',
					menuName: 'Inline charts',
				},
			]
		},
		{
			menuName:'UI Elements',
			rightIcon: 'fa-angle-left',
			leftIcon: 'fa-laptop',
			subMenuElements:[
				{
					url: 'general.html',
					menuName: 'General',
				},
				{
					url: 'icons.html',
					menuName: 'Icons',
				},
				{
					url: 'buttons.html',
					menuName: 'buttons',
				},
				{
					url: 'sliders.html',
					menuName: 'Sliders',
				},
				{
					url: 'timeline.html',
					menuName: 'TimeLine',
				},
				{
					url: 'modals.html',
					menuName: 'Modals',
				}
			]
		},
		{
			menuName:'Forms',
			rightIcon: 'fa-angle-left',
			leftIcon: 'fa-edit',
			subMenuElements:[
				{
					url: 'forms/general.html',
					menuName: 'General Elements',
				},
				{
					url: 'forms/advanced.html',
					menuName: 'Advanced Elements',
				},
				{
					url: 'forms/editors.html',
					menuName: 'Editors',
				},
			]
		},
		{
			menuName:'Tables',
			rightIcon: 'fa-angle-left',
			leftIcon: 'fa-table',
			subMenuElements:[
				{
					url: 'tables/simple.html',
					menuName: 'Simple tables',
				},
				{
					url: 'tables/data.html',
					menuName: 'Data tables',
				},
			]
		},
		{
			menuName: 'Calendar',
			url:'calendar.html',
			leftIcon:'fa-calendar',
			labels:[
				{
					color:'label bg-red',
					value: 3,
				},
				{
					color:'label bg-blue',
					value: 17,
				}
			]
		},
		{
			menuName:'Mailbox',
			leftIcon: 'fa-envelope',
			labels:[
				{
					color:'bg-yellow',
					value:'12'
				},
				{
					color:'bg-green',
					value:'16'
				},
				{
					color:'bg-red',
					value:'5'
				},
			]
		},
		{
			menuName:'Examples',
			leftIcon:'fa-folder',
			rightIcon: 'fa-angle-left',
			subMenuElements:[
				{
					url: 'examples/invoice.html',
					menuName: 'Invoice',
				},
				{
					url: 'examples/profile.html',
					menuName: 'Profile',
				},
				{
					url: 'examples/login.html',
					menuName: 'Login',
				},
				{
					url: 'examples/register.html',
					menuName: 'Register',
				},
				{
					url: 'examples/lockscreen.html',
					menuName: 'Lockscreen',
				},
				{
					url: 'examples/404.html',
					menuName: '404',
				},
				{
					url: 'examples/500.html',
					menuName: '500',
				},
				{
					url: 'examples/blank.html',
					menuName: 'Blank Page',
				},
				{
					url: 'examples/pace.html',
					menuName: 'Pace Page',
				},
			]
		},
		{
			menuName:'Multilevel',
			rightIcon:'fa-angle-left',
			leftIcon:'fa-share',
			subMenuElements:[
				{
					menuName: 'Level 1'
				},
				{
					menuName: 'level 2',
					rightIcon:'fa-angle-left',
					subMenuElements:[
						{
							menuName:'subLevel 2'
						},
						{	
							menuName:'subLevel 3',
							rightIcon: 'fa-angle-left',
							subMenuElements:[
								{
									menuName: 'subLevel 3'
								}
							]
						}
					]
				}
			]
		},
		{
			menuName:'Documentation',
			url:'https://adminlte.io/docs',
			leftIcon:'fa-book'
		},
		{
			header: true,
			menuName: 'LABELS'
		},
		{
			menuName:'Important',
			leftIcon:'fa-circle-o text-red',
		},
		{
			menuName:'Warning',
			leftIcon:'fa-circle-o text-yellow',
		},
		{
			menuName:'Information',
			leftIcon:'fa-circle-o text-aqua',
		},
	],
});