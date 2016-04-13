export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      template: require('./home.html'),
      controller: 'HomeController as home',
    })
  ;
}