var app = angular.module('TeaShopApp');

app.controller('ShopCtrl', ['$scope', 'TeaFactory', function($scope, TeaFactory){
    $scope.teas = Teas.teas;
    $scope.categories =  ['dark', 'cold', 'awesome', 'dry', 'hot', 'warm', 'summer', 'winter', 'spring', 'lucid'];
    $scope.addToCart = function(tea, qty) {
      Teas.addItem(tea, qty);
    }
}]);

app.controller('CheckOutCtrl', ['$scope', 'TeaFactory', function($scope, TeaFactory){
  $scope.teaItems = Teas.teas;
  
    $scope.removeItem = function(tea) {
      Teas.removeItem(tea);
    };

  $scope.total = function() {
    return Teas.total();
  }
}])