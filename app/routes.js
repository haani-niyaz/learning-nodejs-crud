// routes 

// busines logic
mainController = require('./controllers/mainController');
eventsController = require('./controllers/eventsController')

// create a router
var router = require('express').Router();


 // plug in controller to route
router.get('/', mainController.home);
router.get('/events', eventsController.show);
router.get('/events/:slug', eventsController.view);

// export router
module.exports = router;