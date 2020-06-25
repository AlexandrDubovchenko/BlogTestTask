import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { PostList } from '../components/PostList';

export const HomeScreen = ({ navigation }) => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      let postsRes = await fetch('http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/posts/')
      let postsArray = await postsRes.json();
      let commentsRes = await fetch('http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/comments');
      let commentsArray = await commentsRes.json();
      setPosts(
        postsArray.map(post => {
          post.comments = commentsArray.filter(comment => post.id === comment.post);
          return post
        })
      )
    })();
  }, [])
  
  return (
    <View style={styles.container}>
      <PostList navigation={navigation} posts={posts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
