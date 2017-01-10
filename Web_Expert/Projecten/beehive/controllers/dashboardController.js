/**
 * Created by Bram on 15/12/2016.
 */
myApp.controller("dashboardController",dashboardController);
dashboardController.$inject = ['apiaryFactory','$location'];
function dashboardController(apiaryFactory, $location) {
    var vm = this;

    if(sessionStorage.permissions_level < 1){
        $location.path("/login");
    }

    apiaryFactory.getApiarys()
        .success(function (data,status,header,config) {
            vm.apiarys = data;
        }).error(function (data,status,header,config){

    })

}