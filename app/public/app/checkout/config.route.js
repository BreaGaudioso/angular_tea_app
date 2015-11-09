(function() {
  angular
  .module('app.checkout')
  .config(checkoutRoute);

  checkoutRoute.$inject = ['$routeProvider'];

  function checkoutRoute($routeProvider){
    $routeProvider
    .when('/checkout', {
      templateUrl: 'app/checkout/checkout.html',
      controller: 'CheckOutCtrl'
    })
  }
})();