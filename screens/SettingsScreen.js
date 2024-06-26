// screens.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export function SettingsScreen({ toggleTheme, theme }) {
  const [isDarkMode, setIsDarkMode] = useState(theme.name === 'dark');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleToggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
    toggleTheme();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Settings</Text>

      <View style={styles.optionContainer}>
        <Text style={[styles.optionText, { color: theme.text }]}>Language</Text>
        {/* <Picker
          selectedValue={selectedLanguage}
          style={[styles.picker, { color: theme.text }]}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="German" value="German" />
          <Picker.Item label="Chinese" value="Chinese" />
        </Picker> */}
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={[styles.optionText, { color: theme.text }]}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={[styles.optionText, { color: theme.text }]}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={[styles.optionText, { color: theme.text }]}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={[styles.optionText, { color: theme.text }]}>Privacy Policy</Text>
      </TouchableOpacity>

      <View style={styles.optionContainer}>
        <Text style={[styles.optionText, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default SettingsScreen;
