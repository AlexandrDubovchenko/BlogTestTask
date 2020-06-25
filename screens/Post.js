import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Post } from '../components/Post';
import {CommentsList} from '../components/CommentsList'

export const PostScreen = ({navigation, route}) => {
  const {author, title, body, comments} = route.params;
  return (
    <View style={styles.container}>
      <Post navigation={navigation}  author={author} title={title} body={body} />
      <CommentsList  comments={comments} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
});