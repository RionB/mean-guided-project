(function() {

    angular
        .module('airplaneApp')
        .controller('climbCtrl', climbCtrl);

    climbCtrl.$inject = ['$scope', 'AirplaneData', 'SelectedData'];

    function climbCtrl($scope, AirplaneData, SelectedData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Climb Data";

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

        vm.getClimbDataForWeight = function() {
            
            AirplaneData.getClimbDataForWeight(vm.selectedWeight.weight)
                .success(function(data) {
                    //since find may select many, just return the single object
                    vm.climbData = data[0];
                    console.log(vm.climbData);
                })
                .error(function(e) {
                    console.log(e);
                });            
        }

        console.log("IN CLIMB DATA FOR WEIGHT: " + vm.selectedWeight.weight);        
        //call services
        vm.getClimbDataForWeight();
    }

})();
