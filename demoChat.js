angular.module("app", ["chart.js"]).controller("ChartCtrl", function($scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    
    $scope.data = [65, 59, 80, 81, 56, 55, 40];
    var sum = $scope.data.reduce(function add(a, b) {
        return a + b;
    }, 0);
    
    $scope.options = {
      pieceLabel: {
        render: function (args) {
          return args.label + " " + Math.round(args.value*100/sum,2)+"%";
        },
        fontColor: '#000',
        position: 'outside',
        segment: true
      }
    };
  
});