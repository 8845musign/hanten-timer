const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const co = require('co')
const config = require('config')
const { MongoClient } = require('mongodb')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// MongoDB
const MONGO_URL = `${config.server.mongo.url}/${config.server.mongo.dbName}`

co(function * () {
  yield app.prepare()
  console.log('> App prepared.')

  const db = yield MongoClient.connect(MONGO_URL)
  console.log(`> Connect to ${MONGO_URL}`)

  const server = express()

  server.use(bodyParser.json())

  //server.use('/api', api(db))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(config.server.express.port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${config.server.express.port}`)
  })
}).catch(error => console.error(error.stack))
