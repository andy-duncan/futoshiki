import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ containsValueClue, gameCompleted, isActive, theme: { colors } }) => {
    let color = containsValueClue ? colors.lightBlack : colors.pastelBlue;
    if (gameCompleted) color = colors.midBlue;

    return css`
      align-items: center;
      background-color: ${isActive ? '#eef5fc' : colors.white};
      border: solid 3px ${isActive ? colors.midBlue : colors.lightBlack};
      box-shadow: ${isActive ? '0 0 12px rgba(55, 137, 212, 0.45)' : 'none'};
      color: ${color};
      cursor: pointer;
      display: flex;
      flex-basis: 0; /* sets the main size for all blocks */
      flex-grow: 1; /* allows the same growth for all blocks, to a factor of their main size */
      flex-shrink: 0; /* allows shrink down to main size (flex-basis) if the row/grid is thinner than all blocks put together */
      font-size: 40px;
      justify-content: center;
      margin: 15px;
      position: relative;
      transition: color 0.3s linear;
      user-select: none;

      &:before {
        padding-top: 100%; /* gives the box height - percentages are based on the WIDTH of the containing box so box width and height will scale together */
        content: '';
        float: left;
      }

      &:hover {
        background-color: ${isActive ? '#eef5fc' : colors.lightBlue};
      }
    `;
  }}
`;

export default Container;
