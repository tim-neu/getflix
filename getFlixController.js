var NetflixRoulette = require('netflix-roulette');
var getFlixController = {};

getFlixController.GET = function(req, res){
  // console.log('Inside getFlixController request');
  NetflixRoulette.title('Arrow', function(err, data){
  	// console.log('Inside NetflixRoulette api req', data);
  	if (err){
  	  res.send('err:', err);
  	}
  	res.json(data);
  });
}

module.exports = getFlixController;