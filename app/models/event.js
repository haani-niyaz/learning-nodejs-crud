const mongoose = require('mongoose'),
	Schema = mongoose.Schema;


// create schema
const eventSchema = new Schema({
	name: String,
	slug: {
		type: String,
		unique: true
	},
	desctiption: String
});


/**
 * Middleware
 * Create a slug from the name 
 */


eventSchema.pre('save',function(next){
	this.slug = slugify(this.name);
	next();
});


// create model
const eventModel = mongoose.model('Event', eventSchema);

// export model
module.exports = eventModel;


// function to slugify a name
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}