import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import RalewayRegular from 'src/assets/fonts/Raleway-Regular.ttf'
import RalewayBold from 'src/assets/fonts/Raleway-Bold.ttf'
import Roboto from 'src/assets/fonts/Roboto-Regular.ttf'
import RobotoCondensed from 'src/assets/fonts/RobotoCondensed-Regular.ttf'

const theme = {
  colors: {
    text_01: '#1D1F22',
    text_02: '#8D8F9A',
    primary_color: '#5ECE7B',
    dark: '#2B2B2B',
    white: '#ffffff',
    grey_01: '#EEEEEE',
    grey_02: '#fafafa',
    bg_overlay_01: '#ffffff80',
    bg_overlay_02: '#39374838',
    border_01: '#e5e5e5',
  },
  breakpoint: {
    lg: '1058px',
    md: '768px',
    sm: '480px',
  },
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Raleway';
  src: url(${RalewayRegular}) ;
  font-style: normal;
  font-weight: 400;
}


@font-face {
  font-family: 'Raleway';
  src: url(${RalewayBold}) ;
  font-style: normal;
  font-weight: bold;
}
@font-face {
  font-family: 'Roboto';
  src: url(${Roboto}) ;
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: 'RobotoCondensed';
  src: url(${RobotoCondensed}) ;
  font-style: normal;
  font-weight: 300;
}

html{
  scroll-behavior: smooth;
}


img{
  width: 100%;
  height: auto;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button, ul {
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
}

.container{
  max-width: 1600px;
    margin: auto;
    width: 100%;

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
	}
`

const Theme = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  </ThemeProvider>
)
Theme.propTypes = {
  children: PropTypes.any.isRequired,
}

export { theme }
export default Theme
