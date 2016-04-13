/* @ngInject */
export default function routes($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('./home.html'),
      controller: 'HomeController as home',
    })
  ;
}