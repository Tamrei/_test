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
        var bar = {
            labels: [],
            //series: ['data'],
            datasets: [{
                data: []

            }]
        };

        var ctx = document.getElementById("bar-progForce").getContext("2d");
        var myBar = new Chart(ctx).Bar(bar, {
            //showScale: true,
            //showTooltips: false
            //animation: false,
            //maintainAspectRatio: false
            /*responsive : false,
            scaleBeginAtZero : true,
            scaleShowGridLines : true*/
            //barShowStroke: true
        });

        var lastBarLength = 0;

        var textFromFile;
        $scope.onFileSelect = function(changeEvent) {
            var wordCount;

            var files = changeEvent.target.files;
            if (files.length) {
                var r = new FileReader();
                r.onload = function(e) {
                    //var contents = e.target.result;
                    textFromFile = e.target.result;
                    wordCount = progForceService.countWord(textFromFile);

                    for (var i = 0; i < lastBarLength; i++) {
                        myBar.removeData();
                        lastBarLength = wordCount.length;
                    }

                    for (var i = 0; i < wordCount.length; i++) {
                        myBar.addData([wordCount[i].count], wordCount[i].word);
                    }
                };
                r.readAsText(files[0]);
            }
        };


        $scope.bar = {
            labels: ['2006', '2007', '2008'],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80],
                [28, 48, 40]
            ],
            onFileChange: function () {
                console.log(2);
                this.labels[0] = "TEST";
                this.labels.push("new one");
                this.series.push("new one");
                this.data.push(55);
                //this.update();
            }
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