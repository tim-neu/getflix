var mongoose = require('mongoose');

mongoose.connect('mongodb://timneu:1234@ds023074.mlab.com:23074/getflix', function(err){
	if(err){
		console.log('error:', err)
	} else {
		console.log('Connected!')
	}
});

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	username: String,
});

var User = mongoose.model('User', userSchema);

var userBob = new User({username: 'Bob'})
.save(function (err) {
  if (err) {
  	return handleError(err);
  } else {
  	console.log('saved!')
  }
  // saved!
})

module.exports = User;