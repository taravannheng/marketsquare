import { createGlobalStyle } from 'styled-components';

import typography from './typography';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${typography.body1.fontFamily} !important;
  }
`;

export default GlobalStyle;
