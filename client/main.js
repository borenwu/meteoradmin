// Import Tether.js - Bootstrap tooltip requires Tether.
// We also add 'global.Tether' as a workaround for Meteor.
import tether from 'tether';
global.Tether = tether;

// JS

import '../node_modules/jquery/dist/jquery.min.js';
// Bootstrap 3.3.7 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/raphael/raphael.min.js';
import '../node_modules/morris.js/morris.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/jquery-sparkline/jquery.sparkline.min.js';
import '../node_modules/jquery-ui/build/release.js';

// Resolve conflict in jQuery UI tooltip with Bootstrap tooltip 
// not working yet
// $.widget.bridge('uibutton', $.ui.button);

// <!-- jvectormap -->
// import "../node_modules/jvectormap/jquery-jvectormap.min.js";
// import "../node_modules/jvectormap/jquery-jvectormap-world-mill-en.js";
// <!-- jQuery Knob Chart -->
// import "../node_modules/jquery-knob/dist/jquery.knob.min.js";
// daterangepicker
// import "../node_modules/moment/min/moment.min.js";
// import "../node_modules/bootstrap-daterangepicker/daterangepicker.js";
// datepicker
// import '../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
// Bootstrap WYSIHTML5 
// import '../node_modules/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js';
// Slimscroll
// import '../node_modules/jquery-slimscroll/jquery.slimscroll.min.js';
// FastClick
// import '../node_modules/fastclick/lib/fastclick.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
// AdminLTE dashboard demo (This is only for demo purposes)
// import '../node_modules/admin-lte/dist/js/pages/dashboard.js';
// import '../node_modules/admin-lte/dist/js/demo.js';

import '../imports/ui/body.js';

// CSS
// bootstrap imported in main.html (due to the chrome warnings)
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/ionicons/dist/css/ionicons.min.css';
import '../node_modules/admin-lte/dist/css/AdminLTE.css';
import '../node_modules/admin-lte/dist/css/skins/_all-skins.min.css';



