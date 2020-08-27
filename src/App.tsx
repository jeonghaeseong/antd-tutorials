import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from './modules';

import Login from './pages/Login';
import Main from './pages/Main';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default App;