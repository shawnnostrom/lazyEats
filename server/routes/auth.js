const express = require('express');
const router = express.Router()

const comparePassword = require('./helpers/compare')
const hashPassword = require('./helpers/hash')

router.use( (req,res,next) => {
  req.db = req.app.get('db')
  next();
})

router.post('/register', (req,res,next) => {
  req.db.users.find({username: req.body.username})
    .then(user => {
      if (user[0]) {
        res.status(409).send('User already exists')
      } else {
        hashPassword (req.body.password)
          .then(hash => {
            return req.db.users.insert ({ username: req.body.username , password: hash})
          })
          .then( () => res.status(200).send('user created'))
          .catch(next);
      }
    });
});

router.post('/login', (req,res,next) => {
  req.db.users.find({username : req.body.username})
    .then(user => {
      
      if(!user[0]){
        res.status(401).send("User doesn't exists")
      } else {
        comparePassword(req.body.password, user[0].password)
          .then(correct => {
            console.log(correct)
            if(!correct){
              res.status(401).send('Password Incorrect')
            }else{
             console.log(user[0])
             res.json({id:user[0].id,user:user[0].username})
              
            }
          })
          .catch(error => console.log(error))
          
      }
    })
    .catch(next)
})

router.get('/logout', (req,res,next) => {
  req.logout();
  res.status(200).send()
})
module.exports = router;