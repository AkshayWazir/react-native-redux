import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Frag1, Frag2} from '../fragments';
import DashIcon from '../assets/images/dashboard.svg';
import ListsIcon from '../assets/images/lists.svg';

const Tab = createBottomTabNavigator();

const Screen1 = props => {
  // * for navigation purposes
  const {navigation, route} = props;

  const styles = StyleSheet.create({
    text: {
      color: '#000',
    },
  });

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Frag1}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <DashIcon height={20} width={20} />,
        }}
      />
      <Tab.Screen
        name="Lists"
        component={Frag2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <ListsIcon height={20} width={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Screen1;
