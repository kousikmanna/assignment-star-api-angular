require('./reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
global.jQuery = require('jquery');
var $ = require('jquery');
window.$ = $;
require('font-awesome/css/font-awesome.css');
require('bootstrap/scss/bootstrap.scss')
require('bootstrap/dist/js/bootstrap.js')
require('./scss/style.scss')
import appConfig from './config.es6.js';


import './features/directives/star.directive.es6.js'
import MainController from './features/controllers/main-controller.es6.js'
import starService from './features/services/star-service.es6.js'




angular.module('app', [uiRouter,
starService,
"directives.starDetail",
])
.controller('MainController', MainController)
.config(appConfig);
