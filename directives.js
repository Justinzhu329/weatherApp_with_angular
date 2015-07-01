// CUSTOM DIRECTIVE
weatherApp.directive('forecastResults', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/forecastResults.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
});