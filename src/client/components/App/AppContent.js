import { Route } from 'react-router';
//import HomeContainer from 'containers/HomeContainer';
import loadHome from 'bundle-loader?lazy!../../containers/HomeContainer';
import loadAbout from 'bundle-loader?lazy!../../containers/AboutContainer'
import loadContact from 'bundle-loader?lazy!../../containers/ContactContainer'
import Bundle from '../shared/Bundle';

const createBundle = load =>
  <Bundle load={load}>
    { Comp => <Comp /> }
  </Bundle>;

const Home = () =>
  <Bundle load={loadHome}>
    {Comp => <Comp />}
  </Bundle>;

const About = () =>
  <Bundle load={loadAbout}>
    {Comp => <Comp />}
  </Bundle>

const Contact = () =>
  <Bundle load={loadContact}>
    {Comp => <Comp />}
  </Bundle>

const AppContent = () =>
  <main id="main-content">
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
  </main>;

export default AppContent;
