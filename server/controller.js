const axios = require ('axios')
const yelp = require ('yelp-fusion')
const apiKey = process.env.apiKey
const client = yelp.client(apiKey)

module.exports = {
  yelp: (req , res) => {
    const searchRequest = {
      term:'Delivery',
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      limit: 50,
      radius: 5000,
      sort_by: 'distance',
      open_now: true,
    
    };
    client.search(searchRequest)
      .then(response => res.send(response))
      .catch (error => res.status(500).send(error))
  }

}

