const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking-app');

router.post('/bookingApp/postData', bookingController.createBooking);
router.get('/bookingApp/deleteData/:primaryKey', bookingController.deleteBooking);
router.get('/bookingApp/editData/:primaryKey', bookingController.editBooking);

module.exports = router;