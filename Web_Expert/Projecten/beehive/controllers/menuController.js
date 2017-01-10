/**
 * Created by Bram on 9/12/2016.
 */
myApp.controller('menuController', function(){
    var vm = this;
    vm.menu = [
        {'name': 'Home', 'view': 'index.html#/'},
        {'name': 'Region Dashboard', 'view': 'regionDashboard.html'}
        ];
    vm.changeView = function (view) {
        console.log(view);
    }
}
)