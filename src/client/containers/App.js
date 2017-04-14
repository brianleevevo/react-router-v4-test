import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import appReducers from 'reducers';
import { AppHeader, AppContent } from '../components/App';
import './App.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const reducers = combineReducers({
  ...appReducers,
  router: routerReducer
});

const store = createStore(reducers, applyMiddleware(middleware));

const App = ({ children }) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="container">
        <AppHeader />
        <AppContent />
      </div>
    </ConnectedRouter>
  </Provider>;

export default App;
