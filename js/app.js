  var mainApp=angular.module("mainApp",["mainApp.controllers",
    "mainApp.directives",
    "ui.bootstrap",
    "ngRoute"

    ]);

  mainApp.factory("addRemovetrans",function($http, $filter){
    return{

      addTask: function(task,event,type)
      { 

        var CreateDate=$filter('date')(new Date(), 'dd/MM/yyyy');
        var CreateTime=$filter('date')(new Date(), 'hh:mm:ss a');
        var parEl = angular.element( document.querySelector('#task-List'));
        var taskId=parseInt(parEl.find("input").attr("value"));
        taskId=taskId+1;        
        
        // var  htmlElem='<div ng-repeat="taskRow in AllTasks" id="'+taskId+'" class="each-task" ng-click="editTask('+taskId+',$event)" >';
        // console.log($compile(htmlElem)($scope));
        // htmlElem=htmlElem+'<input type="checkbox" name="'+taskId +'" value="'+taskId +'" ng-click="$event.stopPropagation()" />';
        // htmlElem=htmlElem+'<span class="task-name">'+task+'</span></div>';
        // htmlElem=htmlElem+'<div id="edit-task-'+taskId+'" " class="hide" ng-click="$event.stopPropagation()">';
        // //console.log($compile(htmlElem)($scope));
        // parEl.prepend(htmlElem);

        
        return $http({
            url: 'http://localhost:3000/details',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data:  {"id":taskId, "task": task,"cateogry":type, "CreateDate":CreateDate+" "+CreateTime, "EndDate":CreateDate, "EndTime": "12:00:00 AM" }
          })
          
        
   
      },

    
      removeTask:function(taskid)
      {
        console.log(taskid);
        return $http({
          method: 'DELETE', 
          dataType: 'json',
          url: "http://localhost:3000/details/"+taskid,
        })

      },

    

      fetchDetails: function()
      {
        return $http({
          method: "GET",
          url: "http://localhost:3000/details"  
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
