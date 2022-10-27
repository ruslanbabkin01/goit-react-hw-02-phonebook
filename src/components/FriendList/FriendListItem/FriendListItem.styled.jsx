import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => (isOnline ? '#00ff00' : '#ff0000')};
  border-radius: 50%;
  margin-left: 20px;
`;

export const ImgAvatar = styled.img`
  margin-left: 20px;
  border-radius: 4px;
`;

export const UserName = styled.p`
  margin-left: 20px;
  font-size: 24px;
`;
