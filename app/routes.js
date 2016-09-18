// routes 

// busines logic
mainController = require('./controllers/mainController');
eventsController = require('./controllers/eventsController')

// create a router
var router = require('express').Router();


/**
 * Event routes
 * Ordering is important here as it will sequentailly parsed
 */
router.get('/', mainController.home);
router.get('/events', eventsController.show);
router.get('/events/seed', eventsController.seed);
router.get('/events/:slug', eventsController.view);


// export router
module.exports = router;