(function(){
  'use strict';
  angular
    .module('app.checkout')
    .controller('CheckOutCtrl', CheckOutCtrl);

  CheckOutCtrl.$inject = ['$scope', 'TeaFactory']

  function CheckOutCtrl($scope, TeaFactory){
     $scope.teaItems = TeaFactory.teas;
      $scope.removeItem = function(tea) {
       TeaFactory.removeItem(tea);
    };
    $scope.total = function() {
      return TeaFactory.total();
    };
  }

})();
