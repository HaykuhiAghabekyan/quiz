import React, { useState } from 'react';
import Button from './button.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer.js';
import Counter from './counter.js';

const App = () => {

  let store = createStore(rootReducer);


  return (
    <Provider store={store}>
      <div>
        <Counter/>
        <Button  />
      </div>
    </Provider>
  );

}

export default App;
