 	function AppCtrl($scope){
        $scope.styleDemo = function(){
          if(!$scope.styler){
							return; 
						}
          return {
            background: 'red',
            fontWeight: 'bold'
					}; 
	};
}

