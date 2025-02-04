import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [inputValue, setInputValue] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <Text testID='UniqueId345' style={styles.sectionTitle}>Welcome to Detox Testing!</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
          />

          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => setInputValue('')}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

          <Text>
            {inputValue ? `You typed: ${inputValue}` : 'Enter something above'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
