(function() {
  angular
  .module("app.shop")
  .factory('TeaFactory', TeaFactory);
  TeaFactory.$inject = ['$http'];

  function TeaFactory($http) {
    TeaFactory = {};
    TeaFactory.teas = [];
    $http.get('http://localhost:3333/teas').then(function(data) {
      var allTea = data.data
      allTea.forEach(function(tea) {
        TeaFactory.teas.push(tea);
      });
    });
  
    TeaFactory.addItem = function(teaName, qty) {
      qty = Number(qty)
      for (var i = 0; i < TeaFactory.teas.length; i ++) {
        if (TeaFactory.teas[i].name === teaName) {
          if (qty === undefined || isNaN(qty)) {
            qty = 1;
          }
          TeaFactory.teas[i].qty = Number(TeaFactory.teas[i].qty)
          TeaFactory.teas[i].qty += qty;
          $http.put('http://localhost:3333/teas/' + TeaFactory.teas[i]._id, TeaFactory.teas[i]).success(function(data){
            console.log('success');
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
        };
      }
    }

    TeaFactory.removeItem = function(tea) {
      tea.qty = 0;
    };

    TeaFactory.total = function() {
      var total = 0;
      angular.forEach(TeaFactory.teas, function(item) {
        total += item.qty * item.price;
      });
      return total;
    };
    return TeaFactory;
  };
})();