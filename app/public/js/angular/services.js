var app = angular.module('TeaShopApp');

app.factory("TeaFactory", ['$http', function($http){
  Teas = {};
  Teas.teas = [];
  $http.get('http://localhost:3333/teas').then(function(data) {
    var allTea = data.data
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
        $http.put('http://localhost:3333/teas/' + Teas.teas[i]._id, Teas.teas[i]).success(function(data){
          console.log('success');
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
      };
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