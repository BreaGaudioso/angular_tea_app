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
  var Cart = {};
  Cart.cart =[];
  return Cart;
}]);



