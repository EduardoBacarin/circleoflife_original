angular.module("app", ["chart.js"]).controller("BaseCtrl",
    function ($scope, $http, $element) {
        $scope.labels = [];
        //$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.data = [];
        //$scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
        $scope.type = 'polarArea';

        $scope.originalAreasFromDatabase = [];

        var chartOptions = {
            scale: "off"
        };
        $scope.options = chartOptions;

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

            $scope.selectedAreaIndex = 0;
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


        $scope.alert_setp2 = function() {
            alert("Test Alert on Step 2");
        }


        $scope.onClick = function (points, evt) {
            if (points[0] == null) {
                return;
            }
            $scope.selectedAreaIndex = points[0]._index;
            $scope.selectedAreaValue = $scope.data[points[0]._index];
            $scope.selectedAreaLabel = $scope.labels[points[0]._index];

            $scope.slider = parseInt($scope.selectedAreaValue);

            //gamb pra dar refresh no dom
            angular.element(gamb).triggerHandler('click');

            angular.element(slider).triggerHandler('change');

        };

        $scope.updateSelectedArea = function () {
            $scope.data[$scope.selectedAreaIndex] = $scope.slider;
        };

        $scope.updateCoLQuestion1 = function () {
            $scope.data[$scope.selectedAreaIndex] = $scope.slider;
        };


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
    });

