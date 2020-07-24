const express = require('express')
const app = express();
const path = require('path');
const http = require('http');

const server = http.createServer();

app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  res.render('pages/index')
});

app.get('/day2', (req, res) =>{
  res.render('pages/day2/day2')
});

app.get('/p5.js',(req, res) =>{
    res.sendfile('node_modules/p5/lib/p5.js');
});

app.get('/p5.sound.js',(req, res) =>{
    res.sendfile('node_modules/p5/lib/addons/p5.sound.js');
});

app.get('/snake.js',(req, res) =>{
    res.sendfile('views/pages/day2/snake.js');
});

app.get('/api/courses', (req,res) =>{
  res.send([1,2,3]);
});


// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
