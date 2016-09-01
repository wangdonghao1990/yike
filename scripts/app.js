

var Yike=angular.module('Yike',['ngRoute','dada']);

Yike.run(['$rootScope',function($rootScope){
    $rootScope.toggled = false;
    $rootScope.toggle = function(){
        $rootScope.toggled = !$rootScope.toggled;

        alert(2);


    } 
}])
