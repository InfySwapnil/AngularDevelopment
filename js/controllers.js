	//This controller is for main.html
	angular.module("mainApp.controllers",[ ])

	.controller('MainCntrl',['$scope',function($scope){



	}
	])



	//This controller is for home.html
	.controller('HomeCntrl',['$scope','addRemovetrans','$compile',function($scope,addRemovetrans,$compile){
		
		addRemovetrans.fetchDetails().then(function(response){
			$scope.AllTasks = response.data.reverse();
						
		},
		function(error){
			console.log(error);

		});
		
		$scope.addTask=function(task,event){
			event.preventDefault();
			var type= event.target.text;
			addRemovetrans.addTask(task,event,type);

		};

		$scope.editTask=function(id){

		var ParElem=angular.element(document.getElementById(id));
		var	editTabElem=angular.element(document.getElementById("edit-task-"+id));
		//editTabElem.removeClass("hide").addClass("show");
		editTabElem.toggleClass("show");
		}
	}
	])


	//This controller is for about.html
	.controller('AboutCntrl',['$scope',function($scope){

		//This is About Page.


	}
	])
