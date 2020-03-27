import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from "react-redux";

import {routes} from "./routes";
import {initStore, history} from "./store.js";

const {store, persistor} = initStore();

import './index.css';

ReactDOM.render(
                <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                      <Switch>
                        {routes.map((route, index) => <Route key={index} {...route} />)}
                      </Switch>
                    </ConnectedRouter>
                  </PersistGate>
                </Provider>,
                document.getElementById("root"));