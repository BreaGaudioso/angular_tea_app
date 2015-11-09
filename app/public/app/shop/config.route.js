(function() {
  angular
  .module('app.shop')
  .config(shopRoute);

  shopRoute.$inject = ['$routeProvider'];

  function shopRoute($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'app/shop/shop.html',
      controller: 'ShopCtrl'
    })
  }
})();