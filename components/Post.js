import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { Author } from './Author';

const Header = (headerProps, title) => (
  <View {...headerProps}>
    <Text category='h6'>{title}</Text>
  </View>
)

export const Post = ({ navigation, title, body, author, }) => (
  <View style={styles.topContainer}>
    <Author navigation={navigation} author={author} />
    <Card
      style={styles.card}
      header={headerProps => Header(headerProps, title)}
    >
      <Text category={'h4'}>
        {body}
      </Text>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    margin: 2,
  },
});