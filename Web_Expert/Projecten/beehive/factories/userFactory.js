/**
 * Created by Bram on 15/12/2016.
 */
(function(){
    'use strict';
    myApp.factory('userFactory', userFactory)

    userFactory.$inject = ['$http','GLOBALS']
    function userFactory($http,GLOBALS){
        var factory = {};

        factory.login = function (username, password) {
            return $http({
                method: 'POST',
                url: GLOBALS.apiBaseUrl + "login",
                headers: {Accept: 'application/json',Authorization: username + ":" + password}
            });
        }
        factory.addUser = function(user){
            user.attempts = 0;
            user.last_attempt = 0;
            user.password = SHA256(user.password);

            console.log(JSON.stringify(user));
            return $http({
                method: 'POST',
                url: GLOBALS.apiBaseUrl + "register",
                data: JSON.stringify(user),
                headers: {Accept: 'application/json'}
            });
        }

        return factory;
    }
})();