const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

// locations
router
  .route('/locations')
  .get(ctrlLocations.locationsList);

router
  .route('/register')
  .post(ctrlOthers.userCreate);

router
  .route('/login')
  .get(ctrlOthers.userLogin);

module.exports = router;
