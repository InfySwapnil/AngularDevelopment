var mainApp=angular.module("mainApp",["mainApp.controllers","ngRoute"]);

mainApp.config(['$routeProvider',function($routeProvider){
$routeProvider
    .when("/",
    {
      controller: "",
      templateUrl: "" 
    })
  
    .otherwise({ redirectTo: "/" });

}
]);
