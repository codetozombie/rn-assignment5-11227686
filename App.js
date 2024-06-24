import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyCardsScreen, StatisticsScreen, SettingsScreen } from './screens';
import { useState, useEffect } from 'react';
import { Appearance, useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);

  useEffect(() => {
    setTheme(scheme);
  }, [scheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings">
          {() => <SettingsScreen toggleTheme={toggleTheme} theme={theme} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
