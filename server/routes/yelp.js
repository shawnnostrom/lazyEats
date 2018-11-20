const express = require('express');
const router = express.Router();
const yelp = require ('yelp-fusion');
const apiKey = process.env.apiKey;
const client = yelp.client(apiKey);

router.post('/info', (req , res) => {
  const searchRequest = {
    term:'Delivery',
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    limit: 50,
    radius: 8000,
    sort_by: 'distance',
    open_now: true,
    attributes: 'delivery'
  
  };
  client.search(searchRequest)
    .then(response => res.send(response))
    .catch (error => res.status(500).send(error))
})


module.exports = router