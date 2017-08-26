const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const co = require('co')
const config = require('config')
// const { MongoClient } = require('mongodb')
const api = require('./api/index.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// MongoDB
// const MONGO_URL = `${config.server.mongo.url}/${config.server.mongo.dbName}`

co(function * () {
  yield app.prepare()
  console.log('> App prepared.')

  // TODO enable when api impled
  /* eslint-disable no-unused-vars */
  // const db = yield MongoClient.connect(MONGO_URL)
  // console.log(`> Connect to ${MONGO_URL}`)

  const server = express()

  server.use(bodyParser.json())

  server.use('/static', express.static('static'))

  // MONGODBを有効にする場合はapiの第一引数にdbを渡す
  server.use('/api', api())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || config.server.express.port || 3000

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(error => console.error(error.stack))
