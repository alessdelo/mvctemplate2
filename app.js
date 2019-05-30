const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

const kitty = require('./routes/kitty') // Imports routes for the 
const test = require('./routes/test')

var app = express()
  app.use('/static', express.static(path.join(__dirname, 'public')))
  app.set('views', './views')
  app.set('view engine', 'ejs')

  app.get('/', function (req, res) {res.send('<h1>MVC Modules Import Test (Controller - Router - app)</h1>' +
                                             '<br>' +
                                             '<a href=\"test/test0\">test 0</a>' +
                                             '<br>' +
                                             '<a href=\"test/test1\">test 1</a>'
                                             )} )


  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))
  app.use('/test', test)

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
