(function() {

  angular
    .module('airplaneApp')
    .service('AirportData', airportData);

  airportData.$inject = ['$http'];
  function airportData ($http) {
      var getAirports = function(){
          return $http.get('/api/airportData');
      }

      return {
          getAirports : getAirports,
      };
  }

})();