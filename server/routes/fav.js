const express = require('express');
const router = express.Router();

const isAuthenticated = require ('./helpers/authorize')

router.use( (req,res,next) => {
  req.db = req.app.get('db')
  next();
})

router.post('/add',isAuthenticated ,(req,res) => {
  
  req.db.favorites.insert({ 
      id:req.body.itemId, 
      name: req.body.name, 
      image: req.body.image, 
      url: req.body.url,
      userid: req.body.userId
    })
})
router.delete('/delete/:id',isAuthenticated,(req,res) => {
  
  req.db.delfav(req.params.id)
  .then( (data) => {
    
    res.send('deleted')
  })
  .catch(error => console.error(error))
  
})
router.post('/favorites',isAuthenticated,(req,res,next) => {
  
  req.db.findFav([req.body.id])
  .then(data => {
    
    res.send(data)
  })
  .catch(next)
})

module.exports = router;