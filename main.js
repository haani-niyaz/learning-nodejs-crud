
var app = require('./app/server');

app.listen(app.port, function(){
	console.log('Starting server on port 8000');
});