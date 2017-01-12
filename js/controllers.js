	//This controller is for main.html
	angular.module("mainApp.controllers",[])

	.controller('MainCntrl',['$scope',function($scope){



	}
	])



	//This controller is for home.html
	.controller('HomeCntrl',['$scope','addRemovetrans','$compile','$log','$http','$q',function($scope,addRemovetrans,$compile,$log,$http,$q){
		
		// TimePicker functinalty starts
		$scope.mytime = new Date();

		$scope.hstep = 1;
		$scope.mstep = 1;

		$scope.options = {
			hstep: [1, 2, 3],
			mstep: [1, 5, 10, 15, 25, 30]
		};

		$scope.ismeridian = true;
		$scope.toggleMode = function() {
			$scope.ismeridian = ! $scope.ismeridian;
		};

		$scope.update = function() {
			var d = new Date();
			d.setHours( 14 );
			d.setMinutes( 0 );
			$scope.mytime = d;
		};

		$scope.changed = function () {
			//$log.log('Time changed to: ' + $scope.mytime);
		};

		$scope.clear = function() {
			$scope.mytime = null;
		};



		// Date Picker functionality starts 
		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();

		$scope.clear = function() {
			$scope.dt = null;
		};

		$scope.inlineOptions = {
			customClass: getDayClass,
			minDate: new Date(),
			showWeeks: true
		};

		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

  // Disable weekend selection
  function disabled(data) {
  	var date = data.date,
  	mode = data.mode;
  	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
  	$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
  	$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
  	$scope.popup1.opened = true;
  };

  $scope.open2 = function() {
  	$scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
  	$scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
  	opened: false
  };

  $scope.popup2 = {
  	opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
  {
  	date: tomorrow,
  	status: 'full'
  },
  {
  	date: afterTomorrow,
  	status: 'partially'
  }
  ];

  function getDayClass(data) {
  	var date = data.date,
  	mode = data.mode;
  	if (mode === 'day') {
  		var dayToCheck = new Date(date).setHours(0,0,0,0);

  		for (var i = 0; i < $scope.events.length; i++) {
  			var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

  			if (dayToCheck === currentDay) {
  				return $scope.events[i].status;
  			}
  		}
  	}

  	return '';
  }


  //Application Logic starts 

 
// $http({
//         method: 'DELETE', 
//     	dataType: 'json',
//     	url: "http://localhost:3000/details/1"
//     }).then(function(response){
//   	console.log(response);

//   },
//   function(error){
//   	//console.log(error);

//   });






  

  addRemovetrans.fetchDetails().then(function(response){
  	$scope.AllTasks = response.data.reverse();

  },
  function(error){
  	//console.log(error);

  });



$scope.deleteTask=function(){

	var promises = [];
	$scope.SelectedTask.forEach(function(val, key){

		promises.push(addRemovetrans.removeTask());
	});

	$q.all(promises).then(function success(data){
      console.log($scope.data);
    }, function failure(err){

    });
	




	
}


  $scope.taskCount=0;
  $scope.SelectedTask=[];

  $scope.selectTask=function(id,key){
  		
  		if(key){
  			$scope.SelectedTask.push(id);

   		}
  		else{

  			$scope.SelectedTask.splice($scope.SelectedTask.indexOf(id), 1);
  			if($scope.SelectedTask.length<= 0 )
  			{


  			}
  		}
  		$scope.taskCount=$scope.SelectedTask.length;
  		console.log($scope.SelectedTask);
  		  	
  };

  $scope.addTask=function(task,event){
  	event.preventDefault();
  	var type= event.target.text;
  	addRemovetrans.addTask(task,event,type).then(function(response) {
  		console.log(response);
  		if(parseInt(response.status)==201 && response.statusText=="Created" )
  		{
  			console.log("record Created");
  			addRemovetrans.fetchDetails().then(function(response){
  				$scope.AllTasks = response.data.reverse();

  			},
  			function(error){
  				//console.log(error);
  			});
  		}
  	}, 
  	function(response) {

  	});

  };


  $scope.editTask=function(id,event){

  	console.log("Yes");	
  	var ParElem=angular.element(document.getElementById(id));

  	var	editTabElem=angular.element(document.getElementById("edit-task-"+id));

  	editTabElem.addClass("show");
  }
}
])


	//This controller is for about.html
	.controller('AboutCntrl',['$scope',function($scope){

		//This is About Page.


	}
	])
