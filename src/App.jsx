import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './pages/Main';
import store from './store';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
