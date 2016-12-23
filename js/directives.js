angular.module("mainApp.directives",[])


.directive("navMenu",["$location","$rootScope","$routeParams", function(location, rootScope, routeParams){
	return{
		restrict: "E",
		link: function($scope, elem, attrs){
			
			var links=elem.find("a");
			angular.element(links[0]).addClass("Active-Link");
			
			rootScope.$on("$routeChangeSuccess",function(){
				console.log("changed");
				angular.forEach(links,function(link){
					link=angular.element(link);
					
					if(/\/[a-zA-Z]+/.exec(link.attr("href"))[0]!=location.$$path)
					link.removeClass("Active-Link");
					else
					link.addClass("Active-Link");
				})
			
			})
			
			/* links.on("click",function(e){
				var activeLink=angular.element(e.target);
				angular.forEach(links,function(link){
					link=angular.element(link);
					if(activeLink[0].innerHTML.toString()!=link[0].innerHTML.toString()){
						link.removeClass("Active-Link");
					}
				});
				
				activeLink.addClass("Active-Link");
				
				
			}); */
			
			
		}
	}
}])
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
	} 
}) 	
	
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
	
	}) */