var seeder = require('mongoose-seed');


console.log("DB_URI" + process.env.DB_URI);

// connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/olympic-events',function(){

	console.log(__dirname);

	// load mongoose models
		seeder.loadModels([
	         __dirname +'/../../models/event.js',
	    ]);

    // callback to populate DB once collections have been cleared 
     	seeder.populateModels(data);
});


var data  = {
	'model' : 'eventModel',
	'documents': [
		{ name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' },
  		{ name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is the fast fish.' },
  		{ name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things up' }
	]
}