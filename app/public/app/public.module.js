(function(){
  'use strict';

  angular.module('TeaShopApp', [
    'ngRoute',
    'app.shop',
    'app.checkout'
  ])

  .config(configRoutes)
  
  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider){
    $routeProvider
    .otherwise({
      redirectTo: '/'
    })
  }
})();
