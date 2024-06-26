// screens.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';





export function StatisticsScreen({ theme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Statistics Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});