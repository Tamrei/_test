'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('ChartCtrl', ['$scope', '$timeout', 'progForceService', function ($scope, $timeout, progForceService) {

        /** PROGFORCE TEST TASK STARTS **/
        var barDefault = {
            labels: [],
            datasets: [{
                data: []
            }]
        };

        var progForceBar = document.getElementById("bar-progForce");
        var ctx = progForceBar.getContext("2d");
        var barInstance = new Chart(ctx).Bar(barDefault, {
            responsive: true
        });

        progForceBar.style.width ='100%';
        progForceBar.width  = progForceBar.offsetWidth;

        var lastBarLength = 0;
        $scope.onFileSelect = function(changeEvent) {
            var wordCount;

            var files = changeEvent.target.files;
            if (files.length) {
                var r = new FileReader();
                r.onload = function(e) {
                    wordCount = progForceService.countWord(e.target.result);

                    for (var i = 0; i < lastBarLength; i++) {
                        barInstance.removeData();
                    }

                    for (var i = 0; i < wordCount.length; i++) {
                        barInstance.addData([wordCount[i].count], wordCount[i].word);
                    }
                    lastBarLength = wordCount.length; //remember the amount of bars so we could remove exact same amount
                };
                r.readAsText(files[0]);
            }
        };
        /** PROGFORCE TEST TASK ENDS **/


        $scope.bar = {
            labels: ['2006', '2007', '2008'],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80],
                [28, 48, 40]
            ]
        };

        $scope.line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ],
            onClick: function (points, evt) {
                console.log(points, evt);
            }
        };



        $scope.donut = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        };

        $scope.radar = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

            data: [
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ]
        };

        $scope.pie = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        };

        $scope.polar = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120]
        };

        $scope.dynamic = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120],
            type: 'PolarArea',

            toggle: function () {
                this.type = this.type === 'PolarArea' ?
                    'Pie' : 'PolarArea';
            }
        };
    }]);