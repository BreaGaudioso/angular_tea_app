var app = angular.module('TeaShopApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'CheckOutCtrl'
  });
  
  $routeProvider
    .otherwise({
      templateUrl: 'views/shop.html',
      controller: 'ShopCtrl'
    });
})