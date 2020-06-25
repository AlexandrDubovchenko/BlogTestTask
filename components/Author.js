import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Author = ({ navigation, author }) => (
  <View style={styles.item}>
    <TouchableOpacity onPress={() => navigation.navigate('Author', { user: author })}>
      <Text category='h6' style={styles.author}>
        Author: {"\n"}
        {author}
      </Text>
    </TouchableOpacity >
  </View>
)

const styles = StyleSheet.create({
  author: {
    color: 'blue',
    paddingHorizontal: 10
  }
});