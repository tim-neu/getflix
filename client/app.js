
angular.module('app', [])
  .controller('getFlixCtrl', function($scope, getFlixFactory){

  	console.log('some stuff inside controllers')
    
  	$scope.input = '';
  	var query = $scope.input;
  	$scope.response;

    $scope.grabInput = function(query){
      getFlixFactory.getApi(query)
    	.then(function(res){
    	  console.log('res', res.data.poster);
    	  $scope.response = res.data.poster;
    	})
    	.catch(function(err){
    		console.log('err', err)
    	})
    	$scope.input = '';
    }

  })
  .factory('getFlixFactory', function($http){
  	return {
  	  getApi: function(query){
  	    return $http({
  	      method: 'GET',
  	      url: "http://netflixroulette.net/api/api.php?",
  	      params: {
    	    title: query
  	      }
  	    })  
  	  }
  	}
  });