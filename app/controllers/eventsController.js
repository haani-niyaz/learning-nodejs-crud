// bussiness logic for events

exports.show = function(req,res){
	// dummy data

	var events = [
		{ name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' },
  		{ name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is the fast fish.' },
  		{ name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things up' }
	];

	// return view with data
	res.render('pages/events', {events:events});
}