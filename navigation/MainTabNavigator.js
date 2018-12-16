import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StatusScreen from '../screens/StatusScreen';
import CarPoolScreen from '../screens/CarPoolScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'GO!',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-walk'
      }
    />
  ),
};

const StatusStack = createStackNavigator({
  Status: StatusScreen,
});

StatusStack.navigationOptions = {
  tabBarLabel: 'Status',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

const CarPoolStack = createStackNavigator({
  CarPool: CarPoolScreen,
});

CarPoolStack.navigationOptions = {
  tabBarLabel: 'CarPool',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  StatusStack,
  CarPoolStack,
});
