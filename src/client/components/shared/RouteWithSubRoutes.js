import { Route } from 'react-router'

const RouteWithSubRoutes = route => (
  <Route path={route.path} exact={route.exact} render={props => {
    return route.routes ?
      <div className="sub-route">
        {
          route.routes.map(({ path, ...rest }, index) => {
            const subroutePath = path.startsWith('/') ? subroute : `${route.path}/${path}`;
            return <RouteWithSubRoutes path={subroutePath} {...rest} />;
          })
        }
      </div>
      : <route.component {...props} roles={route.roles} />;
  }} />
);

export default RouteWithSubRoutes;
