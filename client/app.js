
angular.module('app', [])
  .controller('getFlixCtrl', function($scope, getFlixFactory){

  	console.log('inside controllers')
    
  	$scope.input = '';
  	var query = $scope.input;
  	$scope.response;
  	
    $scope.grabInput = function(query){
      getFlixFactory.getApi(query)
    	.then(function(res){
    	  console.log('res', res.data);
    	  $scope.response = res.data;
    	})
    	.catch(function(err){
    		console.log('err', err)
    	})
    	$scope.input = '';
    }

    var titles = ['New Girl', 'Arrow', 'Lost', 'Breaking Bad', 'Orange is the new Black', 'Friday Night Lights', 'Dexter', '30 Rock', 'Friends', 'the Vampire Diaries', "Glee", 'scandal', 'Mad Men', 'Family Guy', 'Sherlock', 'Sons of Anarchy', 'How I Met Your Mother', 'Revolution'];
    var i = Math.floor(Math.random() * titles.length);

    $scope.grabInput(titles[i])
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