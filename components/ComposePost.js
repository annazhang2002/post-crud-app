import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import TextButton from './TextButton';

const ComposePost = ({onSubmit, editTitle, editContent, show, editIndex}) => {
  const [title, setTitle] = useState(editTitle + '');
  const [content, setContent] = useState(editContent + '');
  if (show) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Title"
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          value={content}
          placeholder="Content"
          onChangeText={text => {
            setContent(text);
          }}
        />
        <TextButton
          btnText="Submit"
          btnPressed={() => onSubmit(title, content, editIndex)}
          style={styles.btnSubmit}
        />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 5,
    paddingBottom: 1,
    width: '90%',
  },
  btnSubmit: {
    backgroundColor: '#cce6ff',
    width: 100,
    marginTop: 15,
  },
});

export default ComposePost;
