import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  text-align: center;
  color: ${props => props.theme.colors.dark};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.accent};
  text-transform: uppercase;
  color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n + 1) {
    background-color: ${props => props.theme.colors.light};
  }
  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.gray};
  }

  > :first-of-type {
    text-transform: capitalize;
    display: flex;
    padding-left: 33%;
  }
`;

export const TableCell = styled.td`
  min-width: 220px;
  padding: 12px;
`;
