var mainApp=angular.module("mainApp",["mainApp.controllers","ngRoute"]);

mainApp.config(['$routeProvider',function($routeProvider){
$routeProvider
    .when("/",
    {
      controller: "HomeCntrl",
      templateUrl: "/Home.html" 
    })
	
	.when("/home",
    {
      controller: "HomeCntrl",
      templateUrl: "/Home.html" 
    })
	
	.when("/about",
    {
      controller: "AboutCntrl",
      templateUrl: "/about.html" 
    })
  
    .otherwise({ redirectTo: "/" });

}
]);
