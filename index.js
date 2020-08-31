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

/* dynamic version is useful but not working completely
app.get('/:day', (req , res) => {
  const { day } = req.params
  res.render(`pages/${day}/${day}.ejs`)
})
*/

app.get('/day2', (req, res) =>{
  res.render('pages/day2/day2')
});

app.get('/day3', (req, res) =>{
  res.render('pages/day3/day3')
});

app.get('/day4', (req, res) =>{
  res.render('pages/day4/day4')
});

app.get('/day5', (req, res) =>{
  res.render('pages/day5/day5')
});

app.get('/bigcanvas.js',(req, res) =>{
    res.sendfile('views/pages/day5/bigcanvas.js');
});

app.get('/weather.js',(req, res) =>{
    res.sendfile('views/pages/day3/weather.js');
});

app.get('/p5.min.js',(req, res) =>{
    res.sendfile('node_modules/p5/lib/p5.min.js');
});

app.get('/p5.sound.js',(req, res) =>{
    res.sendfile('node_modules/p5/lib/addons/p5.sound.js');
});

app.get('/hammer.min.js',(req, res) =>{
    res.sendfile('node_modules/hammerjs/hammer.min.js');
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
