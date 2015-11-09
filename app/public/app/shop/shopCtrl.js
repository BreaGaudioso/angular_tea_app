(function() {
  'use strict';
  angular
  .module("app.shop")
  .controller('ShopCtrl', ShopCtrl);

    ShopCtrl.$inject = ['$scope', 'TeaFactory']

    function ShopCtrl($scope, TeaFactory) {
      $scope.teas = TeaFactory.teas;
      $scope.categories =  ['dark', 'cold', 'awesome', 'dry', 'hot', 'warm', 'summer', 'winter', 'spring', 'lucid'];
      $scope.addToCart = function(tea, qty) {
        TeaFactory.addItem(tea, qty);
      }
    }
})();