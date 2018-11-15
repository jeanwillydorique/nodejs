const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/coucou', function (req, res) {
  res.sendFile(__dirname + "/coucou.html")
})

app.post('/form', function (req, res) {
  res.send('Votre Nom est ' + req.param('name'))
})

app.post('/formulaire', upload.array(), function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.post('/form1', function (req, res, next) {
  res.send(req.body)
})

app.get('/json', function (req, res) {
  res.send({ 
    user: 'tobi' 
  });
})

app.get('/GOT', function (req, res) {
  res.json("https://anapioficeandfire.com/api/characters/583");
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

