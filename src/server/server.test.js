import request from 'supertest'
import server from './server'
import jwt from 'jsonwebtoken'

require('dotenv').config()

const mockUser = {
  username: 'user01',
  password: 'password01'
}

const authRequest = (req) => {
  const jwtSecret = process.env.JWT_SECRET

  const token = jwt.sign({
    username: mockUser.username
  }, jwtSecret);

  return req.set('Authorization', `Bearer ${token}`)
}

describe('server', () => {

  let server

  beforeEach(() => {
    server = require('./server')
  })

  afterEach(() => {
    server.close()
  })

  test('/login valid credentials', (done) => {
    request(server)
      .post('/login')
      .send(mockUser)
      .expect(200)
      .end((err, resp) => {
        // resp.body
        // {
        //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIwMSIsImlhdCI6MTQ3ODcwNjkzNn0.c1Zrl0bT2oLRYNdHAU_JTxGCLUmhJyYdY0z_AxsRZi8',
        //   user: { username: 'user01', password: 'password01' }
        // }

        expect(err).toBeNull()
        expect(resp.body.token).toBeDefined()
        expect(resp.body.token.length).toBeGreaterThan(0)
        expect(resp.body.user).toBeDefined()
        expect(resp.body.user.username).toBeDefined()
        done()
      })
  })

  test('/login username and password not provided', (done) => {
    request(server)
      .post('/login')
      .send({})
      .expect(400)
      .expect(/Must provide username or password/)
      .end((err, resp) => {
        expect(err).toBeNull()
        done()
      })
  })

  test('/login invalid credentials', (done) => {
    request(server)
      .post('/login')
      .send({username: 'user01', password: 'bad'})
      .expect(401)
      .expect(/Username or password incorrect/)
      .end((err, resp) => {
        expect(err).toBeNull()
        done()
      })
  })


  test('/feed/search term param set', (done) => {
    authRequest(
      request(server)
        .get('/feed/search?term=news')
      )
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(res => {
        expect(res.body.results.length).toBeGreaterThan(0)
      })
      .end(err => {
        expect(err).toBeNull()
        done()
      })
  })

  test('/feed/search term param notset', (done) => {
    authRequest(
      request(server)
        .get('/feed/search')
      )
      .expect(400)
      .expect(/parameter missing/)
      .end(err => {
        expect(err).toBeNull()
        done()
      })
  })

})
