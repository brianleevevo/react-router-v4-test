import { createServer } from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../client/containers/App'

createServer((req, res) => {
  const context = {}

  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <html>
        <head>
          <title>Brian</title>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
    `)
    res.end()
  }
}).listen(3000)
