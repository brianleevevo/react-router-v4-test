import { Route } from 'react-router';
//import HomeContainer from 'containers/HomeContainer';
import loadHome from 'bundle-loader?lazy!containers/HomeContainer'
import { Bundle } from 'components/shared';

const Home = () =>
  <Bundle load={loadHome}>
    {mod => <mod />}
  </Bundle>;

const AppContent = () =>
  <main id="main-content">
    <Route path="/" exact component={Home} />
  </main>;

export default AppContent;
