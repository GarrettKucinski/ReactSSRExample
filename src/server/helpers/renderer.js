import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from '../../client/Routes'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `
    <!doctype html>
    <html>
      <head>
        <title>Welcome to better SSR!</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id='root'>
          ${content}
        </div>
      </body>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </html>
  `
}
