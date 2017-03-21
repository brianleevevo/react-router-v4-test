import React, { Component } from 'react';

const Layout = ({
  title,
  env,
  script,
  children
}) =>
  <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
      {children}
      <script src={env === 'development' ? 'http://localhost:8080/dist/main.bundle.js' : '/dist/main.bundle.js'} />
      <script type="text/javascript">
        {script}
      </script>
    </body>
  </html>

export default Layout;
