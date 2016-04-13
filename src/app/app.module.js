import {} from 'angular';
const angular = window.angular;
import ngRoute from 'angular-route';

import config from './app.config';

import contact from './contact';
import home from './home';
import cv from './cv';

angular.module('app', [
    ngRoute,

    home,
    cv,
    contact,
  ])
  .config(config)
;

require('../scripts/main');