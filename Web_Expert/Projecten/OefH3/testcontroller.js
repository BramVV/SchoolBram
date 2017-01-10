/**
 * Created by Bram on 5/12/2016.
 */

angular.module('myApp',[])
.controller('myController',myController);
function myController(){
    var vm = this;

    vm.art = [
        [1,'tandeborstel',5,5],
        [2,'broeken',5,5]
    ];
}