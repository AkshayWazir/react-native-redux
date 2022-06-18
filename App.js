import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import MainApp from './src';
import {Store} from './src/redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <MainApp />
    </Provider>
  );
};

export default App;
