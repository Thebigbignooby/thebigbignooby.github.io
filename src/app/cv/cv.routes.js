export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/cv', {
      template: require('./cv.html'),
      controller: 'cvController as cv',
    })
  ;
}