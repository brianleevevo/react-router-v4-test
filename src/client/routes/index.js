import Bundle from '../components/shared/Bundle';
/*import loadHome from 'bundle-loader?lazy!../containers/HomeContainer';
import loadAbout from 'bundle-loader?lazy!../containers/AboutContainer'
import loadContact from 'bundle-loader?lazy!../containers/ContactContainer'
import loadLogin from 'bundle-loader?lazy!../containers/LoginContainer';*/
import withAuth from 'components/shared/WithAuth';

const loadBundle = load =>
  <Bundle load={load}>
    {Comp => <Comp />}
  </Bundle>;

const Home = () => loadBundle(import('../containers/HomeContainer'));
const About = () => loadBundle(import('../containers/AboutContainer'));
const Contact = () => loadBundle(import('../containers/ContactContainer'));
const Login = () => loadBundle(import('../containers/LoginContainer'));
const Register = () => loadBundle(import('../containers/RegisterContainer'));

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
      { path: 'home',
        component: Home
      },
      { path: 'contact',
        component: Contact
      }
    ]
  },
  {
    path: '/contact',
    component: withAuth(Contact)
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

export default routes;
