import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import FeedService from './services/FeedService'

require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET

const user = {
  username: 'user01',
  password: 'password01'
}

const app = new express()

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(expressJwt({ secret: jwtSecret }).unless({ path: [ '/login' ]}));

const authenticate = (req, res, next) => {
  var body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end('Must provide username or password')
  }
  if (body.username !== user.username || body.password !== user.password) {
    res.status(401).end('Username or password incorrect')
  }
  next();
}

app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({
    username: user.username
  }, jwtSecret);
  res.send({
    token: token,
    user: user
  })
})

app.get('/feed/search', (req, res) => {
  const term = req.query.term || req.params.term
  if (!term) {
    return res.status(400).send('"term" parameter missing')
  }

  FeedService.search({term}, (err, resp) => {
    if (err) {
      return res.status(500).send(`error: ${err}`)
    }
    res.send(resp)
  })
})

app.all('*', (req, res) => {
  res.send(req.url)
})

const port = 3001
const server = app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})

module.exports = server
