import HomeController from './home.controller';
import routes from './home.routes';

export default angular
  .module('app.home', [])
  .controller('HomeController', HomeController)
  .config(routes)
  .name
;
