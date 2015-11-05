var app = angular.module('TeaShopApp');

app.controller('ShopCtrl', ['$scope', 'TeaFactory', 'CartFactory', function($scope, TeaFactory, CartFactory){
    $scope.teas = Teas.teas;
    $scope.cart = []
    $scope.quanitity = 0
    $scope.categories =  ['dark', 'cold', 'awesome', 'dry', 'hot', 'warm', 'summer', 'winter', 'spring', 'lucid'];
    $scope.addToCart = function(id, number) {
      if (tea !== undefined) {
        tea = {teaId: id, quantity: number}
        $scope.cart.push(tea);
        $scope.quantity += parseInt(tea);
        // this doesnt work still
      }
      return $scope.cart
    };
}]);


app.controller('CheckOutCtrl', ['$scope', '$http', function($scope, $http){


}])