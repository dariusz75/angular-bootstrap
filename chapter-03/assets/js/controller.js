 	function AppCtrl($scope){
        
				 $scope.clickHandler = function(){
          window.alert('Clicked!');
        };

        $scope.initHandler = function(){
          window.alert('Opened!');
        };

        $scope.showHandler = function(){
        	$scope.isHidden = !$scope.isHidden;
				};

	};


