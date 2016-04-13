export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/contact', {
      template: require('./contact.html'),
      controller: 'ContactController as contact',
    })
  ;
}