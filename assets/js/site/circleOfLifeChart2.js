angular.module("app", ["chart.js"]).controller("BaseCtrl",
    function ($scope, $http, $element) {
        //$scope.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        //$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.labels = [];
        $scope.data   = [];
        $scope.colors = ['#FF9B9B', '#FC7373', '#FC4747', '#F70F0F', '#B0CBFF', '#7EA9FF', '#4986FF', '#1663FC', '#BAFF97', '#98FF64', '#80FD42', '#5EFF0D'];
        $scope.type = 'polarArea';

        $scope.originalAreasFromDatabase = [];

        $scope.options = {
          pieceLabel: {
            render: function (args) {
              return args.label ;
            },
            fontColor: '#000',
            position: 'outside',
            segment: true
          },
          scale: {
            ticks: {
                min: 0,
                max: 10,
                stepSize: 1
            }
          }
        };

        $scope.options2 = {
          pieceLabel: {
            render: function (args) {
              return args.labels2 ;
            },
            fontColor: '#000',
            position: 'outside',
            segment: true
          },
          scale: {
            ticks: {
                min: 0,
                max: 10,
                stepSize: 1
            }
          }
        };
        
        $scope.options3 = {
          pieceLabel: {
            render: function (args) {
              return args.labels3 ;
            },
            fontColor: '#000',
            position: 'outside',
            segment: true
          },
          scale: {
            ticks: {
                min: 0,
                max: 10,
                stepSize: 1
            }
          }
        };


        $scope.toggle = function () {
            $scope.type = $scope.type === 'polarArea' ?
                'pie' : 'polarArea';
        };

        $scope.getCircleData = function () {
            $scope.userId = angular.element(userId)[0].value;
            $http.get("/circleoflife/index.php/home/getCircleOfLifeByUserId/" + $scope.userId).then(function (response) {
                $scope.originalAreasFromDatabase = response.data.defaultChart;
                $scope.drawCircleFromData(response.data);
            });
        };



        $scope.drawCircleFromData = function (data) {
            if (data.userChart.length == 0) {
                if (data.defaultChart.length == 0) {
                    return;
                }
                $scope.setCircleLabelsAndValuesFromArray(data.defaultChart);
            } else {
                $scope.setCircleLabelsAndValuesFromArray(data.userChart);
            }

            //$scope.selectedAreaIndex = selectedAreaLabel[0];
            $scope.selectedAreaValue = $scope.data[0];
            $scope.selectedAreaLabel = $scope.labels[0];


            $scope.slider = parseInt($scope.selectedAreaValue);


        };



        $scope.setCircleLabelsAndValuesFromArray = function (dataArray) {
            dataArray.forEach(function (data) {
                $scope.labels.push(data.description);
                $scope.data.push(data.score);
            });

        }





        $scope.getCircleData();

        $scope.gambButtonClick = function() {

        }


        $scope.alert_step2 = function() {
            $scope.labels2 = $scope.labels;
            $scope.data2 = $scope.data.slice();
            for(var i =0; i<9; i++){
                $scope.hideSmallestValueOnSecondChart();    
            }
        }

        $scope.hideSmallestValueOnSecondChart = function () {
            var smallestElementPosition = $scope.findSmallestElementOnGivenArray($scope.data2);
            $scope.data2[smallestElementPosition] = 0; 

            //$scope.labels2[smallestElementPosition] = '';

        }

        $scope.findSmallestElementOnGivenArray = function (givenArray) {
            var smallestValue = 9999999;
            var smallestElementPosition = -1;

            for (var i = 0; i < givenArray.length; i++) {
                if (parseInt(givenArray[i]) > 0 && parseInt(givenArray[i]) <= parseInt(smallestValue)) {
                      smallestValue = givenArray[i];
                      smallestElementPosition = i;
                }
            }
            return smallestElementPosition;
        }

        $scope.alert_step3 = function() {
            $scope.labels3 = $scope.labels;
            $scope.data3 = $scope.data.slice();
            for(var i =0; i<9; i++){
                $scope.hidelargestValueOnThirdChart();    
            }
        }

        $scope.hidelargestValueOnThirdChart = function () {
            var largestElementPosition = $scope.findLargestElementOnGivenArray($scope.data3);
            $scope.data3[largestElementPosition] = 0; 
            //$scope.labels3[largestElementPosition] = "";
        }

        $scope.findLargestElementOnGivenArray = function (givenArray) {
            var largestValue = 0;
            var largestElementPosition = -1;

            for (var i = 0; i < givenArray.length; i++) {
                if (parseInt(givenArray[i]) > 0 && parseInt(givenArray[i]) >= parseInt(largestValue)) {
                      largestValue = givenArray[i];
                      largestElementPosition = i;
                }
            }
            return largestElementPosition;
        }

        $scope.onClick = function (points, evt) {
            if (points[0] == null) {
                return;
            }
            $scope.selectedAreaIndex = points[0]._index;
            $scope.selectedAreaValue = $scope.data[points[0]._index];
            $scope.selectedAreaLabel = $scope.labels[points[0]._index];

            $scope.slider = parseInt($scope.selectedAreaValue);



            $scope.slider1 = 1;

            $http.get("/circleoflife/index.php/home/getCircleOfLifeAnswerByUserIdandQuestionId/" + $scope.userId + "/" + $scope.slider + "/1").then(function (response) {
                $scope.slider1    = response.data.answer_result;})
                


            $scope.slider2 = 1;
            $scope.slider3 = 1;
            $scope.slider4 = 1;
            $scope.slider5 = 1;
            $scope.slider6 = 1;
            $scope.slider7 = 1;
            $scope.slider8 = 1;
            $scope.slider9 = 1;


            //gamb pra dar refresh no dom
            angular.element(gamb).triggerHandler('click');

            angular.element(slider).triggerHandler('change');
        };

        $scope.updateSelectedArea = function () {
            $scope.data[$scope.selectedAreaIndex] = $scope.slider;
        };

        
        /*
        $scope.updateSelectedQuestion = function () {
            $scope.slider1 = 5;
            $scope.slider2 = 6;
            $scope.slider3 = 7;
            $scope.slider5 = 8;
            $scope.slider6 = 9;
            $scope.slider7 = 4;
            $scope.slider8 = 3;
            $scope.slider9 = 2;
        };
        */

        $scope.saveCircleChanges = function () {
            dataToSave = [];

            for (var i = 0; i < $scope.originalAreasFromDatabase.length; i++) {
                dataToSave.push({
                    'account_id': $scope.userId,
                    'circle_of_life_id': $scope.originalAreasFromDatabase[i].id_circle_of_life,
                    'result': $scope.data[i]
                });
            }

            $http({
                url: '/circleoflife/index.php/home/writeCircleOfLifeFromUser/',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                method: "POST",
                data: angular.toJson(dataToSave)
            }).then(function(response) {
                window.location.reload();
            }, function(response) {
                console.log(response);
            });

        };

        $scope.updateCoLQuestion = function () {
            $scope.answer_value = $scope.slider1;
        }

    });

