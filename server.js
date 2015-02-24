var express = require('express'),
	app = express(),
	csError = require('./csError');

app.get('/test1', function() {
	throw "Hey its broke...";
});

app.get('/test2', function() {
	throw csError([
		'Your data is missing a property!',
		'Your data has a property that is too long!'
	]);
});

app.use(csError.errorHandler);

app.listen(9988, function() {
  console.log('expError is listening on port ' + 9988);
});