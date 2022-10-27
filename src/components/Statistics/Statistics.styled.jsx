import styled from '@emotion/styled';
import { getRandomHexColor } from 'styles/utils';

export const Section = styled.section`
  width: 320px;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 2px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  text-transform: uppercase;
  padding: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatItem = styled.li`
  flex-basis: calc(100% / 5);
  color: #ffffff;
  padding: 8px;
  background-color: ${getRandomHexColor};

  > :first-of-type {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  > :last-child {
    display: block;
    font-size: 20px;
  }
`;
