import React from 'react';
import {Screen1, Screen2} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="screen1"
          component={Screen1}
          options={{
            title: 'Dashboard',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;
