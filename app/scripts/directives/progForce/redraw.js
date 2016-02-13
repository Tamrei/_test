/**
 * Created by Alexandr on 2/13/2016.
 */

'use strict';

angular.module('sbAdminApp')
    .directive('redraw',function(){
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log("directive.");
                //var onChangeHandler = scope.$eval(attrs.onFileChange);
                //element.bind('change', onChangeHandler);
            }
        }
    });


