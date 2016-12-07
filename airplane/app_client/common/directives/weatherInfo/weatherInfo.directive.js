(function () {

  angular
    .module('airplaneApp')
    .directive('weatherInfo', weatherInfo);

  function weatherInfo () {
    return {
      restrict: 'EA',
      scope: {
        weather : '=info',
      },      
      templateUrl: '/common/directives/weatherInfo/weatherInfo.template.html'
    };
  }
})();