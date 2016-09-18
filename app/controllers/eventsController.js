// bussiness logic for events


const Event = require('../models/event');

exports.show = function(req,res){
	// get all events
	Event.find({},function(err, events){
		if (err){
			res.status(404);
			return res.send('Events not found');
		}
			// return view with data
			res.render('pages/events', {events:events});
	});

}


exports.view = function(req,res){

	// Must be a single event 
	Event.findOne({'slug':req.params.slug},function(err, event){
		if (err){
			res.status(404);
			return res.send('Event not found');
			
		} else{		
			res.render('pages/event',{event:event});
		}
		
	});

}



exports.seed = function(req,res){
	const events = [
		{ name: 'Basketball', description: 'Throwing into a basket.' },
  		{ name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
  		{ name: 'Weightlifting', description: 'Lifting heavy things up' },
  		{ name: 'Ping Pong', description: 'Super fast paddles' }
	];

	// remove all and seed on successfull callback
	Event.remove({},function(){

		events.forEach(function(event){
			new Event(event).save();
		});
	});
	
	res.send('Databse seeded!');

}
