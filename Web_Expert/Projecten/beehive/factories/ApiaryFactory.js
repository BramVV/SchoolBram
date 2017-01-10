/**
 * Created by Bram on 23/12/2016.
 */
(function(){
    'use strict';
    myApp.factory('apiaryFactory', apiaryFactory)

    apiaryFactory.$inject = ['$http','GLOBALS']
    function apiaryFactory($http,GLOBALS){
        var factory = {};

        factory.getApiarys = function () {
            return $http({
                method: 'POST',
                url: GLOBALS.apiBaseUrl + "apiarybyid",
                headers: {Accept: 'application/json',Authorization: sessionStorage.username + ":" + sessionStorage.password}
            });
        }

        return factory;
    }
})();