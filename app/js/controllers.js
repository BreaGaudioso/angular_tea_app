var app = angular.module('TeaShopApp');

app.controller('ShopCtrl', ['$scope', 'TeaFactory', 'CartFactory', function($scope, TeaFactory, CartFactory){
    $scope.teas = Teas.teas;
    $scope.cart = Cart.cart
    $scope.quanitity = Cart.quantity
    $scope.categories =  ['dark', 'cold', 'awesome', 'dry', 'hot', 'warm', 'summer', 'winter', 'spring', 'lucid'];
    $scope.addToCart = 
}]);


app.controller('CheckOutCtrl', ['$scope', '$http', function($scope, $http){


}])