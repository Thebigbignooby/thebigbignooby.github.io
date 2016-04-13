/* @ngInject */
export default function routes($routeProvider) {
  $routeProvider
    .when('/contact', {
      template: require('./contact.html'),
      controller: 'ContactController as contact',
    })
  ;
}