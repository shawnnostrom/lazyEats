const express = require('express');
const router = express.Router()

const comparePassword = require('./helpers/compare')
const hashPassword = require('./helpers/hash')

router.use( (req,res,next) => {
  req.db = req.app.get('db')
})

router.post('/register', (req,res,next) => {
  req.db.users.find({username: req.body.username})
    .then(user => {
      if (user) {
        res.status(409).send('User already exists')
      } else {
        hashPassword (req.body.password)
          .then(hash => {
            return req.db.users.insert ({ username: req.body.username , password: hash})
          })
          .then(user => {
            req.login((user,error) => {
              if(error){
                return next(error);
              }
              res.json({id:user.id ,username:user.username})
            });
          })
          .catch(next);
      }
    });
});

router.post('/login', (req,res,next) => {
  req.db.users.find({username : req.body.username})
    .then(user => {
      if(!user){
        res.status(401).send("User doesn't exists")
      } else {
        comparePassword(req.body.password, user.password)
          .then(correct => {
            if(!correct){
              res.status(401).send('Password Incorrect')
            }else{
              req.login((user,error) => {
                if(error) return next(error);
                res.json({id:user.id , username:user.username})
              });
            }
          })
      }
    })
    .catch(next)
})

router.get('/logout', (req,res,next) => {
  req.logout();
  res.status(200).send()
})
module.exports = router;