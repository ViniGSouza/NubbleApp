import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen title="Comentários" canGoBack>
      <Text preset="headingSmall">Post ID: {route.params.postId}</Text>
      <Text preset="headingSmall">Post Comment Screen</Text>
    </Screen>
  );
}
