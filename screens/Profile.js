import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PostList } from '../components/PostList';

export const Profile = ({ route, navigation }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    (async () => {
      let postsRes = await fetch('http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/posts/')
      let postsArray = await postsRes.json();
      let commentsRes = await fetch('http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/comments');
      let commentsArray = await commentsRes.json();
      setPosts(
        postsArray.filter(post => {
          if (route.params.user === post.author) {
            post.comments = commentsArray.filter(comment => post.id === comment.post);
            return post
          }
        })
      )
    })();
  }, [route])

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
