'use strict';

angular.module('sbAdminApp')
    .factory('progForceService', function () {
        var service = {
            countWord: countWord
        };
        return service;

        function countWord(string) {
            string = string.replace(/-|:|,|\.|goat/gi, ""); // regexp
            var arr = string.split(" ");

            var finalResult = [];

            var wordsArr = [];
            var countArr = [];

            for (var i = 0; i < arr.length; i++) {
                var occurrence = countOccurrences(arr, arr[i]);

                var word = arr[i].toLowerCase();

                if (!isIn(wordsArr, word) && word.length >= 2) {
                    wordsArr.push(word);
                    countArr.push(occurrence);
                }
            }

            //console.log(wordsArr.length);
            //console.log(countArr.length);

            for (var j = 0; j < countArr.length; j++) {
                //console.log(countArr[j]);
                if (countArr[j] >= 2) {
                    finalResult.push({
                       word: wordsArr[j],
                        count: countArr[j]
                    });
                }
            }

            return finalResult;
        }

        function isIn(arr, element) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === element) {
                    return true
                }
            }
        }

        function countOccurrences(arr, value){
            var len = arr.length;
            var occur = 0;
            for(var i = 0; i < len; i++){
                if(arr[i] === value){
                    occur++;
                }
            }
            return occur;
        }

        //var count = countOccurrences(['aaa','bbb','ccc','bbb','ddd'],'bbb');    //2

        // res = array
        function isContain(res, value) {
            var length = res.length;

            for (var j = 0; j < length; j++) {
                //console.log(res[j].word.toUpperCase());
                //console.log(value.toUpperCase());
                var word = "" + res[j].word.toUpperCase();
                console.log(word);
                if (word == value.toUpperCase()) {
                    console.log("+++");
                    return true;
                }
            }
        }

    });
