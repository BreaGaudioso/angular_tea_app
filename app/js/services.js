var app = angular.module('TeaShopApp');

app.factory("TeaFactory", ['$http', function($http){
  Teas = {};
  Teas.teas = [];
  $http.get('../tea.json').then(function(data) {
    var allTea = data.data
    console.log(allTea)
    allTea.forEach(function(tea) {
      Teas.teas.push(tea);
    });
  });
  return Teas;
}]);

app.factory('CartFactory', [function() {
  Cart = {};
  Cart.cart =[];
  Cart.quantity = 0
    Cart.addToCart = function(id, number) {
      if (tea !== undefined) {
        tea = {teaId: id, quantity: number}
        Cart.cart.push(tea);
        Cart.quantity += parseInt(tea);
      }
    };
  return Cart;
}]);



