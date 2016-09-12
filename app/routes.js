// routes 

// busines logic
mainController = require('./controllers/mainController');

// create a router
var router = require('express').Router();


 // plug in controller to route
router.get('/', mainController.home);

// export router
module.exports = router;