import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardScreen } from '../screens/Dashboard';
import { BookDetailScreen } from '../screens/BookDetail';

export type RootStackParamList = {
  DashboardScreen: undefined;
  BookDetailScreen: {id: string};
};

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='DashboardScreen' component={DashboardScreen} />
      <Screen name='BookDetailScreen' component={BookDetailScreen} />
    </Navigator>
  );
};
