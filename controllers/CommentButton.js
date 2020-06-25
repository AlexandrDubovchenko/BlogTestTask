import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CommentButton = ({commentsLength}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.buttonImg} source={require('../assets/bell-outline.png')} />
      <Text style={styles.commentsNumber}>
        {commentsLength}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  commentsNumber: {
    position: "relative",
    right: 15,
    bottom: 10,
    color: 'red'
  },
  buttonImg: {
    height: 30,
    width: 30,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
