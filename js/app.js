  var mainApp=angular.module("mainApp",["mainApp.controllers",
    "mainApp.directives",
    "ui.bootstrap",
    "ngRoute",
    "ngMaterial"

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
              
        return $http({
            url: 'http://localhost:3000/details',
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data:  {"id":taskId, "task": task,"cateogry":type, "CreateDate":CreateDate+" "+CreateTime, "EndDate":CreateDate, "EndTime": "12:00 AM" }
          })
       },

       dhm: function(t){
        var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.round( (t - d * cd - h * ch) / 60000);
        
        if( m === 60 ){
          h++;
          m = 0;
        }
        if( h === 24 ){
          d++;
          h = 0;
        }
        
        console.log(d+" "+h+" "+m);
        if(d<0 || h<0 || m<0)
          return "<em> Time Finished</em>" ;
        else if(d==0 && h==0 && m==0)
          return "<em> Time Finished</em>" ;
        else if(d==0 && h==0)
          return "<em>"+m+"Minutes left"+"</em>" ;
        if(d==0)
          return "<em>"+h+"Hours "+m+"Minutes left"+"</em>" ;
        else
          return "<em>"+d+"Day "+h+"Hours "+m+"Minutes left"+"</em>" ;
      },



      removeTask:function(taskid)
      {
        console.log("Inside Service"+taskid);
        return $http({
          method: 'DELETE', 
          dataType: 'json',
          url: "http://localhost:3000/details/"+taskid,
        })

      },


      updateTask:function(taskid, newDate, newTime, status)
      {
        var PostData;
        if (status)
          PostData='{"Status":'+status+'}';
        else
          PostData='{"EndDate": "'+newDate+'" ,"EndTime": "'+newTime+'"}'; 

          return $http({
          method: 'PATCH', 
          dataType: 'json',
          url: "http://localhost:3000/details/"+taskid,
          data: PostData
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
