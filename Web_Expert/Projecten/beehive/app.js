/**
 * Created by Bram on 9/12/2016.
 */
var myApp = angular.module('myApp',["ngRoute"]).config(moduleConfig);
myApp.config(['$controllerProvider',
    function($controllerProvider) {
        $controllerProvider.allowGlobals();
    }
]);
/* ROUTING */
moduleConfig.$inject=['$routeProvider'];
function moduleConfig($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'views/homeView.html'
    }).when('/dashboard',{
        templateUrl:'views/dashboardView.html',
        controller: 'dashboardController',
        controllerAs:'dashCtrl'
    }).when('/login',{
        templateUrl: 'views/loginView.html',
        controller: 'loginController',
        controllerAs: 'loginCtrl'
    }).when('/register',{
        templateUrl: 'views/registerView.html',
        controller: 'registerController',
        controllerAs: 'regCtrl'
    }).when('/registerApiary',{
        templateUrl:'views/registerApiaryView.html'
    }).when('/registerBeehive',{
        templateUrl:'views/registerBeehiveView.html',
        controller: 'registerBeehiveController',
        controllerAs: 'regBeehiveCtrl'
    }).when('/registerHoney_extraction',{
        templateUrl:'views/registerHoney_extractionView.html'
    }).when('/registerQueen',{
        templateUrl:'views/registerQueenView.html'
    }).when('/registerTreatment',{
        templateUrl:'views/registerTreatmentView.html'
    }).when('/apiary/:id',{
        templateUrl:'view/apiary.html',
        controller: 'apiaryController',
        controllerAs: 'apiaryCtrl'
    }).otherwise({
        templateUrl:'views/404.html'
    });
}