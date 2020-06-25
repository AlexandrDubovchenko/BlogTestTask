import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Profile } from './Profile';

export const AuthorScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Profile navigation={navigation} route={route} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
});