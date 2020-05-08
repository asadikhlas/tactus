// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './Screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Screens.map((item, index) => (
          <Stack.Screen key={index} {...item} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
