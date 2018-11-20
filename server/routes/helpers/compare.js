const bcrypt = require ('bcrypt-nodejs');

module.exports = (password, hash) => {
  return new Promise((resolve,reject) => {
    bcrypt.compare(password,hash,(err,result) => {
      if(err){
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
}