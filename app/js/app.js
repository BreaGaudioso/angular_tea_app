var app = angular.module('TeaShopApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/checkout', {
      templateUrl: 'partials/checkout.html',
      controller: 'CheckOutCtrl'
  });
  
  $routeProvider
    .otherwise({
      templateUrl: 'partials/shop.html',
      controller: 'ShopCtrl'
    });
})