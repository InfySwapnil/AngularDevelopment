var mainApp=angular.module("mainApp",["mainApp.controllers",
"mainApp.directives",
"ui.bootstrap",
"ngRoute"
]);

mainApp.config(['$routeProvider',function($routeProvider){
$routeProvider
    	
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

	.when("/personal",
    {
      controller: "AboutCntrl",
      templateUrl: "/personal.htm" 
    })

	.when("/health",
    {
      controller: "AboutCntrl",
      templateUrl: "/health.htm" 
    })

	
	.when("/financial",
    {
      controller: "AboutCntrl",
      templateUrl: "/financial.htm" 
    })

	
	
    .otherwise({ redirectTo: "/home" });

}
]);
