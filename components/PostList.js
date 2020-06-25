import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { CommentButton } from '../controllers/CommentButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Author } from './Author';

export const PostList = ({ navigation, posts }) => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title}
      </Text>
    </View>
  );

  const renderItemFooter = (footerProps, info) => (
    <>
      <CommentButton commentsLength={info.item.comments.length} />
    </>
  );

  const renderItem = (info) => (
    <View style={styles.item}>
      <Author navigation={navigation} author={info.item.author} />
      <TouchableOpacity onPress={() => navigation.navigate('Post', {
        title: info.item.title, body: info.item.body, comments: info.item.comments, author: info.item.author
      }
      )}>
        <Card
          status='basic'
          header={headerProps => renderItemHeader(headerProps, info)}
          footer={footerProps => renderItemFooter(footerProps, info)}>
          <Text>
            {info.item.body}
          </Text>
        </Card>
      </TouchableOpacity>
    </View>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={posts}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 25,
  }
});