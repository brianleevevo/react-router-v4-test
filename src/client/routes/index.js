import Bundle from 'components/shared/Bundle';
import loadHome from 'bundle-loader?lazy!../containers/HomeContainer';
import loadAbout from 'bundle-loader?lazy!../containers/AboutContainer'
import loadContact from 'bundle-loader?lazy!../containers/ContactContainer'

const loadBundle = load =>
  <Bundle load={load}>
    {Comp => <Comp />}
  </Bundle>;

const Home = () => loadBundle(loadHome);
const About = () => loadBundle(loadAbout);
const Contact = () => loadBundle(loadContact);

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    routes: [
      { path: '/about/home',
        component: Home
      },
      { path: '/about/contact',
        component: Contact
      }
    ]
  },
  {
    path: '/contact',
    component: Contact
  }
]

export default routes;
