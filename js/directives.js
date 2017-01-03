angular.module("mainApp.directives",[])


.directive("navMenu",["$location","$rootScope","$routeParams", function(location, rootScope, routeParams){
	return{
		restrict: "E",
		link: function($scope, elem, attrs){
			var links=elem.find("a");
			angular.element(links[0]).addClass("Active-Link");
			
			rootScope.$on("$routeChangeSuccess",function(){
				
				angular.forEach(links,function(link){
					link=angular.element(link);
					
					if(/\/[a-zA-Z]+/.exec(link.attr("href"))[0]!=location.$$path)
						link.removeClass("Active-Link");
					else
						link.addClass("Active-Link");
				})

			})
		}
	}
}])







	