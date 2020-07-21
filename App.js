import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';

import Post from './components/Post';
import TextButton from './components/TextButton';
import ComposePost from './components/ComposePost';
import initialData from './posts.json';

const App = () => {
  const [posts, setPosts] = useState(initialData);
  const [showDraft, setShowDraft] = useState(false);
  const [createBtn, setCreateBtn] = useState('Create Post');
  const [composeTitle, setComposeTitle] = useState('');
  const [composeContent, setComposeContent] = useState('');
  const [composeType, setComposeType] = useState('new');
  const [editPostIndex, setEditPostIndex] = useState(0);

  const deletePost = postIndex => {
    setPosts(prevItems => {
      return prevItems.filter((item, index) => index != postIndex);
    });
    if (editPostIndex == postIndex) {
      closeDraft();
    }
  };

  const deleteAll = () => {
    setPosts([]);
  };

  const editBtnPressed = (postTitle, postContent, postIndex) => {
    setShowDraft(true);
    setComposeTitle(postTitle);
    setComposeContent(postContent);
    setCreateBtn('Cancel');
    setComposeType('edit');
    setEditPostIndex(postIndex);
  };

  const updatePost = (postTitle, postContent, postIndex) => {
    setPosts(prevItems => {
      const newPosts = [...prevItems];
      newPosts[postIndex] = {title: postTitle, content: postContent};
      return newPosts;
    });
    closeDraft();
  };

  const createPost = (postTitle, postContent) => {
    setPosts(prevItems => {
      return [{title: postTitle, content: postContent}, ...prevItems];
    });
    closeDraft();
  };

  const createBtnPressed = () => {
    setShowDraft(!showDraft);
    if (!showDraft) {
      setCreateBtn('Cancel');
      setComposeType('new');
      setComposeTitle('');
      setComposeContent('');
    } else {
      closeDraft();
    }
  };

  const closeDraft = () => {
    setShowDraft(false);
    setCreateBtn('Create Post');
    setComposeType('new');
  };

  const draftView = () => {
    if (showDraft) {
      return (
        <ComposePost
          onSubmit={composeType == 'new' ? createPost : updatePost}
          editTitle={composeTitle}
          editContent={composeContent}
          show={showDraft}
          editIndex={editPostIndex}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Unmasked Demo!</Text>
      <TextButton
        btnText={createBtn}
        btnPressed={createBtnPressed}
        btnColor={'white'}
        style={{marginTop: 10}}
      />
      {draftView()}
      {posts.length != 0 ? (
        <SafeAreaView style={styles.postContainer}>
          <FlatList
            style={styles.postList}
            data={posts}
            renderItem={({item, index}) => (
              <Post
                post={item}
                deletePost={deletePost}
                index={index}
                editPost={editBtnPressed}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <TextButton
            btnText="Delete all posts"
            btnPressed={deleteAll}
            style={{marginBottom: 40}}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.postContainer}>
          <Text style={styles.noPostsText}>No Posts</Text>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99ccff',
  },
  title: {
    fontSize: 40,
    marginTop: 40,
    fontWeight: '700',
  },
  postContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postList: {
    margin: 15,
    backgroundColor: '#bdc5d1',
    borderRadius: 10,
  },
  noPostsText: {
    fontSize: 30,
  },
});

export default App;

