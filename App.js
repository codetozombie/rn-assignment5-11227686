import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './screens/HomeScreen';
import { MyCardsScreen } from './screens/MyCardsScreen';
import { StatisticsScreen } from './screens/StatisticsScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
  name: 'light'
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    text: '#ffffff',
  },
  name: 'dark'
};

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(scheme === 'dark' ? darkTheme : lightTheme);
  }, [scheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.name === 'light' ? darkTheme : lightTheme));
  };

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'My Cards') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 80,  // Set the height of the tab bar
            paddingBottom: 20,  // Adjust the padding if necessary
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home">
          {() => <HomeScreen theme={theme.colors} />}
        </Tab.Screen>
        <Tab.Screen name="My Cards">
          {() => <MyCardsScreen theme={theme.colors} />}
        </Tab.Screen>
        <Tab.Screen name="Statistics">
          {() => <StatisticsScreen theme={theme.colors} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {() => <SettingsScreen toggleTheme={toggleTheme} theme={theme.colors} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
