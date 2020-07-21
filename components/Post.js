import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Post = ({post, deletePost, index, editPost}) => (
  <View style={styles.item}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
    <TouchableOpacity style={styles.iconContainer}>
      <Icon
        name="trash"
        size={30}
        color="black"
        onPress={() => deletePost(index)}
      />
      <Icon
        name="edit"
        size={30}
        color="black"
        onPress={() => editPost(post.title, post.content, index)}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  content: {
    fontSize: 15,
  },
  textContainer: {
    width: '90%',
  },
  iconContainer: {
    width: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Post;
