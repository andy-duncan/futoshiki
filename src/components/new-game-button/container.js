import styled, { css } from 'styled-components';

const Container = styled.button`
  ${({ theme: { colors } }) => css`
    background-color: white;
    border: 3px solid ${colors.lightBlack};
    color: ${colors.lightBlack};
    cursor: pointer;
    font-size: 25px;
    padding: 4px 20px;

    &:hover {
      background-color: ${colors.lightBlue};
    }

    &:focus {
      outline: none;
    }
  `}
`;

export default Container;
