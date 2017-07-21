var app = angular.module('dkam');
/*required fied to show red asterisk*/
app.directive("required", function(){
	return{
		restrict : 'A',
		compile : function(element){
			element.after("<span class='required'>*</span>");
		}
	};
});