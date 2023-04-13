import styled from '@emotion/styled';

export const Btn = styled.button`
  padding: 5px 15px;
  border-radius: 4px;
  text-transform: capitalize;
  border: dotted black 2px;
  font-weight: bold;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    background-color: blue;
    color: white;
  }
`;
