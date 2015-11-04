var app = angular.module('TeaShopApp');

app.controller('ShopCtrl', ['$scope', '$http', function($scope, $http){
  $scope.hey = "Heyyyyyyy";
  $http.get('../tea.json').then(function(data){
    $scope.teas = data.data;
    console.log($scope.teas);

  })
}])

