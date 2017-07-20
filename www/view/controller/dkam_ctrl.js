var mod = angular.module('dkam');
mod.controller('dkam_ctrl', ['$scope', 'dkam_dealer_service', 'dkam_dealer_details', 
	function($scope, dkam_dealer_service, dkam_dealer_details){
	// $scope.names = ["OFS", "Chola", "Murugappa"];
	var dealer = 0;
	getDealerName();
	$scope.outlet_type = ["Main Head office", "Product Head office", "Service and Sales counter", "Only Service Outlet"]
	$scope.submit = function(updated_details){
		console.log("Over all details : "+updated_details);
		updateDealerDetails(updated_details);
	}
	function getDealerName(){
		dkam_dealer_service.get_dealer_name().then(function(payload){
			if(payload != undefined ){
				$scope.names = payload[dealer].data
				console.log("Getting Dealer name : success")
			}else{
				console.log("Getting Dealer name : Service unavailable")
			}
		})
	}
	$scope.selectedItemChanged = function(selectedDealer){
		getDealerDetails(selectedDealer)
	}
	function getDealerDetails(dealer_name){
		console.log("controller dealer_name : "+dealer_name);
		dkam_dealer_details.get_dealer_details(dealer_name).then(function(payload){
			if(payload != undefined ){
				$scope.details = payload[dealer].data[dealer];
				console.log("Getting Dealer Details : success")
			}else{
				console.log("Getting Dealer Details : Service unavailable")
			}
		})
	}
	function updateDealerDetails(updated_details) {
		alert("Update details : "+updated_details);
	}
}]);