var mod = angular.module('dkam');
mod.controller('dkam_ctrl', ['$scope', 'dkam_dealer_service', 'dkam_dealer_details', 'dkam_dealer_update', '$state',
	function ($scope, dkam_dealer_service, dkam_dealer_details, dkam_dealer_update, $state) {
		// $scope.names = ["OFS", "Chola", "Murugappa"];
		var dealer = 0;
		getDealerName();
		$scope.outlet_type = ["Main Head office", "Product Head office", "Service and Sales counter", "Only Service Outlet"];
		$scope.product_catagory = ["Car", "Bike", "home finance"]
		$scope.submit = function (updated_details) {
			console.log("Over all details : " + updated_details);
			updateDealerDetails(updated_details);
			$state.go('update');
		}
		/*funtion to call the load dealer service*/
		function getDealerName() {
			dkam_dealer_service.get_dealer_name().then(function (payload) {
				if (payload != undefined) {
					$scope.names = payload[dealer].data
					console.log("Getting Dealer name : success")
				} else {
					console.log("Getting Dealer name : Service unavailable")
				}
			})
		}
		/*Called once we changed the dealer name on dropdown*/
		$scope.selectedItemChanged = function (selectedDealer) {
			getDealerDetails(selectedDealer)
		}
		/*function to get selected dealer details serice */
		function getDealerDetails(dealer_name) {
			console.log("controller dealer_name : " + dealer_name);
			dkam_dealer_details.get_dealer_details(dealer_name).then(function (payload) {
				if (payload != undefined) {
					$scope.details = payload[dealer].data[dealer];
					console.log("Getting Dealer Details : success")
				} else {
					console.log("Getting Dealer Details : Service unavailable")
				}
			})
		}
		/*update the modified and manual entry data*/
		function updateDealerDetails(updated_details) {
			dkam_dealer_update.update_dealer_details(updated_details).then(function (payload) {
				console.log("Data has been update : " + payload);
			})
		}
	}
]);