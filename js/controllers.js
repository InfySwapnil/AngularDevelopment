	//This controller is for main.html
	angular.module("mainApp.controllers",[ ])

	.controller('MainCntrl',['$scope',function($scope){



	}
	])



	//This controller is for home.html
	.controller('HomeCntrl',['$scope','addRemovetrans',function($scope,addRemovetrans){
		
		addRemovetrans.fetchDetails().then(function(response){
			$scope.AllTasks = response.data.details;
			console.log($scope.AllTasks);
		},
		function(error){
			console.log(error);

		})
		
		

		$scope.addTask=function(task){
			event.preventDefault();
			

		}
	}
	])


	//This controller is for about.html
	.controller('AboutCntrl',['$scope',function($scope){

		//This is About Page.


	}
	])
