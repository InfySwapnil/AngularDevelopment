  var mainApp=angular.module("mainApp",["mainApp.controllers",
    "mainApp.directives",
    "ui.bootstrap",
    "ngRoute"
    ]);

  mainApp.factory("addRemovetrans",function($http){
    return{

      addTask: function(task,event,type)
      { 

        
        var parEl = angular.element( document.querySelector('#task-List'));
        var taskId=parseInt(parEl.find("input").attr("value"));
        taskId=taskId+1;        
        

        var  htmlElem='<div ng-repeat="taskRow in AllTasks" id="'+taskId+'" class="each-task">';
        htmlElem=htmlElem+'<input type="checkbox" name="'+taskId +'" value="'+taskId +'" />';
        htmlElem=htmlElem+'<span class="task-name">'+task+'</span></div>';


        
        parEl.prepend(htmlElem);

        //myArray.unshift({number:'5', value:'Electronics'})
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
