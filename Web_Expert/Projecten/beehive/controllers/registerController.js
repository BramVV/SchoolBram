/**
 * Created by Bram on 14/12/2016.
 */
myApp.controller('registerController', registerController);
registerController.$inject = ['userFactory','$location'];
function registerController(userFactory,$location){
    var vm = this;
    vm.register = function (user) {
        userFactory.addUser(user);
        $location.path('/');
    }
}