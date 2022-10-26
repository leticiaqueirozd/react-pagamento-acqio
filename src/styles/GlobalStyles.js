import { createGlobalStyle } from 'styled-components';
import background from '../components/Assets/bg.jpg'

export default createGlobalStyle`
* {
    font-family: 'Lato', sans-serif;
    }
    #root {
    }
    body {
      background-image: url(${background});
      background-size: 1400px 800px;
      background-repeat: no-repeat;
    }
`;