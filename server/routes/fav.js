const express = require('express');
const router = express.Router();

router.use( (req,res,next) => {
  req.db = req.app.get('db')
  next();
})

router.post('/add', (req,res) => {
  
  req.db.favorites.insert({ 
      id:req.body.itemId, 
      name: req.body.name, 
      image: req.body.image, 
      url: req.body.url,
      userid: req.body.userId
    })
})
router.delete('/delete/:id', (req,res) => {
  req.db.delfav(req.params.id)
  .then( (data) => {
    console.log(data)
    res.send('deleted')
  })
  .catch(error => console.error(error))
  
})
router.post('/favorites', (req,res,next) => {
  req.db.findFav(req.body.id)
  .then(data => {
    res.send(data)
  })
  .catch(next)
})

module.exports = router;