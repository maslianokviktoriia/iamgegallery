import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<Gallery />
      </Provider>
    );
  }
}

export default App;
