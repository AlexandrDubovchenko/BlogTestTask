import React from 'react';
import { Divider, List, ListItem } from '@ui-kitten/components';

export const CommentsList = ({ comments }) => {
  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.author}`}
      description={`${item.body}`}
    />
  );

  return (
    <List
      data={comments}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

