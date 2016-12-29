  var mainApp=angular.module("mainApp",["mainApp.controllers",
    "mainApp.directives",
    "ui.bootstrap",
    "ngRoute"
    ]);

  mainApp.factory("addRemovetrans",function($http){
    return{

      addTask: function()
      { var newTaskid=0; 
        console.log("Taskid is"+newTaskid); 
      },

      removeTask:function(taskid)
      {
        console.log("Taskid is"+taskid);
      },

      fetchDetails: function()
      {
      return $http({
        method: "GET",
        url: "data/task_details.json"  
      })
    }



  }
});



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
