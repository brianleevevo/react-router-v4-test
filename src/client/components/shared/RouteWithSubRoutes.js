import { Route } from 'react-router'

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )}/>
);

export default RouteWithSubRoutes;
