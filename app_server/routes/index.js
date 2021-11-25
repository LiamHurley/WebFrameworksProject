const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');
 
/* Locations pages */
router.get('/', ctrlLocations.homelist);
/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/register', ctrlOthers.register);
router.get('/login', ctrlOthers.login);

module.exports = router;
