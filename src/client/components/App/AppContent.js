import routes from 'routes';
import RouteWithSubRoutes from '../shared/RouteWithSubRoutes';

const AppContent = () =>
  <main id="main-content">
    {
      routes.map((route, index) =>
        <RouteWithSubRoutes key={index} {...route} />
      )
    }
  </main>;

export default AppContent;
