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

Teas.addItem = function(teaName, qty) {
    qty = Number(qty)
    for (var i = 0; i < Teas.teas.length; i ++) {
      if (Teas.teas[i].name === teaName) {
        if (qty === undefined || isNaN(qty)) {
          qty = 1;
        }
        Teas.teas[i].qty = Number(Teas.teas[i].qty)
        Teas.teas[i].qty += qty;
      }
    }
  }

Teas.removeItem = function(tea) {
  tea.qty = 0;
}

Teas.total = function() {
  var total = 0;
  angular.forEach(Teas.teas, function(item) {
    total += item.qty * item.price;
  })
  return total;
}
  return Teas;
}]);


