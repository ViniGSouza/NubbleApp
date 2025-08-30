import React from 'react';
import {FlatList} from 'react-native';

import {usePostCommentList} from '@domain';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;
  const {list} = usePostCommentList(postId);
  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Post ID: {route.params.postId}</Text>
      <Text preset="headingSmall">Post Comment Screen</Text>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Text preset="paragraphMedium">{item.message}</Text>
        )}
      />
    </Screen>
  );
}
