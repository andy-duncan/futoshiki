import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    html {
      height: 100%;

      body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;

        #root {
          height: 100%;
          background: radial-gradient(
            ${theme.colors.white},
            ${theme.colors.lightBlue}
          );
          display: flex;
          justify-content: center;
          font-family: monospace;
        }
      }
    }
  `}
`;
