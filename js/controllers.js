	//This controller is for main.html
	angular.module("mainApp.controllers",[ ])

	.controller('MainCntrl',['$scope',function($scope){



	}
	])



	//This controller is for home.html
	.controller('HomeCntrl',['$scope','addRemovetrans','$compile',function($scope,addRemovetrans,$compile){
		
		addRemovetrans.fetchDetails().then(function(response){
			$scope.AllTasks = response.data.details;
			
		},
		function(error){
			console.log(error);

		});
		

		$scope.addTask=function(task,event){
			event.preventDefault();
			var type= event.target.text;
			addRemovetrans.addTask(task,event,type);

		/*	var node = document.createElement("Div");               
			var textnode = document.createTextNode(task);
			node.appendChild(textnode);
			var parEl = angular.element( document.querySelector('#task-List'));
			parEl.prepend(node);
		*/	

		};
	}
	])


	//This controller is for about.html
	.controller('AboutCntrl',['$scope',function($scope){

		//This is About Page.


	}
	])
