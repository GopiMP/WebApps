var mod = angular.module('dkam');
var base_url = "http://192.168.4.131:8090";
mod.service('dkam_dealer_service', ['$http', '$q', function($http, $q){
 var service ={};
  service.get_dealer_name = function(){
  	 var deferred = $q.defer();
  	 var obj = [];
  	  var req = {
                method: 'GET',
                url: base_url + '/dealername'
            };
      			$http(req).then(function(payload) {
                obj.push({
                    data: payload.data
                })
                console.log("Dealer name Service call : Resolved.")
                deferred.resolve(obj);
            }, function(reason) {
                deferred.reject(reason);
                console.log("Dealer name Service call : Rejected.")
            });
            return deferred.promise;
  };
  return service;
}]);
mod.service('dkam_dealer_details', ['$http', '$q', function($http, $q){
	var service = {};
	service.get_dealer_details = function(selectedDealer){
		var selected_dealer = selectedDealer;
		console.log("Selected Dealer : "+selected_dealer)
		var deferred = $q.defer();
		var obj = [];
		var req = {
			method : 'GET',
			url : base_url + '/dealerdetails/'+selected_dealer
		};
		 $http(req).then(function(payload) {
                obj.push({
                    data: payload.data
                })
                console.log("Dealer Details Service call : Resolved.")
                deferred.resolve(obj);
            }, function(reason) {
                deferred.reject(reason);
                console.log("Dealer Details Service call : Rejected.")
            });
            return deferred.promise;
	};
	  return service;
}]);
mod.service('dkam_dealer_update', ['$http', '$q', function($http, $q){
	var service = {};
	service.update_dealer_details = function(updated_details){
		console.log("Updated details in service : "+updated_details);
		var deferred = $q.defer();
		var obj = [];
		var req = {
			method : 'GET',
			url : base_url + '/editdealer/',
			data : updated_details
		};
		$http(req).then(function(payload){

		}), function(reason){

		}
	};

}]);
