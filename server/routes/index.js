const express = require('express');
const router = express.Router();

const yelpRouter = require('./yelp')
const authRouter = require('./auth')
const favRouter = require('./fav')

router.use('/yelp', yelpRouter)
router.use('/auth', authRouter)
router.use('/fav',favRouter)

module.exports = router;