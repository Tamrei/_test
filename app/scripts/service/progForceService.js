'use strict';

angular.module('sbAdminApp')
    .factory('progForceService', function () {

        var service = {
            countWord: countWord
        };

        return service;

        /**
         * returns array with two prop 'word' and 'count'
         * where word is the word that occurrence in @param string
         * and count prop stores how much this word occurrences
         *
         * @param string
         * @returns {Array}
         */
        function countWord(string) {
            string = string.replace(/-|:|,|\./g, ""); // remove spec symbols
            string = string.replace(/\r?\n|\r/g, " "); // remove breaks
            var arr = string.split(" ");

            var result = [];

            function countOccurrences(element){
                var len = arr.length;
                var count = 0;
                for(var i = 0; i < len; i++){
                    if(arr[i] === element){
                        if (count >= 1) {arr.splice(i, 1);} // remove duplicated element from array
                        count++;
                    }
                }
                return count;
            }

            for (var i = 0; i < arr.length; i++) {
                var count = countOccurrences(arr[i]);
                var word = arr[i] + "";

                if (word.length >= 2 && count >= 2) {
                    result.push({
                        word: word.toLowerCase(),
                        count: count
                    });
                }
            }

            function compare(a,b) {
                if (a.count < b.count)
                    return 1;
                else if (a.count > b.count)
                    return -1;
                else
                    return 0;
            }

            result.sort(compare);

            return result;
        }

    });
