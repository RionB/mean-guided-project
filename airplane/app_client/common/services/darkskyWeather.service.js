(function() {

    angular
        .module('airplaneApp')
        .service('DarkskyWeather', darkskyWeather);

    darkskyWeather.$inject = ['$http', 'KeyStore'];

    function darkskyWeather($http, KeyStore) {
        var getWeather = function(lat, lon) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    var darkskykey = keys.DARK_SKY_KEY;
                    return $http.jsonp('https://api.darksky.net/forecast/' + darkskykey + '/' +
                        lat + ',' + lon + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        var getWeather2 =  function(lat, lon){
            return $http.jsonp('https://api.darksky.net/forecast/2a3778b155be84fd994dcfbf2eabed7a/' +
                lat + ',' + lon + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        }        

        return {
            getWeather: getWeather,
            getWeather2 : getWeather2
        };
    }
    


})();
