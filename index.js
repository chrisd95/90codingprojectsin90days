const express = require('express')
const app = express();
const path = require('path');
const http = require('http');

const server = http.createServer();

app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) =>{
  res.render('pages/index')
});

app.get('/day2', (req, res) =>{
  res.render('pages/day2/day2')
});
app.get('/api/courses', (req,res) =>{
  res.send([1,2,3]);
});


// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
