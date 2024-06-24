// screens.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export function MyCardsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Cards Screen</Text>
    </View>
  );
}

export function StatisticsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Statistics Screen</Text>
    </View>
  );
}

export function SettingsScreen({ toggleTheme, theme }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        onPress={toggleTheme}
      />
    </View>
  );
}
