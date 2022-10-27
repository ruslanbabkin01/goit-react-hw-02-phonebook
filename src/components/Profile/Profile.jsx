import PropTypes from 'prop-types';
import {
  Description,
  ImgAvatar,
  Username,
  UserTag,
  UserLocation,
  StatsBox,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

import { Box } from '../../styles/Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      width={320}
      my={0}
      mx="auto"
      textAlign="center"
      bg="white"
      boxShadow="regular"
      borderRadius={4}
      mb={30}
    >
      <Description>
        <ImgAvatar src={avatar} alt="User avatar" />

        <Username>{username}</Username>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsBox>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsBox>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
