const express = require('express');
const router = express.Router();

const yelpRouter = require('./yelp')
const authRouter = require('./auth')

router.use('/yelp', yelpRouter)
router.use('/auth', authRouter)

module.exports = router;