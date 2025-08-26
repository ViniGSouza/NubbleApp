import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  const likePost = () => {
    //TODO: Implement like post
  };

  const navigateToComments = () => {
    //TODO: Implement navigate to comments
  };

  const favoritePost = () => {
    //TODO: Implement favorite post
  };

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        icon={{default: 'heart', marked: 'heartFill'}}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        marked={false}
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigateToComments}
        text={commentCount}
      />
      <Item
        marked={false}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({icon, onPress, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text bold ml="s4" preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
