angular.module("mainApp.directives",[])


/* .directive("digitsOnly", function(){

	return{
		restrict: "A",
		link: function(scope, element, attrs){
			element[0].addEventListener("change", function(){
				
				if(isNaN(element[0].value))
				console.log("This is not a number");
				else
				console.log("This is number");
			});
			
		}
	} */
	
	
	.directive("onlyDigitsTag",function(){
	
		return{
		
			restrict: "E",
			controller:function($scope){
				$scope.x="New scope variable";
			},
			template: "<input type='text' ng-model='x'>",
			link: function($scope, element, attrs, controller){
				console.log($scope.x);
		
				
			}
		}
	
	})
