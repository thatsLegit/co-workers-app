import './assets/css/styles.css';
import './assets/css/Login-Form-Clean.css';
import './assets/fonts/fontawesome5-overrides.min.css';

import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';

import authReducer from './store/reducers/auth';
import profilesReducer from './store/reducers/profiles';
import globalVarsReducer from './store/reducers/globalVars';
import alertsReducer from './store/reducers/alerts';
import roomsReducer from './store/reducers/rooms';
import redeemableReducer from './store/reducers/redeemables';
import eventsReducer from './store/reducers/events';
import notificationsReducer from './store/reducers/notifications';
import helpRReducer from './store/reducers/helpR';
import { loadData, loadUser } from './store/actions/auth';

import Routes from './components/routing/Routes';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Loading from './components/layout/Loading';


//Setting token as a header for all requests
if (localStorage.token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
} else {
  delete axios.defaults.headers.common['Authorization'];
}

//Initialize redux store
const rootReducer = combineReducers({
  auth: authReducer,
  globalVars: globalVarsReducer,
  profiles: profilesReducer,
  alerts: alertsReducer,
  rooms: roomsReducer,
  redeemables: redeemableReducer,
  events: eventsReducer,
  notifications: notificationsReducer,
  helpR: helpRReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

const App = () => {

  const connect = useCallback(async () => {
    store.dispatch(loadUser()).then(() => store.dispatch(loadData())).catch(() => { });
  }, []);

  useEffect(() => {
    AOS.init(); //Setting animation library
    connect(); //Tries to get the user if there's a token (auto-connect)
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/loading' component={Loading} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
