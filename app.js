var app = angular.module('app', []);

app.controller('Ctrl', ['$scope', function ($scope){
	
	$scope.goalList = [];
	$scope.showUpdateBlock = false;
	$scope.uGoal = null;
	$scope.i = 0;
	$scope.progress = 0;
	$scope.countProgress = function () {
		for (var i=0; i<$scope.goalList.length;i++) {
			$scope.progress += parseInt($scope.goalList[i].target);
		}
		$scope.progress = $scope.progress*100/5000;
	}
	$scope.addGoal = function () {
		if ($scope.name != '' && $scope.target != '') {
			var goal = {
				name: $scope.name,
				target: $scope.target,
				isEdit: false
			}
			$scope.goalList.push(goal);
			$scope.countProgress();
		}
	}
	$scope.editGoal = function (index) {
		$scope.showUpdateBlock = true;
		$scope.i = index;
		$scope.uGoal = $scope.goalList[index];
		//console.log($scope.uGoal.target);
	}

	$scope.save = function () {
		goal = $scope.goalList[$scope.i];
		goal.target = $scope.updateTarget;
		$scope.showUpdateBlock = false;
		$scope.i = 0;
		$scope.uGoal = null;
		$scope.countProgress();
	}

}]);