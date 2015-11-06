var app = angular.module("TeaShopApp");
app.filter('yesOrNo', function() {
  return function(text) {
    if (text === true ) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
});