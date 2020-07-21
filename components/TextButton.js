import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButton = ({btnText, btnPressed, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={btnPressed}>
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
});

export default TextButton;
