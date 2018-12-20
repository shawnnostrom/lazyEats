require('dotenv').config();

const express = require ('express');
const cors = require('cors');
const logger = require('morgan')
const massive = require ('massive');
const bodyParser = require('body-parser');
const path = require('path')


const app = express();


app.use(cors())
app.use(bodyParser.json())
app.use(logger('tiny'))
app.use( express.static( `${__dirname}/../build` ) );


massive (process.env.dataBase)
.then ( db => {
  app.set('db',db)
  console.log('connected to database')
  require('./configure/session')(app,db);
  app.use('/api', require('./routes'))
})
.catch ( error => console.error (error))



app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.listen(8080 , () => console.log('listening on 8080'))