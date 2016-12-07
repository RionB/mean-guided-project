(function() {

    angular
        .module('airplaneApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'SelectedData', 'DarkskyWeather'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Weather";

        vm.selectedDepartureICAO = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedDepartureICAO !== null) {
            vm.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
        }
        
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }

        vm.getDepartureWeather = function() {
            
            var lat = vm.selectedDepartureICAO.airportLat;
            console.log(lat);
            var lon = vm.selectedDepartureICAO.airportLon;
            console.log(lon);            

            DarkskyWeather.getWeather2(lat, lon)
                .success(function(data) {
                    vm.departureWeather = data;
                    console.log(vm.departureWeather);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        vm.getArrivalWeather = function() {
            
            var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            DarkskyWeather.getWeather2(lat, lon)
                .success(function(data) {
                    vm.arrivalWeather = data;
                    console.log(vm.arrivalWeather);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getDepartureWeather();
        vm.getArrivalWeather();

    }

})();
