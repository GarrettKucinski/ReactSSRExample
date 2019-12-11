import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import Routes from '../client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator (opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))

app.use(express.static('public'))

app.get('*', (req, res, err) => {
  const store = createStore(req)

  const currentRoutes = matchRoutes(Routes, req.path)

  const alwaysResolve = promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve)
      })
    }
  }

  const promises = currentRoutes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    .map(alwaysResolve)

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }

    if (context.url) {
      res.redirect(301, context.url)
    }

    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
