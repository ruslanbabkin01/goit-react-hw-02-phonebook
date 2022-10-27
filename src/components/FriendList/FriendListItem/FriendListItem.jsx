import PropTypes from 'prop-types';
import { Friend, Status, UserName, ImgAvatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <ImgAvatar src={avatar} alt="User avatar" width="80px" height="80px" />
      <UserName>{name}</UserName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
