import {createGlobalStyle} from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${Theme.fonts.base};
  }

  html {
    font-size: ${Theme.fonts.size};
    font-weight: normal;
    width: 100%;
    overflow-x: hidden;
    min-height: 100%;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    scrollbar-width: thin;
    scrollbar-color: #E1DDEC;
    &::webkit-scrollbar {
      width: 9px;
    }
    ::webkit-scrollbar-track {
      background: transparent;
      border-left: 1px solid #111111;
      border-right: 1px solid #FFFFFF;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #E1DDEC;
      border-radius: 0;
      border: none;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .logo {
    height: 2rem;
  }
  .container {
    min-height: 100vh;
    padding: ${Theme.components.container.padding};
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export default GlobalStyle;