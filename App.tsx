import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TeamProvider from './src/contexts/Team';
import { store } from './src/state';

import Home from './src/screens/home';
import About from './src/screens/team';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <TeamProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
              name="Team"
              component={About}
              options={{ title: 'Team', headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TeamProvider>
    </Provider>
  );
}
