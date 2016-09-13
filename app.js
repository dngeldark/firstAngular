(function(){
'use strict';

angular.module('firstApp',[])
	.controller('MainController', MainController);
	MainController.$inject = ['$scope'];
	function MainController($scope){

		$scope.text ='';
		$scope.count = function(){
			var res = $scope.text.split(",");
			$scope.res = message(count(res));
		}

		//counts the items ignoring blank spaces
		function count(arr){
			var counter = 0;
			for(var i=0;i<arr.length;i++){
				if(arr[i].trim().length > 0) counter++;
			}
			return counter;
		}

		// sets up the message depending on the count
		function message(count){
			if(count>3)return "too much";
			else if(count>0)return "enjoy";
			else {return "enter valid data"};
		}

	};
})();