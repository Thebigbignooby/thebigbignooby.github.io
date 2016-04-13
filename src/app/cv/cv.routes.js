/* @ngInject */
export default function routes($routeProvider) {
  $routeProvider
    .when('/cv', {
      template: require('./cv.html'),
      controller: 'cvController as cv',
    })
  ;
}