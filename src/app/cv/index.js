import cvController from './cv.controller';
import routes from './cv.routes';

export default angular
  .module('app.cv', [])
  .controller('cvController', cvController)
  .config(routes)
  .name
;
