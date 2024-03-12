import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [colorCode, setColorCode] = useState("#fff");

  const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomNumber.toString(16);
    setColorCode(hexCode);
  }

  return (
    <View style={[styles.container, { backgroundColor: colorCode }]}>
      <View style={styles.colorContainer}>
        <Text style={styles.colorCode}>{colorCode}</Text>
        <TouchableOpacity style={styles.button} onPress={getColor}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorContainer: {

    // marginTop: 50,
    // backgroundColor: 'black',
    padding: 0,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorCode: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default App;
