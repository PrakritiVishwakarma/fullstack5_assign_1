(
  function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', gocheck);

    // function check($scope){
    //   $scope.result = "ok";
    // }
    gocheck.$inject = ['$scope'];
    function gocheck($scope){
      $scope.result = "";
      $scope.check = function(){
        $scope.result = foodAmountResult();
      };

      function foodAmountResult(){
        var foods = document.getElementById('lunch-menu').value;
        foods = foods.toString().split(",");
        // alert(foods.length);
        if(foods.length===0) return "Please enter data first";
        else if(foods.length<=3) return "ok Enjoy!!!";
        else return "Tooo Much!!!";

      }
    }

  }
)();
