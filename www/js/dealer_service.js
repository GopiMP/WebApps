var mod = angular.module('dkam');
/*Get dealer name*/
mod.service('dkam_dealer_service', ['$http', '$q', 'BASE_DEV_URL', function ($http, $q, BASE_DEV_URL) {
	var service = {};
	service.get_dealer_name = function () {
		var deferred = $q.defer();
		var obj = [];
		var req = {
			method: 'GET',
			url: BASE_DEV_URL + '/dealername'
		};
		$http(req).then(function (payload) {
			obj.push({
				data: payload.data
			})
			console.log("Dealer name Service call : Resolved.")
			deferred.resolve(obj);
		}, function (reason) {
			deferred.reject(reason);
			console.log("Dealer name Service call : Rejected.")
		});
		return deferred.promise;
	};
	return service;
}]);
/*Get Dealer details with respect to dealer name*/
mod.service('dkam_dealer_details', ['$http', '$q', 'BASE_DEV_URL', function ($http, $q, BASE_DEV_URL) {
	var service = {};
	service.get_dealer_details = function (selectedDealer) {
		var selected_dealer = selectedDealer;
		console.log("Selected Dealer : " + selected_dealer)
		var deferred = $q.defer();
		var obj = [];
		var req = {
			method: 'GET',
			url: BASE_DEV_URL + '/dealerdetails/' + selected_dealer
		};
		$http(req).then(function (payload) {
			obj.push({
				data: payload.data
			})
			console.log("Dealer Details Service call : Resolved.")
			deferred.resolve(obj);
		}, function (reason) {
			deferred.reject(reason);
			console.log("Dealer Details Service call : Rejected.")
		});
		return deferred.promise;
	};
	return service;
}]);
/*put modify data to db against dealer code*/
mod.service('dkam_dealer_update', ['$http', '$q', 'BASE_DEV_URL', function ($http, $q, BASE_DEV_URL) {
	var service = {};
	service.update_dealer_details = function (updated_details) {
		console.log("Updated details in service : " + updated_details);
		var deferred = $q.defer();
		var obj = [];
		var req = {
			method: 'PUT',
			url: BASE_DEV_URL + '/editdealer/' + updated_details.code,
			data: updated_details
		};
		$http(req).then(function (payload) {
			obj.push({
				data: payload.data
			})
			deferred.resolve(obj);
		}, function (reason) {
			deferred.reject(reason);
		});
		return deferred.promise;
	};
	return service;

}]);