import ContactController from './contact.controller';
import routes from './contact.routes';

export default angular
  .module('app.contact', [])
  .controller('ContactController', ContactController)
  .config(routes)
  .name
;
