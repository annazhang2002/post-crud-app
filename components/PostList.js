// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   FlatList,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';

// import Post from './Post';
// import initialData from './posts.json';

// const App = () => {
//   const [posts, setPosts] = useState(initialData);
//   const onDelete = index => {
//     console.log('delete');
//     setPosts(prevItems => {
//       return prevItems.filter(item => item.index != index);
//     });
//   };
//   const renderItem = ({item, index}) => (
//     <Post post={item} onDelete={onDelete} index={index} />
//   );

//   () => onDelete(1);
//   return (
//     <View style={styles.container}>
//       <SafeAreaView style={styles.postContainer}>
//         <FlatList
//           data={posts.posts}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </SafeAreaView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#99ccff',
//   },
//   postContainer: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
// });

// export default App;
