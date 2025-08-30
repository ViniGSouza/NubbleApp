import React from 'react';
import {FlatList} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Screen} from '@components';
import {AppScreenProps} from '@routes';

import {PostCommentItem} from './components/PostCommentItem';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;
  const {list} = usePostCommentList(postId);

  function renderItem({item}: {item: PostComment}) {
    return <PostCommentItem postComment={item} />;
  }
  return (
    <Screen title="Comentários" canGoBack>
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
