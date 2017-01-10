/**
 * Created by Bram on 5/12/2016.
 */
var app = angular.module('myApp',[]);
app.controller('oef3Controller',function ($scope) {
    var artikels = [
        ["1","Tandenborstel",3.25,1.50],
        ["2","Tandenborstel2",3.25,1.50]
    ]
    $scope.artikels = artikels;
})